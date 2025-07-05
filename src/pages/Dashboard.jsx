import React from "react";
import { Link } from "react-router-dom";
import ecommerceHero from "../assets/dashboard/ecommerce-hero.svg";
import { FaShippingFast, FaTag, FaShieldAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0f0f0f] text-white px-6 pt-24 pb-36">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Shop Easily, Quickly, and Affordably at{" "}
              <span className="text-purple-500">MiniStore</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Discover a variety of essential products at the best prices. Enjoy a
              simple and delightful shopping experience.
            </p>
            <Link to="/products">
              <button className="inline-block bg-purple-600 hover:bg-purple-500 text-white text-base font-medium px-6 py-3 rounded-lg shadow-md transition duration-300">
                Browse Products
              </button>
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={ecommerceHero}
              alt="Ecommerce Hero"
              className="w-72 md:w-[400px] rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#181818] text-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-white">Why Choose MiniStore?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <FaShippingFast className="text-purple-500 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your items are shipped within 1–2 days across all regions of Indonesia.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaTag className="text-purple-500 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Best Prices</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We offer high-quality products at competitive prices.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaShieldAlt className="text-purple-500 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Secure Payments</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your data and transactions are fully encrypted and protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#111111] px-6 py-20 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">What Our Customers Say</h2>
          <div className="bg-[#1f1f1f] rounded-xl shadow-md p-6">
            <p className="text-gray-300 text-base italic mb-4">
              “Super fast delivery! The item arrived safely and the quality met my expectations. Will definitely order again!”
            </p>
            <p className="text-sm font-medium text-gray-500">– Dinda, Student</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
