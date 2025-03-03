import { useMutation } from "@tanstack/react-query";
import { ProductsModel } from "../Models/ProductModels";
import { Addproducts } from "../API/APIs";

export default function useAddProducts() {
  return (
    useMutation({
        mutationFn: (data: ProductsModel) => Addproducts(data),

    })
    )
}
