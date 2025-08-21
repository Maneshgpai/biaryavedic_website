"use client";

import { useCallback, useEffect, useState } from "react";
import { addToCart, createCart, findVariantBySku } from "../lib/shopify/cart";

export function useShopifyCart() {
  const [cartId, setCartId] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const existing = typeof window !== "undefined" ? localStorage.getItem("shopify_cart_id") : null;
    if (existing) setCartId(existing);
  }, []);

  const ensureCart = useCallback(async () => {
    if (cartId) return cartId;
    const cart = await createCart();
    if (typeof window !== "undefined") localStorage.setItem("shopify_cart_id", cart.id);
    setCartId(cart.id);
    setCartCount(cart.totalQuantity ?? 0);
    return cart.id;
  }, [cartId]);

  const addSku = useCallback(async (sku: string, quantity = 1) => {
    const id = await ensureCart();
    const variantId = await findVariantBySku(sku);
    const result = await addToCart(id, variantId, quantity);
    const total = result?.cartLinesAdd?.cart?.totalQuantity;
    if (typeof total === "number") setCartCount(total);
  }, [ensureCart]);

  return { cartId, cartCount, addSku };
} 