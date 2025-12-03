import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900/50 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AeroGuard Systems. All rights
            reserved.
          </p>
          <p className="text-sm">
            Contact:{" "}
            <a
              href="mailto:contact@AeroGuard.com"
              className="text-brand-orange hover:underline"
            >
              contact@AeroGuard.com
            </a>
          </p>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex gap-6">
          <a
            href="#"
            className="hover:text-brand-orange transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="#"
            className="hover:text-brand-orange transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="hover:text-brand-orange transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;