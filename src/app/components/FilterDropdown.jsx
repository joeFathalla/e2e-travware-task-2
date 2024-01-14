"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function FilterDropdown({
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
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
                } w-full text-start px-2 py-3 hover:bg-slate-400 rounded-md my-2`}
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
                } w-full text-start px-2 py-3 hover:bg-slate-400 hover:text-black rounded-md my-2`}
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
          <div className="px-2 py-1 flex  justify-around items-center mt-3">
            <h2 className="font-bold flex-1">Sort Order:</h2>
            <button
              className="bg-slate-900 text-white w-14 text-center py-3 hover:bg-slate-400 rounded-md"
              onClick={() => {
                if (sortOrder === "desc") {
                  setSortOrder("asc");
                } else {
                  setSortOrder("desc");
                }
              }}
            >
              {sortOrder === "asc" ? (
                <div>
                  <span>Desc</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mx-auto my-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>
              ) : (
                <div>
                  <span>Asc</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mx-auto my-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                    />
                  </svg>
                </div>
              )}
            </button>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}