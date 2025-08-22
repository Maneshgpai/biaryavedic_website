import { shopifyRequest } from "./client";
import { FIND_VARIANT_BY_SKU, CREATE_CART, ADD_LINES, PRODUCTS_BY_QUERY } from "./queries";
import { GET_CART, UPDATE_LINES, REMOVE_LINES } from "./queries";

export async function findVariantBySku(sku: string): Promise<string> {
  const normalized = sku.trim();
  const lower = normalized.toLowerCase();

  // Strategy 1: Storefront search API over Products, then scan variants
  try {
    const data = await shopifyRequest<{
      search: {
        nodes: Array<{
          variants?: { nodes: Array<{ id: string; sku?: string | null }> };
        }>;
      };
    }>(
      FIND_VARIANT_BY_SKU,
      { query: `sku:${JSON.stringify(normalized)}` }
    );

    for (const node of data.search?.nodes ?? []) {
      const match = node.variants?.nodes.find(v => (v.sku ?? "").toLowerCase().trim() === lower);
      if (match?.id) return match.id;
    }
  } catch {}

  // Strategy 2: products(query:) using variants.sku, sku, and default search
  const queries = [
    `variants.sku:${JSON.stringify(normalized)}`,
    `sku:${JSON.stringify(normalized)}`,
    JSON.stringify(normalized)
  ];

  for (const q of queries) {
    const prod = await shopifyRequest<{
      products: {
        nodes: Array<{
          variants?: { nodes: Array<{ id: string; sku?: string | null }> };
        }>;
      };
    }>(PRODUCTS_BY_QUERY, { query: q });

    for (const node of prod.products?.nodes ?? []) {
      const match = node.variants?.nodes.find(v => (v.sku ?? "").toLowerCase().trim() === lower);
      if (match?.id) return match.id;
    }
  }

  throw new Error("Variant not found for SKU");
}

export async function createCart(): Promise<{ id: string; checkoutUrl: string; totalQuantity: number }>{
  const data = await shopifyRequest<{ cartCreate: { cart: { id: string; checkoutUrl: string; totalQuantity: number } } }>(CREATE_CART);
  return data.cartCreate.cart;
}

export async function addToCart(
  cartId: string,
  merchandiseId: string,
  quantity = 1
): Promise<{ cartLinesAdd: { cart: { totalQuantity: number; checkoutUrl?: string; id?: string } } }>{
  return shopifyRequest(ADD_LINES, { cartId, lines: [{ merchandiseId, quantity }] });
}

export type ShopifyMoney = { amount: string; currencyCode: string };
export type ShopifyCartLine = {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title?: string | null;
    price?: ShopifyMoney | null;
    image?: { url: string; altText?: string | null } | null;
    product?: { title: string; featuredImage?: { url: string; altText?: string | null } | null } | null;
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
  cost?: { subtotalAmount?: ShopifyMoney | null } | null;
  lines?: { edges: Array<{ node: ShopifyCartLine }> } | null;
};

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  const data = await shopifyRequest<{ cart: ShopifyCart }>(GET_CART, { id: cartId });
  return data.cart ?? null;
}

export async function updateCartLineQuantity(cartId: string, lineId: string, quantity: number) {
  return shopifyRequest(UPDATE_LINES, { cartId, lines: [{ id: lineId, quantity }] });
}

export async function removeCartLines(cartId: string, lineIds: string[]) {
  return shopifyRequest(REMOVE_LINES, { cartId, lineIds });
}

export async function clearCart(cartId: string) {
  const cart = await getCart(cartId);
  const ids = (cart?.lines?.edges ?? []).map(e => e.node.id);
  if (ids.length === 0) return { ok: true } as const;
  return removeCartLines(cartId, ids);
} 