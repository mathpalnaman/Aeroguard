"use client";
import React from "react";
import CapabilityCard from "./CapabilityCard";
import {motion} from "framer-motion";

// Importing some futuristic icons from react-icons library
import { TbRadar2, TbShieldCheck, TbCpu } from "react-icons/tb";

const About = () => {
  return (
    <motion.section className="py-20 px-4 bg-brand-charcoal text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ABOUT SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Forged for the Modern Battlefield
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            VyomGarud builds autonomous aerial systems that deliver decisive
            advantages. Our mission is to equip defense and security forces with
            unmatched reliability, precision, and advanced AI-driven
            intelligence.
          </p>
        </div>

        {/* CAPABILITIES SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CapabilityCard
            icon={<TbRadar2 size={36} />}
            title="Advanced Autonomy"
            description="AI-powered flight control and threat assessment for complex, GPS-denied environments."
          />
          <CapabilityCard
            icon={<TbShieldCheck size={36} />}
            title="Military-Grade Reliability"
            description="Engineered for high reliability under extreme conditions, ensuring mission success."
          />
          <CapabilityCard
            icon={<TbCpu size={36} />}
            title="Modular Payloads"
            description="Swap sensor packages and equipment on the fly to adapt to any operational requirement."
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;