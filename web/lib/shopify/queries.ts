export const FIND_VARIANT_BY_SKU = `
  query FindVariantBySku($query: String!, $first: Int = 5) {
    search(query: $query, first: $first) {
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

export const CREATE_CART = `
  mutation CreateCart {
    cartCreate(input: {}) { cart { id checkoutUrl totalQuantity } userErrors { field message } }
  }
`;

export const ADD_LINES = `
  mutation AddLines($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { id totalQuantity checkoutUrl }
      userErrors { field message }
    }
  }
`;

export const GET_CART = `
  query GetCart($id: ID!, $linesFirst: Int = 50) {
    cart(id: $id) {
      id
      checkoutUrl
      totalQuantity
      cost { subtotalAmount { amount currencyCode } }
      lines(first: $linesFirst) {
        edges {
          node {
            id
            quantity
            cost {
              amountPerQuantity { amount currencyCode }
              subtotalAmount { amount currencyCode }
            }
            merchandise {
              ... on ProductVariant {
                id
                title
                price { amount currencyCode }
                image { url altText }
                product {
                  title
                  featuredImage { url altText }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const UPDATE_LINES = `
  mutation UpdateLines($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart { id totalQuantity checkoutUrl }
      userErrors { field message }
    }
  }
`;

export const REMOVE_LINES = `
  mutation RemoveLines($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { id totalQuantity checkoutUrl }
      userErrors { field message }
    }
  }
`; 