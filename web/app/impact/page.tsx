"use client";

import Contact from "@/components/Contact";
import { 
  FaUsers, 
  FaGlobe, 
  FaSeedling, 
  FaLeaf,
  FaCloud,
  FaWater,
  FaTree,
  FaFlask,
  FaRecycle,
  FaChartLine,
  FaHandshake,
  FaBuilding
} from "react-icons/fa";

export default function ImpactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">
            Our <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Future </span>Impact
          </h1>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Farmers Engaged */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaUsers className="text-white text-2xl" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">11,155</div>
              <p className="text-gray-700 font-semibold">Farmers Engaged</p>
              <div className="mt-4 bg-green-200 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full rounded-full w-3/4"></div>
              </div>
            </div>
            
            {/* Land Coverage */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">12,487</div>
              <p className="text-gray-700 font-semibold">Hectares of Land</p>
              <div className="mt-4 bg-blue-200 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full w-3/5"></div>
              </div>
            </div>
            
            {/* Cotton Bales */}
            {/* <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="300">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaSeedling className="text-white text-2xl" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50,000</div>
              <p className="text-gray-700 font-semibold">Cotton Bales Produced</p>
              <div className="mt-4 bg-orange-200 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full rounded-full w-5/6"></div>
              </div>
            </div> */}
            
            {/* Carbon Credits */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="400">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10,478</div>
              <p className="text-gray-700 font-semibold">Carbon Credits Issued</p>
              <div className="mt-4 bg-purple-200 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full rounded-full w-7/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              Environmental <span className="text-green-600">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in sustainable practices and environmental restoration
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div data-aos="fade-right">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <FaCloud className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Carbon Sequestration</h3>
                    <p className="text-green-600 font-semibold">1 Million Tonnes Target</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Through regenerative agriculture and biochar initiatives, we&apos;re sequestering approximately 
                  1 million tonnes of carbon over three years, including 220,000 tonnes in the first year.
                </p>
                <div className="bg-green-100 h-4 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full rounded-full w-1/5"></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">22% completed in Year 1</p>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <FaWater className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Water Conservation</h3>
                    <p className="text-blue-600 font-semibold">30% Reduction Achieved</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Implementing Alternate Wetting and Drying (AWD) techniques reduces water footprint 
                  by up to 30% in paddy farming while lowering methane emissions by 48%.
                </p>
                <div className="bg-blue-100 h-4 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full w-3/10"></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">30% water usage reduction</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <FaTree className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Afforestation</h3>
              <p className="text-gray-600 mb-4">200,000 trees planted and 80,000 seed balls dispersed for natural regeneration.</p>
              <div className="flex items-center text-emerald-600">
                <span className="text-2xl font-bold">200K+</span>
                <span className="ml-2">Trees Planted</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <FaFlask className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Reduced Chemicals</h3>
              <p className="text-gray-600 mb-4">30% reduction in tillage and minimized chemical usage through natural inputs.</p>
              <div className="flex items-center text-orange-600">
                <span className="text-2xl font-bold">30%</span>
                <span className="ml-2">Less Tillage</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <FaRecycle className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Biodiversity</h3>
              <p className="text-gray-600 mb-4">Promoting natural regeneration through crop rotation and sustainable practices.</p>
              <div className="flex items-center text-purple-600">
                <span className="text-2xl font-bold">100%</span>
                <span className="ml-2">Sustainable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              Economic <span className="text-blue-600">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving economic growth through sustainable agricultural practices
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Increased Farmer Income</h3>
              <p className="text-lg text-gray-600 mb-8">
                Through High-Density Planting Systems (HDPS), intercropping, biochar application, 
                and regenerative agriculture, we&apos;re boosting farmers&apos; income by at least 18%.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <FaChartLine className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">18% Income Increase</h4>
                    <p className="text-gray-600">Average farmer income growth</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <FaHandshake className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">20+ Supply Partners</h4>
                    <p className="text-gray-600">Strong partnership network</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                    <FaBuilding className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">5 Corporate Partners</h4>
                    <p className="text-gray-600">Strategic business alliances</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Productivity Growth</h4>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Crop Yield</span>
                      <span className="text-blue-600 font-bold">+25%</span>
                    </div>
                    <div className="bg-blue-200 h-3 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full w-1/4"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Resource Efficiency</span>
                      <span className="text-green-600 font-bold">+40%</span>
                    </div>
                    <div className="bg-green-200 h-3 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full w-2/5"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Cost Reduction</span>
                      <span className="text-orange-600 font-bold">-20%</span>
                    </div>
                    <div className="bg-orange-200 h-3 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full rounded-full w-1/5"></div>
                    </div>
                  </div>
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