"use client";

import { useState, useEffect } from 'react';
import { FaRocket, FaTimes } from 'react-icons/fa';

export default function FundingBadge() {
  const [isVisible, setIsVisible] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    // Safety check for localStorage (SSR compatibility)
    if (typeof window === 'undefined') return;
    
    // Check if user has previously closed the alert
    const hasClosedAlert = localStorage.getItem('fundingAlertClosed') === 'true';
    
    if (!hasClosedAlert) {
      // Show floating badge after page loads (2 second delay for testing)
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Small delay for smooth animation
        setTimeout(() => setIsShowing(true), 100);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsShowing(false);
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setIsVisible(false);
      if (typeof window !== 'undefined') {
        localStorage.setItem('fundingAlertClosed', 'true');
      }
    }, 500);
  };

  const handleBadgeClick = () => {
    window.open('https://www.manoramaonline.com/business/business-news/2025/05/16/albedon-eco-friendly-fabric-stiffener-spray-manorama-online-elevate-business-news-jin.html', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
        isShowing ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-4 rounded-2xl shadow-2xl max-w-xs cursor-pointer hover:scale-105 transition-transform"
        onClick={handleBadgeClick}
      >
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
            <FaRocket className="text-white w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm mb-1">Funding alert!</p>
            <p className="text-xs opacity-90 line-clamp-2">Seed investment from Manorama Online Elevate</p>
          </div>
          <button 
            onClick={handleClose}
            className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all flex-shrink-0"
          >
            <FaTimes className="text-white w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
} 