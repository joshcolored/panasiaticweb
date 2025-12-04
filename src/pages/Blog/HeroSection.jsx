import React from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 px-4">
      {/* Animated SVG */}
      <Cog6ToothIcon className="w-20 h-20 text-primary-background animate-spin mb-6" />

      {/* Message */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 text-center">
        This page is currently under Development
      </h2>
      <p className="text-base sm:text-lg text-gray-600 text-center max-w-md">
        We're working hard to bring you this content. Please check back soon!
      </p>
    </div>
  );
};

export default HeroSection;
