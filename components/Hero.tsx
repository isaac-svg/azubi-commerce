"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={heroRef}
      className={`bg-neutral-900 text-white relative overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/home/desktop/image-hero.jpg"
          alt="Hero Background"
          fill
          className={`object-cover object-center transition-all duration-1000 ease-out ${
            isVisible 
              ? "scale-100 opacity-100" 
              : "scale-110 opacity-0"
          }`}
          priority
        />
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className={`max-w-lg text-center lg:text-left transition-all duration-1000 ease-out delay-500 ${
          isVisible 
            ? "translate-y-0 opacity-100" 
            : "translate-y-8 opacity-0"
        }`}>
          <p className={`text-sm lg:text-base text-gray-400 uppercase tracking-[8px] lg:tracking-[10px] mb-4 lg:mb-6 transition-all duration-800 ease-out delay-700 ${
            isVisible 
              ? "translate-y-0 opacity-100" 
              : "translate-y-4 opacity-0"
          }`}>
            New Product
          </p>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight transition-all duration-1000 ease-out delay-900 ${
            isVisible 
              ? "translate-y-0 opacity-100" 
              : "translate-y-6 opacity-0"
          }`}>
            XX99 MARK II
            <br />
            HEADPHONES
          </h1>
          <p className={`text-gray-300 text-base lg:text-lg mb-8 lg:mb-12 leading-relaxed transition-all duration-800 ease-out delay-1100 ${
            isVisible 
              ? "translate-y-0 opacity-100" 
              : "translate-y-4 opacity-0"
          }`}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div className={`transition-all duration-600 ease-out delay-1300 ${
            isVisible 
              ? "translate-y-0 opacity-100" 
              : "translate-y-4 opacity-0"
          }`}>
            <Link href="/headphones/xx99-mark-two-headphones">
              <Button
                size="lg"
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                See Product
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
