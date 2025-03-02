import { useCallback, useEffect, useState } from "react";
import {  useSearchParams } from "react-router";

export default function SearchInput() {

    const [searchParam, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParam.get("name_like") || "");

   


    const [available, setAvailable] = useState<boolean>(searchParam.get("available") === "true" ? true : false);

    console.log(searchParam);
    console.log(available);


    const updateSearchParams= useCallback((value:string)=>{

        setSearchParams((prev)=>{

            if(value==""){
                prev.delete("name_like")
            }else{
                prev.set("name_like",value)
            }
            return prev
        })
    },[])



    const AvailableParam = useCallback((value: boolean) => {
        if (value) {
          setSearchParams((prev) => {
            prev.set("available", value.toString());
            return prev;
          });
        } else {
          setSearchParams((prev) => {
            prev.delete("available");
            return prev;
          });
        }
      }, []);


      useEffect(() => {
        AvailableParam(available);
      }, [available, AvailableParam]);

      useEffect(()=>{
        updateSearchParams(query)
      },[query,updateSearchParams])




  return (
    <div className="flex gap-4 justify-center mt-7">


      <input
        type="text"
        placeholder="Search..."
        className="w-1/2 border rounded-2xl p-2 mb-4 hover:bg-gray-200/50 cursor-pointer transition-all duration-300 ease-in-out"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    
      <label className="flex gap-2 items-center justify-center cursor-pointer">
        Available :
        <input
          className="cursor-pointer"
          type="checkbox"
          onChange={(e) => setAvailable(e.target.checked)}
          checked={available}
        />
      </label>
    </div>
  )
}
