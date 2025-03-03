import { useEffect, useState } from "react";
import Form from "../Components/Form";
import useGetProduct from "../Hooks/useGetProduct";
import { useParams } from "react-router";


export default function EditProduct() {
    const [editMode,setEditmode]=useState(false)
    const{id}=useParams()
   
    const {data}=useGetProduct( String(id))
    
    console.log(id);


    console.log(data);

    useEffect(()=>{
        setEditmode(true)
    })



    


  return (
    <>
    <div className="bg-black">
    <h1 className="text-2xl text-white font-bold mt-3 animate-pulse text-center ">Edit Product</h1>

      <div className="flex justify-center items-center mt-3">
            <Form edit={editMode} {...data} />
    
          </div>
          </div>
          </>

  )
}
