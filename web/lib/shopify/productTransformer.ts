import { Product } from "@/data/products";
import { ShopifyProduct } from "./admin";

export function transformShopifyProduct(shopifyProduct: ShopifyProduct): Product {
  const variant = shopifyProduct.variants.edges[0]?.node;
  const price = parseFloat(variant?.price || shopifyProduct.priceRangeV2.minVariantPrice.amount);
  const compareAtPrice = variant?.compareAtPrice ? parseFloat(variant.compareAtPrice) : undefined;
  
  // Calculate discount percentage
  const discount = compareAtPrice && compareAtPrice > price 
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : undefined;

  // Get metafield values
  const getMetafield = (namespace: string, key: string): string | undefined => {
    return shopifyProduct.metafields.edges.find(
      edge => edge.node.namespace === namespace && edge.node.key === key
    )?.node.value;
  };

  // Get first image
  const image = shopifyProduct.media.edges[0]?.node.image?.url || "/assets/images/product-placeholder.webp";

  // Determine category from product type or metafield
  const category = (shopifyProduct.productType === "B2B" || getMetafield("custom", "category") === "B2B") ? "B2B" : "B2C";
  
  return {
    id: shopifyProduct.handle,
    sku: variant?.inventoryItem.sku || shopifyProduct.handle.toUpperCase(),
    name: shopifyProduct.title,
    description: shopifyProduct.description,
    price: Math.round(price),
    originalPrice: compareAtPrice ? Math.round(compareAtPrice) : undefined,
    discount,
    rating: parseFloat(getMetafield("reviews", "rating") || "4.0"),
    reviewCount: parseInt(getMetafield("reviews", "count") || "0"),
    volume: getMetafield("specs", "volume") || variant?.selectedOptions.find(opt => opt.name.toLowerCase().includes("volume"))?.value || "N/A",
    application: getMetafield("specs", "application") || shopifyProduct.productType || "General Use",
    image,
    category,
    categoryColor: category === "B2B" ? "from-white to-blue-600" : "from-white to-green-600",
    detailsLink: category === "B2B" ? "/products/b2b" : "/products/b2c"
  };
}

export function transformShopifyProducts(shopifyProducts: ShopifyProduct[]): Product[] {
  return shopifyProducts.map(transformShopifyProduct);
} 