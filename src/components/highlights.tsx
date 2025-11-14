"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Using a check icon
import {motion} from "framer-motion";

const Highlights = () => {
  return (
    <motion.section className="py-20 bg-brand-charcoal border-t border-b border-gray-700/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Highlight Item 1 */}
          <div className="flex flex-col items-center md:items-start">
            <FaCheckCircle className="text-brand-orange text-3xl mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">
              Unmatched Precision
            </h4>
            <p className="text-gray-400">
              Sub-centimeter accuracy for critical operations.
            </p>
          </div>

          {/* Highlight Item 2 */}
          <div className="flex flex-col items-center md:items-start">
            <FaCheckCircle className="text-brand-orange text-3xl mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">
              All-Weather Capable
            </h4>
            <p className="text-gray-400">
              IP67 rated for deployment in any environment.
            </p>
          </div>

          {/* Highlight Item 3 */}
          <div className="flex flex-col items-center md:items-start">
            <FaCheckCircle className="text-brand-orange text-3xl mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">
              Secure Comms
            </h4>
            <p className="text-gray-400">
              AES-256 encrypted datalink for secure feeds.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Highlights;