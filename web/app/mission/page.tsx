import Contact from "@/components/Contact";
import Image from "next/image";
import { FaWater, FaLeaf, FaRecycle } from "react-icons/fa";

export default function MissionPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">
            Our <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Mission</span>
          </h1>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bio-Aryavedic is revolutionizing the textile and fabric care industry by providing innovative regenerative and sustainable solutions at scale. Our mission is to bridge the gap between traditional wisdom and modern technology, fostering a sustainable relationship between nature and industry.
              </p>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1000" className="relative">
              <div className="relative z-10">
                <Image
                  src="/assets/images/old_woman.webp"
                  alt="Community Impact"
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

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              What We <span className="text-green-600">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sustainable solutions designed for every need, from ethical sourcing to innovative bio-hybrid technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Natural & Safe Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="flip-left" data-aos-delay="100">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center relative">
                <Image src="/assets/images/natural_safe.webp" alt="100% Natural & Safe" width={300} height={200} className="max-w-full max-h-full object-contain" />
                <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Natural</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">100% Natural & Safe</h3>
                <p className="text-gray-600 text-sm">Zero harmful chemicals, gentle on all fabrics and sensitive skin. Our formulations are dermatologically tested and certified safe for all types of textiles and users. Harnessing the power of plant extracts and nano-active agents, our products inhibit bacterial growth and neutralize odors—without compromising skin health or fabric longevity.</p>
              </div>
            </div>
            
            {/* Custom Solutions Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="flip-left" data-aos-delay="200">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center relative">
                <Image src="/assets/images/b2b_industry.webp" alt="Custom Solutions for Textile Industry" width={300} height={200} className="max-w-full max-h-full object-contain" />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">B2B</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Custom Solutions for Textile Industry</h3>
                <p className="text-gray-600 text-sm">Tailored formulations for textile manufacturers and consumer needs. We work closely with brands to develop specialized solutions that meet their unique requirements. From high-volume textile mills to conscious individual consumers, our product range scales seamlessly across applications, meeting both performance and sustainability benchmarks.</p>
              </div>
            </div>
            
            {/* Bio-Hybrid Innovation Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="flip-left" data-aos-delay="300">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center relative">
                <Image src="/assets/images/innovation.webp" alt="Bio-Hybrid Innovation" width={300} height={200} className="max-w-full max-h-full object-contain" />
                <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Innovation</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Bio-Hybrid Innovation</h3>
                <p className="text-gray-600 text-sm">Advanced nanotechnology combined with natural essential oils for superior fabric care. Our bio-hybrid approach ensures maximum effectiveness while maintaining environmental sustainability. Our solutions are designed to minimize water usage during production and rinsing, and are fully biodegradable, ensuring no toxic residues enter waterways or ecosystems.</p>
              </div>
            </div>
            
            {/* Ethically Sourced Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="flip-left" data-aos-delay="400">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center relative">
                <Image src="/assets/images/feature-image.webp" alt="Ethically Sourced Ingredients" width={300} height={200} className="max-w-full max-h-full object-contain" />
                <div className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Ethical</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Ethically Sourced Ingredients</h3>
                <p className="text-gray-600 text-sm">We are deeply committed to a cruelty-free production process, ensuring that no animal testing or animal-derived inputs are used at any stage. Our plant-based ingredients are sustainably and ethically harvested in partnership with local communities and small-scale farmers. These partnerships not only empower rural livelihoods but also promote regenerative agricultural practices that protect soil health and preserve native biodiversity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
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
                {/* Water Usage Stat */}
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
                
                {/* Chemical Waste Stat */}
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
                
                {/* Biodegradable Stat */}
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
      </section>

      <Contact />
    </main>
  );
} 