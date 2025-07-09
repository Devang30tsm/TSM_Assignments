import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { removeProduct, updateProduct } from "../redux/CartSlice";

export default function CartView() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(products));
  }, [products]);

  const total = products.reduce(
    (acc, product) => acc + product.discountPrice * product.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        🛒 Cart Collection
      </h1>
      <div className="mt-10 mb-8 text-right px-2 md:px-10">
        <h2 className="text-2xl font-bold text-gray-800">
          🧾 Total: ₹{total.toFixed(2)}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showQualityControl={true}
            isInCart={true}
            onDecrement={() =>
              product.quantity > 1
                ? dispatch(
                    updateProduct({
                      id: product.id,
                      quantity: product.quantity - 1,
                    })
                  )
                : dispatch(removeProduct(product.id))
            }
            onIncrement={() => {
              dispatch(
                updateProduct({
                  id: product.id,
                  quantity: product.quantity + 1,
                })
              );
            }}
            onRemove={() => dispatch(removeProduct(product.id))}
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  );
}
