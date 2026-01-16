/**
 * Buy Now Button Component
 * 
 * Button that adds a product to cart and immediately redirects to Shopify checkout.
 * Supports both SKU-based and variantId-based cart additions.
 * Using variantId is more efficient as it avoids SKU lookup.
 * 
 * The checkout flow is handled by Shopify where users can:
 * - Log in to their account
 * - Create a new account
 * - Checkout as guest
 */

"use client";

import { useState } from "react";
import { useShopifyCart } from "@/hooks/useShopifyCart";

interface BuyNowButtonProps {
  sku: string;
  variantId?: string;  // Optional: if provided, skips SKU lookup
  quantity?: number;
  className?: string;
}

export default function BuyNowButton({ 
  sku, 
  variantId, 
  quantity = 1,
  className 
}: BuyNowButtonProps) {
  const { addSku, addVariant, goToCheckout, isLoading: cartLoading } = useShopifyCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      setLoading(true);
      setError(null);

      // Use variantId if available (faster), otherwise fall back to SKU lookup
      if (variantId) {
        await addVariant(variantId, quantity);
      } else {
        await addSku(sku, quantity);
      }
      
      // Redirect to Shopify checkout (handles login/guest checkout)
      await goToCheckout();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to proceed to checkout");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = loading || cartLoading;

  return (
    <div className="inline-flex flex-col items-start gap-1 flex-1">
      <button
        onClick={handleClick}
        disabled={isDisabled}
        className={className || "flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed w-full"}
      >
        {isDisabled ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          <>
            <span>Buy Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>
      {error && <span className="text-sm text-red-600 mt-1">{error}</span>}
    </div>
  );
}
