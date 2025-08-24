import fs from "fs/promises";
import path from "path";

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  type: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readingTime: number;
  image: string;
  featured?: boolean;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

function getResourcesJsonPath(): string {
  // Read from Next.js public directory
  return path.join(process.cwd(), "public", "data", "resources-data.json");
}

export async function loadAllArticles(): Promise<Article[]> {
  try {
    const filePath = getResourcesJsonPath();
    const file = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(file) as Article[];
    return data;
  } catch (error) {
    return [];
  }
}

export async function loadArticleById(id: number): Promise<Article | null> {
  const all = await loadAllArticles();
  return all.find((a) => a.id === id) ?? null;
}

export async function loadRelatedArticles(base: Article, limit = 6): Promise<Article[]> {
  const all = await loadAllArticles();
  const baseTags = new Set(base.tags.map((t) => t.toLowerCase()));

  const scored = all
    .filter((a) => a.id !== base.id)
    .map((a) => {
      const tagOverlap = a.tags.reduce((acc, t) => acc + (baseTags.has(t.toLowerCase()) ? 1 : 0), 0);
      const sameCategory = a.category === base.category ? 1 : 0;
      const score = tagOverlap * 2 + sameCategory;
      return { a, score };
    })
    .sort((x, y) => y.score - x.score || new Date(y.a.date).getTime() - new Date(x.a.date).getTime())
    .slice(0, limit)
    .map((x) => x.a);

  return scored;
}

export async function loadPrevNext(id: number): Promise<{ prev: Article | null; next: Article | null }> {
  const all = await loadAllArticles();
  const sorted = [...all].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const index = sorted.findIndex((a) => a.id === id);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? sorted[index - 1] : null;
  const next = index < sorted.length - 1 ? sorted[index + 1] : null;
  return { prev, next };
}

export function normalizeImageSrc(src: string): string {
  return src.startsWith("/") ? src : `/${src}`;
} 