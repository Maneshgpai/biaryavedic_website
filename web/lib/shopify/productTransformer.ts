/**
 * Product Transformer
 * 
 * Transforms Shopify Storefront API product data into the application's 
 * internal Product format. This provides a clean separation between
 * Shopify's data structure and the app's UI requirements.
 */

import type { ShopifyProduct } from "./client";
import type { Product } from "@/data/products";

/**
 * Transforms a single Shopify product into the app's Product format
 */
export function transformShopifyProduct(shopifyProduct: ShopifyProduct): Product {
  // Get the first variant for pricing and SKU
  const variant = shopifyProduct.variants.edges[0]?.node;
  
  // Parse price from variant or price range
  const price = parseFloat(
    variant?.price.amount || shopifyProduct.priceRange.minVariantPrice.amount
  );
  
  // Parse compare at price for discount calculation
  const compareAtPrice = variant?.compareAtPrice 
    ? parseFloat(variant.compareAtPrice.amount) 
    : null;
  
  // Calculate discount percentage
  const discount = compareAtPrice && compareAtPrice > price 
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : undefined;

  // Helper to get metafield value
  const getMetafield = (namespace: string, key: string): string | undefined => {
    const metafield = shopifyProduct.metafields?.find(
      mf => mf?.namespace === namespace && mf?.key === key
    );
    return metafield?.value;
  };

  // Get images - use all images or fallback to featured image
  const images = shopifyProduct.images.edges.map(edge => edge.node.url);
  const primaryImage = images[0] || shopifyProduct.featuredImage?.url || "/assets/images/product-placeholder.webp";

  // Determine category from product type or metafield
  const categoryMetafield = getMetafield("custom", "category");
  const category: "B2B" | "B2C" = 
    shopifyProduct.productType === "B2B" || categoryMetafield === "B2B" 
      ? "B2B" 
      : "B2C";
  
  // Get volume from metafield or variant options
  const volumeFromOptions = variant?.selectedOptions.find(
    opt => opt.name.toLowerCase().includes("volume") || opt.name.toLowerCase().includes("size")
  )?.value;
  
  return {
    id: shopifyProduct.handle,
    sku: variant?.sku || shopifyProduct.handle.toUpperCase(),
    name: shopifyProduct.title,
    description: shopifyProduct.description,
    price: Math.round(price),
    originalPrice: compareAtPrice ? Math.round(compareAtPrice) : undefined,
    discount,
    rating: parseFloat(getMetafield("reviews", "rating") || "4.0"),
    reviewCount: parseInt(getMetafield("reviews", "count") || "0", 10),
    volume: getMetafield("specs", "volume") || volumeFromOptions || "N/A",
    application: getMetafield("specs", "application") || shopifyProduct.productType || "General Use",
    image: primaryImage,
    images: images.length > 0 ? images : undefined,
    category,
    categoryColor: category === "B2B" ? "from-white to-blue-600" : "from-white to-green-600",
    detailsLink: category === "B2B" ? "/products/b2b" : "/products/b2c",
    // Store the variant ID for direct cart operations (avoids SKU lookup)
    variantId: variant?.id,
  };
}

/**
 * Transforms an array of Shopify products
 */
export function transformShopifyProducts(shopifyProducts: ShopifyProduct[]): Product[] {
  return shopifyProducts.map(transformShopifyProduct);
}

/**
 * Build a SKU to Variant ID mapping from products
 * This cache eliminates the need for repeated SKU lookups
 */
export function buildSkuToVariantMap(shopifyProducts: ShopifyProduct[]): Map<string, string> {
  const map = new Map<string, string>();
  
  for (const product of shopifyProducts) {
    for (const { node: variant } of product.variants.edges) {
      if (variant.sku) {
        // Store both original and lowercase versions for flexible matching
        map.set(variant.sku, variant.id);
        map.set(variant.sku.toLowerCase(), variant.id);
      }
    }
  }
  
  return map;
}
