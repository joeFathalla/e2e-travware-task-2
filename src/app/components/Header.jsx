"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

function Header() {
  const { cart } = useSelector((state) => state.products);
  return (
    <div className="w-full mb-5 p-5 rounded-lg bg-slate-800 drop-shadow-xl flex justify-between items-center">
      <div>
        <Link href="/">
          <h1 className="text-slate-200 text-center text-2xl font-extrabold font-[verdana]">
            Shop App
          </h1>
        </Link>
      </div>
      <div className="w-6 h-6 relative">
        <Link href="/cart">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
            </svg>
          </div>
          {cart.length > 0 && (
            <div className="absolute rounded-full w-5 h-5 bg-red-500 -top-4 -right-4 flex justify-center items-center">
              <span className="text-white block">{cart.length}</span>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Header;
