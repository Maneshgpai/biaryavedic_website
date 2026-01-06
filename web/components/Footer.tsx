"use client";

import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram,
  FaEnvelope,
  FaPaperPlane,
  FaShieldAlt,
  FaHeart
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "20px 20px" }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent font-display">Bio-Aryavedic</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mb-4" />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">Revolutionizing fabric care with sustainable, technology-driven solutions for a better tomorrow.</p>
            <div className="flex space-x-3">
              <a href="#" className="group w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"><FaFacebook className="text-white group-hover:scale-110 transition-transform duration-300" /></a>
              <a href="#" className="group w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"><FaTwitter className="text-white group-hover:scale-110 transition-transform duration-300" /></a>
              <a href="https://www.linkedin.com/company/aryavedicnaturals/" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"><FaLinkedin className="text-white group-hover:scale-110 transition-transform duration-300" /></a>
              <a href="#" className="group w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"><FaInstagram className="text-white group-hover:scale-110 transition-transform duration-300" /></a>
            </div>
          </div>

          <div className="lg:col-span-6 grid md:grid-cols-3 gap-8">
            <div className="group">
              <h4 className="text-xl font-semibold mb-6 text-white relative">Products<div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></div></h4>
              <ul className="space-y-3">
                <li><Link href="/products/b2c" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center group/link"><span className="w-0 group-hover/link:w-2 h-0.5 bg-emerald-400 mr-0 group-hover/link:mr-3 transition-all duration-300"></span>B2C Solutions</Link></li>
                <li><Link href="/products/b2b" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center group/link"><span className="w-0 group-hover/link:w-2 h-0.5 bg-emerald-400 mr-0 group-hover/link:mr-3 transition-all duration-300"></span>B2B Enterprise</Link></li>
              </ul>
            </div>
            <div className="group">
              <h4 className="text-xl font-semibold mb-6 text-white relative">Company<div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></div></h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center group/link"><span className="w-0 group-hover/link:w-2 h-0.5 bg-emerald-400 mr-0 group-hover/link:mr-3 transition-all duration-300"></span>About Us</Link></li>
                <li><a href="https://www.linkedin.com/company/aryavedicnaturals/jobs/" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center group/link"><span className="w-0 group-hover/link:w-2 h-0.5 bg-emerald-400 mr-0 group-hover/link:mr-3 transition-all duration-300"></span>Careers</a></li>
                <li><Link href="/resources" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center group/link"><span className="w-0 group-hover/link:w-2 h-0.5 bg-emerald-400 mr-0 group-hover/link:mr-3 transition-all duration-300"></span>Press</Link></li>
                <li><Link href="/about#contact-component" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center group/link"><span className="w-0 group-hover/link:w-2 h-0.5 bg-emerald-400 mr-0 group-hover/link:mr-3 transition-all duration-300"></span>Contact</Link></li>
              </ul>
            </div>
            <div className="group">
              <h4 className="text-xl font-semibold mb-6 text-white relative">Support<div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></div></h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center group/link"><span className="w-0 group-hover/link:w-2 h-0.5 bg-emerald-400 mr-0 group-hover/link:mr-3 transition-all duration-300"></span>Help Center</a></li>
                <li><a href="mailto:info@aryavedicnaturals.com" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center group/link"><span className="w-0 group-hover/link:w-2 h-0.5 bg-emerald-400 mr-0 group-hover/link:mr-3 transition-all duration-300"></span>Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center group/link"><span className="w-0 group-hover/link:w-2 h-0.5 bg-emerald-400 mr-0 group-hover/link:mr-3 transition-all duration-300"></span>Shipping Info</a></li>
                {/* <li><a href="#" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center group/link"><span className="w-0 group-hover/link:w-2 h-0.5 bg-emerald-400 mr-0 group-hover/link:mr-3 transition-all duration-300"></span>Returns & Exchanges</a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 flex items-center group/link"><span className="w-0 group-hover/link:w-2 h-0.5 bg-emerald-400 mr-0 group-hover/link:mr-3 transition-all duration-300"></span>Warranty</a></li> */}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="group">
              <h4 className="text-xl font-semibold mb-6 text-white relative">Newsletter<div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></div></h4>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">Stay updated with our latest innovations and sustainability initiatives.</p>
                <form className="newsletter-form space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400 group-focus-within/input:text-emerald-400 transition-colors duration-300" />
                    </div>
                    <input type="email" placeholder="Enter your email address" className="w-full pl-12 pr-4 py-4 bg-slate-800/60 border border-slate-600/50 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-slate-800/80 text-white placeholder-gray-400 transition-all duration-300 hover:border-slate-500" />
                  </div>
                  <button type="submit" className="group/btn w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center space-x-3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Subscribe Now</span>
                    <FaPaperPlane className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                  </button>
                </form>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <FaShieldAlt className="text-emerald-400" />
                  <span>We respect your privacy. Unsubscribe at any time.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-gray-300 text-center sm:text-left">&copy; 2025 Bio-Aryavedic Naturals. All rights reserved.</p>
              <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
              <p className="text-emerald-400 text-sm font-medium flex items-center space-x-1"><span>Made with</span><FaHeart className="text-emerald-400 animate-pulse" /><span>for a sustainable future</span></p>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-emerald-300 transition-colors duration-300 text-sm font-medium">Terms of Service</Link>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <Link href="/cookies" className="text-gray-400 hover:text-emerald-300 transition-colors duration-300 text-sm font-medium">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-teal-500/10 to-transparent rounded-full blur-3xl"></div>
    </footer>
  );
} 