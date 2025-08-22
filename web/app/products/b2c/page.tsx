"use client";

import Contact from "@/components/Contact";
import ProductCard from "@/components/ProductCard";
import { 
  FaHome, 
  FaClock, 
  FaShieldAlt, 
  FaHeart,
  FaLeaf,
  FaStar,
  FaDollarSign,
  FaTruck
} from "react-icons/fa";
import { getProductsByCategory } from "@/data/products";

export default function B2CPage() {
  const b2cProducts = getProductsByCategory("B2C");

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            B2C <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Premium fabric care solutions for modern households. Experience the perfect blend of convenience and quality.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              Home Fabric Care <span className="text-green-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your fabric care routine with our eco-friendly, time-saving solutions designed for busy lifestyles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {b2cProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                rating={product.rating}
                reviewCount={product.reviewCount}
                sku={product.sku}
                volume={product.volume}
                application={product.application}
                image={product.image}
                category={product.category}
                categoryColor={product.categoryColor}
                detailsLink={product.detailsLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              Perfect for <span className="text-green-600">Modern Homes</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHome className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Household Use</h3>
              <p className="text-gray-600">Perfect for everyday fabric care needs in modern households and apartments.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Time-Saving</h3>
              <p className="text-gray-600">Quick application and fast-acting formulas for busy morning routines.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Safe & Gentle</h3>
              <p className="text-gray-600">Family-safe formulations that are gentle on fabrics and skin.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fabric Care</h3>
              <p className="text-gray-600">Extends fabric life while maintaining softness and color vibrancy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              B2C <span className="text-green-600">Benefits</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaLeaf className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Eco-Friendly</h3>
                    <p className="text-gray-600">Biodegradable formulations that are safe for your family and the environment.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaStar className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
                    <p className="text-gray-600">Professional-grade results in convenient home-use packaging.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaDollarSign className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Value for Money</h3>
                    <p className="text-gray-600">Concentrated formulas provide excellent value with long-lasting results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaTruck className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">Quick doorstep delivery across India with secure packaging.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-600 mb-2">&ldquo;Amazing product! My clothes feel so much better and the spray works instantly.&rdquo;</p>
                  <p className="text-sm text-gray-500">- Priya S., Mumbai</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-600 mb-2">&ldquo;Perfect for busy mornings. No more wrinkled shirts for office!&rdquo;</p>
                  <p className="text-sm text-gray-500">- Rajesh K., Bangalore</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-gray-600 mb-2">&ldquo;Eco-friendly and effective. Highly recommend for all families.&rdquo;</p>
                  <p className="text-sm text-gray-500">- Meera R., Delhi</p>
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