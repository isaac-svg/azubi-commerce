import React from "react";

interface AboutSectionProps {
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  className = "",
}) => {
  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 mb-6 lg:mb-8 leading-tight">
              BRINGING YOU THE <span className="text-primary-500">BEST</span>{" "}
              AUDIO GEAR
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="w-full h-64 lg:h-96 bg-gray-300 rounded-lg lg:rounded-xl flex items-center justify-center">
              <span className="text-gray-500 text-sm lg:text-base">
                Person with Headphones Image
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
