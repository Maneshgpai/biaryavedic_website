/**
 * Header Component
 * 
 * Main navigation header with:
 * - Logo and branding
 * - Navigation menu (desktop/mobile)
 * - Shopping cart with popover
 * 
 * Note: Login is handled by Shopify during checkout, not in the header.
 * This ensures the cart and authentication are properly synced.
 */

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showEmptyCartNotice, setShowEmptyCartNotice] = useState(false);
  const [showCartPopover, setShowCartPopover] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cartHoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { 
    cartCount, 
    lines, 
    subtotal, 
    refresh, 
    updateQuantity, 
    removeLine, 
    clear, 
    goToCheckout
  } = useShopifyCart();

  // Handle scroll state for header styling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (cartHoverTimerRef.current) clearTimeout(cartHoverTimerRef.current);
    };
  }, []);

  // Handle cart click - go directly to checkout
  const handleCartClick = () => {
    if (cartCount > 0) {
      goToCheckout();
      return;
    }
    // Show empty cart notice
    setShowEmptyCartNotice(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setShowEmptyCartNotice(false), 4000);
  };

  // Cart hover handlers for popover
  const handleCartMouseEnter = async () => {
    if (cartHoverTimerRef.current) clearTimeout(cartHoverTimerRef.current);
    await refresh();
    setShowCartPopover(true);
  };

  const handleCartMouseLeave = () => {
    if (cartHoverTimerRef.current) clearTimeout(cartHoverTimerRef.current);
    cartHoverTimerRef.current = setTimeout(() => setShowCartPopover(false), 150);
  };

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
      <nav className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src={scrolled ? "/assets/logo_symbol_dark.png" : "/assets/logo_symbol_light.png"} 
              alt="Bio-Aryavedic Symbol" 
              width={48} 
              height={48} 
              className="h-12 w-auto" 
            />
            <Image 
              src={scrolled ? "/assets/logo_text_dark.png" : "/assets/logo_text_light.png"} 
              alt="Bio-Aryavedic" 
              width={220} 
              height={40} 
              className="h-10 w-auto" 
            />
          </Link>
        </div>

        {/* Mobile header controls */}
        <div className="mobile-header-controls md:hidden flex items-center gap-3">
          {/* Cart button (mobile) */}
          <button
            onClick={handleCartClick}
            onMouseEnter={handleCartMouseEnter}
            onMouseLeave={handleCartMouseLeave}
            className="icon-link relative"
            title="Shopping Cart"
            aria-label="Cart"
          >
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>
          
          {/* Burger menu */}
          <div 
            className={`burger-menu${menuOpen ? " active" : ""}`} 
            id="burger-menu" 
            onClick={() => {
              setMenuOpen((v) => !v);
              setOpenDropdown(null);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navigation menu */}
        <ul className={`nav-menu${menuOpen ? " active" : ""}`} id="nav-menu">
          {/* Mobile menu header */}
          <div className="mobile-menu-header md:hidden">
            <button
              onClick={handleCartClick}
              onMouseEnter={handleCartMouseEnter}
              onMouseLeave={handleCartMouseLeave}
              className="mobile-cart-button relative"
              title="Shopping Cart"
              aria-label="Cart"
            >
              <FaShoppingCart />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                setOpenDropdown(null);
              }}
              className="mobile-close-button"
              aria-label="Close menu"
            >
              <span className="close-line"></span>
              <span className="close-line"></span>
            </button>
          </div>

          {/* Navigation items */}
          <li><Link href="/mission" onClick={() => setMenuOpen(false)}>Our Mission</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          
          {/* Products dropdown */}
          <li className="dropdown">
            <a 
              href="#" 
              className="dropdown-toggle" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenDropdown(openDropdown === 'products' ? null : 'products');
              }}
            >
              Products
            </a>
            <ul className={`dropdown-menu${openDropdown === 'products' ? ' active' : ''}`} onClick={(e) => e.stopPropagation()}>
              <li><Link href="/products/b2b" onClick={() => setMenuOpen(false)}>B2B Products</Link></li>
              <li><Link href="/products/b2c" onClick={() => setMenuOpen(false)}>B2C Products</Link></li>
            </ul>
          </li>
          
          {/* Impact dropdown */}
          <li className="dropdown">
            <a 
              href="#" 
              className="dropdown-toggle" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenDropdown(openDropdown === 'impact' ? null : 'impact');
              }}
            >
              Impact
            </a>
            <ul className={`dropdown-menu${openDropdown === 'impact' ? ' active' : ''}`} onClick={(e) => e.stopPropagation()}>
              <li><Link href="/impact" onClick={() => setMenuOpen(false)}>Impact Overview</Link></li>
              <li><Link href="/impact/sdgs" onClick={() => setMenuOpen(false)}>SDGs Commitment</Link></li>
            </ul>
          </li>
          
          <li><Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link></li>
          
          {/* Privacy dropdown */}
          <li className="dropdown">
            <a 
              href="#" 
              className="dropdown-toggle" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenDropdown(openDropdown === 'privacy' ? null : 'privacy');
              }}
            >
              Privacy
            </a>
            <ul className={`dropdown-menu${openDropdown === 'privacy' ? ' active' : ''}`} onClick={(e) => e.stopPropagation()}>
              <li><Link href="/privacy" onClick={() => setMenuOpen(false)}>Terms & Conditions</Link></li>
              <li><Link href="/cookies" onClick={() => setMenuOpen(false)}>Cookie Policy</Link></li>
            </ul>
          </li>
          
          {/* Desktop cart icon */}
          <li className="icon-links hidden md:flex">
            <button
              onClick={handleCartClick}
              onMouseEnter={handleCartMouseEnter}
              onMouseLeave={handleCartMouseLeave}
              className="icon-link relative"
              title="Shopping Cart"
              aria-label="Cart"
            >
              <FaShoppingCart />
              <span 
                id="shopify-cart-count" 
                className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full"
              >
                {cartCount}
              </span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Cart Popover */}
      {showCartPopover && (
        <div
          className="fixed right-4 top-16 w-80 bg-white border border-gray-200 shadow-2xl rounded-xl overflow-hidden z-[1000]"
          onMouseEnter={handleCartMouseEnter}
          onMouseLeave={handleCartMouseLeave}
        >
          <div className="max-h-80 overflow-auto">
            {lines.length === 0 ? (
              <div className="p-4 text-sm text-gray-600">Your cart is empty.</div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {lines.map((line) => {
                  const img = line.merchandise.image?.url || line.merchandise.product?.featuredImage?.url || "/assets/images/placeholder.png";
                  const title = line.merchandise.product?.title || line.merchandise.title || "Item";
                  const unitPrice = line.cost?.amountPerQuantity?.amount || line.merchandise.price?.amount || "";
                  const currency = line.cost?.amountPerQuantity?.currencyCode || line.merchandise.price?.currencyCode || subtotal?.currencyCode || "INR";
                  const lineSubtotal = line.cost?.subtotalAmount?.amount || "";
                  
                  return (
                    <li key={line.id} className="p-3 flex items-center gap-3">
                      <Image 
                        src={img} 
                        alt={title} 
                        width={40} 
                        height={40} 
                        className="rounded object-cover w-10 h-10" 
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">{title}</div>
                        <div className="text-[11px] text-gray-600">
                          {unitPrice && `${currency} ${unitPrice}`}
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                          <button 
                            className="px-2 py-0.5 text-xs border rounded hover:bg-gray-50" 
                            onClick={() => updateQuantity(line.id, Math.max(1, line.quantity - 1))}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min={1}
                            value={line.quantity}
                            onChange={(e) => {
                              const val = parseInt(e.target.value || "1", 10);
                              updateQuantity(line.id, isNaN(val) ? 1 : Math.max(1, val));
                            }}
                            className="w-12 text-center border rounded py-0.5 text-xs text-gray-900"
                          />
                          <button 
                            className="px-2 py-0.5 text-xs border rounded hover:bg-gray-50" 
                            onClick={() => updateQuantity(line.id, line.quantity + 1)}
                          >
                            +
                          </button>
                          <button 
                            className="ml-2 text-[11px] text-red-600 hover:underline" 
                            onClick={() => removeLine(line.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                        {currency} {lineSubtotal}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          
          {/* Cart footer */}
          <div className="p-3 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">
                {subtotal ? `${subtotal.currencyCode} ${subtotal.amount}` : "-"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <button
                className="text-xs text-gray-600 hover:text-gray-800 hover:underline"
                onClick={async (e) => { 
                  e.preventDefault(); 
                  await clear(); 
                }}
              >
                Clear Cart
              </button>
              <button
                className="ml-auto bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg"
                onClick={(e) => { 
                  e.preventDefault(); 
                  goToCheckout(); 
                }}
              >
                Checkout
              </button>
            </div>
            <div className="mt-2 text-[10px] text-gray-500 text-center">
              You can log in or checkout as guest on Shopify.
            </div>
          </div>
        </div>
      )}

      {/* Empty cart notice */}
      {showEmptyCartNotice && (
        <div className="fixed z-50 left-1/2 -translate-x-1/2 bottom-4 w-auto max-w-sm md:max-w-md md:bottom-auto md:top-20 md:right-6 md:left-auto md:translate-x-0">
          <div className="bg-white border border-gray-200 shadow-xl rounded-xl p-4 flex items-start gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">Your cart is empty</p>
              <p className="text-xs text-gray-600 mt-1">Add items to your cart to proceed to checkout.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
