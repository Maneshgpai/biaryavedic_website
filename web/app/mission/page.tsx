"use client";

import Contact from "@/components/Contact";
import Image from "next/image";
import { 
  FaWater, 
  FaLeaf, 
  FaRecycle, 
  FaSeedling, 
  FaGem, 
  FaHandHoldingHeart, 
  FaGlobeAmericas, 
  FaShieldAlt, 
  FaHandshake,
  FaLightbulb,
  FaTrophy,
  FaRocket,
  FaCheckCircle,
  FaHeart
} from "react-icons/fa";

export default function MissionPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Our <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Mission</span>
          </h1>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/afforestation.webp"
            alt="Afforestation background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-white/70 md:bg-white/65"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div data-aos="fade-right" data-aos-duration="1000">
              <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6 text-xs md:text-sm font-semibold tracking-wider text-green-600 uppercase bg-green-50/90 backdrop-blur-sm rounded-full">
                Our Purpose
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 font-display">
                Our <span className="text-green-600">Mission</span>
              </h2>
              <div className="space-y-3 md:space-y-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  To create safe, effective, and sustainable textile care solutions by replacing harmful chemical-based processes with plant-derived, science-backed innovations, while protecting human health, preserving fabric quality, and reducing environmental pollution.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium italic">
                  We are committed to delivering products that simplify everyday life, support cleaner manufacturing practices, and contribute meaningfully to climate action through green technology.
                </p>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" className="mt-8 lg:mt-0">
              <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6 text-xs md:text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50/90 backdrop-blur-sm rounded-full">
                Our Future
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 font-display">
                Our <span className="text-blue-600">Vision</span>
              </h2>
              <div className="space-y-3 md:space-y-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  To become a globally trusted leader in sustainable textile care, known for transforming natural resources into high-performance, climate-positive solutions that benefit people, industry, and the planet.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium italic">
                  We envision a future where textile care actively supports clean air, clean water, and responsible consumption, while empowering farmers, enabling women-led innovation, and setting new benchmarks for ethical and environmental excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 font-display">
              Our Core <span className="text-green-600">Values</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The principles that guide every decision we make and every product we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Value 1: Nature-Led Innovation */}
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-green-600 transition-colors duration-300 flex-shrink-0">
                <FaSeedling className="text-lg md:text-xl lg:text-2xl text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-display">Nature-Led Innovation</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We believe nature is the most intelligent designer. Our solutions are built on renewable, plant-based materials, thoughtfully engineered through advanced science to deliver premium performance without environmental harm.
              </p>
            </div>

            {/* Value 2: Responsible Luxury */}
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-indigo-600 transition-colors duration-300 flex-shrink-0">
                <FaGem className="text-lg md:text-xl lg:text-2xl text-indigo-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-display">Responsible Luxury</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                True luxury is conscious. We create high-quality, elegant, and effective products that feel refined in use while being responsible in origin, formulation, and lifecycle impact.
              </p>
            </div>

            {/* Value 3: Accessibility with Purpose */}
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                <FaHandHoldingHeart className="text-lg md:text-xl lg:text-2xl text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-display">Accessibility with Purpose</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Sustainability should not be exclusive. We design solutions that are practical, scalable, and accessible, ensuring eco-friendly textile care reaches households, institutions, and industries alike.
              </p>
            </div>

            {/* Value 4: Planet-First Impact */}
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="400">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-teal-600 transition-colors duration-300 flex-shrink-0">
                <FaGlobeAmericas className="text-lg md:text-xl lg:text-2xl text-teal-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-display">Planet-First Impact</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Every decision we make considers its impact on air, water, soil, and climate. Our technologies aim to reduce chemical discharge, support greenhouse gas reduction, and promote healthier living environments.
              </p>
            </div>

            {/* Value 5: Trust, Safety & Transparency */}
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="500">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-600 transition-colors duration-300 flex-shrink-0">
                <FaShieldAlt className="text-lg md:text-xl lg:text-2xl text-cyan-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-display">Trust, Safety & Transparency</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We are guided by integrity. From sourcing to science to safety, we ensure our products are non-toxic, biodegradable, and responsibly validated, earning trust through transparency and performance.
              </p>
            </div>

            {/* Value 6: Empowerment & Inclusion */}
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group" data-aos="fade-up" data-aos-delay="600">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-purple-600 transition-colors duration-300 flex-shrink-0">
                <FaHandshake className="text-lg md:text-xl lg:text-2xl text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-display">Empowerment & Inclusion</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                As a women-led enterprise, we champion inclusive growth, fair livelihoods, and innovations that support working families, farmers, and communities across the value chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-12 lg:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 font-display">
              Our <span className="text-green-600">Achievements</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              Bio-Aryavedic Naturals Pvt. Ltd. has steadily built a strong foundation as a science-led, impact-driven innovation company in the sustainable textile care space.
            </p>
          </div>

          {/* Redesigned Grid Layout - Equal height cards with better alignment */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-8 auto-rows-fr">
            {/* Innovation & Intellectual Property */}
            <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col" data-aos="fade-up">
              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <FaLightbulb className="text-base md:text-lg lg:text-xl" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">Innovation & Intellectual Property</h3>
              </div>
              <ul className="space-y-3 md:space-y-4 text-gray-600 flex-grow">
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Successfully developed and patented a cassava plant–based biopolymer textile care technology, marking a significant breakthrough in eco-friendly fabric care.</span>
                </li>
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Introduced a 3-in-1 textile care solution offering stiffening, conditioning, and antimicrobial protection with an added photocatalytic capability to reduce surrounding air pollutants and greenhouse gases.</span>
                </li>
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Established a strong farm-to-fabric innovation model, converting agricultural resources into high-value green technology.</span>
                </li>
              </ul>
            </div>

            {/* Recognition & Awards */}
            <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <FaTrophy className="text-base md:text-lg lg:text-xl" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">Recognition & Awards</h3>
              </div>
              <ul className="space-y-3 md:space-y-4 text-gray-600 flex-grow">
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Winner 1st Place, Naaripreneur for Her Program, recognizing Bio-Aryavedic Naturals as a high-potential women-led deep-tech startup.</span>
                </li>
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Winner, Women in Change Incubation Challenge (Startup India).</span>
                </li>
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Recognised by Krishi Bhavan (Ministry of Agriculture, Government of India).</span>
                </li>
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Recognized for blending traditional plant wisdom with advanced material science to address environmental challenges.</span>
                </li>
              </ul>
            </div>

            {/* Incubation & Ecosystem Support */}
            <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <FaRocket className="text-base md:text-lg lg:text-xl" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">Incubation & Ecosystem Support</h3>
              </div>
              <ul className="space-y-3 md:space-y-4 text-gray-600 flex-grow">
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Selected and supported by leading national startup and innovation ecosystems, validating both the technology and business potential.</span>
                </li>
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Benefited from technical mentorship, institutional guidance, and structured incubation programs focused on product commercialization and scale-up.</span>
                </li>
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Engaged with industry experts, scientists, and policy stakeholders to strengthen regulatory, scientific, and market readiness.</span>
                </li>
              </ul>
            </div>

            {/* Validation & Market Readiness */}
            <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <FaCheckCircle className="text-base md:text-lg lg:text-xl" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">Validation & Market Readiness</h3>
              </div>
              <ul className="space-y-3 md:space-y-4 text-gray-600 flex-grow">
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-600 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Completed key safety, performance, and application validations, ensuring products are non-toxic, biodegradable, and suitable for daily use.</span>
                </li>
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-600 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Successfully transitioned from R&D to pilot manufacturing and early market introduction.</span>
                </li>
                <li className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-600 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base">Generated interest from institutional, industrial, and consumer segments, including uniforms, home textiles, and fabric care applications.</span>
                </li>
              </ul>
            </div>

            {/* Social & Environmental Impact - Full width on large screens for better balance */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-2" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <FaHeart className="text-base md:text-lg lg:text-xl" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">Social & Environmental Impact</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base text-gray-600">Enabled women-led innovation in a traditionally male-dominated deep-tech space.</span>
                </div>
                <div className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base text-gray-600">Supported farmer-linked value creation through responsible sourcing of cassava.</span>
                </div>
                <div className="flex items-start space-x-2 md:space-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></span>
                  <span className="text-sm md:text-base text-gray-600">Actively contributes to reduction of chemical discharge, water pollution, and carbon burden associated with textile care processes.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
                Our <span className="text-green-600">Impact</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through our innovative approach to sustainable production, we&apos;re creating lasting positive change across multiple dimensions of environmental and social impact.
              </p>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1000">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <FaWater className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-blue-600">50%</h3>
                      <p className="text-gray-700 font-semibold">Reduction in water usage</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <FaLeaf className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-green-600">75%</h3>
                      <p className="text-gray-700 font-semibold">Decrease in chemical waste</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <FaRecycle className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-orange-600">100%</h3>
                      <p className="text-gray-700 font-semibold">Biodegradable products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Contact />
    </main>
  );
} 