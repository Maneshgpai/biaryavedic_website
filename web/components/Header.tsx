"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import { FaUser, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showEmptyCartNotice, setShowEmptyCartNotice] = useState(false);
  const [showCartPopover, setShowCartPopover] = useState(false);
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cartHoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loginWindowRef = useRef<Window | null>(null);
  const loginPollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const logoutWindowRef = useRef<Window | null>(null);
  const logoutPollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { cartCount, lines, subtotal, refresh, updateQuantity, removeLine, clear, goToCheckout } = useShopifyCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Initialize login state from storage
    try {
      const stored = localStorage.getItem("shopifyLoggedIn");
      setIsCustomerLoggedIn(stored === "true");
    } catch {}
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (loginPollRef.current) clearInterval(loginPollRef.current);
      if (logoutPollRef.current) clearInterval(logoutPollRef.current);
    };
  }, []);

  const handleCartClick = () => {
    if (cartCount > 0) {
      goToCheckout();
      return;
    }
    setShowEmptyCartNotice(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setShowEmptyCartNotice(false), 4000);
  };

  const handleCartMouseEnter = async () => {
    if (cartHoverTimerRef.current) clearTimeout(cartHoverTimerRef.current);
    await refresh();
    setShowCartPopover(true);
  };

  const handleCartMouseLeave = () => {
    if (cartHoverTimerRef.current) clearTimeout(cartHoverTimerRef.current);
    cartHoverTimerRef.current = setTimeout(() => setShowCartPopover(false), 150);
  };

  const shopDomain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
  const loginHref = shopDomain ? `https://${shopDomain}/account/login` : "https://your-store.myshopify.com/account/login";
  const logoutHref = shopDomain ? `https://${shopDomain}/account/logout` : "https://your-store.myshopify.com/account/logout";

  const markLoggedIn = () => {
    setIsCustomerLoggedIn(true);
    try { localStorage.setItem("shopifyLoggedIn", "true"); } catch {}
  };
  const markLoggedOut = () => {
    setIsCustomerLoggedIn(false);
    try { localStorage.setItem("shopifyLoggedIn", "false"); } catch {}
  };

  const openShopifyLoginWindow = () => {
    const width = 480;
    const height = 640;
    const left = Math.max(0, Math.floor(window.screenX + (window.outerWidth - width) / 2));
    const top = Math.max(0, Math.floor(window.screenY + (window.outerHeight - height) / 2));
    loginWindowRef.current = window.open(
      loginHref,
      "shopify-login",
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`
    );

    if (loginPollRef.current) clearInterval(loginPollRef.current);
    loginPollRef.current = setInterval(() => {
      const loginWindow = loginWindowRef.current;
      if (!loginWindow || loginWindow.closed) {
        if (loginPollRef.current) clearInterval(loginPollRef.current);
        loginPollRef.current = null;
        return;
      }
      try {
        const href = loginWindow.location.href;
        if (href && /\/account(\/?|\?|#)/.test(href) && !/\/account\/login(\/?|\?|#)/.test(href)) {
          markLoggedIn();
          loginWindow.close();
          if (loginPollRef.current) clearInterval(loginPollRef.current);
          loginPollRef.current = null;
        }
      } catch (_e) {
        // Cross-origin; keep polling
      }
    }, 800);
  };

  const openShopifyLogoutWindow = () => {
    const width = 480;
    const height = 560;
    const left = Math.max(0, Math.floor(window.screenX + (window.outerWidth - width) / 2));
    const top = Math.max(0, Math.floor(window.screenY + (window.outerHeight - height) / 2));
    logoutWindowRef.current = window.open(
      logoutHref,
      "shopify-logout",
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`
    );

    if (logoutPollRef.current) clearInterval(logoutPollRef.current);
    logoutPollRef.current = setInterval(() => {
      const logoutWindow = logoutWindowRef.current;
      if (!logoutWindow || logoutWindow.closed) {
        if (logoutPollRef.current) clearInterval(logoutPollRef.current);
        logoutPollRef.current = null;
        markLoggedOut();
        return;
      }
      try {
        const href = logoutWindow.location.href;
        // If redirected back to login or home, consider logout done
        if (!href || /\/account\/login(\/?|\?|#)/.test(href) || /\/$/.test(href)) {
          logoutWindow.close();
          if (logoutPollRef.current) clearInterval(logoutPollRef.current);
          logoutPollRef.current = null;
          markLoggedOut();
        }
      } catch (_e) {
        // Cross-origin; keep polling
      }
    }, 800);
  };

  const handleLoginClick = (e?: MouseEvent) => {
    if (e) e.preventDefault();
    openShopifyLoginWindow();
  };

  const handleLogoutClick = (e?: MouseEvent) => {
    if (e) e.preventDefault();
    openShopifyLogoutWindow();
  };

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
      <nav className="nav-container">
        <div className="logo">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/logo_symbol.png" alt="Bio-Aryavedic Symbol" width={48} height={48} className="h-12 w-auto" />
            <Image src="/assets/logo_text.png" alt="Bio-Aryavedic" width={220} height={40} className="h-10 w-auto" />
          </Link>
        </div>

        {/* Mobile header controls */}
        <div className="mobile-header-controls md:hidden flex items-center gap-3">
          <button
            onClick={handleCartClick}
            onMouseEnter={handleCartMouseEnter}
            onMouseLeave={handleCartMouseLeave}
            className="icon-link relative"
            title="Shopping Cart"
            aria-label="Cart"
          >
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">{cartCount}</span>
          </button>
          
          <div className={`burger-menu${menuOpen ? " active" : ""}`} id="burger-menu" onClick={() => setMenuOpen((v) => !v)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
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
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">Privacy</a>
            <ul className="dropdown-menu">
              <li><Link href="/privacy">Terms & Conditions</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
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
              <span id="shopify-cart-count" className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">{cartCount}</span>
            </button>
          </li>
        </ul>
      </nav>

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
                      <Image src={img} alt={title} width={40} height={40} className="rounded object-cover w-10 h-10" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">{title}</div>
                        <div className="text-[11px] text-gray-600">{unitPrice && `${currency} ${unitPrice}`}</div>
                        <div className="mt-1 flex items-center gap-2">
                          <button className="px-2 py-0.5 text-xs border rounded" onClick={() => updateQuantity(line.id, Math.max(1, line.quantity - 1))}>-</button>
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
                          <button className="px-2 py-0.5 text-xs border rounded" onClick={() => updateQuantity(line.id, line.quantity + 1)}>+</button>
                          <button className="ml-2 text-[11px] text-red-600 hover:underline" onClick={() => removeLine(line.id)}>Remove</button>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900 whitespace-nowrap">{currency} {lineSubtotal}</div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="p-3 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">{subtotal ? `${subtotal.currencyCode} ${subtotal.amount}` : "—"}</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <button
                className="text-xs text-gray-600 hover:text-gray-800 hover:underline"
                onClick={async (e) => { e.preventDefault(); await clear(); }}
              >
                Clear Cart
              </button>
              <button
                className="ml-auto bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg"
                onClick={(e) => { e.preventDefault(); goToCheckout(); }}
              >
                Checkout
              </button>
            </div>
            <div className="mt-1 text-[10px] text-gray-500">Taxes and shipping calculated at checkout.</div>
          </div>
        </div>
      )}

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