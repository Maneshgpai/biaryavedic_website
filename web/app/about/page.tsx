"use client";

import Contact from "@/components/Contact";
import Image from "next/image";
import { FaLeaf, FaLightbulb, FaSmile, FaCheck } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">
            About <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Bio-Aryavedic</span>
          </h1>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
                Innovation Meets <span className="text-green-600">Tradition</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in the power of nature enhanced by science. Our products are designed to provide superior fabric care while maintaining the highest standards of environmental responsibility. Through our innovative formulations, we&apos;re setting new benchmarks in the sustainable fabric care industry.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our bio-hybrid technology represents the perfect fusion of traditional Ayurvedic wisdom with cutting-edge nanotechnology. This unique combination allows us to create products that are not only highly effective but also completely safe for both users and the environment.
              </p>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1000" className="relative">
              <div className="relative z-10">
                <Image
                  src="/assets/images/innovation.jpg"
                  alt="Scientific research in laboratory setting with researchers using microscope and natural ingredients"
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

      {/* Innovation Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              Our <span className="text-green-600">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to innovation and sustainable excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Eco-Friendly Stat */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <FaLeaf className="text-white text-3xl" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-green-600 mb-2">100%</h3>
                  <p className="text-gray-700 font-semibold">Eco-Friendly</p>
                </div>
              </div>
            </div>
            
            {/* Patents Stat */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <FaLightbulb className="text-white text-3xl" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
                  <p className="text-gray-700 font-semibold">Patents Filed</p>
                </div>
              </div>
            </div>
            
            {/* Satisfaction Stat */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg mb-4">
                  <FaSmile className="text-white text-3xl" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-orange-600 mb-2">95%</h3>
                  <p className="text-gray-700 font-semibold">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              Meet Our <span className="text-green-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary directors driving innovation and sustainable growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vineetha Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="flip-left" data-aos-delay="100">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white border-opacity-50 shadow-lg">
                  <Image
                    src="/assets/images/vineetha_profile.png"
                    alt="Vineetha - Co-Founder & Director"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Co-Founder</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Vineetha</h3>
                <p className="text-green-600 font-semibold mb-4">Co-Founder & Director</p>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 mr-2 mt-1 text-sm" />
                      <span className="text-gray-600 text-sm">Led a corporate team of 15+ for many years</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 mr-2 mt-1 text-sm" />
                      <span className="text-gray-600 text-sm">Established partnerships with 25+ sustainable suppliers</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 mr-2 mt-1 text-sm" />
                      <span className="text-gray-600 text-sm">Reduced carbon footprint by 60% through innovative packaging</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-green-500 mr-2 mt-1 text-sm" />
                      <span className="text-gray-600 text-sm">Mentored 50+ young entrepreneurs in sustainable business</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Arun Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="flip-left" data-aos-delay="200">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white border-opacity-50 shadow-lg">
                  <Image
                    src="/assets/images/arun_profile.png"
                    alt="Arun - Co-Founder & Director"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Co-Founder</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Arun</h3>
                <p className="text-blue-600 font-semibold mb-4">Co-Founder & Director</p>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="text-blue-500 mr-2 mt-1 text-sm" />
                      <span className="text-gray-600 text-sm">Pioneered Bi enzyme technology development</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-blue-500 mr-2 mt-1 text-sm" />
                      <span className="text-gray-600 text-sm">Secured ₹40L in seed funding for major angel investors</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-blue-500 mr-2 mt-1 text-sm" />
                      <span className="text-gray-600 text-sm">Developed patented bio-enzyme formulations</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-blue-500 mr-2 mt-1 text-sm" />
                      <span className="text-gray-600 text-sm">Corporate leadership experience for multiple years</span>
                    </li>
                  </ul>
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