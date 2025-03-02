import { useQuery } from "@tanstack/react-query";
import ProductCart from "../Components/ProductCart";
import { getProducts } from "../API/APIs";
import { ProductsModel } from "../Models/ProductModels";



export default function Products() {
  const { data } = useQuery<ProductsModel[], Error>({
    queryKey: ["products"],
    queryFn: getProducts
  });

  console.log(data);

  return (
    <div className="text-white">
      <span>products</span>

      <div className="grid grid-cols-3 gap-5 p-5 bg-black">
        {data?.map((p: ProductsModel) => {
          return (
            <ProductCart key={p.id} {...p} />
          )
        })}
      </div>
    </div>
  );
}
