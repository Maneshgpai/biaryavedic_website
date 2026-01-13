"use client";

import { useState, useEffect } from "react";
import { FaStar, FaCheckCircle, FaLeaf, FaClock, FaShieldAlt, FaAward, FaWind, FaSprayCan, FaHome, FaUsers, FaHotel, FaHeart, FaTimes, FaFlask, FaRecycle, FaQuestionCircle } from "react-icons/fa";
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
            Albedon <span className="bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">Textile Care</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mt-4 sm:mt-6 px-2">
            3 in 1 Eco Friendly Textile Care Spray for Household Use
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
                <span className="text-sm sm:text-base text-gray-700 font-semibold">4.8</span>
                <span className="text-xs sm:text-sm text-gray-500">(87 family reviews)</span>
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
                  Albedon is a plant based, eco friendly textile care spray developed using cassava biopolymer technology. Designed as a smart alternative to chemical starches and fabric finishes, Albedon delivers crisp structure, soft conditioning, and long lasting hygiene in a single, easy spray while being safe for people and the planet.
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

      {/* Why Albedon Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-display">
              Why <span className="text-green-600">Albedon</span>?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Conventional textile care products rely on synthetic chemicals that can damage fabrics, irritate skin, and pollute water and air. Albedon replaces these with a biodegradable, non-toxic formulation that works gently yet effectively on everyday fabrics.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-500">
            <img 
              src="/assets/images/why_albedon.webp" 
              alt="The benefits of Albedon textile care" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3-in-1 Performance Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center font-display">
              3-in-1 <span className="text-green-600">Performance</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fabric Stiffening</h3>
                <p className="text-gray-600 leading-relaxed">
                  Provides a clean, crisp finish that enhances garment shape and appearance. Helps clothes hold form longer and makes ironing faster and easier.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <FaLeaf className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fabric Conditioning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Maintains softness, flexibility, and breathability without making fabrics harsh or brittle. Suitable for regular use without fiber damage.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Antimicrobial Protection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Forms a protective layer on textiles that helps inhibit the growth of odor causing and harmful microorganisms, keeping fabrics fresh and hygienic between washes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Benefit Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl overflow-hidden border-l-4 border-green-600 shadow-xl">
              <div className="grid lg:grid-cols-12 items-stretch">
                {/* Text Content */}
                <div className="lg:col-span-8 p-8 sm:p-12 flex flex-col justify-center">
                  <div className="flex items-start gap-4">
                    <FaWind className="text-green-600 text-3xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Added Environmental Benefit</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Albedon coated fabrics exhibit a photocatalytic effect under visible light, helping to break down surrounding air pollutants and greenhouse gases into harmless substances. This makes Albedon not just a textile care product, but a climate positive everyday solution that supports cleaner indoor air and reduced environmental burden.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image */}
                <div className="lg:col-span-4 relative min-h-[250px] lg:min-h-0">
                  <img 
                    src="/assets/images/Added_Environmental_Benefit.webp" 
                    alt="Environmental benefits of Albedon" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center font-display">
              Perfect For <span className="text-green-600">Every Need</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <UseCaseCard
                icon={<FaUsers className="text-white text-2xl" />}
                title="Everyday Clothing"
                items={["Shirts, trousers, sarees, kurtas", "Everyday wear", "Enhances neatness while keeping fabrics comfortable"]}
                color="bg-blue-600"
              />
              <UseCaseCard
                icon={<FaShieldAlt className="text-white text-2xl" />}
                title="Uniforms"
                items={["School, hospital, security uniforms", "Corporate and industrial uniforms", "Maintains crisp look and improves hygiene"]}
                color="bg-green-600"
              />
              <UseCaseCard
                icon={<FaHome className="text-white text-2xl" />}
                title="Home Textiles"
                items={["Curtains, bedsheets, pillow covers", "Table mats and sofa covers", "Adds structure, freshness, and protection"]}
                color="bg-purple-600"
              />
              <UseCaseCard
                icon={<FaHotel className="text-white text-2xl" />}
                title="Hospitality & Institutions"
                items={["Hotels, hostels, guest houses", "Service apartments", "Maintains clean appearance and fabric hygiene"]}
                color="bg-teal-600"
              />
            </div>
            <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
              <div className="flex items-start gap-4">
                <FaHeart className="text-green-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sensitive & Family Use</h3>
                  <p className="text-gray-600">
                    Safe for all age groups when used as directed. Suitable for garments worn by children and adults, making it perfect for family use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center font-display">
              How to <span className="text-green-600">Use</span>
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Instructions List */}
                <div className="p-8 sm:p-12 order-2 lg:order-1">
                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                      <p className="text-gray-700 text-lg pt-1">Lightly spray Albedon evenly on fabric (slightly damp or dry).</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                      <p className="text-gray-700 text-lg pt-1">Spread gently and iron as usual.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                      <p className="text-gray-700 text-lg pt-1">Enjoy crisp, fresh, and protected textiles.</p>
                    </li>
                  </ol>
                </div>
                {/* Image */}
                <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] order-1 lg:order-2">
                  <img 
                    src="/assets/images/How_to_Use.webp" 
                    alt="How to use Albedon textile care" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Albedon Different Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center font-display">
              What Makes <span className="text-green-600">Albedon</span> Different?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Cassava plant–based biopolymer formulation</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Biodegradable and non-toxic</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Reduces chemical discharge into water</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Improves indoor air quality through photocatalytic action</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 flex items-start gap-4 sm:col-span-2">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Suitable for both household and institutional use</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center font-display">
            Chemical Starch vs <span className="text-green-600">Albedon</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="border border-gray-300 px-4 py-4 text-left font-bold">Feature</th>
                    <th className="border border-gray-300 px-4 py-4 text-center font-bold">Albedon (Cassava Biopolymer)</th>
                    <th className="border border-gray-300 px-4 py-4 text-center font-bold">Conventional Chemical Starch</th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-base">
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-black">Source</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">Plant-based (cassava-derived)</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-500">Synthetic / chemical-based</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-black">Fabric Finish</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">Crisp yet soft and breathable</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">Often stiff, harsh, brittle</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-black">Conditioning</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600"><FaCheckCircle className="text-green-500 mx-auto" /></td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600"><FaTimes className="text-red-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-black">Antimicrobial Protection</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600"><FaCheckCircle className="text-green-500 mx-auto" /></td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600"><FaTimes className="text-red-500 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-black">Photocatalytic Benefit</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600"><FaCheckCircle className="text-green-500 mx-auto" /></td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600"><FaTimes className="text-red-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-black">Skin Safety</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">Non-toxic, gentle for regular use</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">May cause irritation or dryness</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-black">Fabric Life</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">Preserves fiber strength</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">Can weaken fibers over time</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-black">Environmental Impact</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600">Biodegradable, eco-friendly</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600">Contributes to water & chemical pollution</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-black">Suitable for Daily Use</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600"><FaCheckCircle className="text-green-500 mx-auto" /></td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-red-600"><FaTimes className="text-red-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Elevated Textile Care Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#1b5c70] to-[#19495a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-display">Albedon – Elevated Textile Care, Naturally</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Experience textile care redefined through plant-based science and conscious innovation. Albedon is a refined 3-in-1 textile care spray crafted from cassava-derived biopolymer technology, designed for those who value performance, elegance, and responsibility.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              It delivers a perfectly balanced finish structured yet soft while forming an invisible antimicrobial protective coating on fabrics. Beyond appearance, Albedon&apos;s photocatalytic action under visible light helps neutralize surrounding air pollutants, transforming everyday fabric care into a quiet act of environmental stewardship.
            </p>
            <p className="text-xl text-white font-semibold italic">
              Albedon is not just about crisp clothes. It is about responsible luxury, where care for fabrics extends to care for people and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Smart, Safe & Eco-Friendly Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 sm:p-12 border-2 border-green-200">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center font-display">
                Albedon – Smart, Safe & Eco-Friendly Fabric Care
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Albedon is an easy-to-use 3-in-1 textile care spray that replaces chemical starch with a safe, plant-based solution. Made from cassava biopolymer, it stiffens clothes neatly, keeps fabrics soft, and helps protect against germs all in one spray.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike regular starch, Albedon is non-toxic, biodegradable, and safe for regular household use. It also helps reduce air pollutants around treated fabrics when exposed to light, supporting a healthier home environment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 font-semibold">
                Perfect for daily wear, uniforms, and home textiles, Albedon makes ironing faster, clothes fresher, and fabric care more responsible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center font-display">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h2>
            <div className="space-y-6">
              <FAQItem
                question="What fabrics can Albedon be used on?"
                answer="Albedon is suitable for cotton, blended fabrics, uniforms, curtains, bedsheets, and most washable textiles. Always test on a small area for delicate fabrics."
              />
              <FAQItem
                question="Does Albedon make clothes too stiff?"
                answer="No. Albedon provides a balanced crisp finish while keeping fabrics soft and comfortable."
              />
              <FAQItem
                question="Is Albedon safe for daily use?"
                answer="Yes. Albedon is plant-based, non-toxic, and biodegradable, making it suitable for regular use when used as directed."
              />
              <FAQItem
                question="How does the antimicrobial protection work?"
                answer="Albedon forms a protective coating on fabric that helps inhibit the growth of odor-causing and harmful microorganisms."
              />
              <FAQItem
                question="What is the photocatalytic benefit?"
                answer="Under visible light, Albedon-treated fabrics help break down surrounding air pollutants and greenhouse gases into harmless substances, contributing to cleaner indoor air."
              />
              <FAQItem
                question="Can Albedon replace regular starch completely?"
                answer="Yes. Albedon is designed as a complete alternative to chemical starches for both household and institutional use."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Disclaimer Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center font-display">Safety Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 space-y-3">
              <p className="text-gray-700 flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>For external fabric use only</span>
              </p>
              <p className="text-gray-700 flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Avoid direct contact with eyes; rinse with water if contact occurs</span>
              </p>
              <p className="text-gray-700 flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Keep out of reach of children</span>
              </p>
              <p className="text-gray-700 flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Test on a small hidden area before first use on delicate fabrics</span>
              </p>
              <p className="text-gray-700 flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Store in a cool, dry place away from direct sunlight</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification & Testing Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center font-display">Certification & Testing</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Dermal / Skin Safety Tested</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Antimicrobial Efficacy Tested</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
                <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Non-Toxic Formulation Validation</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
                <FaAward className="text-green-500 text-2xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Patent Granted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}

// Helper Component for Use Cases
function UseCaseCard({ icon, title, items, color }: { icon: React.ReactNode, title: string, items: string[], color: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
      <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-start gap-2">
            <span className="text-green-500 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Helper Component for FAQs
function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-900 pr-4">{question}</span>
        <FaQuestionCircle className={`text-green-600 flex-shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
