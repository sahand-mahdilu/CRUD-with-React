import { useQuery } from "@tanstack/react-query";
import { ProductsModel } from "../Models/ProductModels";
import { getProducts } from "../API/APIs";


export default function useGetProducts() {
  return (
    useQuery<ProductsModel[], Error>({
        queryKey: ["products"],
        queryFn: getProducts
      })
  )
}
