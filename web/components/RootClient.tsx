"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShopifyCartProvider } from "@/hooks/useShopifyCart";
import CartNotifications from "./CartNotifications";

export default function RootClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ 
      once: true,
      offset: 50,
      duration: 600,
      easing: 'ease-in-out',
      disable: 'mobile'
    });
  }, []);
  return (
    <ShopifyCartProvider>
      {children}
      <CartNotifications />
    </ShopifyCartProvider>
  );
} 