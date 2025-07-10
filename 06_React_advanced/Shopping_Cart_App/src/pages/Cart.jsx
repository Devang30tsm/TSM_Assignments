import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { removeProduct, updateProduct } from "../redux/CartSlice";
import { PackagePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function CartView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      <div className="flex flex-row justify-between mt-10 mb-8 text-right px-2 md:px-10">
        <button onClick={() => navigate("/")} className="w-20 h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-xl rounded-3xl text-white ">
          ←Back
        </button>
        <div className="flex flex-row gap-1 items-center">
          <PackagePlus />
          <h2 className="text-2xl font-semibold text-gray-800">
            Total : ₹{total.toFixed(2)}
          </h2>
        </div>
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
            onRemove={() => { dispatch(removeProduct(product.id))
                toast.success(`${product.name} removed from the cart`)
            }
               }
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  );
}
