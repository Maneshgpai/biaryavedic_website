import { shopifyRequest } from "./client";
import { FIND_VARIANT_BY_SKU, CREATE_CART, ADD_LINES } from "./queries";

export async function findVariantBySku(sku: string): Promise<string> {
  const data = await shopifyRequest<{ productVariants: { edges: { node: { id: string } }[] } }>(
    FIND_VARIANT_BY_SKU,
    { query: `sku:${JSON.stringify(sku)}` }
  );
  const id = data.productVariants?.edges?.[0]?.node?.id;
  if (!id) throw new Error("Variant not found for SKU");
  return id;
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