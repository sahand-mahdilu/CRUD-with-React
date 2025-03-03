import { useEffect, useState } from "react";
import ProductCart from "../Components/ProductCart";
import { endPoints } from "../Constant/URLs";
import useDeleteProducts from "../Hooks/useDeleteProducts";

import useGetCartProducts from "../Hooks/useGetCartProducts";
import { DeleteProductArgs } from "../Models/ProductModels";

export default function Cart() {
  const { data } = useGetCartProducts();
  const [count, setCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  console.log(data);



  const { mutate } = useDeleteProducts();

  const deleteProductHandler = (productId: string, endPoint: string) => {
    const args: DeleteProductArgs = { id: productId, endpoint: endPoint };
    mutate(args);
  };



    useEffect(() => {
      if (data) {
        const CalculateTotalPrice = () => {
          let totalPrice = data.reduce((accumulator, product) => {
            return accumulator + product.price;
          }, 0);


  
          setTotalPrice(totalPrice);
        };

        

        
        
        
        CalculateTotalPrice();
      }
    },[data] )

  return (
    <>
     
      <div className="text-white text-2xl font-bold text-center mt-4 animate-pulse ">
        Cart
      </div>

        <div className="flex flex-col items-center mt-7">
          <p className="text-white">TotalPrice : {totalPrice} </p>
          <p className="text-white">TotalCount : </p>
        </div>
      <div className="grid grid-cols-3 gap-5 p-16 bg-black">
        {data?.map((d) => {
          return (
            <ProductCart key={d.id} {...d}>
              <button
                onClick={() =>
                  deleteProductHandler(String(d.id), endPoints.cart)
                }
                className="bg-red-500 text-white p-1 px-3 rounded-lg hover:bg-red-400"
              >
                Delete
              </button>
            </ProductCart>
          );
        })}
      </div>
    </>
  );
}
