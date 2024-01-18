import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  return (
    <div className="p-1 md:p-4 flex items-center justify-between h-10 w-full">
      <div className="flex flex-row items-center gap-2">
        <span className="text-2xl font-[1000] text-center dark:text-white">
          360
          <span className="font-extrabold text-sm">View</span>
        </span>
      </div>

      <ul className="hidden md:flex text-sm  text-black dark:text-white font-semibold md:tracking-wide  flex-col  gap-2 md:flex-row  md:gap-8">
        <li>
          <Link onClick={() => {
              window.location.href = "/explore";
              
              
            }}>Load Chair</Link>
        </li>
        <li>
          <Link
            onClick={() => {
              debugger
              window.location.href = "/explore?val=1";
              
              setTimeout(() => {
                window.location.reload();  
              }, 100);
            }}
          >
            Load Car Images
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
