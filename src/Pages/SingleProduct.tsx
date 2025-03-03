import { useNavigate, useParams } from "react-router";
import useGetProduct from "../Hooks/useGetProduct";
import useDeleteProducts from "../Hooks/useDeleteProducts";
import { DeleteProductArgs } from "../Models/ProductModels";
import { endPoints } from "../Constant/URLs";

export default function SingleProduct() {
  const { id } = useParams();

  const { data } = useGetProduct(id as string);

  console.log(data);

  const { mutate } = useDeleteProducts();

  const deleteProductHandler = (productId: string, endPoint: string) => {
    const args: DeleteProductArgs = { id: productId, endpoint: endPoint };
    mutate(args);
  };

  const navigat = useNavigate()
  

  return (
    <div className="border-2 w-[80%] rounded-lg mx-auto mt-10 flex flex-col items-center gap-4">
      <h1 className="mt-4 text-3xl text-white">{data?.name}</h1>
      <p className="text-white">{data?.description}</p>
      <p className="text-white">
        <span className="text-red-500">Price</span> {data?.price}$
      </p>
      <p className="text-white">
        <span className="text-green-500">count :</span> {data?.qyt}
      </p>

      <div className="flex items-center gap-4 p-2 mb-4">
        <button className=" bg-yellow-500 p-1 rounded-md hover:bg-yellow-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        <button
          onClick={() => deleteProductHandler(String(id), endPoints.product)}
          className="bg-red-500 p-1 rounded-md hover:bg-red-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M3 6h18v2H3V6zm2 2h14l-1.5 14H6.5L5 8zm4 2v10h2V10H9zm4 0v10h2V10h-2zm-3-5V3h4v2h5v2H4V5h5z" />
          </svg>
        </button>
      </div>

      <button className="bg-green-700 p-2 px-5 rounded-lg mb-8 hover:bg-green-500 text-white">
        Go back
      </button>
    </div>
  );
}
