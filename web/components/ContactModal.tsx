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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
          aria-label="Close modal"
        >
          <FaTimes className="text-gray-600 text-lg" />
        </button>

        {/* Modal Content */}
        <div className="p-6 lg:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 font-display">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">
              We&apos;d love to hear from you and explore how we can help
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="lg:sticky lg:top-4">
              <ContactInfo />
            </div>

            {/* Contact Form */}
            <div>
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

