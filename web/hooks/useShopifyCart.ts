/**
 * Shopify Cart Hook
 * 
 * React Context and hook for managing Shopify cart state including:
 * - Cart creation and persistence
 * - Add/update/remove items
 * - Checkout redirect (Shopify handles authentication)
 * - Toast notifications
 * 
 * IMPORTANT: This uses Shopify's Storefront API cart which is separate from
 * customer account carts. The checkoutUrl contains the cart data and Shopify's
 * checkout flow handles customer authentication.
 */

"use client";

import { 
  createContext, 
  createElement, 
  useCallback, 
  useContext, 
  useEffect, 
  useMemo, 
  useState 
} from "react";
import { 
  addToCart, 
  createCart, 
  findVariantBySku, 
  getCart, 
  updateCartLineQuantity, 
  removeCartLines, 
  clearCart, 
  validateCart,
  type ShopifyCartLine 
} from "../lib/shopify/cart";

// Cart notification for toast messages
type CartNotification = {
  id: string;
  type: 'success' | 'error' | 'info';
  sku: string;
  quantity: number;
  message?: string;
  timestamp: number;
};

// Cart context value type
type ShopifyCartContextValue = {
  // Cart state
  cartId: string | null;
  cartCount: number;
  checkoutUrl: string | null;
  lines: ShopifyCartLine[];
  subtotal: { amount: string; currencyCode: string } | null;
  
  // Loading states
  isLoading: boolean;
  
  // Notifications
  notifications: CartNotification[];
  
  // Cart actions
  addSku: (sku: string, quantity?: number) => Promise<void>;
  addVariant: (variantId: string, quantity?: number) => Promise<void>;
  refresh: () => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  removeLine: (lineId: string) => Promise<void>;
  clear: () => Promise<void>;
  
  // Checkout action - redirects to Shopify checkout
  goToCheckout: () => Promise<void>;
  
  // Notification actions
  dismissNotification: (id: string) => void;
};

const ShopifyCartContext = createContext<ShopifyCartContextValue | null>(null);

// Storage keys for cart persistence
const CART_ID_KEY = "shopify_cart_id";
const CHECKOUT_URL_KEY = "shopify_checkout_url";

