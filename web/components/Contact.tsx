"use client";

import { useState, useRef } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLeaf, FaPaperPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // reCAPTCHA validation
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        // Reset reCAPTCHA
        setRecaptchaToken(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to send message. Please try again.");
        // Reset reCAPTCHA on error
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setRecaptchaToken(null);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network error. Please check your connection and try again.");
      // Reset reCAPTCHA on error
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="space-y-8" data-aos="fade-right">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                {/* <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <FaPhone className="text-white text-sm" />
                </span> */}
                Get In Touch
              </h3>
              
              {/* Contact Details Grid */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-green-500/30 transition-all duration-300">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-lg mb-1">Call Us</p>
                    <p className="text-gray-600 text-base font-medium">+91-830-40-82080</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-lg mb-1">Email Us</p>
                    <p className="text-gray-600 text-base font-medium">info@aryavedicnaturals.com</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-green-600/30 transition-all duration-300">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-lg mb-2">Visit Our Lab</p>
                    <div className="text-gray-600 text-base leading-relaxed space-y-1">
                      <p className="font-medium">KRIBS BIONEST</p>
                      <p>Door No: XII / 486 / A, Ground Floor</p>
                      <p>Kerala Technology Innovation Zone</p>
                      <p>Kinfra Hi-Tech Park, Kalamassery</p>
                      <p className="font-medium text-green-600">Kochi, Kerala, IN 683 503</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-blue-600/30 transition-all duration-300">
                    <FaClock className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-lg mb-1">Business Hours</p>
                    <p className="text-gray-600 text-base font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-500">Indian Standard Time (IST)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="relative" data-aos="fade-left">
            {/* Glassmorphism Form Container */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/30 relative overflow-hidden">
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-400 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400 to-green-400 rounded-full translate-y-16 -translate-x-16"></div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-3 font-display">Send us a Message</h3>
                  <p className="text-gray-600">We&apos;d love to hear about your sustainability goals</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-500 text-gray-800 font-medium shadow-sm hover:shadow-md"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-500 text-gray-800 font-medium shadow-sm hover:shadow-md"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-500 text-gray-800 font-medium shadow-sm hover:shadow-md"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-500 text-gray-800 font-medium shadow-sm hover:shadow-md"
                      placeholder="+91-830-40-82080"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 text-gray-800 font-medium shadow-sm hover:shadow-md"
                    >
                      <option value="">Choose a topic</option>
                      <option value="b2c">B2C Products</option>
                      <option value="b2b">B2B Solutions</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-semibold text-sm uppercase tracking-wide">Message *</label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-500 text-gray-800 font-medium shadow-sm hover:shadow-md resize-none"
                      placeholder="Tell us about your sustainability goals and how we can help..."
                      required
                    ></textarea>
                  </div>
                  
                  {/* reCAPTCHA */}
                  <div className="flex justify-center">
                    <div className="transform scale-95 hover:scale-100 transition-transform duration-300">
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                        onChange={handleRecaptchaChange}
                        ref={recaptchaRef}
                        theme="light"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative w-full py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 overflow-hidden ${
                      isSubmitting
                        ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                    }`}
                  >
                    {/* Button Shimmer Effect */}
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    )}
                    
                    <span className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </form>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-gray-200/50">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Secure & Private
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      24h Response
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      No Spam
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 