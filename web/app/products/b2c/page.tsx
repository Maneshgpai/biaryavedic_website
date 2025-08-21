import Contact from "@/components/Contact";
import ProductCard from "@/components/ProductCard";
import { FaLeaf, FaShieldAlt, FaBolt, FaClock } from "react-icons/fa";

export default function B2CPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            B2C <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Premium fabric care solutions for your home. Natural, safe, and effective products for everyday use.
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
              Transform your daily fabric care routine with our eco-friendly, effective solutions designed for modern homes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              Why Choose Our <span className="text-green-600">B2C Products</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">100% Natural</h3>
              <p className="text-gray-600">Made from plant-based ingredients, safe for your family and the environment.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Gentle & Safe</h3>
              <p className="text-gray-600">Dermatologically tested, suitable for sensitive skin and children&apos;s clothes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBolt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Powerful Results</h3>
              <p className="text-gray-600">Advanced bio-enzyme technology delivers superior cleaning and care performance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Time-Saving</h3>
              <p className="text-gray-600">Quick and easy application for busy lifestyles, with long-lasting results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-display">
              How to <span className="text-green-600">Use</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get the best results from our fabric care products
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Apply</h3>
              <p className="text-gray-600">Spray or apply the product evenly on the fabric surface or add to washing machine as directed.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Wait</h3>
              <p className="text-gray-600">Allow the bio-active ingredients to work for the recommended time for optimal results.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Enjoy</h3>
              <p className="text-gray-600">Experience fresh, clean, and well-cared fabrics with long-lasting protection and fragrance.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
} 