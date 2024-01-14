const CartList = ({ cart, add, remove }) => {
  return (
    <div>
      <ul className="cart-list w-full flex  flex-col">
        {cart.map((item) => (
          <li
            key={item.id}
            className="w-full p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center"
          >
            <div className="my-3">
              <div className="flex justify-between item-center">
                <h2
                  className="font-bold md:text-lg flex-1"
                  data-test="name-tag"
                >
                  {item.name}
                </h2>
                <span
                  className="block font-bold md:text-lg"
                  data-test="price-tag"
                >
                  Price {item.price} EGP
                </span>
              </div>
            </div>
            <div className="my-3">
              <div className="flex justify-between item-center">
                <div className="flex justify-between item-center ">
                  <button
                    className="bg-slate-900 text-white w-6 text-center  hover:bg-slate-400 rounded-md mx-2"
                    onClick={() => add(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                  <span className="font-bold md:text-lg ">{item.quantity}</span>
                  <button
                    className="bg-slate-900 text-white w-6 text-center  hover:bg-slate-400 rounded-md mx-2"
                    onClick={() => remove(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                </div>
                <span
                  className="block font-bold md:text-lg"
                  data-test="price-tag"
                >
                  Total {item.quantity * item.price} EGP
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
