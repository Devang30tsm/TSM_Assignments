import React from "react";

const ProductCard = React.memo(({ product }) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 group bg-white">
      <div className="overflow-hidden h-80">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>

        <div className="flex items-center gap-2">
          <p className="text-green-600 font-bold text-lg">₹{product.discountPrice}</p>
          <span className="text-sm text-red-500 line-through">₹{product.price}</span>
        </div>

        <p className="text-yellow-500 text-sm font-medium">
          ⭐ {product.rating} ({product.reviewsCount} reviews)
        </p>
      </div>
    </div>
  );
});

export default ProductCard;
