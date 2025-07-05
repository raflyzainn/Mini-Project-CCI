import React from "react";
import CartList from '../components/cart-components/CartList';

function Cart() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-white">
      <h1 className="text-2xl font-bold text-center mb-6">Your Shopping Cart</h1>
      <CartList />
    </div>
  );
}

export default Cart;
