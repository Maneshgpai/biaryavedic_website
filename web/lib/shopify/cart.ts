/**
 * Shopify Cart Operations
 * 
 * This module handles all cart-related operations using the Storefront API:
 * - Cart creation
 * - Adding/updating/removing items
 * - Cart retrieval
 * - Variant lookup (with caching support)
 */

import { shopifyRequest } from "./client";
import { 
  CREATE_CART, 
  ADD_LINES, 
  GET_CART, 
  UPDATE_LINES, 
  REMOVE_LINES,
  FIND_VARIANT_BY_SKU,
  PRODUCTS_BY_QUERY 
} from "./queries";
import { getVariantIdFromSku } from "@/data/products";

// Type definitions for cart data
export type ShopifyMoney = { 
  amount: string; 
  currencyCode: string;
};

export type ShopifyCartLine = {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title?: string | null;
    sku?: string | null;
    price?: ShopifyMoney | null;
    image?: { url: string; altText?: string | null } | null;
    product?: { 
      title: string; 
      handle: string;
      featuredImage?: { url: string; altText?: string | null } | null;
    } | null;
  };
  cost?: {
    amountPerQuantity?: ShopifyMoney | null;
    subtotalAmount?: ShopifyMoney | null;
  } | null;
};

export type ShopifyCart = {
  id: string;
  checkoutUrl?: string | null;
  totalQuantity?: number | null;
  cost?: { 
    subtotalAmount?: ShopifyMoney | null;
    totalAmount?: ShopifyMoney | null;
  } | null;
  lines?: { edges: Array<{ node: ShopifyCartLine }> } | null;
};

/**
 * Find variant ID by SKU
 * 
 * First tries the cached mapping from loaded products,
 * then falls back to API search if not found in cache.
 */
export async function findVariantBySku(sku: string): Promise<string> {
  const normalized = sku.trim();
  const lower = normalized.toLowerCase();

  // Strategy 1: Check cached SKU to Variant mapping (fast, no API call)
  const cachedVariantId = await getVariantIdFromSku(normalized);
  if (cachedVariantId) {
    return cachedVariantId;
  }

  // Strategy 2: Search API if not in cache
  try {
    const data = await shopifyRequest<{
      search: {
        nodes: Array<{
          variants?: { nodes: Array<{ id: string; sku?: string | null }> };
        }>;
      };
    }>(FIND_VARIANT_BY_SKU, { query: `sku:${JSON.stringify(normalized)}` });

    for (const node of data.search?.nodes ?? []) {
      const match = node.variants?.nodes.find(
        v => (v.sku ?? "").toLowerCase().trim() === lower
      );
      if (match?.id) return match.id;
    }
  } catch (error) {
    console.warn('Search API failed for SKU lookup:', error);
  }

  // Strategy 3: Direct product query as fallback
  const queries = [
    `variants.sku:${JSON.stringify(normalized)}`,
    `sku:${JSON.stringify(normalized)}`,
  ];

  for (const q of queries) {
    try {
      const prod = await shopifyRequest<{
        products: {
          nodes: Array<{
            variants?: { nodes: Array<{ id: string; sku?: string | null }> };
          }>;
        };
      }>(PRODUCTS_BY_QUERY, { query: q });

      for (const node of prod.products?.nodes ?? []) {
        const match = node.variants?.nodes.find(
          v => (v.sku ?? "").toLowerCase().trim() === lower
        );
        if (match?.id) return match.id;
      }
    } catch {
      // Continue to next query
    }
  }

  throw new Error(`Variant not found for SKU: ${sku}`);
}

/**
 * Create a new empty cart
 */
export async function createCart(): Promise<{ 
  id: string; 
  checkoutUrl: string; 
  totalQuantity: number;
}> {
  const data = await shopifyRequest<{ 
    cartCreate: { 
      cart: { id: string; checkoutUrl: string; totalQuantity: number };
      userErrors: Array<{ field: string; message: string }>;
    };
  }>(CREATE_CART, { lines: [] });
  
  if (data.cartCreate.userErrors?.length > 0) {
    throw new Error(data.cartCreate.userErrors[0].message);
  }
  
  return data.cartCreate.cart;
}

