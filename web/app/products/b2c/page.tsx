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
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="animate-pulse">
            <div className="h-64 sm:h-96 bg-gray-200 rounded-xl sm:rounded-2xl mb-6 sm:mb-8"></div>
            <div className="h-6 sm:h-8 bg-gray-200 rounded w-3/4 mb-3 sm:mb-4"></div>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            B2C <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mt-4 sm:mt-6 px-2">
            Premium fabric care solutions for modern households. Experience the perfect blend of convenience and quality.
          </p>
        </div>
      </section>

      {/* Hero Product Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Image Gallery */}
            <div className="lg:sticky lg:top-24">
              {/* Main Image */}
              <div className="relative mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-xl sm:shadow-2xl aspect-square">
                <img
                  src={allImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 sm:p-8"
                />
                {product.discount && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                    {product.discount}% OFF
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative rounded-lg sm:rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                        selectedImage === index
                          ? "border-green-600 ring-2 ring-green-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-contain p-1 sm:p-2 bg-white"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-4 sm:space-y-6">
              {/* SKU Badge */}
              <div className="inline-block bg-green-100 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                SKU: {product.sku}
              </div>

              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-display leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } w-4 h-4 sm:w-5 sm:h-5`}
                    />
                  ))}
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-semibold">{product.rating}</span>
                <span className="text-xs sm:text-sm text-gray-500">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 py-3 sm:py-4">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl sm:text-2xl text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </div>

              {/* Product Details */}
              <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-600 font-medium">Volume:</span>
                  <span className="text-sm sm:text-base text-gray-900 font-semibold">{product.volume}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-600 font-medium">Application:</span>
                  <span className="text-sm sm:text-base text-gray-900 font-semibold text-right sm:text-left">{product.application}</span>
                </div>
              </div>

              {/* Description */}
              <div className="prose max-w-none">
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="flex-1">
                  <BuyNowButton sku={product.sku} />
                </div>
                <div className="flex-1">
                  <AddToCartButton sku={product.sku} />
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                  <FaShieldAlt className="text-blue-500 flex-shrink-0" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                  <FaAward className="text-yellow-500 flex-shrink-0" />
                  <span>Quality Assured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-10 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center font-display">
            Why Choose <span className="text-green-600">BN161</span>?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <FaLeaf className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Eco-Friendly</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Transform your ironing experience with our eco-friendly instant fabric stiffener spray that&apos;s safe for your family and the environment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <FaClock className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Time-Saving</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Perfect for busy mornings! Get crisp, professional-looking outfits in seconds during your morning rush before school or work.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <FaShieldAlt className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">3-in-1 Antimicrobial</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Multi-functional spray that stiffens, protects, and provides antimicrobial benefits for comprehensive fabric care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-10 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center font-display">
              Key <span className="text-green-600">Benefits</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Instant Results
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Works instantly to give your clothes a crisp, professional finish without the need for lengthy ironing sessions.
                </p>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Perfect for Busy Mornings
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Ideal time-saving solution during morning rush, helping you look polished and professional in minutes.
                </p>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Safe & Gentle
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Eco-friendly formulation that&apos;s gentle on all fabric types while providing superior stiffening and protection.
                </p>
              </div>
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md">
                <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Antimicrobial Protection
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
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
