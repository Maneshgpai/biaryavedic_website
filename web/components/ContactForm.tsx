"use client";

import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

// Declare grecaptcha type for TypeScript
declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSuccess?: () => void;
  defaultSubject?: string;
}

/**
 * Reusable Contact Form component
 * Handles form submission with reCAPTCHA validation
 */
export default function ContactForm({ onSuccess, defaultSubject = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: defaultSubject,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  // Check if reCAPTCHA is loaded
  useEffect(() => {
    const checkRecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.enterprise) {
        setRecaptchaLoaded(true);
      } else {
        // Retry after a short delay if not loaded yet
        setTimeout(checkRecaptcha, 100);
      }
    };
    checkRecaptcha();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Execute reCAPTCHA v3 and get token
  const getRecaptchaToken = async (): Promise<string | null> => {
    if (!recaptchaSiteKey) {
      console.error("reCAPTCHA site key is not configured");
      toast.error("reCAPTCHA is not configured. Please contact support.");
      return null;
    }

    if (!recaptchaLoaded || !window.grecaptcha?.enterprise) {
      toast.error("reCAPTCHA is still loading. Please try again.");
      return null;
    }

    try {
      return new Promise((resolve) => {
        window.grecaptcha.enterprise.ready(async () => {
          try {
            const token = await window.grecaptcha.enterprise.execute(recaptchaSiteKey, {
              action: 'contact_form_submit'
            });
            resolve(token);
          } catch (error) {
            console.error("Error executing reCAPTCHA:", error);
            toast.error("Failed to verify reCAPTCHA. Please try again.");
            resolve(null);
          }
        });
      });
    } catch (error) {
      console.error("Error getting reCAPTCHA token:", error);
      toast.error("Failed to verify reCAPTCHA. Please try again.");
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Check if reCAPTCHA is configured
    if (!recaptchaSiteKey) {
      toast.error("reCAPTCHA is not configured. Please contact support.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await getRecaptchaToken();
      
      if (!recaptchaToken) {
        setIsSubmitting(false);
        return;
      }

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
          subject: defaultSubject,
          message: "",
        });
        // Call success callback if provided
        if (onSuccess) {
          onSuccess();
        }
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Glassmorphism Form Container - Improved mobile padding */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 xl:p-10 border border-white/30 relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-400 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400 to-green-400 rounded-full translate-y-16 -translate-x-16"></div>
        </div>

        <div className="relative z-10">
          {/* Header - Compact on mobile */}
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 font-display">Send us a Message</h3>
            <p className="text-gray-600 text-sm sm:text-base">We&apos;d love to hear about your sustainability goals</p>
          </div>

          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Name fields - Stack on mobile, side-by-side on tablet+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-500 text-gray-800 font-medium shadow-sm hover:shadow-md text-base"
                  placeholder="John"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-500 text-gray-800 font-medium shadow-sm hover:shadow-md text-base"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            
            {/* Email - Improved mobile input */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-500 text-gray-800 font-medium shadow-sm hover:shadow-md text-base"
                placeholder="john@example.com"
                required
              />
            </div>
            
            {/* Phone - Improved mobile input */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-500 text-gray-800 font-medium shadow-sm hover:shadow-md text-base"
                placeholder="+91-830-40-82080"
              />
            </div>
            
            {/* Subject - Improved mobile select */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 text-gray-800 font-medium shadow-sm hover:shadow-md text-base"
              >
                <option value="">Choose a topic</option>
                <option value="b2c">B2C Products</option>
                <option value="b2b">B2B Solutions</option>
                <option value="partnership">Partnership</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            {/* Message - Improved mobile textarea */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">Message *</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300 placeholder-gray-500 text-gray-800 font-medium shadow-sm hover:shadow-md resize-none text-base"
                placeholder="Tell us about your sustainability goals and how we can help..."
                required
              ></textarea>
            </div>
            
            {/* reCAPTCHA v3 is invisible and runs automatically on submit */}
            {!recaptchaSiteKey && (
              <div className="text-center text-red-500 text-sm py-2">
                ⚠️ reCAPTCHA is not configured. Contact form may not work properly.
              </div>
            )}
            
            {/* Submit Button - Larger touch target on mobile */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full py-4 sm:py-4 px-8 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 overflow-hidden touch-manipulation ${
                isSubmitting
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-[1.02] sm:active:scale-[0.98]"
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

          {/* Trust Indicators - Better mobile layout */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200/50">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
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
  );
}

