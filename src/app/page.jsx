"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import BlogList from "@/app/components/BlogList";
import CustomLoading from "@/app/components/CustomLoading";
import { getAllProducts } from "@/store/slices/productsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  console.log({ products });
  return (
    <div>
      {fetchLoading && (
        <div className="flex justify-center items-center w-full">
          <CustomLoading />
        </div>
      )}
      {/* Blogs */}
      {/*blogs && <BlogList blogs={blogs} />*/}
    </div>
  );
}
