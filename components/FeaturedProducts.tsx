import React from "react";
import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";

interface FeaturedProductsProps {
  className?: string;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  className = "",
}) => {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* ZX9 Speaker - Large Feature */}
        <div className="bg-[var(--color-rust)] rounded-lg overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/assets/home/desktop/pattern-circles.svg"
              alt=""
              width={944}
              height={944}
              className="absolute -top-16 -right-16 lg:-top-32 lg:-right-32 opacity-50"
            />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-16 xl:p-20">
            {/* Image - Now on the left */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-48 h-64 lg:w-64 lg:h-80 xl:w-80 xl:h-96">
                <Image
                  src="/assets/home/desktop/image-speaker-zx9.png"
                  alt="ZX9 Speaker"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text - Now on the right */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                ZX9
                <br />
                SPEAKER
              </h2>
              <p className="text-white/90 text-base lg:text-lg mb-8 lg:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href="/speakers/zx9-speaker">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-black text-white border-black hover:bg-gray-800 px-8 py-4 text-sm font-bold uppercase tracking-wider"
                >
                  See Product
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* ZX7 Speaker - Medium Feature */}
        <div className="relative rounded-lg overflow-hidden min-h-[320px]">
          <div className="absolute inset-0">
            <Image
              src="/assets/home/desktop/image-speaker-zx7.jpg"
              alt="ZX7 Speaker"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 flex items-center h-full p-8 lg:p-16">
            <div className="max-w-md">
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 lg:mb-8">
                ZX7 SPEAKER
              </h3>
              <Link href="/speakers/zx7-speaker">
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-8 py-4 text-sm font-bold uppercase tracking-wider"
                >
                  See Product
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* YX1 Earphones - Small Feature */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="relative rounded-lg overflow-hidden h-64 lg:h-80">
            <Image
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-neutral-100 rounded-lg flex items-center p-8 lg:p-12">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 lg:mb-8">
                YX1 EARPHONES
              </h3>
              <Link href="/earphones/yx1-earphones">
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-8 py-4 text-sm font-bold uppercase tracking-wider"
                >
                  See Product
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
