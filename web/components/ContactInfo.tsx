"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";

/**
 * Reusable Contact Information component
 * Displays contact details including phone, email, address, and business hours
 */
export default function ContactInfo() {
  return (
    <div className="space-y-4 sm:space-y-8">
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
          Get In Touch
        </h3>
        
        {/* Contact Details Grid */}
        <div className="space-y-4 sm:space-y-6">
          {/* Phone - Improved mobile layout */}
          <div className="group flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl sm:rounded-2xl border border-green-100/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02]">
            <div className="flex items-start space-x-3 sm:space-x-4 flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-green-500/30 transition-all duration-300">
                <FaPhone className="text-white text-base sm:text-lg" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-base sm:text-lg mb-1">Call Us</p>
                <p className="text-gray-600 text-sm sm:text-base font-medium break-all">+91-830-40-82080</p>
                <p className="text-xs sm:text-sm text-gray-500">Mon-Fri, 9AM-6PM IST</p>
              </div>
            </div>
            {/* WhatsApp Quick Contact Button - Full width on mobile */}
            <a
              href="https://wa.me/918304082080"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-full sm:w-auto px-4 sm:px-4 py-3 sm:py-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-[#25D366]/40 active:scale-95 sm:hover:scale-105 transition-all duration-300 group/wa touch-manipulation"
              aria-label="Contact us on WhatsApp"
              title="Chat with us on WhatsApp"
            >
              <FaWhatsapp className="text-white text-xl sm:text-lg group-hover/wa:scale-110 transition-transform duration-300" />
              <span className="text-white font-semibold text-base sm:text-sm whitespace-nowrap">Chat on WhatsApp</span>
            </a>
          </div>

          {/* Email - Improved mobile spacing */}
          <div className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl sm:rounded-2xl border border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
              <FaEnvelope className="text-white text-base sm:text-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-800 text-base sm:text-lg mb-1">Email Us</p>
              <p className="text-gray-600 text-sm sm:text-base font-medium break-all">info@aryavedicnaturals.com</p>
              <p className="text-xs sm:text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
            </div>
          </div>

          {/* Address - Better mobile text wrapping */}
          <div className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl sm:rounded-2xl border border-green-100/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-green-600/30 transition-all duration-300">
              <FaMapMarkerAlt className="text-white text-base sm:text-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-800 text-base sm:text-lg mb-2">Visit Our Lab</p>
              <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-1">
                <p className="font-medium">Bio-Aryavedic Naturals Pvt Ltd</p>
                <p>Integrated Startup Complex (ISC) – KSUM</p>
                <p>Kerala Technology Innovation Zone</p>
                <p>Kinfra Hi-Tech Park Main Rd, HMT Colony, Kalamassery</p>
                <p className="font-medium text-green-600">Kochi, Kerala, IN 683503</p>
              </div>
            </div>
          </div>

          {/* Business Hours - Improved mobile spacing */}
          <div className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl sm:rounded-2xl border border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-blue-600/30 transition-all duration-300">
              <FaClock className="text-white text-base sm:text-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-800 text-base sm:text-lg mb-1">Business Hours</p>
              <p className="text-gray-600 text-sm sm:text-base font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-xs sm:text-sm text-gray-500">Indian Standard Time (IST)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