/**
 * Add items to cart
 */
export async function addToCart(
  cartId: string,
  merchandiseId: string,
  quantity = 1
): Promise<{ 
  cartLinesAdd: { 
    cart: { totalQuantity: number; checkoutUrl?: string; id?: string };
    userErrors: Array<{ field: string; message: string }>;
  };
}> {
  const result = await shopifyRequest<{
    cartLinesAdd: {
      cart: { totalQuantity: number; checkoutUrl?: string; id?: string };
      userErrors: Array<{ field: string; message: string }>;
    };
  }>(ADD_LINES, { 
    cartId, 
    lines: [{ merchandiseId, quantity }] 
  });
  
  if (result.cartLinesAdd.userErrors?.length > 0) {
    throw new Error(result.cartLinesAdd.userErrors[0].message);
  }
  
  return result;
}

/**
 * Add item to cart by SKU (convenience wrapper)
 */
export async function addToCartBySku(
  cartId: string,
  sku: string,
  quantity = 1
): Promise<{ 
  cartLinesAdd: { 
    cart: { totalQuantity: number; checkoutUrl?: string; id?: string };
    userErrors: Array<{ field: string; message: string }>;
  };
}> {
  const variantId = await findVariantBySku(sku);
  return addToCart(cartId, variantId, quantity);
}

/**
 * Get cart details
 */
export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  try {
    const data = await shopifyRequest<{ cart: ShopifyCart }>(
      GET_CART, 
      { id: cartId },
      { cache: 'no-store' } // Always fetch fresh cart data
    );
    return data.cart ?? null;
  } catch (error) {
    console.warn('Failed to get cart:', error);
    return null;
  }
}

/**
 * Update cart line quantity
 */
export async function updateCartLineQuantity(
  cartId: string, 
  lineId: string, 
  quantity: number
): Promise<{ 
  cartLinesUpdate: { 
    cart: { totalQuantity: number; checkoutUrl?: string };
    userErrors: Array<{ field: string; message: string }>;
  };
}> {
  const result = await shopifyRequest<{
    cartLinesUpdate: {
      cart: { totalQuantity: number; checkoutUrl?: string };
      userErrors: Array<{ field: string; message: string }>;
    };
  }>(UPDATE_LINES, { 
    cartId, 
    lines: [{ id: lineId, quantity }] 
  });
  
  if (result.cartLinesUpdate.userErrors?.length > 0) {
    throw new Error(result.cartLinesUpdate.userErrors[0].message);
  }
  
  return result;
}

/**
 * Remove lines from cart
 */
export async function removeCartLines(
  cartId: string, 
  lineIds: string[]
): Promise<{ 
  cartLinesRemove: { 
    cart: { totalQuantity: number; checkoutUrl?: string };
    userErrors: Array<{ field: string; message: string }>;
  };
}> {
  const result = await shopifyRequest<{
    cartLinesRemove: {
      cart: { totalQuantity: number; checkoutUrl?: string };
      userErrors: Array<{ field: string; message: string }>;
    };
  }>(REMOVE_LINES, { cartId, lineIds });
  
  if (result.cartLinesRemove.userErrors?.length > 0) {
    throw new Error(result.cartLinesRemove.userErrors[0].message);
  }
  
  return result;
}

/**
 * Clear all items from cart
 */
export async function clearCart(cartId: string): Promise<{ ok: boolean }> {
  const cart = await getCart(cartId);
  const lineIds = (cart?.lines?.edges ?? []).map(e => e.node.id);
  
  if (lineIds.length === 0) {
    return { ok: true };
  }
  
  await removeCartLines(cartId, lineIds);
  return { ok: true };
}

/**
 * Validate if a cart is still valid (not expired)
 */
export async function validateCart(cartId: string): Promise<boolean> {
  const cart = await getCart(cartId);
  return cart !== null && cart.id === cartId;
}
