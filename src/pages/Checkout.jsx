import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    address: '',
    payment: 'transfer',
  });

  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address) {
      alert('Please fill out all fields.');
      return;
    }

    alert('Payment successful!');
    dispatch(clearCart());
    navigate('/');
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-white">
      <h1 className="text-2xl font-bold text-center mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-[#1c1c1e] p-6 rounded-xl shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g., Dimas Prasetyo"
            className="w-full border border-gray-600 bg-[#2a2a2e] text-white rounded-lg p-2 text-sm focus:ring-1 focus:ring-purple-500"
            onChange={handleInput}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Shipping Address</label>
          <input
            type="text"
            name="address"
            placeholder="123 Liberty Street"
            className="w-full border border-gray-600 bg-[#2a2a2e] text-white rounded-lg p-2 text-sm focus:ring-1 focus:ring-purple-500"
            onChange={handleInput}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Payment Method</label>
          <select
            name="payment"
            className="w-full border border-gray-600 bg-[#2a2a2e] text-white rounded-lg p-2 text-sm focus:ring-1 focus:ring-purple-500"
            onChange={handleInput}
          >
            <option value="transfer">Bank Transfer</option>
            <option value="ewallet">E-Wallet</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>

        <div className="pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-300 mb-3">Total: <span className="font-semibold text-white">${total}</span></p>
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-600 text-white py-2 text-sm rounded shadow transition"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
