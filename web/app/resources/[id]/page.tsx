import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  loadArticleById,
  loadRelatedArticles,
  loadPrevNext,
  normalizeImageSrc,
} from "@/lib/resources";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const articleId = Number(id);
  const article = await loadArticleById(articleId);
  if (!article) return {};
  return {
    title: article.seo?.metaTitle ?? article.title,
    description: article.seo?.metaDescription ?? article.excerpt,
    keywords: article.seo?.keywords,
    openGraph: {
      title: article.seo?.metaTitle ?? article.title,
      description: article.seo?.metaDescription ?? article.excerpt,
      images: [normalizeImageSrc(article.image)],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const numericId = Number(id);
  if (Number.isNaN(numericId)) return notFound();

  const article = await loadArticleById(numericId);
  if (!article) return notFound();

  const [related, { prev, next }] = await Promise.all([
    loadRelatedArticles(article, 6),
    loadPrevNext(numericId),
  ]);

  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-6 pt-10 pb-4">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2">
              <Link href="/resources" className="text-white-700 hover:underline text-sm">Resources</Link>
              <span className="text-white-400">/</span>
              <span className="text-white-600 text-sm">{article.category}</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white-900 mb-4 font-display">{article.title}</h1>
            <div className="flex items-center gap-3 text-white-600 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                {article.author.split(" ").map((s) => s[0]).join("")}
              </div>
              <div>
                <div className="font-semibold">{article.author}</div>
                <div className="text-sm text-white-500">
                  {new Date(article.date).toLocaleDateString()} · {article.readingTime} min read
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-72 lg:h-[28rem] relative bg-gray-100">
          <Image
            src={normalizeImageSrc(article.image)}
            alt={article.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-10 grid lg:grid-cols-12 gap-12">
          <article className="prose max-w-none text-gray-800 leading-7 lg:col-span-8">
            <div className="mb-6 flex flex-wrap gap-2">
              {article.tags.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">#{t}</span>
              ))}
            </div>
            <div className="whitespace-pre-line">{article.content}</div>

            <div className="border-t mt-10 pt-6 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Published</div>
                <div className="text-gray-700">{new Date(article.date).toLocaleDateString()}</div>
              </div>
              <div className="flex gap-3">
                {prev && (
                  <Link href={`/resources/${prev.id}`} className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-50">← Prev</Link>
                )}
                {next && (
                  <Link href={`/resources/${next.id}`} className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-50">Next →</Link>
                )}
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">More like this</h3>
            <div className="space-y-4">
              {related.map((r) => (
                <Link key={r.id} href={`/resources/${r.id}`} className="flex gap-4 group">
                  <div className="w-24 h-24 relative flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                    <Image src={normalizeImageSrc(r.image)} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <div className="text-xs text-green-700 font-medium mb-1">{r.category}</div>
                    <div className="font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:underline">{r.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{r.readingTime} min read</div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Related grid at bottom for mobile users */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended for you</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.id} href={`/resources/${r.id}`} className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
                <div className="h-36 relative bg-gray-100">
                  <Image src={normalizeImageSrc(r.image)} alt={r.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-xs text-green-700 font-medium mb-1">{r.category}</div>
                  <div className="font-semibold text-gray-900 line-clamp-2 mb-1">{r.title}</div>
                  <div className="text-xs text-gray-500">{r.readingTime} min read</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 