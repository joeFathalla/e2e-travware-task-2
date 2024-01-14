"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomLoading from "@/app/components/CustomLoading";
import { getAllProducts } from "@/store/slices/productsSlice";
import ProductsList from "@/app/components/ProductList";

export default function Home() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center w-full">
          <CustomLoading />
        </div>
      )}
      {/* Product */}
      {products && <ProductsList products={products} />}
    </div>
  );
}