export function ShopifyCartProvider({ children }: { children: React.ReactNode }) {
  // Cart state
  const [cartId, setCartId] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [lines, setLines] = useState<ShopifyCartLine[]>([]);
  const [subtotal, setSubtotal] = useState<{ amount: string; currencyCode: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Notifications
  const [notifications, setNotifications] = useState<CartNotification[]>([]);

  // Initialize cart state from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const initializeCart = async () => {
      const existingId = localStorage.getItem(CART_ID_KEY);
      const existingUrl = localStorage.getItem(CHECKOUT_URL_KEY);
      
      if (existingId) {
        // Validate the existing cart is still valid (not expired)
        const isValid = await validateCart(existingId);
        
        if (isValid) {
          setCartId(existingId);
          if (existingUrl) setCheckoutUrl(existingUrl);
          
          // Refresh cart contents from Shopify
          const cart = await getCart(existingId);
          if (cart) {
            updateCartState(cart);
          }
        } else {
          // Cart expired or invalid - clear and start fresh
          console.info('Previous cart expired, starting fresh');
          localStorage.removeItem(CART_ID_KEY);
          localStorage.removeItem(CHECKOUT_URL_KEY);
        }
      }
    };
    
    initializeCart();
  }, []);

  // Helper to update cart state from API response
  const updateCartState = useCallback((cart: {
    totalQuantity?: number | null;
    checkoutUrl?: string | null;
    lines?: { edges: Array<{ node: ShopifyCartLine }> } | null;
    cost?: { subtotalAmount?: { amount: string; currencyCode: string } | null } | null;
  }) => {
    const edges = cart?.lines?.edges ?? [];
    setLines(edges.map(e => e.node));
    setCartCount(cart?.totalQuantity ?? 0);
    setSubtotal(cart?.cost?.subtotalAmount ?? null);
    
    // Always update checkout URL when available
    if (cart?.checkoutUrl) {
      setCheckoutUrl(cart.checkoutUrl);
      if (typeof window !== "undefined") {
        localStorage.setItem(CHECKOUT_URL_KEY, cart.checkoutUrl);
      }
    }
  }, []);

  // Ensure a cart exists, create one if needed
  const ensureCart = useCallback(async (): Promise<string> => {
    if (cartId) return cartId;
    
    const cart = await createCart();
    
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_ID_KEY, cart.id);
      if (cart.checkoutUrl) {
        localStorage.setItem(CHECKOUT_URL_KEY, cart.checkoutUrl);
      }
    }
    
    setCartId(cart.id);
    setCartCount(cart.totalQuantity ?? 0);
    if (cart.checkoutUrl) setCheckoutUrl(cart.checkoutUrl);
    
    return cart.id;
  }, [cartId]);

  // Refresh cart data from Shopify
  const refresh = useCallback(async () => {
    if (!cartId) return;
    
    const cart = await getCart(cartId);
    if (cart) {
      updateCartState(cart);
    }
  }, [cartId, updateCartState]);

  // Dismiss a notification
  const dismissNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // Add notification helper
  const addNotification = useCallback((
    type: 'success' | 'error' | 'info',
    sku: string,
    quantity: number,
    message?: string
  ) => {
    const notification: CartNotification = {
      id: `${Date.now()}-${Math.random()}`,
      type,
      sku,
      quantity,
      message,
      timestamp: Date.now()
    };
    
    setNotifications(prev => [...prev, notification]);
    
    // Auto-dismiss after 4 seconds
    setTimeout(() => dismissNotification(notification.id), 4000);
  }, [dismissNotification]);

  // Add item to cart by SKU
  const addSku = useCallback(async (sku: string, quantity = 1) => {
    try {
      setIsLoading(true);
      const id = await ensureCart();
      const variantId = await findVariantBySku(sku);
      const result = await addToCart(id, variantId, quantity);
      
      const total = result?.cartLinesAdd?.cart?.totalQuantity;
      const url = result?.cartLinesAdd?.cart?.checkoutUrl ?? null;
      
      if (typeof total === "number") setCartCount(total);
      if (url) {
        setCheckoutUrl(url);
        if (typeof window !== "undefined") {
          localStorage.setItem(CHECKOUT_URL_KEY, url);
        }
      }
      
      await refresh();
      addNotification('success', sku, quantity);
    } catch (error) {
      console.error('Failed to add to cart:', error);
      addNotification('error', sku, quantity, error instanceof Error ? error.message : 'Failed to add item');
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [ensureCart, refresh, addNotification]);

  // Add item to cart by variant ID (faster, no SKU lookup needed)
  const addVariant = useCallback(async (variantId: string, quantity = 1) => {
    try {
      setIsLoading(true);
      const id = await ensureCart();
      const result = await addToCart(id, variantId, quantity);
      
      const total = result?.cartLinesAdd?.cart?.totalQuantity;
      const url = result?.cartLinesAdd?.cart?.checkoutUrl ?? null;
      
      if (typeof total === "number") setCartCount(total);
      if (url) {
        setCheckoutUrl(url);
        if (typeof window !== "undefined") {
          localStorage.setItem(CHECKOUT_URL_KEY, url);
        }
      }
      
      await refresh();
      addNotification('success', variantId, quantity);
    } catch (error) {
      console.error('Failed to add to cart:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [ensureCart, refresh, addNotification]);

  // Update line item quantity
  const updateQuantity = useCallback(async (lineId: string, quantity: number) => {
    if (!cartId) return;
    
    try {
      setIsLoading(true);
      await updateCartLineQuantity(cartId, lineId, quantity);
      await refresh();
    } catch (error) {
      console.error('Failed to update quantity:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [cartId, refresh]);

  // Remove a line item
  const removeLine = useCallback(async (lineId: string) => {
    if (!cartId) return;
    
    try {
      setIsLoading(true);
      await removeCartLines(cartId, [lineId]);
      await refresh();
    } catch (error) {
      console.error('Failed to remove item:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [cartId, refresh]);

  // Clear all items from cart
  const clear = useCallback(async () => {
    if (!cartId) return;
    
    try {
      setIsLoading(true);
      await clearCart(cartId);
      await refresh();
    } catch (error) {
      console.error('Failed to clear cart:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [cartId, refresh]);

  /**
   * Go to Shopify checkout
   * 
   * IMPORTANT: This redirects to Shopify's checkout with the cart data.
   * Shopify handles customer authentication during checkout - users can:
   * - Log in to their Shopify account
   * - Create a new account
   * - Checkout as guest
   * 
   * The cart items are preserved in the checkoutUrl, so they will appear
   * in Shopify's checkout regardless of login state.
   */
  const goToCheckout = useCallback(async () => {
    // Ensure we have a cart
    await ensureCart();
    
    // Check if cart has items
    if (cartCount === 0) {
      addNotification('info', '', 0, 'Your cart is empty. Add items before checkout.');
      return;
    }
    
    // Get the checkout URL (refresh to ensure it's current)
    await refresh();
    
    const url = checkoutUrl ?? (typeof window !== "undefined" ? localStorage.getItem(CHECKOUT_URL_KEY) : null);
    
    if (url) {
      // Redirect to Shopify checkout in the same tab for better UX
      // The checkoutUrl contains all cart data - Shopify will show the items
      window.location.href = url;
    } else {
      console.error('No checkout URL available');
      addNotification('error', '', 0, 'Unable to proceed to checkout. Please try again.');
    }
  }, [ensureCart, cartCount, checkoutUrl, refresh, addNotification]);

  // Build context value
  const value = useMemo<ShopifyCartContextValue>(() => ({ 
    cartId, 
    cartCount, 
    checkoutUrl, 
    lines,
    subtotal,
    isLoading,
    notifications, 
    addSku,
    addVariant,
    refresh,
    updateQuantity,
    removeLine,
    clear,
    goToCheckout,
    dismissNotification 
  }), [
    cartId, 
    cartCount, 
    checkoutUrl, 
    lines, 
    subtotal,
    isLoading,
    notifications, 
    addSku,
    addVariant,
    refresh, 
    updateQuantity, 
    removeLine, 
    clear, 
    goToCheckout,
    dismissNotification
  ]);

  return createElement(ShopifyCartContext.Provider, { value }, children);
}

export function useShopifyCart(): ShopifyCartContextValue {
  const ctx = useContext(ShopifyCartContext);
  if (!ctx) {
    throw new Error("useShopifyCart must be used within a ShopifyCartProvider");
  }
  return ctx;
}
