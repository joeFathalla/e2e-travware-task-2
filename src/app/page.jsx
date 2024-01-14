"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomLoading from "@/app/components/CustomLoading";
import { addProduct, getAllProducts } from "@/store/slices/productsSlice";
import ProductsList from "@/app/components/ProductList";
import SearchBar from "@/app/components/Searchbar";
import FilterDropdown from "@/app/components/FilterDropdown";

export default function Home() {
  const dispatch = useDispatch();
  const [searchByName, setSearchByName] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("desc");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts({ searchByName, sortBy, sortOrder, priceRange }));
  }, [dispatch, searchByName, sortBy, sortOrder, priceRange]);

  const addToCartHandler = (product) => {
    dispatch(addProduct({ product }));
  };

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center w-full">
          <CustomLoading />
        </div>
      )}
      {/* filters toolbar */}
      <div className="flex justify-around items-center w-full">
        <div className="flex-1">
          <SearchBar
            searchValue={searchByName}
            setSearchValue={setSearchByName}
          />
        </div>
        <div className="w-[30%] max-w-[200px]">
          <FilterDropdown
            sortBy={sortBy}
            sortOrder={sortOrder}
            setSortBy={setSortBy}
            setSortOrder={setSortOrder}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>
      </div>
      {/* Product */}
      {products && (
        <ProductsList products={products} addToCart={addToCartHandler} />
      )}
    </div>
  );
}
