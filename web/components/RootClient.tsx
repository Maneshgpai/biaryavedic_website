"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  return <>{children}</>;
} 