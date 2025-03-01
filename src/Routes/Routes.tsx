import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";
import AddProduct from "../Pages/AddProduct";


const router= createBrowserRouter([

    {path :"/" ,element: <Layout/> ,children:[

        {path:"/",element: <Home/>},
        {path:"/products",element: <Products/>},
        {path:"/cart",element: <Cart/>},
        {path:"/addproduct",element: <AddProduct/>},
    ]}

])





export {router}