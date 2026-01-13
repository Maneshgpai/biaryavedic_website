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

      {/* Page Title Section */}
      {/* <section className="py-8 md:py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-display">
            Rooted in Tradition, <span className="text-green-600">Driven by Science</span>
          </h2>
        </div>
      </section> */}

      {/* Company Overview Content Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left side: Text Content */}
            <div className="lg:w-3/5" data-aos="fade-right" data-aos-duration="1000">
              <div className="space-y-8">
                <div className="relative pl-8 border-l-4 border-green-500/30">
                  <p className="text-xl text-gray-700 font-medium leading-relaxed">
                    Bio-Aryavedic Naturals Pvt. Ltd. is a purpose-driven innovation company committed to transforming the way textiles are cared for by making the process safe, sustainable, and environmentally responsible. Rooted in traditional Indian wisdom and strengthened by modern science, we develop plant-based, green textile care solutions that protect people, fabrics, and the planet.
                  </p>
                </div>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Founded with the vision of reducing pollution caused by conventional chemical-based fabric care and textile finishing processes, Aryavedic Naturals works at the intersection of biotechnology, materials science, and sustainability. Our innovations focus on replacing petroleum-derived and toxic chemical agents with renewable, biodegradable alternatives sourced from nature.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Sticky Image */}
            <div className="lg:w-2/5 lg:sticky lg:top-0 lg:self-start" data-aos="fade-left" data-aos-duration="1000">
              <div className="relative">
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/assets/images/innovation.webp"
                    alt="Scientific research in laboratory setting with researchers using microscope and natural ingredients"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Decorative accents */}
                <div className="absolute -z-10 -top-12 -right-12 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute -z-10 -bottom-12 -left-12 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse" style={{animationDelay: '-2s'}}></div>
              </div>
            </div>
          </div>

          {/* Full-width content below columns */}
          <div className="mt-12 lg:mt-16 space-y-6 text-lg text-gray-600 leading-relaxed" data-aos="fade-up">
            <div className="bg-green-50/50 p-8 rounded-2xl border border-green-100 shadow-sm">
              <p className="text-gray-800">
                At the heart of our work is <span className="font-bold text-green-700 italic text-xl">albedon</span>, a patented cassava plant&ndash;based biopolymer textile care solution. Developed through years of research and validation, albedon provides stiffening, conditioning, and antimicrobial protection through a single application, while forming a gentle protective coating on fabrics. Beyond fabric care, it carries a unique photocatalytic capability that helps break down surrounding air pollutants and greenhouse gases under visible light, contributing to cleaner indoor environments and reduced carbon burden.
              </p>
            </div>
            
            <p>
              Our approach follows a farm-to-fabric model, creating value for farmers by responsibly sourcing cassava while delivering advanced green technology to households, institutions, and the textile industry. By minimizing chemical discharge into water systems and reducing exposure risks for users and workers, our solutions support healthier living and cleaner ecosystems.
            </p>
            <p>
              Aryavedic Naturals is also deeply committed to social impact and gender inclusion. As a women-led innovation-driven enterprise, we aim to build technologies that simplify daily life especially for working families while contributing positively to climate action and sustainable economic growth.
            </p>
            <p className="font-medium text-gray-800 italic">
              Every product we create reflects our belief that innovation must be ethical, science-led, and planet-first. Through continuous research, responsible manufacturing, and collaborative partnerships, Aryavedic Naturals strives to redefine textile care for a greener and healthier future.
            </p>
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
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">2</h3>
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