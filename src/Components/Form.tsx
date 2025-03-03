import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm({

    defaultValues:{
        name: "",
        description: "",
        qyt: 0,
        price: 0,
        available: false,
    }
  });

  return (
    <form className="flex flex-col bg-slate-800 p-10 rounded-2xl " action="">
        <label className="text-white pb-1" htmlFor="nameInput">Name : </label>
        <input className="p-2 rounded-md" id="nameInput" placeholder="Enter name " type="text" />

         <label className="mt-5 pb-1" htmlFor="DesInput">Description : </label>
         <textarea className="rounded-md" id="DesInput"  />   

         <label className="mt-5 pb-1" htmlFor="quantity">qty : </label>
         <input id="quntity" className="p-2 rounded-md " placeholder="Enter quantity" type="number" />

         <label className="mt-5 pb-1" htmlFor="priceInput">Price : </label>
         <input id="priceInput" className="p-2 rounded-md " placeholder="Enter Price" type="number" />
        

         <div className="mt-5 " >
         <label className="mt-5 pb-1" htmlFor="avail">Availabe : </label>
         <input  id="avail" className="size-4 rounded-md " type="checkbox" />
         </div>


         <button className="bg-blue-600 mt-3 p-2 rounded-md hover:bg-blue-400">Add Porduct</button>






    </form>
  )
}
