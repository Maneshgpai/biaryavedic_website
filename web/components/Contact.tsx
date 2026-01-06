"use client";

import { FaLeaf } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-green-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-green-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            color: '#374151',
            border: '1px solid rgba(34, 197, 94, 0.2)',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          },
          success: {
            style: {
              background: 'rgba(34, 197, 94, 0.95)',
              color: '#ffffff',
              border: '1px solid rgba(34, 197, 94, 0.3)',
            },
          },
          error: {
            style: {
              background: 'rgba(239, 68, 68, 0.95)',
              color: '#ffffff',
              border: '1px solid rgba(239, 68, 68, 0.3)',
            },
          },
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6 shadow-lg">
            <FaLeaf className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 font-display">
            Let&apos;s <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your fabric care journey? We&apos;d love to hear from you and explore how our sustainable solutions can make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <ContactInfo />
          </div>
          
          {/* Contact Form */}
          <div data-aos="fade-left">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
} 