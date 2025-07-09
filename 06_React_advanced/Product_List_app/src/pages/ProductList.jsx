import React, { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../utils/ProductData.json";

function ProductList() {
  const [minRating, setMinRating] = useState(3);
   
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => product.rating >= minRating);
  }, [minRating]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          🛒 Product Collection
        </h1>

        {/* Filter Dropdown */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3 bg-white shadow-md rounded-lg px-4 py-2">
            <label htmlFor="rating" className="text-gray-700 font-medium">
              Filter by Rating:
            </label>
            <select
              id="rating"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value={0}>All</option>
              <option value={3}>3+</option>
              <option value={4}>4+</option>
              <option value={4.5}>4.5+</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts &&
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600 mt-12 text-lg">
            No products found with this rating filter. Try lowering the filter!
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
