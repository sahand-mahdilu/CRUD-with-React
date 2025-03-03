import { useForm } from "react-hook-form";
import { ProductsModel } from "../Models/ProductModels";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationSchemaYup } from "../Schema/ValidationSchema";

export default function Form() {
  const { register, handleSubmit,formState:{errors} } = useForm({

    defaultValues:{
        name: "",
        description: "",
        qyt: 0,
        price: 0,
        available: false,
    },
    resolver: yupResolver(ValidationSchemaYup)

    
  });

  

  const formSubmiting= (data:ProductsModel)=>{

    console.log("data=>", data)
  }

  return (
    <form onSubmit={handleSubmit(formSubmiting)} className="flex flex-col bg-slate-800 p-10 rounded-2xl " action="">
        <label className="text-white pb-1" htmlFor="nameInput">Name : </label>
        <input {...register("name")} className="text-black p-2 rounded-md" id="nameInput" placeholder="Enter name " type="text" />

         <label className="mt-5 pb-1" htmlFor="DesInput">Description : </label>
         <textarea {...register("description")} className="text-black rounded-md p-2" id="DesInput"  />   

         <label className="mt-5 pb-1" htmlFor="quantity">qty : </label>
         <input {...register("qyt")} id="quntity" className="p-2 text-black  rounded-md " placeholder="Enter quantity" type="number" />

         <label className="mt-5 pb-1" htmlFor="priceInput">Price : </label>
         <input {...register("price")} id="priceInput" className="p-2 rounded-md text-black " placeholder="Enter Price" type="number" />
        

         <div className="mt-5 " >
         <label className="mt-5 pb-1" htmlFor="avail">Availabe : </label>
         <input {...register("available")}  id="avail" className="size-4 rounded-md " type="checkbox" />
         </div>


         <button className="bg-blue-600 mt-3 p-2 rounded-md hover:bg-blue-400">Add Porduct</button>






    </form>
  )
}
