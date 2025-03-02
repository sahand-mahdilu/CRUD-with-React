import { Link } from "react-router";
import { ProductsModel } from "../Models/ProductModels";

export default function ProductCart(props :ProductsModel) {

const {name, description , qyt, price ,available,id}=props








const clickHandler=()=>{

  console.log("hellp");
}
  
  return (
    <div className={available ? "flex flex-col items-center gap-5  border-2 hover:bg-blue-950 transition-all  p-3 rounded-2xl": "flex flex-col items-center gap-5  border-2 hover:bg-blue-950 transition-all  p-3 rounded-2xl bg-slate-500"}>

        <h1 className="text-3xl font-bold">{name}</h1>
        {available? "" :<p className="text-red-600 font-bold text-xl">not available</p>}
        <p className="text-center">{description}</p>
        <div>
        <span className="text-2xl font-bold text-orange-500">Price: </span>
        <span className="text-2xl">{price}$ </span>


        </div>
        <span>count : {qyt}</span>
        <button onClick={clickHandler} disabled={!available} className={available?"p-1 px-2 rounded-lg bg-green-400":"p-1 px-2 rounded-lg bg-red-400" }>Add to cart</button>
        
        
         <Link className="bg-blue-500 p-2 rounded-md hover:bg-blue-300 cursor-pointer" to={`/singleproduct/${id}`}>  <span  >    <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5-8-5-8 5-8 5 3 5 8 5 8-5 8-5zm-8 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
            <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
          </svg></span>
          </Link>


    </div>
  )
}
