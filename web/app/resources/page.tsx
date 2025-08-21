"use client";

import Contact from "@/components/Contact";
import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  type: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readingTime: number;
  image: string;
  featured?: boolean;
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFilter, setCurrentFilter] = useState("all");
  const [currentSort, setCurrentSort] = useState("date-desc");

  // Sample articles data
  const articles: Article[] = [
    {
      id: 1,
      title: "Revolutionary Bio-Hybrid Technology in Textile Manufacturing",
      excerpt: "Discover how our innovative bio-hybrid approach is transforming the textile industry with 100% natural and safe formulations.",
      type: "blog",
      category: "Innovation",
      tags: ["innovation", "technology", "sustainability"],
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readingTime: 8,
      image: "/assets/images/innovation.webp",
      featured: true
    },
    {
      id: 2,
      title: "Carbon Sequestration: Our 1 Million Tonnes Journey",
      excerpt: "How regenerative agriculture practices are helping us achieve unprecedented carbon sequestration targets.",
      type: "research",
      category: "Environment",
      tags: ["environment", "agriculture", "sustainability"],
      author: "Prof. Michael Chen",
      date: "2024-01-10",
      readingTime: 12,
      image: "/assets/images/feature-image.webp"
    },
    {
      id: 3,
      title: "Empowering 15,000 Farmers: A Social Impact Story",
      excerpt: "The transformative journey of farmer empowerment through sustainable agricultural practices and fair partnerships.",
      type: "case-study",
      category: "Community",
      tags: ["community", "agriculture", "sustainability"],
      author: "Maria Rodriguez",
      date: "2024-01-05",
      readingTime: 10,
      image: "/assets/images/old_woman.webp"
    },
    {
      id: 4,
      title: "Industry News: Sustainable Textiles Market Growth",
      excerpt: "Latest market trends show exponential growth in demand for sustainable textile solutions worldwide.",
      type: "news",
      category: "Industry",
      tags: ["industry", "sustainability", "research"],
      author: "Business Team",
      date: "2024-01-03",
      readingTime: 5,
      image: "/assets/images/b2b_industry.webp"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = currentFilter === "all" || article.type === currentFilter;
    return matchesSearch && matchesFilter;
  });

  const featuredArticle = articles.find(article => article.featured);

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              Resources<span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent"> & Insights</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Stay updated with the latest in sustainable textiles, regenerative agriculture, and environmental innovation
            </p>
            
            {/* Search Box */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search articles, news, and insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-12 py-4 rounded-full border-2 border-white/30 bg-white/90 backdrop-blur-sm focus:outline-none focus:border-white focus:bg-white transition-all"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {["all", "blog", "news", "research", "case-study"].map((filter) => (
              <button
                key={filter}
                onClick={() => setCurrentFilter(filter)}
                className={`px-6 py-2 rounded-full border transition-all ${
                  currentFilter === filter
                    ? "bg-green-500 text-white border-green-500"
                    : "border-gray-300 text-gray-700 hover:border-green-500"
                }`}
              >
                {filter === "all" ? "All Resources" : 
                 filter === "case-study" ? "Case Studies" : 
                 filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      {featuredArticle && (
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-display">
                Featured <span className="text-green-600">Article</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don&apos;t miss our latest insights and groundbreaking research
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-200">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto bg-gray-200">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredArticle.type.charAt(0).toUpperCase() + featuredArticle.type.slice(1)}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredArticle.readingTime} min read
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredArticle.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <FaUser className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{featuredArticle.author}</p>
                        <p className="text-gray-500 text-sm">{new Date(featuredArticle.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 font-display">
              Latest <span className="text-green-600">Resources</span>
            </h2>
            
            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <label className="text-gray-600 font-medium">Sort by:</label>
              <select
                value={currentSort}
                onChange={(e) => setCurrentSort(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              >
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="title-asc">Title A-Z</option>
                <option value="title-desc">Title Z-A</option>
                <option value="reading-time-asc">Quick Reads First</option>
                <option value="reading-time-desc">Long Reads First</option>
              </select>
            </div>
          </div>
          
          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gray-200">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.category === "Innovation" ? "bg-purple-100 text-purple-800" :
                      article.category === "Environment" ? "bg-green-100 text-green-800" :
                      article.category === "Community" ? "bg-orange-100 text-orange-800" :
                      "bg-blue-100 text-blue-800"
                    }`}>
                      {article.category}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      {article.readingTime} min read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <FaUser className="text-white text-xs" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{article.author}</p>
                        <p className="text-xs text-gray-500">{new Date(article.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <button className="text-green-600 hover:text-green-700 font-semibold text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <FaSearch className="text-6xl text-gray-300 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-600 mb-4">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-display">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest insights on sustainable textiles and regenerative agriculture delivered to your inbox
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
} 