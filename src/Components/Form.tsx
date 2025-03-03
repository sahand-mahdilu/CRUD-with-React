import { useForm } from "react-hook-form";
import { FormProps, ProductsModel } from "../Models/ProductModels";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationSchemaYup } from "../Schema/ValidationSchema";
import useAddProducts from "../Hooks/useAddProducts";
import { endPoints } from "../Constant/URLs";
import { useEffect } from "react";

export default function Form({ edit ,name,description,available,price,qyt


}:FormProps) {
  const { mutate: addProduct } = useAddProducts(endPoints.product);

  console.log(name);

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({

  
    defaultValues: {

        
      name: "",
      description: "",
      qyt: 0,
      price: 0,
      available: false,
    },
    resolver: yupResolver(ValidationSchemaYup),
  });

  useEffect(() => {
    if (edit) {
        setValue("name", name || "");
        setValue("description", description || "");
        setValue("qyt", qyt || 0);
        setValue("price", price || 0);
        setValue("available", available || false);
    }
  }, [edit, name, description, qyt, price, available, setValue]);

  const formSubmiting = (data: ProductsModel) => {
    addProduct(data, {
      onSuccess: () => {
        reset();
      },
    });

    console.log("data=>", data);
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmiting)}
      className="flex flex-col bg-slate-800 p-10 rounded-2xl "
      action=""
    >
      <label className="text-white pb-1" htmlFor="nameInput">
        Name :{" "}
      </label>
      <input
        {...register("name")}
        className="text-black p-2 rounded-md"
        id="nameInput"
        placeholder="Enter name "
        type="text"
      />
      {errors.name && (
        <p className="pt-2 text-red-500">{errors.name.message}</p>
      )}

      <label className="mt-5 pb-1" htmlFor="DesInput">
        Description :{" "}
      </label>
      <textarea
        {...register("description")}
        className="text-black rounded-md p-2"
        id="DesInput"
      />
      {errors.description && (
        <p className="pt-2 text-red-500">{errors.description.message}</p>
      )}

      <label className="mt-5 pb-1" htmlFor="quantity">
        qty :{" "}
      </label>
      <input
        {...register("qyt")}
        id="quntity"
        className="p-2 text-black  rounded-md "
        placeholder="Enter quantity"
        type="number"
      />
      {errors.qyt && <p className="pt-2 text-red-500">{errors.qyt.message}</p>}

      <label className="mt-5 pb-1" htmlFor="priceInput">
        Price :{" "}
      </label>
      <input
        {...register("price")}
        id="priceInput"
        className="p-2 rounded-md text-black "
        placeholder="Enter Price"
        type="number"
      />
      {errors.price && (
        <p className="pt-2 text-red-500">{errors.price.message}</p>
      )}

      <div className="mt-5 ">
        <label className="mt-5 pb-1 text-white" htmlFor="avail">
          Availabe :{" "}
        </label>
        <input
          {...register("available")}
          id="avail"
          className="size-4 rounded-md "
          type="checkbox"
        />
      </div>

      {edit ? <div className="flex flex-col">
        <button className="bg-yellow-600 mt-3 p-2 rounded-md hover:bg-yellow-400 text-white">
        Edit Porduct
      </button>
      <button className="bg-teal-500 mt-3 p-2 rounded-md hover:bg-teal-400 text-white">
        Go Back
      </button>
      </div>
        
      : <button className="bg-blue-600 mt-3 p-2 rounded-md hover:bg-blue-400 text-white">
        Add Porduct
      </button> }

      
    </form>
  );
}
