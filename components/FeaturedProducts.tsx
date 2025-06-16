import React from "react";
import Link from "next/link";
import { Button } from "./Button";

interface FeaturedProductsProps {
  className?: string;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  className = "",
}) => {
  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {/* ZX9 Speaker - Large Feature */}
        <div className="bg-primary-500 rounded-lg lg:rounded-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-8 lg:p-16">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                ZX9
                <br />
                SPEAKER
              </h2>
              <p className="text-white/90 text-base lg:text-lg mb-8 lg:mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href="/speakers/zx9">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-black text-white border-black hover:bg-gray-800 px-8 py-4 text-sm font-bold uppercase tracking-wider"
                >
                  See Product
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-48 h-64 lg:w-64 lg:h-80 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">ZX9 Speaker Image</span>
              </div>
            </div>
          </div>
        </div>

        {/* ZX7 Speaker - Medium Feature */}
        <div className="bg-neutral-100 rounded-lg lg:rounded-xl overflow-hidden min-h-[320px] flex items-center">
          <div className="w-full p-8 lg:p-16">
            <div className="max-w-md">
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 lg:mb-8">
                ZX7 SPEAKER
              </h3>
              <Link href="/speakers/zx7">
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
          <div className="hidden lg:block flex-1 h-full bg-gray-300 rounded-r-lg">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-500">ZX7 Speaker Image</span>
            </div>
          </div>
        </div>

        {/* YX1 Earphones - Small Feature */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-neutral-100 rounded-lg lg:rounded-xl h-64 lg:h-80 flex items-center justify-center">
            <span className="text-gray-500">YX1 Earphones Image</span>
          </div>
          <div className="bg-neutral-100 rounded-lg lg:rounded-xl flex items-center p-8 lg:p-16">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 lg:mb-8">
                YX1 EARPHONES
              </h3>
              <Link href="/earphones/yx1">
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
