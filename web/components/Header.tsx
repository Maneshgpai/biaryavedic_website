"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import { FaUser, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useShopifyCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
      <nav className="nav-container">
        <div className="logo">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/logo_symbol.png" alt="Bio-Aryavedic Symbol" width={48} height={48} className="h-12 w-auto" />
            <Image src="/assets/logo_text.png" alt="Bio-Aryavedic" width={220} height={40} className="h-10 w-auto" />
          </Link>
        </div>

        <div className={`burger-menu${menuOpen ? " active" : ""}`} id="burger-menu" onClick={() => setMenuOpen((v) => !v)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu${menuOpen ? " active" : ""}`} id="nav-menu" onClick={() => setMenuOpen(false)}>
          <li><Link href="/mission">Our Mission</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">Products</a>
            <ul className="dropdown-menu">
              <li><Link href="/products/b2b">B2B Products</Link></li>
              <li><Link href="/products/b2c">B2C Products</Link></li>
            </ul>
          </li>
          <li><Link href="/impact">Impact</Link></li>
          <li><Link href="/resources">Resources</Link></li>
          <li className="icon-links">
            <Link href="#account" className="icon-link" title="Account" aria-label="Account">
              <FaUser />
            </Link>
            <Link href="#cart" className="icon-link relative" title="Shopping Cart" aria-label="Cart">
              <FaShoppingCart />
              <span id="shopify-cart-count" className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">{cartCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
} 