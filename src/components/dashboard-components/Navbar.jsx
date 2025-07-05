import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-[#0f0f0f] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl font-bold tracking-tight text-purple-500">
          MiniStore
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-purple-400 transition-colors">Products</Link>
          <Link to="/cart" className="hover:text-purple-400 transition-colors">Cart</Link>
          <Link to="/checkout" className="hover:text-purple-400 transition-colors">Checkout</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
