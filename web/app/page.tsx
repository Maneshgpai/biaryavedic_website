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

export default function Home() {
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
            <ProductCard
              id="bn160"
              name="B2B Eco-Friendly Fabric Sizing Agent"
              description="Revolutionizing the fabric sizing process for a green future. Our industrial solution forms a uniform layer of protective coating over warp yarn, minimizes yarn breakage during weaving, and improves yarn strength to resist mechanical stress."
              price={2500}
              originalPrice={3200}
              discount={22}
              rating={4}
              reviewCount={18}
              sku="BN160"
              volume="5L"
              application="Industrial Weaving"
              image="/assets/images/product_BN160.webp"
              category="B2B"
              categoryColor="from-white to-blue-600"
              detailsLink="/products/b2b"
            />
            
            <ProductCard
              id="bn161"
              name="Eco-Friendly Instant Fabric Stiffener Spray"
              description="Busy mornings, crisp outfits. Transform your ironing experience with our eco-friendly instant fabric stiffener spray. Perfect for time-saving solutions during morning rush before school or work."
              price={530}
              originalPrice={650}
              discount={18}
              rating={4.3}
              reviewCount={23}
              sku="BN161"
              volume="450ml"
              application="3-in-1 Antimicrobial"
              image="/assets/images/product_BN161.webp"
              category="B2C"
              categoryColor="from-white to-green-600"
              detailsLink="/products/b2c"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-12" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-6 font-display">
            Why Choose <span className="text-green-600">Bio-Aryavedic</span>
          </h2>
        </div>
        
        <div className="features-carousel">
          <div className="features-track">
            {/* First set of cards */}
            <div className="feature-card bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Natural</h3>
              <p className="text-gray-600">All our products are made from natural, biodegradable ingredients that are safe for you and the environment.</p>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaFlask className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced Science</h3>
              <p className="text-gray-600">Leveraging cutting-edge nanotechnology and biochemistry for superior cleaning performance.</p>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaAward className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Proven Results</h3>
              <p className="text-gray-600">Trusted by thousands of customers and dozens of business partners for consistent, reliable results.</p>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaRecycle className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustainable</h3>
              <p className="text-gray-600">Contributing to UN SDG goals through eco-friendly practices and sustainable manufacturing.</p>
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="feature-card bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Natural</h3>
              <p className="text-gray-600">All our products are made from natural, biodegradable ingredients that are safe for you and the environment.</p>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaFlask className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced Science</h3>
              <p className="text-gray-600">Leveraging cutting-edge nanotechnology and biochemistry for superior cleaning performance.</p>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaAward className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Proven Results</h3>
              <p className="text-gray-600">Trusted by thousands of customers and dozens of business partners for consistent, reliable results.</p>
            </div>
            
            <div className="feature-card bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaRecycle className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustainable</h3>
              <p className="text-gray-600">Contributing to UN SDG goals through eco-friendly practices and sustainable manufacturing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Goals Section */}
      <section id="sustainability" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              Supporting <span className="text-green-600">UN SDG Goals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to sustainability aligns with multiple United Nations Sustainable Development Goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <FaLeaf className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Climate Action</h3>
              <p className="text-gray-600">Reducing carbon footprint through sustainable manufacturing and eco-friendly products.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <FaWater className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Clean Water</h3>
              <p className="text-gray-600">Protecting water resources through biodegradable formulations and responsible usage.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="zoom-in" data-aos-delay="300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <FaIndustry className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">Driving industry innovation through responsible manufacturing and sustainable practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display">
              Recognition & <span className="text-green-400">Awards</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence and sustainability has been recognized by industry leaders.
            </p>
          </div>
          
          {/* Moving Banner */}
          <div className="relative overflow-hidden h-32 bg-gray-800 rounded-lg border border-green-500/20">
            <div className="flex items-center h-full animate-scroll">
              <div className="flex items-center gap-12 min-w-full">
                <Image 
                  src="/assets/images/manage-logo.webp" 
                  alt="MANAGE Logo" 
                  width={200} 
                  height={120} 
                  quality={95}
                  priority
                  sizes="(max-width: 768px) 100px, 160px"
                  className="opacity-80 hover:opacity-100 transition-opacity h-16 w-auto object-contain crisp-edges" 
                />
                <Image 
                  src="/assets/images/abi-logo.webp" 
                  alt="ABI Logo" 
                  width={200} 
                  height={121} 
                  quality={95}
                  priority
                  sizes="(max-width: 768px) 100px, 160px"
                  className="opacity-80 hover:opacity-100 transition-opacity h-16 w-auto object-contain crisp-edges" 
                />
                <Image 
                  src="/assets/images/kau-logo.webp" 
                  alt="Kerala Agricultural University Logo" 
                  width={200} 
                  height={149} 
                  quality={95}
                  priority
                  sizes="(max-width: 768px) 100px, 160px"
                  className="opacity-80 hover:opacity-100 transition-opacity h-16 w-auto object-contain crisp-edges" 
                />
                <Image 
                  src="/assets/images/ksm-logo.webp" 
                  alt="Kerala Startup Mission Logo" 
                  width={200} 
                  height={120} 
                  quality={95}
                  priority
                  sizes="(max-width: 768px) 100px, 160px"
                  className="opacity-80 hover:opacity-100 transition-opacity h-16 w-auto object-contain crisp-edges" 
                />
                <Image 
                  src="/assets/images/iim-vizag-logo.webp" 
                  alt="IIM Visakhapatnam Logo" 
                  width={133} 
                  height={133} 
                  quality={95}
                  priority
                  sizes="(max-width: 768px) 100px, 160px"
                  className="opacity-80 hover:opacity-100 transition-opacity h-16 w-auto object-contain crisp-edges" 
                />
                {/* Duplicate for seamless loop */}
                <Image 
                  src="/assets/images/manage-logo.webp" 
                  alt="MANAGE Logo" 
                  width={200} 
                  height={120} 
                  quality={95}
                  sizes="(max-width: 768px) 100px, 160px"
                  className="opacity-80 hover:opacity-100 transition-opacity h-16 w-auto object-contain crisp-edges" 
                />
                <Image 
                  src="/assets/images/abi-logo.webp" 
                  alt="ABI Logo" 
                  width={200} 
                  height={121} 
                  quality={95}
                  sizes="(max-width: 768px) 100px, 160px"
                  className="opacity-80 hover:opacity-100 transition-opacity h-16 w-auto object-contain crisp-edges" 
                />
                <Image 
                  src="/assets/images/kau-logo.webp" 
                  alt="Kerala Agricultural University Logo" 
                  width={200} 
                  height={149} 
                  quality={95}
                  sizes="(max-width: 768px) 100px, 160px"
                  className="opacity-80 hover:opacity-100 transition-opacity h-16 w-auto object-contain crisp-edges" 
                />
                <Image 
                  src="/assets/images/ksm-logo.webp" 
                  alt="Kerala Startup Mission Logo" 
                  width={200} 
                  height={120} 
                  quality={95}
                  priority
                  sizes="(max-width: 768px) 100px, 160px"
                  className="opacity-80 hover:opacity-100 transition-opacity h-16 w-auto object-contain crisp-edges" 
                />
                <Image 
                  src="/assets/images/iim-vizag-logo.webp" 
                  alt="IIM Visakhapatnam Logo" 
                  width={133} 
                  height={133} 
                  quality={95}
                  priority
                  sizes="(max-width: 768px) 100px, 160px"
                  className="opacity-80 hover:opacity-100 transition-opacity h-16 w-auto object-contain crisp-edges" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
