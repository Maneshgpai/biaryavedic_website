export const FIND_VARIANT_BY_SKU = `
  query FindVariantBySku($query: String!) {
    productVariants(first: 1, query: $query) {
      edges { node { id sku title product { handle title } } }
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