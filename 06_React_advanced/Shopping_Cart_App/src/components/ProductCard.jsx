import React from "react";

const ProductCard = React.memo(
  ({
    product,
    showQualityControl = false,
    isInCart = false,
    onAddToCart,
    onIncrement,
    onDecrement,
    onRemove,
    quantity,
  }) => {
    return (
      <div className="flex flex-col justify-between border rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 group bg-white">
        <div>
          <div className="overflow-hidden h-80">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="p-4 space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="text-sm text-gray-500 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center gap-2">
              <p className="text-green-600 font-bold text-lg">
                ₹{product.discountPrice}
              </p>
              <span className="text-sm text-red-500 line-through">
                ₹{product.price}
              </span>
            </div>

            <p className="text-yellow-500 text-sm font-medium">
              ⭐ {product.rating} ({product.reviewsCount} reviews)
            </p>
          </div>
        </div>

        <div className="p-4 pt-0">
          {showQualityControl ? (
            <div className="flex items-center justify-between gap-3 mt-2">
              <button
                onClick={onDecrement}
                className="flex-1 px-2 py-1 text-white font-bold rounded-lg bg-gradient-to-tr from-red-500 via-pink-500 to-red-600 hover:from-red-600 hover:via-pink-600 hover:to-red-700 transition-all"
              >
                -
              </button>

              <span className="text-md font-semibold">{quantity}</span>

              <button
                onClick={onIncrement}
                className="flex-1 px-2 py-1 text-white font-bold rounded-lg bg-gradient-to-tr from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 transition-all"
              >
                +
              </button>

              <button
                onClick={onRemove}
                className="flex-1 px-3 py-1 text-white font-semibold rounded-lg bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-pink-500 hover:from-fuchsia-600 hover:via-rose-600 hover:to-pink-600 transition-all"
              >
                Remove
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAddToCart?.(product)}
              disabled={!product.inStock || isInCart}
              className={`mt-4 w-full py-2 rounded-lg font-semibold transition-all text-center ${
                !product.inStock
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : isInCart
                  ? "bg-green-500 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {!product.inStock
                ? "Out of Stock"
                : isInCart
                ? "Added to Cart"
                : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default ProductCard;
