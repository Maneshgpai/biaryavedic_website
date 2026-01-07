"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShopifyCartProvider } from "@/hooks/useShopifyCart";
import CartNotifications from "./CartNotifications";

export default function RootClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({ 
      once: true,
      offset: 50,
      duration: 600,
      easing: 'ease-in-out',
      disable: 'mobile'
    });
  }, []);

  // Refresh AOS when route changes to detect new elements
  useEffect(() => {
    // Small delay to ensure DOM is updated after route change
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <ShopifyCartProvider>
      {children}
      <CartNotifications />
    </ShopifyCartProvider>
  );
} 