export async function shopifyRequest<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN as string;
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN as string;
  const apiVersion = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION as string;

  const res = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error(`Shopify HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data as T;
} 