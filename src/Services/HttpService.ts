import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { baseUrl } from "../Constant/URLs";

const httpRequest =axios.create({
    baseURL: baseUrl,
   
    headers: {
      "Content-Type": "application/json",
    },
   
  }) 
  axios.interceptors.request.use(
    function (config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> {
      return config;
    },
    function (error: any): Promise<any> {
      return Promise.reject(error);
    }
  );
  
 
  axios.interceptors.response.use(
    function (response: AxiosResponse): AxiosResponse {
      return response;
    },
    function (error: any): Promise<any> {
      return Promise.reject(error);
    }
  );

export { httpRequest };
