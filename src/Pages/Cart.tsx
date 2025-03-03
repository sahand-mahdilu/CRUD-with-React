

import ProductCart from "../Components/ProductCart";
import { endPoints } from "../Constant/URLs";
import useDeleteProducts from "../Hooks/useDeleteProducts";

import useGetCartProducts from "../Hooks/useGetCartProducts"
import { DeleteProductArgs } from "../Models/ProductModels";

export default function Cart() {


    const {data}= useGetCartProducts()


    console.log(data);

    const {mutate}=useDeleteProducts()


    const deleteProductHandler = (productId: string, endPoint: string) => {
      const args: DeleteProductArgs = { id: productId, endpoint: endPoint };
      mutate(args);
    };

  return (
    <>    <div className="text-white text-2xl font-bold text-center mt-4 animate-pulse ">Cart</div>

<div className="grid grid-cols-3 gap-5 p-16 bg-black">

  {data?.map(d=>{return <ProductCart key={d.id} {...d} >
    <button onClick={()=>deleteProductHandler(String(d.id),endPoints.cart)}  className="bg-red-500 text-white p-1 px-3 rounded-lg hover:bg-red-400">Delete</button>
  </ProductCart>})}

    

</div>
    </>

  )
}
