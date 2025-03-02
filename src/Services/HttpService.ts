import axios from "axios";
import { baseUrl } from "../Constant/URLs";

const httpRequest =axios.create({
    baseURL: baseUrl,
   
    headers: {
      "Content-Type": "application/json",
    },
   
  }) 


export { httpRequest };
