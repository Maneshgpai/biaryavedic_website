/**
 * Add to Cart Button Component
 * 
 * Button that adds a product to the Shopify cart.
 * Supports both SKU-based and variantId-based cart additions.
 * Using variantId is more efficient as it avoids SKU lookup.
 */

"use client";

import { useState } from "react";
import { useShopifyCart } from "@/hooks/useShopifyCart";

interface AddToCartButtonProps {
  sku: string;
  variantId?: string;  // Optional: if provided, skips SKU lookup
  quantity?: number;
  className?: string;
}

export default function AddToCartButton({ 
  sku, 
  variantId, 
  quantity = 1,
  className 
}: AddToCartButtonProps) {
  const { addSku, addVariant, isLoading: cartLoading } = useShopifyCart();
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
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to add to cart");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = loading || cartLoading;

  return (
    <div className="inline-flex flex-col items-start gap-1">
      <button 
        onClick={handleClick} 
        disabled={isDisabled} 
        className={className || "bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 hover:border-green-700 hover:text-green-700 disabled:opacity-60 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 min-w-[140px]"}
      >
        {isDisabled ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Adding...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5M12 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM19.5 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Add to Cart
          </>
        )}
      </button>
      {error && <span className="text-sm text-red-600 mt-1">{error}</span>}
    </div>
  );
}
