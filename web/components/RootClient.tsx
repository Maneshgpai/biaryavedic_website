"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShopifyCartProvider } from "@/hooks/useShopifyCart";
import CartNotifications from "./CartNotifications";

export default function RootClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Function to ensure AOS elements are visible on mobile
  const ensureMobileVisibility = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Find all elements with data-aos attributes
      const aosElements = document.querySelectorAll('[data-aos]');
      aosElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        // Ensure elements are visible on mobile when AOS is disabled
        htmlEl.style.opacity = '1';
        htmlEl.style.visibility = 'visible';
        htmlEl.style.transform = 'none';
        // Remove any AOS classes that might hide elements
        htmlEl.classList.remove('aos-animate');
      });
    }
  };

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({ 
      once: true,
      offset: 50,
      duration: 600,
      easing: 'ease-in-out',
      disable: 'mobile'
    });
    
    // Ensure visibility on mobile after initialization
    ensureMobileVisibility();
  }, []);

  // Refresh AOS when route changes to detect new elements
  useEffect(() => {
    // Small delay to ensure DOM is updated after route change
    const timer = setTimeout(() => {
      AOS.refresh();
      // Ensure visibility on mobile after refresh
      ensureMobileVisibility();
    }, 150);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <ShopifyCartProvider>
      {children}
      <CartNotifications />
    </ShopifyCartProvider>
  );
} 