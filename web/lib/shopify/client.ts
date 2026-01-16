/**
 * Unified Shopify Storefront API Client
 * 
 * This module handles all Shopify Storefront API interactions including:
 * - Product fetching
 * - Cart operations
 * - Customer authentication
 * 
 * Environment Variables Required:
 * - NEXT_PUBLIC_SHOPIFY_DOMAIN: Your Shopify store domain (e.g., your-store.myshopify.com)
 * - NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN: Storefront API access token
 * - NEXT_PUBLIC_SHOPIFY_API_VERSION: API version (e.g., 2024-01)
 */

// Shopify configuration with validation
export function getShopifyConfig() {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
  const apiVersion = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || '2024-01';

  return { domain, token, apiVersion };
}

// Check if Shopify is properly configured
export function isShopifyConfigured(): boolean {
  const { domain, token } = getShopifyConfig();
  return Boolean(domain && token);
}

// Generic Storefront API request function
export async function shopifyRequest<T>(
  query: string, 
  variables: Record<string, unknown> = {},
  options: { cache?: RequestCache; revalidate?: number } = {}
): Promise<T> {
  const { domain, token, apiVersion } = getShopifyConfig();

  if (!domain || !token) {
    throw new Error(
      'Shopify configuration missing. Please set NEXT_PUBLIC_SHOPIFY_DOMAIN and NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN environment variables.'
    );
  }

  const fetchOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
  };

  // Support for Next.js caching options
  if (options.cache) {
    fetchOptions.cache = options.cache;
  } else if (options.revalidate !== undefined) {
    (fetchOptions as any).next = { revalidate: options.revalidate };
  } else {
    // Default: revalidate every 60 seconds
    (fetchOptions as any).next = { revalidate: 60 };
  }

  const res = await fetch(
    `https://${domain}/api/${apiVersion}/graphql.json`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error(`Shopify API error: HTTP ${res.status} - ${res.statusText}`);
  }

  const json = await res.json();
  
  if (json.errors?.length) {
    const errorMessage = json.errors.map((e: { message: string }) => e.message).join(', ');
    throw new Error(`Shopify GraphQL error: ${errorMessage}`);
  }
  
  return json.data as T;
}

// Type definitions for Shopify Storefront API responses
export interface ShopifyMoney {
  amount: string;
  currencyCode: string;
}

export interface ShopifyImage {
  url: string;
  altText: string | null;
  width?: number;
  height?: number;
}

export interface ShopifyProductVariant {
  id: string;
  title: string;
  sku: string | null;
  availableForSale: boolean;
  price: ShopifyMoney;
  compareAtPrice: ShopifyMoney | null;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
  image: ShopifyImage | null;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  vendor: string;
  tags: string[];
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: ShopifyMoney;
    maxVariantPrice: ShopifyMoney;
  };
  compareAtPriceRange: {
    minVariantPrice: ShopifyMoney;
    maxVariantPrice: ShopifyMoney;
  };
  featuredImage: ShopifyImage | null;
  images: {
    edges: Array<{ node: ShopifyImage }>;
  };
  variants: {
    edges: Array<{ node: ShopifyProductVariant }>;
  };
  metafields: Array<{
    key: string;
    value: string;
    namespace: string;
  } | null>;
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  products: {
    edges: Array<{ node: ShopifyProduct }>;
  };
}
