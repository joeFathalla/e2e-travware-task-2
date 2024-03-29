"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export default function FilterDropdown({
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
}) {
  return (
    <div className="w-full text-right mx-2">
      <Menu as="div" className="relative inline-block text-left w-full">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            Filters
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-2 py-1 flex flex-col justify-around items-start mt-3">
            <h2 className="font-bold">Filtered By:</h2>
            <Menu.Item>
              <button
                className={`${
                  sortBy === "name" && "bg-slate-900 text-white"
                } w-full text-start px-1 py-2 hover:bg-slate-400 rounded-md my-1`}
                onClick={() => {
                  if (sortBy === "name") {
                    setSortBy("id");
                  } else {
                    setSortBy("name");
                  }
                }}
              >
                Name
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className={`${
                  sortBy === "price" && "bg-slate-900 text-white"
                } w-full text-start px-1 py-2 hover:bg-slate-400 hover:text-black rounded-md my-1`}
                onClick={() => {
                  if (sortBy === "price") {
                    setSortBy("id");
                  } else {
                    setSortBy("price");
                  }
                }}
              >
                Price
              </button>
            </Menu.Item>
          </div>
          <div className="px-2 py-1 mb-5">
            <h2 className="font-bold mb-5">Filter Prices:</h2>
            <RangeSlider
              value={priceRange}
              min={0}
              max={1000}
              onInput={setPriceRange}
              step={100}
            />
            <div className="flex justify-between items-center my-2">
              <span className="block">{priceRange[0]}</span>
              <span className="block">{priceRange[1]}</span>
            </div>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
