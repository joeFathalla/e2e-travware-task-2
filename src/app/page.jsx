"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomLoading from "@/app/components/CustomLoading";
import { getAllProducts } from "@/store/slices/productsSlice";
import ProductsList from "@/app/components/ProductList";
import SearchBar from "@/app/components/Searchbar";

export default function Home() {
  const dispatch = useDispatch();
  const [searchByName, setSearchByName] = useState("");
  const { products, loading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts({ searchValue: searchByName }));
  }, [dispatch, searchByName]);

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center w-full">
          <CustomLoading />
        </div>
      )}
      {/* filters toolbar */}
      <div className="md:flex md:justify-around items-center">
        <div className="flex-1">
          <SearchBar
            searchValue={searchByName}
            setSearchValue={setSearchByName}
          />
        </div>
      </div>
      {/* Product */}
      {products && <ProductsList products={products} />}
    </div>
  );
}
