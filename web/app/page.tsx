"use client";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { 
  FaCheck, 
  FaArrowRight, 
  FaLeaf, 
  FaFlask, 
  FaAward, 
  FaRecycle,
  FaWater,
  FaIndustry
} from "react-icons/fa";
import { STATIC_PRODUCTS } from "@/data/products";

export default function Home() {
  const products = STATIC_PRODUCTS;

  return (
    <main>
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
                Revolutionizing
                <span className="text-green-600"> Fabric Care</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bio-Aryavedic combines ancient wisdom with modern technology to create sustainable fabric care solutions. Our innovative approach serves both individual consumers and enterprise clients with eco-friendly, effective products.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700">100% Natural & Biodegradable</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700">Advanced Nanotechnology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700">B2B & B2C Solutions</span>
                </div>
              </div>
              <Link
                href="/mission"
                className="btn-primary bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold mt-8 inline-flex items-center hover:shadow-lg transition-all"
              >
                Learn More
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1000" className="relative">
              <div className="relative z-10">
                <Image
                  src="/assets/images/old_woman.webp"
                  alt="Sustainable fabric care"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-50 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-bounce" style={{animationDelay: '-3s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              Our <span className="text-green-600">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive fabric care solutions designed for every need, from household applications to industrial-scale operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
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
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              Why Choose <span className="text-green-600">Bio-Aryavedic</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of traditional wisdom and cutting-edge technology for superior fabric care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaLeaf className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">100% Natural</h3>
              <p className="text-gray-600">Made from natural ingredients that are safe for you and the environment.</p>
            </div>
            
            <div className="text-center group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaFlask className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">Cutting-edge nanotechnology for superior cleaning and protection.</p>
            </div>
            
            <div className="text-center group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaAward className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assured</h3>
              <p className="text-gray-600">Rigorous testing ensures consistent quality and performance.</p>
            </div>
            
            <div className="text-center group" data-aos="fade-up" data-aos-delay="400">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaRecycle className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainable</h3>
              <p className="text-gray-600">Eco-friendly formulations that protect our planet for future generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
                Innovation in <span className="text-blue-600">Every Drop</span>
            </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our research-driven approach combines traditional Ayurvedic principles with modern nanotechnology to create fabric care solutions that are both effective and environmentally responsible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWater className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Nano-Enhanced Formula</h3>
                    <p className="text-gray-600">Microscopic particles penetrate fabric fibers for deeper cleaning and longer-lasting protection.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaLeaf className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Ayurvedic Wisdom</h3>
                    <p className="text-gray-600">Time-tested natural ingredients provide gentle yet effective fabric care without harsh chemicals.</p>
                  </div>
          </div>
          
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaIndustry className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Scalable Solutions</h3>
                    <p className="text-gray-600">From household use to industrial applications, our products adapt to any scale of operation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1000" className="relative">
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Research & Development</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Natural Ingredients</span>
                    <span className="text-green-600 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Biodegradability</span>
                    <span className="text-blue-600 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Effectiveness</span>
                    <span className="text-purple-600 font-bold">99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '99%'}}></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
