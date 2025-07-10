import React from "react";
import { useNavigate } from "react-router-dom";
import ProductData from "../utils/ProductData.json";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/CartSlice";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 gap-10 max-w-7xl mx-auto ">
      <div className="flex flex-row items-center justify-between mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          🛒 Product Collection
        </h1>
        <button
          onClick={() => navigate("/CartView")}
          className="relative inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="tracking-wide">{cartItems.length}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ProductData?.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id);
          return (
            <ProductCard
              key={product.id}
              product={product}
              isInCart={isInCart}
              onAddToCart={() => {
                if (isInCart || !product.inStock) return;
                dispatch(addProduct(product));
                toast.success(`${product.name} added to cart!`);
              }}
            />
          );
        })}
      </div>

      {ProductData?.length === 0 && (
        <p className="text-center text-gray-600 mt-12 text-lg">
          No products found. Try again Later!
        </p>
      )}
    </div>
  );
}
