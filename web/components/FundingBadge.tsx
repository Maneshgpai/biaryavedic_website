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
      className={`fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-40 transition-all duration-500 ease-out ${
        isShowing 
          ? 'opacity-100 pointer-events-auto translate-y-0' 
          : 'opacity-0 pointer-events-none translate-y-4'
      }`}
    >
      <div 
        className="relative bg-gradient-to-br from-emerald-500 via-emerald-400 to-cyan-500 text-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-2xl max-w-full sm:max-w-sm cursor-pointer hover:scale-[1.02] hover:shadow-emerald-500/50 transition-all duration-300 border border-white/20 backdrop-blur-sm overflow-hidden group mx-auto"
        onClick={handleBadgeClick}
      >
        {/* Animated background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        {/* Content wrapper */}
        <div className="relative flex items-start gap-3 sm:gap-4">
          {/* Icon container with enhanced styling */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/25 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-white/30 group-hover:bg-white/35 group-hover:scale-110 transition-all duration-300">
            <FaRocket className="text-white w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg animate-pulse" />
          </div>
          
          {/* Text content */}
          <div className="flex-1 min-w-0 pt-0.5">
            {/* Badge label */}
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/20 text-[10px] sm:text-xs font-bold uppercase tracking-wide backdrop-blur-sm">
                🎉 Funding
              </span>
            </div>
            
            {/* Main heading */}
            <h3 className="font-bold text-sm sm:text-base mb-1 sm:mb-1.5 leading-tight">
              Seed Investment Secured!
            </h3>
            
            {/* Description */}
            <p className="text-xs sm:text-sm leading-relaxed opacity-95 line-clamp-2">
              Seed investment from Manorama Online Elevate
            </p>
            
            {/* CTA hint */}
            <p className="text-[10px] sm:text-xs mt-2 sm:mt-2.5 opacity-80 font-medium">
              Click to read more →
            </p>
          </div>
          
          {/* Close button with better design */}
          <button 
            onClick={handleClose}
            className="w-6 h-6 sm:w-7 sm:h-7 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0 group/close hover:rotate-90 hover:scale-110 backdrop-blur-sm border border-white/20"
            aria-label="Close notification"
          >
            <FaTimes className="text-white w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/close:scale-110 transition-transform" />
          </button>
        </div>
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full pointer-events-none"></div>
      </div>
    </div>
  );
} 