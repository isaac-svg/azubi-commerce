import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <section
      className={`bg-neutral-900 text-white relative overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/home/desktop/image-hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-lg text-center lg:text-left">
          <p className="text-sm lg:text-base text-gray-400 uppercase tracking-[8px] lg:tracking-[10px] mb-4 lg:mb-6">
            New Product
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
            XX99 MARK II
            <br />
            HEADPHONES
          </h1>
          <p className="text-gray-300 text-base lg:text-lg mb-8 lg:mb-12 leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="/headphones/xx99-mark-two-headphones">
            <Button
              size="lg"
              className="px-8 py-4 text-sm font-bold uppercase tracking-wider"
            >
              See Product
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
