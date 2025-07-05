import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [suggested, setSuggested] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(data => setSuggested(data));
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert('Added to cart!');
  };

  if (!product) {
    return <p className="text-center mt-10 text-gray-400 text-sm">Loading product...</p>;
  }

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-white">
      {/* Detail Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-[#1c1c1e] p-8 rounded-xl shadow-md">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 w-80 object-contain"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-sm text-gray-400 leading-relaxed">{product.description}</p>
          <p className="text-xl font-bold text-purple-400">${product.price}</p>

          <button
            onClick={handleAddToCart}
            className="bg-purple-700 hover:bg-purple-600 text-white px-5 py-2 text-sm rounded shadow"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Suggested Products */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-6 text-white">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {suggested.map((item) => (
            <div
              key={item.id}
              className="bg-[#1f1f1f] p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-32 mx-auto object-contain mb-4"
              />
              <h3 className="text-sm font-medium text-white mb-1 line-clamp-2">{item.title}</h3>
              <p className="text-purple-400 font-semibold text-sm mb-2">${item.price}</p>
              <div className="flex gap-2">
                <Link
                  to={`/products/${item.id}`}
                  className="flex-1 text-center text-sm text-white border border-purple-500 py-1.5 rounded hover:bg-purple-600"
                >
                  View
                </Link>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="flex-1 bg-purple-700 hover:bg-purple-600 text-white text-sm py-1.5 rounded"
                >
                  + Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="mt-16 bg-[#1c1c1e] p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-white">Product Details</h2>
        <ul className="text-sm text-gray-400 space-y-2">
          <li><span className="font-medium text-white">Category:</span> {product.category}</li>
          <li><span className="font-medium text-white">Rating:</span> {product.rating?.rate} / 5 ({product.rating?.count} reviews)</li>
          <li><span className="font-medium text-white">Material:</span> Cotton & Polyester</li>
          <li><span className="font-medium text-white">Sizes Available:</span> S, M, L, XL</li>
        </ul>
      </div>

      {/* Customer Reviews Section */}
      <div className="mt-16 bg-[#1c1c1e] p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-white">Customer Reviews</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 rounded-lg p-4">
            <p className="text-sm text-gray-300 italic">“Great quality! Exceeded my expectations.”</p>
            <p className="text-xs text-purple-400 mt-2">– Alex, Verified Buyer</p>
          </div>
          <div className="border border-gray-700 rounded-lg p-4">
            <p className="text-sm text-gray-300 italic">“Comfortable and fits perfectly. Fast shipping too!”</p>
            <p className="text-xs text-purple-400 mt-2">– Maria, Loyal Customer</p>
          </div>
        </div>
      </div>

      {/* Back to Products Button */}
      <div className="mt-12 text-center">
        <Link
          to="/products"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  );
};

export default DetailProduct;
