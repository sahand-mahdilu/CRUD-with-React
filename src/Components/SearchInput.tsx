import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function SearchInput() {

    const [searchParam, setSearchParams] = useSearchParams();


    const [available, setAvailable] = useState<boolean>(searchParam.get("available") === "true" ? true : false);



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




  return (
    <div className="flex gap-4">
    
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
