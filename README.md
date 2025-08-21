# Bio-Aryavedic Website — React Migration Plan and Technical Guide

This document inventories the current static site, explains the Shopify integration, and provides a practical, step-by-step plan to migrate the project to React. It is designed so a new engineer can understand the existing system and execute the migration with minimal back-and-forth.

---

## 1) Current Project Overview

- **Project type**: Static website (multi-page) for a D2C product
- **Entry pages**:
  - `index.html` (homepage; contains Shopify Storefront API integration)
  - `about.html`
  - `mission.html`
  - `impact.html`
  - `resources.html`
  - `product_b2c.html`
  - `product_b2b.html`
- **Shared fragments**: HTML components loaded via fetch from `components/`
  - `components/header.html`
  - `components/footer.html`
  - `components/contact.html`
- **Assets**: `assets/` (images, logos). Examples referenced in header: `assets/logo_symbol.png`, `assets/logo_text.png`
- **Other artifacts**: `Bioaryavedic-Shopify Setup.pdf` (Shopify notes), `CONTENT_MANAGEMENT_GUIDE.md`

### 1.1 Front-end libraries in use
- **Tailwind CSS** via CDN on every page
- **AOS** (Animate On Scroll) for animations via CDN
- **Swiper** for carousels via CDN
- **Font Awesome** for icons via CDN
- **Google Fonts** (Inter, Playfair Display)

The site also includes custom inline CSS for effects and the header’s own CSS in `components/header.html`.

### 1.2 Page structure and shared components
- Pages dynamically load `components/header.html` and `components/footer.html` using `fetch` on DOMContentLoaded (e.g., in `index.html`).
- Header includes navigation, mobile burger menu, and product dropdown, with Tailwind-based styles and some custom CSS.
- Footer includes multi-column navigation and social links with Tailwind classes and Font Awesome icons.

### 1.3 Shopify integration (current state)
- Implemented directly in `index.html` with the Shopify Storefront API (GraphQL) using `fetch`.
- The code defines a configuration object with:
  - `domain` (Shopify store domain)
  - `storefrontAccessToken`
  - `apiVersion` (e.g., `2025-07`)
  - `collectionHandle` (e.g., `website`)
- Provides utilities to:
  - Make GraphQL requests
  - Find variant by SKU (using a Storefront API search)
  - Create a cart
  - Add lines to cart
  - Update cart badge and toggle a floating cart button
  - Attach handlers for `.shopify-add-to-cart` and `.shopify-buy-now` buttons
- There is a floating cart toggle button (`#shopify-cart-toggle`) and a visible cart count badge (`#shopify-cart-count`).

> Important: The Storefront Access Token is currently embedded client-side for the static site. In React, we should move the token to environment variables and avoid committing secrets to version control.

---

## 2) Migration Goals and Constraints

- **Goal**: Replace static multi-page HTML with a modern React application while preserving UX, SEO, performance, and Shopify functionality.
- **Constraints**:
  - Marketing/SEO friendly. SSR or SSG is preferred for top pages.
  - Shopify must remain the source of truth for products/checkout.
  - Keep Tailwind styling and visual identity.
  - Keep or improve performance (Core Web Vitals) and accessibility.

---

## 3) Recommended Approaches

You can choose either of the following paths, both documented below:

**Next.js (recommended)** — SSR/SSG out-of-the-box, best for SEO and content-heavy pages; seamless Vercel deployment.

> If you are on the fence, pick Next.js unless you explicitly do not want SSR/SSG.

---

## 4) Route Mapping

Map current pages to React routes:
- `index.html` → `/`
- `about.html` → `/about`
- `mission.html` → `/mission`
- `impact.html` → `/impact`
- `resources.html` → `/resources`
- `product_b2c.html` → `/products/b2c`
- `product_b2b.html` → `/products/b2b`

Shared components become React components:
- `components/header.html` → `components/Header.tsx`
- `components/footer.html` → `components/Footer.tsx`
- `components/contact.html` → `components/Contact.tsx` (and/or a section component)

---

## 5) Target React Project Structure

