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
    name: "Eco-Friendly Fabric Sizing & Finishing Agent",
    description: "Revolutionizing the fabric sizing process for a green future. Our industrial solution forms a uniform layer of protective coating over warp yarn, minimizes yarn breakage during weaving, and improves yarn strength to resist mechanical stress.",
    price: 2300,
    originalPrice: 3200,
    discount: 22,
    rating: 4.2,
    reviewCount: 18,
    volume: "5L",
    application: "Industrial Weaving",
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
    name: "Eco-Friendly Instant Fabric Stiffener Spray",
    description: "Busy mornings, crisp outfits. Transform your ironing experience with our eco-friendly instant fabric stiffener spray. Perfect for time-saving solutions during morning rush before school or work.",
    price: 530,
    originalPrice: 650,
    discount: 18,
    rating: 4.3,
    reviewCount: 23,
    volume: "450ml",
    application: "3-in-1 Antimicrobial",
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