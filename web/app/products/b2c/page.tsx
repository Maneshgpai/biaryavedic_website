"use client";

import { useState, useEffect } from "react";
import { FaStar, FaCheckCircle, FaLeaf, FaClock, FaShieldAlt, FaAward } from "react-icons/fa";
import { STATIC_PRODUCTS } from "@/data/products";
import type { Product } from "@/data/products";
import Contact from "@/components/Contact";
import AddToCartButton from "@/components/AddToCartButton";
import BuyNowButton from "@/components/BuyNowButton";

export default function B2CPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get BN161 product
    const bn161 = STATIC_PRODUCTS.find(p => p.id === "bn161");
    if (bn161) {
      setProduct(bn161);
      setSelectedImage(0);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-200 rounded-2xl mb-8"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The requested product could not be found.</p>
        </div>
      </main>
    );
  }

  // Use images array if available, otherwise fallback to main image
  const allImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">
            B2C <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mt-6">
            Premium fabric care solutions for modern households. Experience the perfect blend of convenience and quality.
          </p>
        </div>
      </section>

      {/* Hero Product Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image Gallery */}
            <div className="sticky top-24">
              {/* Main Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden bg-white shadow-2xl aspect-square">
                <img
                  src={allImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {product.discount}% OFF
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-5 gap-3">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                        selectedImage === index
                          ? "border-green-600 ring-2 ring-green-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-contain p-2 bg-white"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* SKU Badge */}
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                SKU: {product.sku}
              </div>

              {/* Product Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-display leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      size={20}
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">{product.rating}</span>
                <span className="text-gray-500">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 py-4">
                <span className="text-4xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>

              {/* Product Details */}
              <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Volume:</span>
                  <span className="text-gray-900 font-semibold">{product.volume}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Application:</span>
                  <span className="text-gray-900 font-semibold">{product.application}</span>
                </div>
              </div>

              {/* Description */}
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex-1">
                  <BuyNowButton sku={product.sku} />
                </div>
                <div className="flex-1">
                  <AddToCartButton sku={product.sku} />
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaShieldAlt className="text-blue-500" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaAward className="text-yellow-500" />
                  <span>Quality Assured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center font-display">
            Why Choose <span className="text-green-600">BN161</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly</h3>
              <p className="text-gray-700 leading-relaxed">
                Transform your ironing experience with our eco-friendly instant fabric stiffener spray that&apos;s safe for your family and the environment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Time-Saving</h3>
              <p className="text-gray-700 leading-relaxed">
                Perfect for busy mornings! Get crisp, professional-looking outfits in seconds during your morning rush before school or work.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3-in-1 Antimicrobial</h3>
              <p className="text-gray-700 leading-relaxed">
                Multi-functional spray that stiffens, protects, and provides antimicrobial benefits for comprehensive fabric care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center font-display">
              Key <span className="text-green-600">Benefits</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Instant Results
                </h3>
                <p className="text-gray-600">
                  Works instantly to give your clothes a crisp, professional finish without the need for lengthy ironing sessions.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Perfect for Busy Mornings
                </h3>
                <p className="text-gray-600">
                  Ideal time-saving solution during morning rush, helping you look polished and professional in minutes.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Safe & Gentle
                </h3>
                <p className="text-gray-600">
                  Eco-friendly formulation that&apos;s gentle on all fabric types while providing superior stiffening and protection.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Antimicrobial Protection
                </h3>
                <p className="text-gray-600">
                  3-in-1 formula provides antimicrobial benefits along with fabric stiffening and protection for comprehensive care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
