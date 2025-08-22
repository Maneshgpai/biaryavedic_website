"use client";

import { useShopifyCart } from "@/hooks/useShopifyCart";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getProductNames } from "@/data/products";

export default function CartNotifications() {
  const { notifications, dismissNotification } = useShopifyCart();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (notifications.length === 0) return null;

  // Position notifications in the current viewport, accounting for header height
  const topPosition = scrollY + 100; // 100px from top of viewport to clear header
  const productNames = getProductNames();

  return (
    <div 
      className="absolute left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-md space-y-2"
      style={{ top: `${topPosition}px` }}
    >
      {notifications.map((notification) => {
        const productName = productNames[notification.sku] || notification.sku;
        const quantityText = notification.quantity === 1 ? '1' : notification.quantity.toString();
        
        return (
          <div
            key={notification.id}
            className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-top-2 duration-300"
          >
            <div className="flex-shrink-0">
              <FaCheck className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold">
                ✓ {quantityText} of {productName} has been added to cart!
              </p>
            </div>
            <button
              onClick={() => dismissNotification(notification.id)}
              className="flex-shrink-0 p-1 hover:bg-green-700 rounded transition-colors"
              aria-label="Dismiss"
            >
              <FaTimes className="w-3 h-3" />
            </button>
          </div>
        );
      })}
    </div>
  );
} 