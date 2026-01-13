"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

/**
 * Contact Modal component
 * Reuses ContactInfo and ContactForm components in a modal overlay
 */
export default function ContactModal({ isOpen, onClose, defaultSubject = "" }: ContactModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Render modal using portal to escape parent constraints
  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-w-6xl w-full h-[95vh] sm:h-auto sm:max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Larger and more accessible on mobile */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-full transition-colors duration-200 touch-manipulation"
          aria-label="Close modal"
        >
          <FaTimes className="text-gray-600 text-xl sm:text-lg" />
        </button>

        {/* Modal Content - Improved mobile padding and spacing */}
        <div className="p-4 sm:p-6 lg:p-10 flex-1 flex flex-col min-h-0">
          {/* Header - Compact on mobile */}
          <div className="text-center mb-4 sm:mb-6 lg:mb-8 flex-shrink-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 font-display">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              We&apos;d love to hear from you and explore how we can help
            </p>
          </div>

          {/* Grid Layout - Stacks vertically on mobile, side-by-side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start flex-1 min-h-0 overflow-y-auto">
            {/* Contact Information - Full width on mobile */}
            <div className="lg:sticky lg:top-4 order-2 lg:order-1 min-w-0">
              <ContactInfo />
            </div>

            {/* Contact Form - Full width on mobile, appears first */}
            <div className="order-1 lg:order-2 min-w-0">
              <ContactForm 
                onSuccess={onClose} 
                defaultSubject={defaultSubject}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Use portal to render modal at document body level, outside parent constraints
  if (typeof window !== "undefined") {
    return createPortal(modalContent, document.body);
  }

  return null;
}

