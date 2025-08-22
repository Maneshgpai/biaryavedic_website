"use client";

import { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { addToCart, createCart, findVariantBySku, getCart, updateCartLineQuantity, removeCartLines, clearCart, type ShopifyCartLine } from "../lib/shopify/cart";

type CartNotification = {
  id: string;
  sku: string;
  quantity: number;
  timestamp: number;
};

type ShopifyCartContextValue = {
  cartId: string | null;
  cartCount: number;
  checkoutUrl: string | null;
  lines: ShopifyCartLine[];
  subtotal: { amount: string; currencyCode: string } | null;
  notifications: CartNotification[];
  addSku: (sku: string, quantity?: number) => Promise<void>;
  refresh: () => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  removeLine: (lineId: string) => Promise<void>;
  clear: () => Promise<void>;
  goToCheckout: () => Promise<void>;
  dismissNotification: (id: string) => void;
};

const ShopifyCartContext = createContext<ShopifyCartContextValue | null>(null);

export function ShopifyCartProvider({ children }: { children: React.ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [lines, setLines] = useState<ShopifyCartLine[]>([]);
  const [subtotal, setSubtotal] = useState<{ amount: string; currencyCode: string } | null>(null);
  const [notifications, setNotifications] = useState<CartNotification[]>([]);

  useEffect(() => {
    const existingId = typeof window !== "undefined" ? localStorage.getItem("shopify_cart_id") : null;
    const existingUrl = typeof window !== "undefined" ? localStorage.getItem("shopify_checkout_url") : null;
    if (existingId) setCartId(existingId);
    if (existingUrl) setCheckoutUrl(existingUrl);
  }, []);

  const ensureCart = useCallback(async (): Promise<string> => {
    if (cartId) return cartId;
    const cart = await createCart();
    if (typeof window !== "undefined") {
      localStorage.setItem("shopify_cart_id", cart.id);
      if (cart.checkoutUrl) localStorage.setItem("shopify_checkout_url", cart.checkoutUrl);
    }
    setCartId(cart.id);
    setCartCount(cart.totalQuantity ?? 0);
    if (cart.checkoutUrl) setCheckoutUrl(cart.checkoutUrl);
    return cart.id;
  }, [cartId]);

  const refresh = useCallback(async () => {
    if (!cartId) return;
    const cart = await getCart(cartId);
    const edges = cart?.lines?.edges ?? [];
    setLines(edges.map(e => e.node));
    setCartCount(cart?.totalQuantity ?? 0);
    setCheckoutUrl(cart?.checkoutUrl ?? null);
    setSubtotal(cart?.cost?.subtotalAmount ?? null);
  }, [cartId]);

  const dismissNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const addSku = useCallback(async (sku: string, quantity = 1) => {
    const id = await ensureCart();
    const variantId = await findVariantBySku(sku);
    const result = await addToCart(id, variantId, quantity);
    const total = result?.cartLinesAdd?.cart?.totalQuantity;
    const url = result?.cartLinesAdd?.cart?.checkoutUrl ?? null;
    if (typeof total === "number") setCartCount(total);
    if (url) {
      setCheckoutUrl(url);
      if (typeof window !== "undefined") localStorage.setItem("shopify_checkout_url", url);
    }
    await refresh();

    // Add notification
    const notification: CartNotification = {
      id: `${Date.now()}-${Math.random()}`,
      sku,
      quantity,
      timestamp: Date.now()
    };
    setNotifications(prev => [...prev, notification]);

    // Auto-dismiss after 4 seconds
    setTimeout(() => dismissNotification(notification.id), 4000);
  }, [ensureCart, dismissNotification, refresh]);

  const updateQuantity = useCallback(async (lineId: string, quantity: number) => {
    if (!cartId) return;
    await updateCartLineQuantity(cartId, lineId, quantity);
    await refresh();
  }, [cartId, refresh]);

  const removeLine = useCallback(async (lineId: string) => {
    if (!cartId) return;
    await removeCartLines(cartId, [lineId]);
    await refresh();
  }, [cartId, refresh]);

  const clear = useCallback(async () => {
    if (!cartId) return;
    await clearCart(cartId);
    await refresh();
  }, [cartId, refresh]);

  const goToCheckout = useCallback(async () => {
    await ensureCart();
    const url = checkoutUrl ?? (typeof window !== "undefined" ? localStorage.getItem("shopify_checkout_url") : null);
    if (url) {
      const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN as string | undefined;
      try {
        const parsed = new URL(url);
        if (domain && !parsed.hostname.includes(domain)) {
          // proceed anyway to avoid blocking checkout
        }
      } catch {}
      window.open(url, "_blank");
    } else {
      // If no URL, silently no-op to avoid throwing in UI. A subsequent add-to-cart will populate it.
    }
  }, [ensureCart, checkoutUrl]);

  const value = useMemo<ShopifyCartContextValue>(() => ({ 
    cartId, 
    cartCount, 
    checkoutUrl, 
    lines,
    subtotal,
    notifications, 
    addSku, 
    refresh,
    updateQuantity,
    removeLine,
    clear,
    goToCheckout, 
    dismissNotification 
  }), [cartId, cartCount, checkoutUrl, lines, subtotal, notifications, addSku, refresh, updateQuantity, removeLine, clear, goToCheckout, dismissNotification]);

  return createElement(ShopifyCartContext.Provider, { value }, children as any);
}

export function useShopifyCart(): ShopifyCartContextValue {
  const ctx = useContext(ShopifyCartContext);
  if (!ctx) {
    throw new Error("useShopifyCart must be used within a ShopifyCartProvider");
  }
  return ctx;
} 