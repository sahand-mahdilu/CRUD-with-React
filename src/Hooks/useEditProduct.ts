import { useMutation } from "@tanstack/react-query";
import { ProductsModel } from "../Models/ProductModels";
import { EditItem } from "../API/APIs";

export default function useEditProduct(id:string) {
  return (
    useMutation({
        mutationFn: (data: ProductsModel,) => EditItem(data,id),
    })
  )
}
