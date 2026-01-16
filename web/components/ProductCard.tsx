/**
 * Product Card Component
 * 
 * Displays a product with:
 * - Image gallery
 * - Product details (name, price, rating, etc.)
 * - Add to Cart / Buy Now buttons (for B2C)
 * - Contact Us button (for B2B)
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { FaArrowRight } from "react-icons/fa";
import BuyNowButton from "./BuyNowButton";
import ContactModal from "./ContactModal";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  sku: string;
  variantId?: string;  // Optional: for direct cart operations
  volume: string;
  application: string;
  image: string;
  category: "B2B" | "B2C";
  categoryColor: string;
  detailsLink: string;
}

export default function ProductCard({
  name,
  description,
  price,
  originalPrice,
  discount,
  rating,
  reviewCount,
  sku,
  variantId,
  volume,
  application,
  image,
  category,
  detailsLink,
}: ProductCardProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-base ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  const isB2B = category === "B2B";
  const categoryBgColor = category === 'B2B' ? 'bg-blue-600' : 'bg-green-600';
  const categoryGradient = category === 'B2B' 
    ? 'from-blue-50 via-blue-100 to-blue-50' 
    : 'from-green-50 via-green-100 to-green-50';

  return (
    <div 
      className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100" 
      data-aos="flip-left" 
      data-aos-delay="100"
    >
      {/* Image Section */}
      <div className={`relative h-56 bg-gradient-to-br ${categoryGradient} overflow-hidden`}>
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
        </div>
        
        {/* Product Image */}
        <div className="relative h-full flex items-center justify-center p-6 transform group-hover:scale-105 transition-transform duration-500">
          <Image 
            src={image} 
            alt={name} 
            width={220} 
            height={180} 
            className="max-w-full max-h-full object-contain drop-shadow-lg" 
          />
        </div>
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 ${categoryBgColor} text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm`}>
          {category}
        </div>
        
        {/* Discount Badge for B2C */}
        {!isB2B && discount && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse">
            {discount}% OFF
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Category Label */}
        <div className="text-xs text-gray-500 font-semibold uppercase tracking-widest">
          {category === 'B2B' ? 'Industrial Fabric Care' : 'Fabric Care for Home Use'}
        </div>
        
        {/* Product Name */}
        <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
        
        {/* Rating Section */}
        <div className="flex items-center gap-2.5">
          <div className="flex gap-0.5">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-gray-600 font-medium">
            {rating} <span className="text-gray-400">({reviewCount} reviews)</span>
          </span>
        </div>
        
        {/* Price Section */}
        <div className="flex items-baseline gap-3 py-2">
          {isB2B ? (
            <span className="text-2xl font-bold text-gray-800">Contact for Price</span>
          ) : (
            <>
              <span className="text-3xl font-bold text-gray-900">₹{price.toLocaleString()}</span>
              {originalPrice && (
                <span className="text-lg text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
              )}
            </>
          )}
        </div>
        
        {/* Promo Badge for B2C */}
        {category === 'B2C' && (
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
              Website Order Promo
            </span>
            <span className="text-green-600 text-sm font-semibold">Get it in 3 days *</span>
          </div>
        )}
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        
        {/* Specifications Grid */}
        <div className="grid grid-cols-1 gap-2 pt-2 pb-1">
          <div className="flex items-center justify-between py-1.5 px-3 bg-gray-50 rounded-lg">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">SKU</span>
            <span className="text-sm font-medium text-gray-800">{sku}</span>
          </div>
          <div className="flex items-center justify-between py-1.5 px-3 bg-gray-50 rounded-lg">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Volume</span>
            <span className="text-sm font-medium text-gray-800">{volume}</span>
          </div>
          <div className="flex items-center justify-between py-1.5 px-3 bg-gray-50 rounded-lg">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {category === 'B2B' ? 'Application' : 'Type'}
            </span>
            <span className="text-sm font-medium text-gray-800">{application}</span>
          </div>
        </div>
        
        {/* Know More Link */}
        <div className="pt-2">
          <Link 
            href={detailsLink} 
            className="inline-flex items-center text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors duration-300 group/link"
          >
            Know more
            <FaArrowRight className="ml-1.5 text-xs transform group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-100">
          {isB2B ? (
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wide hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Us
            </button>
          ) : (
            <>
              <AddToCartButton sku={sku} variantId={variantId} />
              <BuyNowButton sku={sku} variantId={variantId} />
            </>
          )}
        </div>
      </div>

      {/* Contact Modal for B2B Products */}
      {isB2B && (
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          defaultSubject="b2b"
        />
      )}
    </div>
  );
}
