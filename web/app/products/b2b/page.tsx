"use client";

import { useState, useEffect } from "react";
import { FaStar, FaCheckCircle, FaLeaf, FaIndustry, FaShieldAlt, FaAward, FaFlask, FaWind, FaUserShield, FaRecycle, FaLayerGroup, FaCog, FaTint } from "react-icons/fa";
import { STATIC_PRODUCTS } from "@/data/products";
import type { Product } from "@/data/products";
import Contact from "@/components/Contact";
import ContactModal from "@/components/ContactModal";

export default function B2BPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    // Get Albedon product
    const Albedon = STATIC_PRODUCTS.find(p => p.id === "bn160");
    if (Albedon) {
      setProduct(Albedon);
      setSelectedImage(0);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="animate-pulse">
            <div className="h-64 sm:h-96 bg-gray-200 rounded-xl sm:rounded-2xl mb-6 sm:mb-8"></div>
            <div className="h-6 sm:h-8 bg-gray-200 rounded w-3/4 mb-3 sm:mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The requested product could not be found.</p>
        </div>
      </main>
    );
  }

  // Use images array if available, otherwise fallback to main image
  const allImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Albedon <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Biopolymer Technology</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mt-4 sm:mt-6 px-2">
            Patented, plant-based sizing and finishing solutions for high-performance, sustainable textile manufacturing.
          </p>
        </div>
      </section>

      {/* Hero Product Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Image Gallery */}
            <div className="lg:sticky lg:top-24">
              {/* Main Image */}
              <div className="relative mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-xl sm:shadow-2xl aspect-square">
                <img
                  src={allImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 sm:p-8"
                />
              </div>

              {/* Thumbnail Gallery */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative rounded-lg sm:rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                        selectedImage === index
                          ? "border-blue-600 ring-2 ring-blue-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-contain p-1 sm:p-2 bg-white"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-4 sm:space-y-6">
              {/* SKU Badge */}
              <div className="inline-block bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                SKU: {product.sku}
              </div>

              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-display leading-tight">
                Albedon Eco-Friendly Fabric Sizing Agent
              </h1>

              {/* Rating */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } w-4 h-4 sm:w-5 sm:h-5`}
                    />
                  ))}
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-semibold">4.8</span>
                <span className="text-xs sm:text-sm text-gray-500">(42 industry reviews)</span>
              </div>

              {/* Price */}
              {/* <div className="py-3 sm:py-4">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  Contact for Price
                </span>
              </div> */}

              {/* Product Details */}
              <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-600 font-medium">Technology:</span>
                  <span className="text-sm sm:text-base text-gray-900 font-semibold">Cassava Biopolymer</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-600 font-medium">Application:</span>
                  <span className="text-sm sm:text-base text-gray-900 font-semibold text-right sm:text-left">Sizing & Finishing</span>
                </div>
              </div>

              {/* Description */}
              <div className="prose max-w-none">
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  Albedon is a patented, plant-based sizing and finishing solution developed using cassava-derived biopolymer technology. Engineered for the textile manufacturing industry, it serves as a sustainable alternative to conventional chemical and synthetic sizing agents, delivering fabric body, surface conditioning, and antimicrobial protection in a single, integrated formulation.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg uppercase tracking-wide hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Contact for Price
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                  <FaShieldAlt className="text-blue-500 flex-shrink-0" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                  <FaAward className="text-yellow-500 flex-shrink-0" />
                  <span>Quality Assured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Deep Dive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg leading-relaxed">
                During application, <span className="font-bold text-blue-600">Albedon</span> forms a thin, uniform bio-polymer film on yarns and fabric surfaces, imparting controlled stiffness, improved handle, and enhanced surface integrity while maintaining breathability and tensile strength. The formulation supports better processability, improved fabric appearance, and reduced fiber damage, enabling consistent performance across weaving, finishing, and garment production stages.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <FaWind className="text-blue-600" /> Climate-Positive Innovation
                </h3>
                <p className="text-blue-800">
                  A key technological advancement of Albedon is its <span className="font-bold">photocatalytic greenhouse gas reduction</span> capability. Under visible light exposure, treated textiles activate a photocatalytic reaction that helps decompose surrounding air pollutants and greenhouse gases into harmless by-products.
                </p>
              </div>
              <p className="text-lg leading-relaxed">
                Albedon also provides an <span className="font-bold text-blue-600">antimicrobial functional finish</span>, helping inhibit the growth of odor-causing and harmful microorganisms on treated fabrics. This feature is particularly beneficial for uniforms, hospitality textiles, home furnishings, and technical apparel, where hygiene, freshness, and extended usability are critical performance parameters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Product Highlights Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display mb-4">
              Key Product <span className="text-blue-600">Highlights</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Setting a new benchmark for responsible textile manufacturing with advanced biopolymer science.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <HighlightCard 
              icon={<FaCog className="text-white text-2xl" />}
              title="Compatible with Existing Machinery"
              description="Engineered for seamless integration into existing textile manufacturing lines without requiring major process modifications or equipment upgrades. Works with standard sizing machines, padding mangles, and finishing equipment."
              color="bg-slate-700"
            />
            <HighlightCard 
              icon={<FaFlask className="text-white text-2xl" />}
              title="Patented Cassava Biopolymer"
              description="Developed using renewable cassava-based biopolymer science, offering a sustainable alternative to synthetic and chemical sizing agents."
              color="bg-blue-600"
            />
            <HighlightCard 
              icon={<FaCheckCircle className="text-white text-2xl" />}
              title="Environmental Discharge Compliance"
              description="Meets and supports compliance with increasingly strict environmental discharge norms by reducing chemical load in wastewater, minimizing BOD/COD levels, and eliminating hazardous chemical residues in effluent streams."
              color="bg-emerald-700"
            />
            <HighlightCard 
              icon={<FaUserShield className="text-white text-2xl" />}
              title="Worker-Safe & Non-Toxic"
              description="Free from hazardous chemicals; supports safer working conditions and aligns with modern occupational health standards."
              color="bg-amber-600"
            />
            <HighlightCard 
              icon={<FaRecycle className="text-white text-2xl" />}
              title="Biodegradable & Eco-Friendly"
              description="Reduces chemical discharge and wastewater pollution compared to petroleum-based sizing and finishing agents."
              color="bg-emerald-600"
            />
            <HighlightCard 
              icon={<FaAward className="text-white text-2xl" />}
              title="ESG Compliance Support"
              description="Enables textile mills to strengthen ESG compliance, eco-labels, and sustainability certifications while maintaining quality."
              color="bg-blue-800"
            />
            <HighlightCard 
              icon={<FaTint className="text-white text-2xl" />}
              title="Easy Rinsing & Desizing"
              description="Superior rinsability compared to synthetic sizing agents, allowing for straightforward desizing processes that reduce water consumption and processing time while ensuring clean fabric preparation for subsequent treatments."
              color="bg-cyan-600"
            />
            <HighlightCard 
              icon={<FaLayerGroup className="text-white text-2xl" />}
              title="Integrated Sizing & Finishing"
              description="Delivers controlled fabric stiffness, surface conditioning, and antimicrobial functionality in a single formulation."
              color="bg-indigo-600"
            />
            <HighlightCard 
              icon={<FaShieldAlt className="text-white text-2xl" />}
              title="Uniform Bio-Polymer Film"
              description="Forms a thin, consistent coating on yarns and fabric surfaces, improving fabric body and handle while maintaining breathability."
              color="bg-teal-600"
            />
            <HighlightCard 
              icon={<FaCheckCircle className="text-white text-2xl" />}
              title="Process-Friendly Performance"
              description="Enhances weaving and finishing efficiency with reduced fiber breakage and stable fabric performance across production stages."
              color="bg-green-600"
            />
            <HighlightCard 
              icon={<FaWind className="text-white text-2xl" />}
              title="Photocatalytic GHG Reduction"
              description="Under visible light, treated textiles activate a photocatalytic reaction that helps break down surrounding air pollutants."
              color="bg-sky-600"
            />
            <HighlightCard 
              icon={<FaShieldAlt className="text-white text-2xl" />}
              title="Antimicrobial Functional Finish"
              description="Helps inhibit the growth of odor-causing and harmful microorganisms, improving hygiene and extending freshness."
              color="bg-purple-600"
            />
          </div>
        </div>
      </section>

      {/* Application Methods Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display mb-4">
              Application <span className="text-blue-600">Methods</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Engineered for easy integration into existing textile manufacturing lines with no major process modifications required.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid gap-12">
            {/* Method 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-10 border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    Method 01
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Warp Sizing Application</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Bio-based warp sizing agent for cotton and blended yarns, compatible with conventional warp sizing machines and slasher systems.
                  </p>
                </div>
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <FaIndustry className="text-blue-600" /> Process
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                      <li>Prepare solution as per required add-on level</li>
                      <li>Maintain standard sizing bath temperature</li>
                      <li>Apply through regular size box and drying section</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" /> Benefits
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                      <li>Improves yarn strength and abrasion resistance</li>
                      <li>Reduces yarn breakage during weaving</li>
                      <li>Ensures uniform size pick-up and easy desizing</li>
                      <li>Minimizes chemical residue in wastewater</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Method 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-10 border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    Method 02
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Padding Application</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Suitable for fabric finishing through padding mangles, allowing uniform surface coating for open-width and rope form processing. Compatible with both Pad Dry / Pad Dry Cure systems.
                  </p>
                </div>
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <FaIndustry className="text-teal-600" /> Process
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                      <li>Prepare finishing liquid at recommended concentration</li>
                      <li>Pass through padding mangle for even impregnation</li>
                      <li>Dry at conventional temperatures (pad-dry-cure)</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" /> Benefits
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                      <li>Uniform bio-polymer film formation</li>
                      <li>Controlled fabric stiffness and improved handle</li>
                      <li>Maintains breathability and fabric softness</li>
                      <li>Consistent finish across fabric width</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Method 3 */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-10 border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    Method 03
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Finishing Bath Application</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Incorporated into post-process finishing baths as a functional surface treatment, suitable for batch and continuous systems. Mainly intended for Jet dyeing / soft flow finishing units (post dyeing stage)
                  </p>
                </div>
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <FaIndustry className="text-purple-600" /> Process
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                      <li>Add to finishing bath after dyeing and washing</li>
                      <li>Maintain recommended pH and liquor ratio</li>
                      <li>Extract, dry, and finish as per standard process</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      <FaCheckCircle className="text-green-600" /> Benefits
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                      <li>Adds antimicrobial functionality without chemicals</li>
                      <li>Enhances fabric appearance and freshness</li>
                      <li>Improves value addition for functional textiles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Innovation Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#1b5c70] to-[#19495a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-display">Farm-to-Fabric Innovation</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Sourced from renewable cassava crops, Albedon is biodegradable, non-toxic, and worker-safe, supporting compliance with increasingly strict environmental and occupational safety standards. By replacing petroleum-based starches and chemical finishing agents, it helps textile manufacturers reduce wastewater contamination and chemical discharge.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-teal-400">100%</div>
                <p className="text-sm text-white/70 uppercase tracking-widest font-bold">Biodegradable</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-teal-400">Non-Toxic</div>
                <p className="text-sm text-white/70 uppercase tracking-widest font-bold">Worker Safe</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-teal-400">Patented</div>
                <p className="text-sm text-white/70 uppercase tracking-widest font-bold">Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultSubject="b2b"
      />
    </main>
  );
}

// Helper Component for Highlights
function HighlightCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
      <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
} 