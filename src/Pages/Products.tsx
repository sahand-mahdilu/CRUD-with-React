import ProductCart from "../Components/ProductCart";

export default function Products() {


  


  return (
    <div className="text-white">
      <span>products</span>

      <div className="grid grid-cols-3 gap-5 p-5"> 

      <ProductCart/>
      <ProductCart/>
      <ProductCart/>
      </div>


    </div>
  );
}
