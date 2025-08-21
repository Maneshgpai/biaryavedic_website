"use client";

import Contact from "@/components/Contact";
import ProductCard from "@/components/ProductCard";
import { 
  FaIndustry, 
  FaHotel, 
  FaHospital, 
  FaTshirt,
  FaChartLine,
  FaLeaf,
  FaCogs,
  FaHandshake
} from "react-icons/fa";

export default function B2BPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            B2B <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Industrial-grade fabric care solutions for textile manufacturers, hotels, hospitals, and commercial laundries.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              Industrial Fabric Care <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for textile manufacturing, commercial laundries, and industrial fabric processing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              id="bn160"
              name="B2B Eco-Friendly Fabric Sizing Agent"
              description="Revolutionizing the fabric sizing process for a green future. Our industrial solution forms a uniform layer of protective coating over warp yarn, minimizes yarn breakage during weaving, and improves yarn strength to resist mechanical stress."
              price={2500}
              originalPrice={3200}
              discount={22}
              rating={4.2}
              reviewCount={18}
              sku="BN160"
              volume="5L"
              application="Industrial Weaving"
              image="/assets/images/product_BN160.webp"
              category="B2B"
              categoryColor="from-white to-blue-600"
              detailsLink="/products/b2b"
            />
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              Industry <span className="text-blue-600">Applications</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaIndustry className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Textile Manufacturing</h3>
              <p className="text-gray-600">Complete solutions for weaving, dyeing, and finishing processes in textile mills.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHotel className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hospitality</h3>
              <p className="text-gray-600">Hotel linens, towels, and uniforms require specialized care for durability and hygiene.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHospital className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Healthcare</h3>
              <p className="text-gray-600">Medical textiles and uniforms with antimicrobial protection and infection control.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTshirt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Commercial Laundry</h3>
              <p className="text-gray-600">Heavy-duty cleaning solutions for large-scale laundry operations and service providers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              B2B <span className="text-blue-600">Advantages</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaChartLine className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Cost Efficiency</h3>
                    <p className="text-gray-600">Reduce operational costs with concentrated formulas and improved process efficiency.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaLeaf className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Environmental Compliance</h3>
                    <p className="text-gray-600">Meet environmental regulations with biodegradable, non-toxic formulations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaCogs className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Process Optimization</h3>
                    <p className="text-gray-600">Improve production efficiency with faster processing times and better results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaHandshake className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Technical Support</h3>
                    <p className="text-gray-600">Dedicated technical support and customized solutions for your specific needs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get a Custom Quote</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Industry Type</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select Industry</option>
                    <option value="textile-manufacturing">Textile Manufacturing</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="commercial-laundry">Commercial Laundry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Monthly Volume</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., 1000L" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Requirements</label>
                  <textarea rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Describe your specific needs..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
} 