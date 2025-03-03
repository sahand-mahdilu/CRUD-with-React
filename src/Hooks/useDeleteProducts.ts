import { useMutation } from "@tanstack/react-query";
import { deleteProduct } from "../API/APIs";
import { DeleteProductArgs, ProductsModel } from "../Models/ProductModels";

export default function useDeleteProducts() {
  return (
   useMutation <ProductsModel | undefined, Error, DeleteProductArgs>({

    mutationFn:({id,endpoint})=>deleteProduct(id,endpoint)


   })


  )
}
