import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { FaArrowRight } from "react-icons/fa";

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
  volume,
  application,
  image,
  category,
  categoryColor,
  detailsLink,
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-sm ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-aos="flip-left" data-aos-delay="100">
      <div className={`h-48 bg-gradient-to-r bg-blue-100 flex items-center justify-center relative`}>
        <Image src={image} alt={name} width={200} height={150} className="max-w-full max-h-full object-contain" />
        <div className={`absolute top-3 left-3 ${category === 'B2B' ? 'bg-blue-600' : 'bg-green-600'} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide`}>
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-2">
          {category === 'B2B' ? 'Industrial Fabric Care' : 'Fabric Care for Home Use'}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-gray-600">{rating} ({reviewCount} reviews)</span>
        </div>
        
        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold text-gray-800">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <>
              <span className="text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
              {discount && (
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  {discount}% OFF
                </span>
              )}
            </>
          )}
        </div>
        
        {/* Promo Badge */}
        <div className="mb-3">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide inline-block shadow-lg animate-pulse">
            Website Order Promo
          </span>
        </div>
        
        {/* Delivery Info for B2C */}
        {category === 'B2C' && (
          <div className="mb-3">
            <span className="text-green-600 text-sm font-medium">Get it in 3 days *</span>
          </div>
        )}
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {/* Specs */}
        <div className="space-y-1 mb-4 text-sm text-gray-600">
          <p><strong className="text-gray-800">SKU:</strong> {sku}</p>
          <p><strong className="text-gray-800">Volume:</strong> {volume}</p>
          <p><strong className="text-gray-800">{category === 'B2B' ? 'Application' : 'Type'}:</strong> {application}</p>
        </div>
        
        {/* Know More Link */}
        <div className="mb-4">
          <Link href={detailsLink} className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-all relative">
            Know more <FaArrowRight className="text-xs ml-1 inline" />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 hover:w-full"></span>
          </Link>
        </div>
        
        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <AddToCartButton sku={sku} />
          <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            <span>Buy Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 