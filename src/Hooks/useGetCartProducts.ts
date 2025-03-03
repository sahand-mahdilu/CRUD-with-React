import { useQuery } from "@tanstack/react-query";
import { ProductsModel } from "../Models/ProductModels";
import { getCartProducts } from "../API/APIs";

export default function useGetCartProducts() {
  return (

    useQuery<ProductsModel[], Error>({
        queryKey: ["cartProducts"],
        queryFn: getCartProducts


    })


  )
}
