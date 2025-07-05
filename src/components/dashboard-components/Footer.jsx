import React from 'react';
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 border-t border-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-purple-500 mb-3">MiniStore</h3>
          <p className="text-sm text-gray-400">
            Your one-stop shop for quality products with fast delivery and secure checkout.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-purple-500 mb-3">Contact</h3>
          <p className="text-sm text-gray-400">Email: rafly@example.com</p>
          <p className="text-sm text-gray-400">Phone: +62 812-3456-7890</p>
          <p className="text-sm text-gray-400">Bandung, Indonesia</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-purple-500 mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-purple-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:rafly@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        Mini Project CCI © 2025 Achmad Rafly Khatami Zain. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
