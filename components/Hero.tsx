import React from "react";
import Link from "next/link";
import { Button } from "./Button";

interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <section className={`bg-neutral-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  p-body">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[600px] lg:min-h-[700px]">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm lg:text-base text-gray-400 uppercase tracking-[8px] lg:tracking-[10px] mb-4 lg:mb-6">
              New Product
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>
            <p className="text-gray-300 text-base lg:text-lg mb-8 lg:mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href="/headphones/xx99-mark-ii">
              <Button
                size="lg"
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider"
              >
                See Product
              </Button>
            </Link>
          </div>

          {/* Image Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] bg-gray-700 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-gray-400 text-sm">Headphones Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