For Next.js (App Router):
```
app/
  layout.tsx
  globals.css
  page.tsx                   # /
  about/page.tsx             # /about
  mission/page.tsx           # /mission
  impact/page.tsx            # /impact
  resources/page.tsx         # /resources
  products/
    b2c/page.tsx             # /products/b2c
    b2b/page.tsx             # /products/b2b
components/
  Header.tsx
  Footer.tsx
  Contact.tsx
  Hero.tsx
  FeatureCard.tsx
  Carousel.tsx
lib/
  shopify/
    client.ts                # GraphQL client
    queries.ts               # GQL strings
    cart.ts                  # cart helpers
hooks/
  useShopifyCart.ts
public/
  assets/                    # migrate from current assets/
  favicon.ico
```

---

## 6) Environment and Configuration

Define the following env vars (do not commit real values):

- For Next.js: `.env.local`
```
NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=***
NEXT_PUBLIC_SHOPIFY_API_VERSION=2025-07
NEXT_PUBLIC_SHOPIFY_COLLECTION_HANDLE=website
```

> These mirror the values currently hardcoded in `index.html`. Move them out of the code and into environment variables.

---

## 7) Shopify Storefront API in React

Create a minimal GraphQL client (`lib/shopify/client.ts`):

```ts
export async function shopifyRequest<T>(query: string, variables: Record<string, any> = {}): Promise<T> {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
  const apiVersion = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION;

  const res = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token as string,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 }, // Next.js: cache politely where suitable
  });

  if (!res.ok) throw new Error(`Shopify HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data as T;
}
```

Typical queries (`lib/shopify/queries.ts`):

```ts
export const FIND_VARIANT_BY_SKU = `
  query FindVariantBySku($query: String!) {
    productVariants(first: 1, query: $query) {
      edges { node { id sku title product { handle title } } }
    }
  }
`;

export const CREATE_CART = `
  mutation CreateCart {
    cartCreate(input: {}) { cart { id checkoutUrl totalQuantity } userErrors { field message } }
  }
`;

export const ADD_LINES = `
  mutation AddLines($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { id totalQuantity checkoutUrl }
      userErrors { field message }
    }
  }
`;
```

Cart helper (`lib/shopify/cart.ts`):

```ts
import { shopifyRequest } from './client';
import { FIND_VARIANT_BY_SKU, CREATE_CART, ADD_LINES } from './queries';

export async function findVariantBySku(sku: string): Promise<string> {
  const data = await shopifyRequest<{ productVariants: { edges: { node: { id: string } }[] } }>(
    FIND_VARIANT_BY_SKU,
    { query: `sku:${JSON.stringify(sku)}` }
  );
  const id = data.productVariants?.edges?.[0]?.node?.id;
  if (!id) throw new Error('Variant not found for SKU');
  return id;
}

export async function createCart(): Promise<{ id: string; checkoutUrl: string; totalQuantity: number }>{
  const data = await shopifyRequest<{ cartCreate: { cart: { id: string; checkoutUrl: string; totalQuantity: number } } }>(CREATE_CART);
  return data.cartCreate.cart;
}

export async function addToCart(cartId: string, merchandiseId: string, quantity = 1) {
  return shopifyRequest(ADD_LINES, { cartId, lines: [{ merchandiseId, quantity }] });
}
```

State hook for cart (`hooks/useShopifyCart.ts`):

```ts
import { useCallback, useEffect, useState } from 'react';
import { addToCart, createCart, findVariantBySku } from '../lib/shopify/cart';

