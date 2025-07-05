import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cartSlice';

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="space-y-4">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400 text-sm">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-[#1c1c1e] border border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-20 object-contain mr-4 rounded-md border border-gray-800"
            />
            <div className="flex-1">
              <h3 className="text-base font-semibold text-white line-clamp-2">{item.title}</h3>
              <p className="text-sm text-purple-300 mt-1">${item.price}</p>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-sm text-gray-300 border border-gray-600 px-3 py-1.5 rounded-md hover:bg-gray-800 transition"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
