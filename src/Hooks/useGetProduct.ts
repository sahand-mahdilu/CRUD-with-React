import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../API/APIs";




export default function useGetProduct(id:string) {
  return (
    useQuery({
        queryKey:["SingleProduct",id],
        queryFn: ()=>getProduct(id)
    }) 
  )
}
