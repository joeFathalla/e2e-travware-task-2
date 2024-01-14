import { useEffect, useState } from "react";

const CheckoutSummary = ({ cart, checkoutHandler }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      cart.forEach((item) => {
        setTotal((prev) => prev + item.quantity + item.price);
      });
    }
  }, [cart]);

  return (
    <div>
      {cart.length > 0 && (
        <div className="w-full p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <h2 className="font-bold md:text-lg flex-1">Total</h2>
            <span className="block font-bold md:text-lg" data-test="price-tag">
              {total} EGP
            </span>
          </div>
          <div className="w-full mt-10 text-center">
            <button
              className="px-4 py-1 text-center text-xl bg-slate-900 rounded-md font-semibold text-slate-200 w-full"
              onClick={checkoutHandler}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutSummary;
