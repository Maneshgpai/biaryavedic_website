"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaPlay } from "react-icons/fa";

export default function Hero() {
  const [counters, setCounters] = useState({
    customers: 0,
    products: 0,
    partners: 0,
    years: 0
  });

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const animateCounters = () => {
      const targets = { customers: 500, products: 2, partners: 2, years: 3 };
      // Base duration in milliseconds - adjust based on target value
      const baseDuration = 2000;
      // Calculate steps based on target value for smooth animation
      // Larger numbers need more steps for smooth counting effect
      const calculateSteps = (target: number) => {
        if (target <= 5) return 30; // Small numbers: 30 steps
        if (target <= 50) return 60; // Medium numbers: 60 steps
        return 100; // Large numbers: 100 steps for smooth animation
      };

      Object.keys(targets).forEach((key) => {
        const target = targets[key as keyof typeof targets];
        const steps = calculateSteps(target);
        const stepTime = baseDuration / steps;
        let current = 0;
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, stepTime);
      });
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden video-bg w-full">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
        </video>
        
        {/* Animated Overlay */}
        <div className="absolute inset-0 video-overlay z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto w-full">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-display max-w-full" data-aos="fade-up" data-aos-offset="50">
            Fabrics for a <br /><span className="text-green-400">Better Tomorrow</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200" data-aos-offset="50">
            Revolutionary bio-hybrid technology meets ancient wisdom to create sustainable fabric care solutions for homes and industries worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 max-w-full" data-aos="fade-up" data-aos-delay="400" data-aos-offset="50">
            <Link
              href="#products"
              className="btn-primary bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all inline-flex items-center justify-center max-w-full"
            >
              Explore Products
              <FaShoppingCart className="ml-2" />
            </Link>
            <a
              href="https://youtu.be/7SJWcUCRWNM?si=g7rbFx8ZSxXgI_JL&t=48"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all inline-flex items-center justify-center max-w-full"
            >
              Watch Story
              <FaPlay className="ml-2" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator - Fixed positioning */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-300" data-aos="fade-up" data-aos-delay="600" data-aos-offset="30">
            <div className="flex flex-col items-center animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-sm mt-2 opacity-80 text-white whitespace-nowrap">Scroll to explore</p>
            </div>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white w-full overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-offset="50">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{counters.customers}+</div>
              <p className="text-gray-600 font-semibold">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{counters.products}</div>
              <p className="text-gray-600 font-semibold">Products Developed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">{counters.partners}</div>
              <p className="text-gray-600 font-semibold">Business Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{counters.years}</div>
              <p className="text-gray-600 font-semibold">Years Innovation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 