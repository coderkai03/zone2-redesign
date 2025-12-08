"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";

const categories = ["All", "Frames", "Sunglasses", "Kids", "Sports"];

const products = [
  {
    id: 1,
    name: "Classic Aviator",
    category: "Sunglasses",
    brand: "Ray-Ban Style",
    price: "$189",
    color: "Gold/Green",
    isNew: true,
  },
  {
    id: 2,
    name: "Modern Rectangle",
    category: "Frames",
    brand: "Designer Collection",
    price: "$249",
    color: "Matte Black",
    isNew: false,
  },
  {
    id: 3,
    name: "Round Tortoise",
    category: "Frames",
    brand: "Premium Line",
    price: "$199",
    color: "Tortoise Shell",
    isNew: true,
  },
  {
    id: 4,
    name: "Kids Adventure",
    category: "Kids",
    brand: "Junior Collection",
    price: "$129",
    color: "Blue/Orange",
    isNew: false,
  },
  {
    id: 5,
    name: "Sport Performance",
    category: "Sports",
    brand: "Active Series",
    price: "$279",
    color: "Black/Red",
    isNew: false,
  },
  {
    id: 6,
    name: "Cat Eye Elegance",
    category: "Frames",
    brand: "Fashion Forward",
    price: "$229",
    color: "Rose Gold",
    isNew: true,
  },
  {
    id: 7,
    name: "Wayfarer Classic",
    category: "Sunglasses",
    brand: "Timeless Collection",
    price: "$169",
    color: "Black",
    isNew: false,
  },
  {
    id: 8,
    name: "Flex Kids",
    category: "Kids",
    brand: "Junior Collection",
    price: "$99",
    color: "Pink/Purple",
    isNew: false,
  },
  {
    id: 9,
    name: "Wraparound Sport",
    category: "Sports",
    brand: "Active Series",
    price: "$199",
    color: "White/Blue",
    isNew: true,
  },
  {
    id: 10,
    name: "Minimalist Metal",
    category: "Frames",
    brand: "Contemporary",
    price: "$179",
    color: "Silver",
    isNew: false,
  },
  {
    id: 11,
    name: "Polarized Driver",
    category: "Sunglasses",
    brand: "Premium Line",
    price: "$259",
    color: "Gunmetal",
    isNew: false,
  },
  {
    id: 12,
    name: "Colorful Kids",
    category: "Kids",
    brand: "Junior Collection",
    price: "$89",
    color: "Rainbow",
    isNew: true,
  },
];

const brands = [
  "Ray-Ban",
  "Oakley",
  "Tom Ford",
  "Prada",
  "Gucci",
  "Maui Jim",
  "Costa",
  "Coach",
];

export default function EyewearPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showTryOnModal, setShowTryOnModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleTryOn = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setShowTryOnModal(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--light-blue)] via-white to-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-blue)]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">Eyewear Gallery</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--navy)] mt-2 mb-6 font-[var(--font-heading)]">
              Stylish Eyewear Selection
            </h1>
            <p className="text-lg text-[var(--text-gray)] leading-relaxed">
              Discover a world of elegance and functionality with our designer eyewear collection. Your eyewear is an expression of your style and personality.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-12 bg-white border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-[var(--text-gray)] mb-6">Featuring Premium Brands</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-[var(--dark-gray)] font-semibold opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[var(--muted)] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[var(--primary-blue)] text-white"
                    : "bg-white text-[var(--dark-gray)] hover:bg-[var(--light-blue)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
              >
                <Card className="group relative overflow-hidden">
                  {product.isNew && (
                    <span className="absolute top-4 right-4 px-2 py-1 bg-[var(--primary-blue)] text-white text-xs font-semibold rounded-full z-10">
                      NEW
                    </span>
                  )}
                  
                  {/* Product Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-[var(--light-blue)] to-[var(--muted)] rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-20 h-20 text-[var(--primary-blue)]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 0a3 3 0 110-6 3 3 0 010 6zm6 0a3 3 0 110-6 3 3 0 010 6z" />
                    </svg>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-[var(--primary-blue)] font-medium">{product.brand}</p>
                    <h3 className="text-lg font-semibold text-[var(--navy)]">{product.name}</h3>
                    <p className="text-sm text-[var(--text-gray)]">{product.color}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-lg font-bold text-[var(--navy)]">{product.price}</span>
                      <button
                        onClick={() => handleTryOn(product)}
                        className="text-sm text-[var(--primary-blue)] font-medium hover:underline"
                      >
                        Try On
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--text-gray)]">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* In-Store Experience */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--primary-blue)] font-semibold text-sm uppercase tracking-wider">In-Store Experience</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mt-2 mb-6 font-[var(--font-heading)]">
                Visit Us for Expert Guidance
              </h2>
              <p className="text-[var(--text-gray)] leading-relaxed mb-6">
                While browsing online gives you a preview of our collection, nothing beats the in-store experience. Our trained staff will help you find the perfect frames that complement your face shape, lifestyle, and budget.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--dark-gray)]">Expert frame fitting and adjustments</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--dark-gray)]">Personalized style consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--dark-gray)]">Lens options and upgrades explained</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--dark-gray)]">Quick turnaround on orders</span>
                </li>
              </ul>
              <Link href="/appointments">
                <Button variant="primary">
                  Schedule a Visit
                </Button>
              </Link>
            </div>

            <Card className="bg-gradient-to-br from-[var(--navy)] to-[var(--primary-blue)] text-white" padding="lg" hover={false}>
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-[var(--font-heading)]">Visit Our Store</h3>
                <p className="text-white/70 mb-6">
                  2795 W Lincoln Ave. Ste L<br />
                  Anaheim, CA 92801
                </p>
                <div className="text-sm text-white/60">
                  <p>Mon, Tue, Thu, Fri: 10am - 6pm</p>
                  <p>Saturday: 9am - 4pm</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Try On Modal */}
      {showTryOnModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 animate-fade-in">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[var(--navy)]">Virtual Try-On</h3>
              <button
                onClick={() => setShowTryOnModal(false)}
                className="p-2 hover:bg-[var(--muted)] rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="aspect-[4/3] bg-[var(--muted)] rounded-xl mb-4 flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="w-16 h-16 mx-auto text-[var(--text-gray)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[var(--text-gray)]">Camera access required for virtual try-on</p>
                <p className="text-sm text-[var(--text-gray)]/70 mt-2">This is a demo feature</p>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <div className="flex-1 bg-[var(--muted)] rounded-lg p-3">
                <p className="text-xs text-[var(--text-gray)]">Selected</p>
                <p className="font-semibold text-[var(--navy)]">{selectedProduct.name}</p>
              </div>
              <div className="flex-1 bg-[var(--muted)] rounded-lg p-3">
                <p className="text-xs text-[var(--text-gray)]">Price</p>
                <p className="font-semibold text-[var(--navy)]">{selectedProduct.price}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" fullWidth onClick={() => setShowTryOnModal(false)}>
                Close
              </Button>
              <Link href="/appointments" className="flex-1">
                <Button variant="primary" fullWidth>
                  Book Fitting
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

