import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="p-2 bg-blue-800">
      <ul className="flex child:p-2 child:bg-blue-800 child:text-white child:cursor-pointer child:transition-all child:rounded-lg">
        <li className="hover:bg-blue-500">Home</li>
        <li className="hover:bg-blue-500">Products</li>
        <li className="hover:bg-blue-500">Cart</li>
        <li className="hover:bg-blue-500">Add Product</li>
      </ul>
    </div>
  );
}

export default Navbar;
