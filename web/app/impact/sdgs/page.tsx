"use client";

import Contact from "@/components/Contact";
import { 
  FaHeartbeat, 
  FaBriefcase, 
  FaLightbulb, 
  FaVenus, 
  FaTint, 
  FaSync, 
  FaGlobeAmericas,
  FaCheckCircle
} from "react-icons/fa";

export default function SDGsPage() {
  const sdgs = [
    {
      id: 3,
      title: "SDG 3: Good Health & Well-Being",
      subtitle: "Ensure healthy lives and promote well-being for all",
      icon: <FaHeartbeat className="text-white text-2xl" />,
      color: "bg-red-500",
      points: [
        "Replaces toxic chemical-based sizing and finishing agents with non-toxic, plant-based alternatives",
        "Improves worker safety by reducing exposure to hazardous textile chemicals",
        "Supports healthier indoor environments through antimicrobial and air-purifying textile functionality"
      ]
    },
    {
        id: 5,
        title: "SDG 5: Gender Equality",
        subtitle: "Achieve gender equality and empower all women and girls",
        icon: <FaVenus className="text-white text-2xl" />,
        color: "bg-pink-500",
        points: [
          "A women-led deep-tech enterprise, driving leadership and inclusion in advanced manufacturing",
          "Promotes equitable participation in innovation, entrepreneurship, and decision-making",
          "Designs solutions that simplify daily life for working families"
        ]
      },
      {
        id: 6,
        title: "SDG 6: Clean Water & Sanitation",
        subtitle: "Ensure availability and sustainable management of water",
        icon: <FaTint className="text-white text-2xl" />,
        color: "bg-blue-400",
        points: [
          "Reduces chemical discharge and synthetic residues in textile wastewater",
          "Supports lower water pollution loads during desizing and finishing processes",
          "Contributes to safer water systems in textile manufacturing clusters"
        ]
      },
      {
      id: 8,
      title: "SDG 8: Decent Work & Economic Growth",
      subtitle: "Promote inclusive and sustainable economic growth",
      icon: <FaBriefcase className="text-white text-2xl" />,
      color: "bg-red-800",
      points: [
        "Enables farm-to-fabric value creation by sourcing renewable cassava crops",
        "Supports rural livelihoods and agricultural value addition",
        "Builds a scalable, innovation-led manufacturing ecosystem aligned with green growth"
      ]
    },
    {
      id: 9,
      title: "SDG 9: Industry, Innovation & Infrastructure",
      subtitle: "Build resilient infrastructure and foster innovation",
      icon: <FaLightbulb className="text-white text-2xl" />,
      color: "bg-orange-500",
      points: [
        "Developed a patented, deep-tech biopolymer platform for textile sizing and finishing",
        "Enables textile manufacturers to shift toward cleaner, future-ready production systems",
        "Encourages adoption of sustainable industrial technologies without compromising performance"
      ]
    },
    {
      id: 12,
      title: "SDG 12: Responsible Consumption & Production",
      subtitle: "Ensure sustainable consumption and production patterns",
      icon: <FaSync className="text-white text-2xl" />,
      color: "bg-yellow-600",
      points: [
        "Replaces petroleum-based textile chemicals with biodegradable, renewable materials",
        "Extends fabric life and reduces frequent washing needs",
        "Encourages responsible textile care practices across industry and households"
      ]
    },
    {
      id: 13,
      title: "SDG 13: Climate Action",
      subtitle: "Take urgent action to combat climate change",
      icon: <FaGlobeAmericas className="text-white text-2xl" />,
      color: "bg-green-700",
      points: [
        "Integrates photocatalytic greenhouse gas reduction capability into textiles",
        "Helps break down surrounding air pollutants under visible light",
        "Supports textile manufacturers in reducing carbon and environmental footprint"
      ]
    }
  ];

  const metrics = [
    { sdg: "SDG 3", area: "Worker & Consumer Safety", metric: "% reduction in hazardous chemical exposure", basis: "Replacement of chemical sizing/finishing agents with bio-based albedon", target: "Up to 100% elimination of listed toxic sizing chemicals" },
    { sdg: "SDG 3", area: "Skin Safety", metric: "Skin safety compliance", basis: "Dermal / irritation testing reports", target: "Non-toxic & skin-safe" },
    { sdg: "SDG 5", area: "Women-Led Innovation", metric: "Leadership representation", basis: "Founder & leadership structure", target: "Women-led deep-tech enterprise" },
    { sdg: "SDG 6", area: "Wastewater Pollution", metric: "Reduction in chemical load in effluent", basis: "COD/BOD comparison vs chemical starch", target: "30-60% lower chemical residue load*" },
    { sdg: "SDG 6", area: "Biodegradability", metric: "% biodegradable content", basis: "Lab biodegradation assessment", target: "100% biodegradable potential" },
    { sdg: "SDG 8", area: "Farmer Livelihoods", metric: "Renewable raw material sourcing", basis: "Cassava-based inputs", target: "100% plant-based feedstock" },
    { sdg: "SDG 8", area: "Green Jobs Supported", metric: "Direct & indirect employment", basis: "Manufacturing, supply chain, R&D", target: "Direct & indirect support" },
    { sdg: "SDG 9", area: "Clean Industrial Innovation", metric: "Patented green technology", basis: "Patent grants & filings", target: "1+ patented platform" },
    { sdg: "SDG 9", area: "Process Compatibility", metric: "% compatibility with existing machinery", basis: "Warp sizing / padding / finishing lines", target: "100% compatibility" },
    { sdg: "SDG 12", area: "Chemical Substitution", metric: "% replacement of petroleum-based agents", basis: "albedon vs synthetic sizing chemicals", target: "Up to 100% substitution" },
    { sdg: "SDG 12", area: "Fabric Life Extension", metric: "Reduction in fiber damage", basis: "Wear & tear comparison", target: "Measurable extension" },
    { sdg: "SDG 13", area: "Air Quality & GHG Reduction", metric: "Photocatalytic activity under visible light", basis: "Pollutant degradation testing", target: "Active air-pollutant breakdown*" },
    { sdg: "SDG 13", area: "Carbon Footprint Reduction", metric: "Avoided emissions from chemical production", basis: "Lifecycle comparison (LCA-ready)", target: "Positive LCA impact" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1b5c70] to-[#19495a]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">
            Our Commitment to the <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">UN SDGs</span>
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            At Bio-Aryavedic Naturals Pvt. Ltd., sustainability is not an add-on-it is the foundation of our innovation.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <p className="text-lg text-gray-600 leading-relaxed">
              Through our patented cassava-based biopolymer technology, we actively contribute to multiple United Nations Sustainable Development Goals (SDGs) by reducing pollution, enabling responsible manufacturing, empowering communities, and advancing climate-positive solutions in textile care.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl" data-aos="fade-up">
            <img 
              src="/assets/images/sdg_goals.webp" 
              alt="UN Sustainable Development Goals" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* SDGs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdgs.map((sdg, index) => (
              <div 
                key={sdg.id} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`w-14 h-14 ${sdg.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  {sdg.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{sdg.title}</h3>
                <p className="text-sm font-semibold text-gray-500 mb-4 italic leading-tight">{sdg.subtitle}</p>
                <ul className="space-y-3 mt-4 flex-grow border-t border-gray-50 pt-4">
                  {sdg.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact in Action & Global Purpose */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-display">Our Impact in Action</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through albedon and our broader technology platform, Bio-Aryavedic Naturals enables textile manufacturers, institutions, and households to become active participants in climate action-transforming everyday textile care into a measurable sustainability intervention.
              </p>
              
              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-4">Aligned With a Global Purpose</h3>
                <p className="text-gray-700 italic font-medium mb-4 text-lg">
                  "Innovation must serve people, protect nature, and prepare industries for a sustainable future."
                </p>
                <p className="text-gray-600">
                  By aligning with the UN SDGs, we commit to building solutions that scale responsibly-creating value for industry, society, and the planet.
                </p>
              </div>
            </div>
            
            <div data-aos="fade-left" className="relative">
              <div className="bg-gradient-to-br from-[#1b5c70] to-[#19495a] rounded-3xl p-10 text-white relative z-10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Measurable Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-green-400">100%</div>
                    <div>
                      <div className="font-bold">Plant-Based</div>
                      <div className="text-sm text-blue-100">Feedstock and raw materials</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-blue-400">Up to 60%</div>
                    <div>
                      <div className="font-bold">Lower Chemical Load</div>
                      <div className="text-sm text-blue-100">In textile wastewater effluent</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-purple-400">Active</div>
                    <div>
                      <div className="font-bold">Air Pollutant Breakdown</div>
                      <div className="text-sm text-blue-100">Through photocatalytic activity</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Table Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sustainability & ESG Impact Metrics</h2>
            <p className="text-gray-600">Aligned with UN Sustainable Development Goals (SDGs)</p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-lg bg-white" data-aos="fade-up">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#1b5c70] text-white">
                <tr>
                  <th className="px-6 py-4 font-bold uppercase text-xs tracking-wider">SDG</th>
                  <th className="px-6 py-4 font-bold uppercase text-xs tracking-wider">Impact Area</th>
                  <th className="px-6 py-4 font-bold uppercase text-xs tracking-wider">Metric</th>
                  <th className="px-6 py-4 font-bold uppercase text-xs tracking-wider">Measurement Basis</th>
                  <th className="px-6 py-4 font-bold uppercase text-xs tracking-wider">Indicative Impact / Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {metrics.map((m, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-[#1b5c70] whitespace-nowrap">{m.sdg}</td>
                    <td className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap">{m.area}</td>
                    <td className="px-6 py-4 text-gray-600">{m.metric}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{m.basis}</td>
                    <td className="px-6 py-4 text-green-600 font-medium whitespace-nowrap">{m.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs text-gray-400 text-center italic">* Based on laboratory validation and comparative assessment protocols.</p>
        </div>
      </section>

      <Contact />
    </main>
  );
}

