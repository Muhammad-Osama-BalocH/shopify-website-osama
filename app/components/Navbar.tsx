"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaHome, FaStore, FaGem, FaTv, FaMale, FaFemale } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-10 items-center p-5 px-4 z-10 relative bg-gradient-to-r from-green-950 via-yellow-200 to-blue-950 text-white shadow-lg lg:px-10 gap-10 md:gap-0">
      {/* Brand */}
      <h2 className="text-3xl lg:text-4xl font-extrabold col-span-5 lg:col-span-2 select-none tracking-wide">
        Shopify
      </h2>

      {/* Desktop Links */}
      <ul className="hidden md:flex lg:col-span-6 col-span-10 order-3 lg:order-2 lg:flex flex-row items-center justify-center md:py-5 lg:py-0 gap-6">
        <Link href={"/"} className="navLink flex items-center gap-2">
          <FaHome /> Home
        </Link>
        <Link href={"/store"} className="navLink flex items-center gap-2">
          <FaStore /> Store
        </Link>
        <Link href={"/category/jewelery"} className="navLink flex items-center gap-2">
          <FaGem /> Jewelery
        </Link>
        <Link href={"/category/electronics"} className="navLink flex items-center gap-2">
          <FaTv /> Electronics
        </Link>
        <Link href={"/category/men's%20clothing"} className="navLink flex items-center gap-2">
          <FaMale /> Men Clothing
        </Link>
        <Link href={"/category/women's%20clothing"} className="navLink flex items-center gap-2">
          <FaFemale /> Women Clothing
        </Link>
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`col-span-10 md:hidden order-3 lg:order-2 items-center justify-center flex-col gap-4 bg-blue-700 absolute top-20 left-0 w-full px-10 py-5 transition-all duration-300 ${
          open ? "flex" : "hidden"
        }`}
      >
        <Link
          href={"/"}
          className="w-full border-b border-blue-500 hover:bg-blue-900 divide-slate-950 disply-block hover:text-white transition-all duration-200 p-2 hover:rounded-md flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <FaHome /> Home
        </Link>
        <Link
          href={"/store"}
          className="w-full border-b border-blue-500 hover:bg-blue-900 display-block hover:text-white transition-all duration-200 p-2 hover:rounded-md flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <FaStore /> Store
        </Link>
        <Link
          href={"/category/jewelery"}
          className="w-full border-b border-blue-500 hover:bg-blue-900 display-block hover:text-white transition-all duration-200 p-2 hover:rounded-md flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <FaGem /> Jewelery
        </Link>
        <Link
          href={"/category/electronics"}
          className="w-full border-b border-s-green-950 hover:bg-blue-900 display-block hover:text-white transition-all duration-200 p-2 hover:rounded-md flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <FaTv /> Electronics
        </Link>
        <Link
          href={"/category/men's%20clothing"}
          className="w-full border-b border-s-green-950 hover:bg-blue-900 display-block hover:text-white transition-all duration-200 p-2 hover:rounded-md flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <FaMale /> Men Clothing
        </Link>
        <Link
          href={"/category/women's%20clothing"}
          className="w-full border-b border-s-green-950 hover:bg-blue-900 block-text hover:text-white transition-all duration-200 p-2 hover:rounded-md flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <FaFemale /> Women Clothing
        </Link>
      </ul>

      {/* Icons & Hamburger */}
      <div className="flex col-span-5 order-2 lg:order-3 lg:col-span-2 justify-end gap-4 items-center">
        <CartIcon />
        <GiShoppingCart className="hidden md:block text-2xl cursor-pointer hover:text-yellow-300 transition-all" />
        <button
          className={`w-8 h-8 flex flex-col justify-between items-center md:hidden ${
            open ? "text-yellow-300" : "border-s-green-950"
          }`}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-full h-1 bg-current transform transition duration-500 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-full h-1 bg-current transition duration-500 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-full h-1 bg-current transform transition duration-500 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
