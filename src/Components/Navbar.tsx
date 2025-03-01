import React from "react";
import {  NavLink } from "react-router";

const Navbar: React.FC = () => {
  return (
    <div className="flex gap-4 bg-blue-900 p-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white rounded-lg p-2 hover:bg-blue-500 bg-blue-500   transition-all "
            : "bg-blue-900 text-white rounded-lg  p-2  hover:bg-blue-500 transition-all "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "text-white rounded-lg p-2 hover:bg-blue-500 bg-blue-500   transition-all "
            : "bg-blue-900 text-white rounded-lg  p-2  hover:bg-blue-500 transition-all "
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive
            ? "text-white rounded-lg p-2 hover:bg-blue-500 bg-blue-500   transition-all "
            : "bg-blue-900 text-white rounded-lg  p-2  hover:bg-blue-500 transition-all "
        }
      >
        Cart
       
      </NavLink>
      <NavLink
        to="/addproduct"
        className={({ isActive }) =>
          isActive
            ? "text-white rounded-lg p-2 hover:bg-blue-500 bg-blue-500   transition-all "
            : "bg-blue-900 text-white rounded-lg  p-2  hover:bg-blue-500 transition-all "
        }
      >
        Add Product
      </NavLink>
    </div>
      
  );
};

export default Navbar;
