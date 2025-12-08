"use client";

import { useState } from "react";
import { TestimonialCard } from "./Card";

const testimonials = [
  {
    quote: "Zone 2 is my go-to for eye care needs. Dr. Kim's thorough eye exam gave me confidence in my daughter's prescription, and Ann Marie's expert guidance helped us choose frames that not only enhanced her vision but also reflect her personal style.",
    author: "Samantha J.",
    title: "Clear Vision and Stylish Frames",
  },
  {
    quote: "Dr. Thompson at Zone 2 made my transition to contact lenses a breeze. His precise fitting and patient training sessions were invaluable. Now, I enjoy clear vision without the hassle of glasses.",
    author: "Michael R.",
    title: "Seamless Transition to Contact Lenses",
  },
  {
    quote: "Dr. Lee at Zone 2 provided exceptional care for my child. Her gentle approach and thorough exam reassured me as a parent. Zone 2's commitment to specialized pediatric eye care makes them the top choice for families seeking professional care.",
    author: "Lisa M.",
    title: "Pediatric Eye Care Excellence",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      {/* Desktop View - Show all cards */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      {/* Mobile/Tablet View - Carousel */}
      <div className="lg:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-[var(--light-blue)] text-[var(--primary-blue)] flex items-center justify-center hover:bg-[var(--primary-blue)] hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-[var(--primary-blue)] w-6"
                    : "bg-[var(--border)] hover:bg-[var(--text-gray)]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[var(--light-blue)] text-[var(--primary-blue)] flex items-center justify-center hover:bg-[var(--primary-blue)] hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

