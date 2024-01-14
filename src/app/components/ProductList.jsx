"use client";

import Link from "next/link";

const ProductsList = ({ products }) => {
  return (
    <div>
      {products?.length > 0 ? (
        <ul className="product-list w-full flex  flex-col md:flex-row justify-center md:justify-start items-center md:flex-wrap">
          {products.map((product) => (
            <li
              key={product.id}
              className="w-full md:w-[30%] lg:w-[20%] p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center"
            >
              <div className="my-3">
                <div className="flex justify-between item-center">
                  <h2
                    className="font-bold md:text-lg capitalize flex-1"
                    data-test="name-tag"
                  >
                    {product.name}
                  </h2>
                  <span
                    className="block font-bold md:text-lg"
                    data-test="price-tag"
                  >
                    {product.price} EGP
                  </span>
                </div>
                <p className="mr-auto" data-test="desc-tag">
                  {product.description}
                </p>
              </div>
              <div className="w-full mt-10 text-center">
                <button className="px-4 py-1 text-center text-xl bg-slate-900 rounded-md font-semibold text-slate-200 w-full ">
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="blog-list w-full flex flex-col justify-center items-center">
          <div className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-200 text-center">
            <h2 className="font-semibold" data-test="no-blog-tag">
              No products
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
