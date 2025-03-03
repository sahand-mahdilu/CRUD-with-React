import ProductCart from "../Components/ProductCart";
import { ProductsModel } from "../Models/ProductModels";
import useGetProducts from "../Hooks/useGetProducts";
import SearchInput from "../Components/SearchInput";
import { useLocation } from "react-router";
import useGetCartProducts from "../Hooks/useGetCartProducts";
import AddModal from "../Components/AddModal";
import { useState } from "react";



export default function Products() {

  const [showModal,setShowModal]=useState(false)
  

  const location = useLocation();


 



  const { data } = useGetProducts(
    location.search 
  )

  const {data: cartData}= useGetCartProducts()

  console.log(cartData);


  return (
    <>
    {showModal && <AddModal/>}
    
    <div className="text-white">
      <p className=" animate-pulse text-3xl font-bold text-center mt-6">Products</p>

      <SearchInput/>

      <div className="grid grid-cols-3 gap-5 p-16 bg-black">
        {data?.map((product: ProductsModel) => {
          return (
            <ProductCart key={product.id} {...product} />
          )
        })}
      </div>
    </div>
    
    </>
  );
}
