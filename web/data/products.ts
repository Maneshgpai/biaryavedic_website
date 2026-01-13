import { getProductsByType } from "@/lib/shopify/admin";
import { transformShopifyProducts } from "@/lib/shopify/productTransformer";

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
  images?: string[]; // Additional images for product gallery
  category: "B2B" | "B2C";
  categoryColor: string;
  detailsLink: string;
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

// Dynamic product fetching from Shopify Admin API
export async function getProducts(): Promise<Product[]> {
  try {
    // Try to fetch from Shopify Admin API
    const [b2bProducts, b2cProducts] = await Promise.all([
      getProductsByType("B2B"),
      getProductsByType("B2C")
    ]);

    const allShopifyProducts = [...b2bProducts, ...b2cProducts];
    
    if (allShopifyProducts.length > 0) {
      return transformShopifyProducts(allShopifyProducts);
    }
    
    // Fallback to static data
    return STATIC_PRODUCTS;
  } catch (error) {
    console.warn('Failed to fetch products from Shopify API, using static data:', error);
    return STATIC_PRODUCTS;
  }
}

// Backward compatibility - use static data for immediate access
export const PRODUCTS = STATIC_PRODUCTS;

// Helper functions
export const getProductBySku = (sku: string, products: Product[] = STATIC_PRODUCTS): Product | undefined => {
  return products.find(product => product.sku === sku);
};

export const getProductsByCategory = (category: "B2B" | "B2C", products: Product[] = STATIC_PRODUCTS): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductNames = (products: Product[] = STATIC_PRODUCTS): Record<string, string> => {
  return products.reduce((acc, product) => {
    acc[product.sku] = product.name;
    return acc;
  }, {} as Record<string, string>);
}; 