/**
 * Cart Notifications Component
 * 
 * Displays toast notifications for cart actions:
 * - Success: Item added to cart
 * - Error: Failed to add item
 * - Info: General information messages
 */

"use client";

import { useShopifyCart } from "@/hooks/useShopifyCart";
import { FaCheck, FaTimes, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { STATIC_PRODUCTS } from "@/data/products";

export default function CartNotifications() {
  const { notifications, dismissNotification } = useShopifyCart();
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position for notification placement
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (notifications.length === 0) return null;

  // Position notifications below header
  const topPosition = scrollY + 100;
  
  // Build product name lookup
  const productNames = STATIC_PRODUCTS.reduce((acc, p) => {
    acc[p.sku] = p.name;
    return acc;
  }, {} as Record<string, string>);

  return (
    <div 
      className="absolute left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-md space-y-2"
      style={{ top: `${topPosition}px` }}
    >
      {notifications.map((notification) => {
        const productName = productNames[notification.sku] || notification.sku || 'Item';
        const quantityText = notification.quantity === 1 ? '1' : notification.quantity.toString();
        
        // Determine notification style based on type
        const styles = {
          success: {
            bg: 'bg-green-600',
            icon: <FaCheck className="w-4 h-4" />,
            message: notification.message || `✓ ${quantityText} of ${productName} has been added to cart!`
          },
          error: {
            bg: 'bg-red-600',
            icon: <FaExclamationTriangle className="w-4 h-4" />,
            message: notification.message || `Failed to add ${productName} to cart`
          },
          info: {
            bg: 'bg-blue-600',
            icon: <FaInfoCircle className="w-4 h-4" />,
            message: notification.message || 'Cart updated'
          }
        };
        
        const style = styles[notification.type] || styles.success;
        
        return (
          <div
            key={notification.id}
            className={`${style.bg} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-top-2 duration-300`}
          >
            <div className="flex-shrink-0">
              {style.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold">
                {style.message}
              </p>
            </div>
            <button
              onClick={() => dismissNotification(notification.id)}
              className={`flex-shrink-0 p-1 hover:bg-white/20 rounded transition-colors`}
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
