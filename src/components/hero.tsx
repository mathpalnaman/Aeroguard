import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder image from Unsplash - Drone/Tech vibe */}
        <img
          src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2070&auto=format&fit=crop"
          alt="Military Drone Background"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient Overlay to make it look "Dark & Military" */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-charcoal"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto mt-[-50px]">
        {/* Brand Name */}
        <h2 className="text-brand-orange tracking-[0.2em] text-sm md:text-base font-bold uppercase mb-4">
          AeroGuard Systems
        </h2>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
          PRECISION. <br />
          AUTONOMY. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            DOMINANCE.
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Next-generation UAV systems designed for high-reliability defense
          operations and advanced tactical surveillance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-brand-orange text-black font-bold rounded-sm hover:bg-orange-600 transition-all transform hover:scale-105 uppercase tracking-wider">
            Explore Systems
          </button>
          <button className="px-8 py-4 border border-gray-500 text-gray-300 font-medium rounded-sm hover:border-white hover:text-white transition-all uppercase tracking-wider backdrop-blur-sm">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;