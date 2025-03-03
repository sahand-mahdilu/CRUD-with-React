import { useEffect, useState } from "react";
import Form from "../Components/Form";

export default function EditProduct() {
    const [editMode,setEditmode]=useState(false)

    useEffect(()=>{
        setEditmode(true)
    })

    


  return (
    <>
    <h1 className="text-2xl text-white font-bold mt-5 animate-pulse text-center ">Edit Product</h1>

      <div className="flex justify-center items-center mt-8">
            <Form edit={editMode} />
    
          </div>
          </>

  )
}
