import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto text-white">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">Available Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#1c1c1e] border border-gray-700 rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mb-4 w-full"
            />
            <h2 className="text-base font-semibold mb-1 line-clamp-2">{product.title}</h2>
            <p className="text-sm text-purple-300 font-medium mb-3">${product.price}</p>

            <div className="flex gap-2">
              <Link
                to={`/products/${product.id}`}
                className="flex-1 text-center text-sm text-white border border-gray-500 py-2 rounded-md hover:bg-gray-800 transition"
              >
                View
              </Link>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="flex-1 text-sm text-white bg-purple-700 hover:bg-purple-600 py-2 rounded-md transition"
              >
                + Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
