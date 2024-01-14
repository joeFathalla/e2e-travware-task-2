"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  clearCart,
  removeProduct,
} from "@/store/slices/productsSlice";
import CartList from "@/app/components/CartList";
import CheckoutSummary from "@/app/components/CheckoutSummary";
import CheckoutFinished from "../components/CheckoutFinished";

export default function Cart() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useSelector((state) => state.products);

  const addHandler = (product) => {
    dispatch(addProduct({ product }));
  };
  const removeHandler = (cartId) => {
    dispatch(removeProduct({ cartId }));
  };
  const checkoutHandler = () => {
    dispatch(clearCart());
    setIsOpen(true);
  };
  const returnHandler = () => {
    router.replace("/");
  };

  return (
    <div>
      {cart && (
        <>
          {cart.length > 0 ? (
            <div className="md:flex justify-between items-start w-full">
              <div className="w-[65%] mx-5">
                <CartList cart={cart} add={addHandler} remove={removeHandler} />
              </div>
              <div className="w-[25%] mx-5">
                <CheckoutSummary
                  cart={cart}
                  checkoutHandler={checkoutHandler}
                />
              </div>
            </div>
          ) : (
            <div className="cart-list w-full flex flex-col justify-center items-center">
              <div className="w-3/4 p-4 rounded-md mx-3 my-2 text-white text-center">
                <h2 className="font-semibold" data-test="no-cart-tag">
                  No products in Cart
                </h2>
              </div>
            </div>
          )}
        </>
      )}
      <CheckoutFinished
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        returnHome={returnHandler}
      />
    </div>
  );
}
