/**
 * Product Data Module
 * 
 * This module provides:
 * - Product type definitions
 * - Static fallback products (when Shopify is unavailable)
 * - Dynamic product fetching from Shopify Storefront API
 * - SKU to Variant ID mapping for efficient cart operations
 */

import { shopifyRequest, isShopifyConfigured, type ShopifyProduct } from "@/lib/shopify/client";
import { GET_PRODUCTS } from "@/lib/shopify/queries";
import { transformShopifyProducts, buildSkuToVariantMap } from "@/lib/shopify/productTransformer";

// Product interface used throughout the application
export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  volume: string;
  application: string;
  image: string;
  images?: string[];
  category: "B2B" | "B2C";
  categoryColor: string;
  detailsLink: string;
  // Variant ID for direct cart operations (avoids SKU lookup)
  variantId?: string;
}

// Static fallback data for when Shopify API is unavailable
export const STATIC_PRODUCTS: Product[] = [
  {
    id: "bn160",
    sku: "BN160",
    name: "Albedon Eco Friendly Sizing Agent",
    description: "A patented, plant-based sizing and finishing solution developed using cassava-derived biopolymer technology. Engineered for the textile manufacturing industry, it serves as a sustainable alternative to conventional chemical agents, delivering fabric body, surface conditioning, and antimicrobial protection in a single formulation.",
    price: 2300,
    originalPrice: 3200,
    discount: 22,
    rating: 4.8,
    reviewCount: 42,
    volume: "Industrial Grade",
    application: "Textile Sizing & Finishing",
    image: "/assets/images/product_BN160_1.webp",
    images: [
      "/assets/images/product_BN160_1.webp",
      "/assets/images/product_BN160_2.webp",
      "/assets/images/product_BN160_3.webp",
      "/assets/images/product_BN160_4.webp",
      "/assets/images/product_BN160_5.webp"
    ],
    category: "B2B",
    categoryColor: "from-white to-blue-600",
    detailsLink: "/products/b2b"
  },
  {
    id: "bn161",
    sku: "BN161",
    name: "Albedon 3 in 1 Eco Friendly Textile Care Spray",
    description: "Plant-based, eco-friendly textile care spray delivering crisp structure, soft conditioning, and long-lasting hygiene in a single, easy spray. Safe for people and the planet.",
    price: 530,
    originalPrice: 650,
    discount: 18,
    rating: 4.8,
    reviewCount: 87,
    volume: "450ml",
    application: "Stiffening • Conditioning • Antimicrobial",
    image: "/assets/images/product_BN161_1.webp",
    images: [
      "/assets/images/product_BN161_1.webp",
      "/assets/images/product_BN161_2.webp",
      "/assets/images/product_BN161_3.webp",
      "/assets/images/product_BN161_4.webp",
      "/assets/images/product_BN161_5.webp",
      "/assets/images/product_BN161_6.webp",
      "/assets/images/product_BN161_7.webp",
      "/assets/images/product_BN161_8.webp",
    ],
    category: "B2C",
    categoryColor: "from-white to-green-600",
    detailsLink: "/products/b2c"
  }
];

// Cache for SKU to Variant ID mapping
let skuToVariantCache: Map<string, string> | null = null;
let productCache: Product[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache TTL

/**
 * Fetch products from Shopify Storefront API
 * Falls back to static products if Shopify is not configured or unavailable
 */
export async function getProducts(): Promise<Product[]> {
  // Return cached products if still valid
  if (productCache && Date.now() - cacheTimestamp < CACHE_TTL) {
    return productCache;
  }

  // Check if Shopify is configured
  if (!isShopifyConfigured()) {
    console.info('Shopify not configured, using static product data');
    return STATIC_PRODUCTS;
  }

  try {
    // Fetch all products from Shopify
    const data = await shopifyRequest<{
      products: { edges: Array<{ node: ShopifyProduct }> };
    }>(GET_PRODUCTS, { first: 50 });

    const shopifyProducts = data.products.edges.map(edge => edge.node);
    
    if (shopifyProducts.length > 0) {
      // Transform and cache products
      productCache = transformShopifyProducts(shopifyProducts);
      
      // Build and cache SKU to Variant ID mapping
      skuToVariantCache = buildSkuToVariantMap(shopifyProducts);
      
      cacheTimestamp = Date.now();
      return productCache;
    }
    
    // No products found in Shopify, use static fallback
    console.warn('No products found in Shopify, using static data');
    return STATIC_PRODUCTS;
  } catch (error) {
    console.error('Failed to fetch products from Shopify:', error);
    return STATIC_PRODUCTS;
  }
}

/**
 * Fetch products by category (B2B or B2C)
 */
export async function getProductsByCategory(category: "B2B" | "B2C"): Promise<Product[]> {
  const allProducts = await getProducts();
  return allProducts.filter(product => product.category === category);
}

/**
 * Get a single product by SKU
 */
export async function getProductBySku(sku: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find(product => 
    product.sku.toLowerCase() === sku.toLowerCase()
  );
}

/**
 * Get a single product by handle/ID
 */
export async function getProductByHandle(handle: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find(product => product.id === handle);
}

/**
 * Get Variant ID from SKU using the cached mapping
 * This eliminates the need for repeated API calls to find variants
 */
export async function getVariantIdFromSku(sku: string): Promise<string | null> {
  // Ensure products are loaded (which also populates the SKU cache)
  await getProducts();
  
  if (!skuToVariantCache) {
    return null;
  }
  
  // Try exact match first, then lowercase
  return skuToVariantCache.get(sku) || 
         skuToVariantCache.get(sku.toLowerCase()) || 
         null;
}

/**
 * Get product names mapping for notifications
 */
export function getProductNames(products: Product[] = STATIC_PRODUCTS): Record<string, string> {
  return products.reduce((acc, product) => {
    acc[product.sku] = product.name;
    return acc;
  }, {} as Record<string, string>);
}

/**
 * Clear the product cache (useful for development/testing)
 */
export function clearProductCache(): void {
  productCache = null;
  skuToVariantCache = null;
  cacheTimestamp = 0;
}

// Export static products for backward compatibility
export const PRODUCTS = STATIC_PRODUCTS;
