export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  descriptionHtml: string;
  handle: string;
  productType: string;
  vendor: string;
  tags: string[];
  priceRangeV2: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  compareAtPriceRange?: {
    minVariantCompareAtPrice?: {
      amount: string;
      currencyCode: string;
    };
    maxVariantCompareAtPrice?: {
      amount: string;
      currencyCode: string;
    };
  };
  media: {
    edges: Array<{
      node: {
        id: string;
        image: {
          url: string;
          altText?: string;
        };
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: string;
        compareAtPrice?: string;
        inventoryItem: {
          sku?: string;
        };
        inventoryQuantity: number;
        availableForSale: boolean;
        selectedOptions: Array<{
          name: string;
          value: string;
        }>;
      };
    }>;
  };
  metafields: {
    edges: Array<{
      node: {
        key: string;
        value: string;
        namespace: string;
      };
    }>;
  };
}

export async function shopifyAdminRequest<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const shopDomain = process.env.SHOPIFY_SHOP_DOMAIN;
  const accessToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
  const apiVersion = process.env.SHOPIFY_ADMIN_API_VERSION || '2024-01';

  if (!shopDomain || !accessToken) {
    throw new Error('Missing Shopify Admin API credentials. Please set SHOPIFY_SHOP_DOMAIN and SHOPIFY_ADMIN_ACCESS_TOKEN environment variables.');
  }

  const res = await fetch(`https://${shopDomain}/admin/api/${apiVersion}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': accessToken,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 300 }, // Cache for 5 minutes
  });

  if (!res.ok) {
    throw new Error(`Shopify Admin API HTTP ${res.status}: ${res.statusText}`);
  }

  const json = await res.json();
  
  if (json.errors?.length) {
    throw new Error(`Shopify Admin API Error: ${json.errors[0].message}`);
  }

  return json.data as T;
}

export const GET_PRODUCT_DETAILS = `
  query GetProductDetails($productId: ID!) {
    product(id: $productId) {
      id
      title
      description
      descriptionHtml
      handle
      productType
      vendor
      tags
      priceRangeV2 {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      compareAtPriceRange {
        minVariantCompareAtPrice {
          amount
          currencyCode
        }
        maxVariantCompareAtPrice {
          amount
          currencyCode
        }
      }
      media(first: 10) {
        edges {
          node {
            ... on MediaImage {
              id
              image {
                url
                altText
              }
            }
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price
            compareAtPrice
            inventoryItem {
              sku
            }
            inventoryQuantity
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      metafields(first: 20) {
        edges {
          node {
            key
            value
            namespace
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS_BY_TYPE = `
  query GetProductsByType($productType: String!, $first: Int = 10) {
    products(first: $first, query: $productType) {
      edges {
        node {
          id
          title
          description
          descriptionHtml
          handle
          productType
          vendor
          tags
          priceRangeV2 {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          compareAtPriceRange {
            minVariantCompareAtPrice {
              amount
              currencyCode
            }
            maxVariantCompareAtPrice {
              amount
              currencyCode
            }
          }
          media(first: 5) {
            edges {
              node {
                ... on MediaImage {
                  id
                  image {
                    url
                    altText
                  }
                }
              }
            }
          }
          variants(first: 5) {
            edges {
              node {
                id
                title
                price
                compareAtPrice
                inventoryItem {
                  sku
                }
                inventoryQuantity
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          metafields(first: 20) {
            edges {
              node {
                key
                value
                namespace
              }
            }
          }
        }
      }
    }
  }
`;

export async function getProductDetails(productId: string): Promise<ShopifyProduct> {
  const data = await shopifyAdminRequest<{ product: ShopifyProduct }>(
    GET_PRODUCT_DETAILS,
    { productId }
  );
  return data.product;
}

export async function getProductsByType(productType: string, first = 10): Promise<ShopifyProduct[]> {
  const data = await shopifyAdminRequest<{
    products: { edges: Array<{ node: ShopifyProduct }> };
  }>(GET_PRODUCTS_BY_TYPE, { productType: `product_type:${productType}`, first });
  
  return data.products.edges.map(edge => edge.node);
} 