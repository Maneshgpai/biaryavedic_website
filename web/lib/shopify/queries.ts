/**
 * Shopify Storefront API GraphQL Queries and Mutations
 * 
 * This file contains all GraphQL operations for:
 * - Product fetching (by type, handle, collection)
 * - Cart operations (create, add, update, remove)
 * - Variant lookup by SKU
 */

// ============================================
// PRODUCT QUERIES
// ============================================

// Fragment for consistent product data structure
const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    title
    handle
    description
    descriptionHtml
    productType
    vendor
    tags
    availableForSale
    priceRange {
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
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      url
      altText
      width
      height
    }
    images(first: 10) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          sku
          availableForSale
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            url
            altText
          }
        }
      }
    }
    metafields(identifiers: [
      {namespace: "custom", key: "category"},
      {namespace: "reviews", key: "rating"},
      {namespace: "reviews", key: "count"},
      {namespace: "specs", key: "volume"},
      {namespace: "specs", key: "application"}
    ]) {
      key
      value
      namespace
    }
  }
`;

// Fetch all products with optional product type filter
export const GET_PRODUCTS = `
  ${PRODUCT_FRAGMENT}
  query GetProducts($first: Int = 50, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          ...ProductFields
        }
      }
    }
  }
`;

// Fetch a single product by handle
export const GET_PRODUCT_BY_HANDLE = `
  ${PRODUCT_FRAGMENT}
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      ...ProductFields
    }
  }
`;

// Fetch products from a collection
export const GET_COLLECTION_PRODUCTS = `
  ${PRODUCT_FRAGMENT}
  query GetCollectionProducts($handle: String!, $first: Int = 50) {
    collection(handle: $handle) {
      id
      title
      handle
      description
      products(first: $first) {
        edges {
          node {
            ...ProductFields
          }
        }
      }
    }
  }
`;

// ============================================
// VARIANT/SKU QUERIES
// ============================================

// Search for products to find variant by SKU
export const FIND_VARIANT_BY_SKU = `
  query FindVariantBySku($query: String!, $first: Int = 5) {
    search(query: $query, first: $first, types: PRODUCT) {
      nodes {
        ... on Product {
          handle
          title
          variants(first: 100) {
            nodes {
              id
              sku
              title
            }
          }
        }
      }
    }
  }
`;

// Alternative query using products endpoint
export const PRODUCTS_BY_QUERY = `
  query ProductsByQuery($query: String!, $first: Int = 10) {
    products(first: $first, query: $query) {
      nodes {
        id
        handle
        title
        variants(first: 100) {
          nodes {
            id
            sku
            title
          }
        }
      }
    }
  }
`;

// ============================================
// CART MUTATIONS & QUERIES
// ============================================

// Create a new cart
export const CREATE_CART = `
  mutation CreateCart($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
        totalQuantity
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// Add lines to cart
export const ADD_LINES = `
  mutation AddLines($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        totalQuantity
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// Get cart details
export const GET_CART = `
  query GetCart($id: ID!, $linesFirst: Int = 50) {
    cart(id: $id) {
      id
      checkoutUrl
      totalQuantity
      cost {
        subtotalAmount {
          amount
          currencyCode
        }
        totalAmount {
          amount
          currencyCode
        }
      }
      lines(first: $linesFirst) {
        edges {
          node {
            id
            quantity
            cost {
              amountPerQuantity {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
            }
            merchandise {
              ... on ProductVariant {
                id
                title
                sku
                price {
                  amount
                  currencyCode
                }
                image {
                  url
                  altText
                }
                product {
                  title
                  handle
                  featuredImage {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Update cart line quantities
export const UPDATE_LINES = `
  mutation UpdateLines($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        totalQuantity
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// Remove lines from cart
export const REMOVE_LINES = `
  mutation RemoveLines($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        totalQuantity
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// ============================================
// CUSTOMER QUERIES (for login state)
// ============================================

// Get customer info (requires customer access token in headers)
export const GET_CUSTOMER = `
  query GetCustomer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      email
      firstName
      lastName
      displayName
    }
  }
`;
