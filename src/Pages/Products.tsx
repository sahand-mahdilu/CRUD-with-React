import ProductCart from "../Components/ProductCart";
import { ProductsModel } from "../Models/ProductModels";
import useGetProducts from "../Hooks/useGetProducts";
import SearchInput from "../Components/SearchInput";
import { useLocation } from "react-router";



export default function Products() {

  const location = useLocation();

  console.log(location);


  const { data } = useGetProducts(
    location.search 
  )

  console.log(data);

  return (
    <div className="text-white">
      <p className="text-2xl font-bold text-center mt-6">Products</p>

      <SearchInput/>

      <div className="grid grid-cols-3 gap-5 p-16 bg-black">
        {data?.map((product: ProductsModel) => {
          return (
            <ProductCart key={product.id} {...product} />
          )
        })}
      </div>
    </div>
  );
}