export function useShopifyCart() {
  const [cartId, setCartId] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const existing = localStorage.getItem('shopify_cart_id');
    if (existing) setCartId(existing);
  }, []);

  const ensureCart = useCallback(async () => {
    if (cartId) return cartId;
    const cart = await createCart();
    localStorage.setItem('shopify_cart_id', cart.id);
    setCartId(cart.id);
    setCartCount(cart.totalQuantity ?? 0);
    return cart.id;
  }, [cartId]);

  const addSku = useCallback(async (sku: string, quantity = 1) => {
    const id = await ensureCart();
    const variantId = await findVariantBySku(sku);
    const result = await addToCart(id, variantId, quantity);
    const total = result?.cartLinesAdd?.cart?.totalQuantity;
    if (typeof total === 'number') setCartCount(total);
  }, [ensureCart]);

  return { cartId, cartCount, addSku };
}
```

> Wire this hook to your header/cart badge and to buttons that previously used `.shopify-add-to-cart` and `.shopify-buy-now`.

---

## 8) Tailwind, AOS, Swiper, Icons in React

- **Tailwind**: install via PostCSS instead of CDN.
  1) `npm i -D tailwindcss postcss autoprefixer`
  2) `npx tailwindcss init -p`
  3) Configure `content` to include `app/**/*.{ts,tsx}` or `src/**/*.{ts,tsx}`.
  4) Import `globals.css` with Tailwind base/components/utilities.
- **AOS**: `npm i aos` and initialize in a root layout or page `useEffect` (`AOS.init({ once: true })`).
- **Swiper**: `npm i swiper` and use React components `import { Swiper, SwiperSlide } from 'swiper/react'` with `import 'swiper/css'`.
- **Icons**: Prefer `react-icons` or keep Font Awesome CDN for parity. If SSR is used, prefer package-based icons for stability.

---

## 9) Componentization Plan

Break `index.html` into reusable React components:
- `Header` — implements the same navigation, burger menu interactions, dropdown.
- `Hero` — video background/overlay and primary call-to-action.
- `Carousel` — Swiper-based sections.
- `FeatureCard`, `StatCounter`, `CTASection`, `Footer` — map 1:1 from existing sections.
- Replace `document.querySelector`-based event wiring with React handlers and state.

Preserve data-aos attributes and Tailwind classes. Where inline `<style>` rules exist, either:
- Move them into Tailwind utilities if feasible, or
- Co-locate as component-scoped CSS modules or inline styles.

---

## 10) SEO, Analytics, and Accessibility

- **SEO**: Add `<Head>` metadata per page (Next.js).
- **Routing/redirects**: Configure 301 redirects from old paths to new routes:
  - `/about.html` → `/about`, etc. For Vercel/Netlify, add redirect rules.
- **Sitemap & robots**: Auto-generate sitemap for SSR/SSG.
- **Analytics**: Re-integrate any analytics snippets (not found in the current scan, add as needed).
- **Accessibility**: Verify color contrast and interactive focus states; ensure SVGs have titles/labels.

---

## 11) Testing and Quality

- **Unit/UI**: `@testing-library/react` or `jest` (Next.js defaults also fine).
- **E2E**: `playwright` for key flows (home render, nav, add to cart by SKU, checkout).
- **Performance**: Run Lighthouse on main pages.

---

## 12) CI/CD and Deployment

- **Next.js**: Deploy on Vercel; connect env vars; enable ISR for pages as needed.

---


## 14) Known Gaps to Verify During Migration

- Ensure all instances of Shopify actions exist only on pages that need them; centralize the hook so the cart badge is consistent.
- Review `CONTENT_MANAGEMENT_GUIDE.md` for any content/data references you want to convert into JSON/MDX.
- Inventory `assets/` and migrate to `public/assets/` 1:1.
- If additional scripts exist under `js/` or data under `data/`, re-implement their behavior in React.

---

## 15) Local Development Recipes

- Next.js:
  - `npm i`
  - `npm run dev`
  - Add `.env.local` with Shopify vars

---

## 16) Appendix — Mapping old UI events to React

- `.shopify-add-to-cart[data-sku][data-qty]` → `<button onClick={() => addSku(sku, qty)}>`
- Floating cart toggle (`#shopify-cart-toggle`) → Cart badge in `Header`, open Drawer via component state
- DOMContentLoaded init → React `useEffect` in `layout.tsx` or root component

If you need to replicate the exact Shopify GraphQL used today, review `index.html` around the Shopify config block and translate 1:1 to the helpers above, moving secrets to env.

---

## 17) Contact and Ownership

- Code owners: Engineering team maintaining this repo.
- Shopify setup notes: See `Bioaryavedic-Shopify Setup.pdf` in repo root.

This document should be sufficient to plan and execute the React migration with Next.js, aligning with the current site’s architecture and Shopify integration. Good luck! 