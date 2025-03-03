import { endPoints } from "../Constant/URLs";
import { ProductsModel } from "../Models/ProductModels";
import { httpRequest } from "../Services/HttpService";
import { AxiosResponse } from "axios";



async function getProducts(search:string): Promise<ProductsModel[]> {
    try {
        let res: AxiosResponse<ProductsModel[]> = await httpRequest.get(`${endPoints.product}${search}`);
        let data: ProductsModel[] = res.data;
        return data;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch products");
    }
}
async function getCartProducts(): Promise<ProductsModel[]> {
    try {
        let res: AxiosResponse<ProductsModel[]> = await httpRequest.get(`${endPoints.cart}`);
        let data: ProductsModel[] = res.data;
        return data;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch products");
    }
}
async function getProduct(id:string): Promise<ProductsModel>{

    try{
       
     let res: AxiosResponse<ProductsModel> = await httpRequest.get(
            `${endPoints.product}/${id}`
          );
          let data:ProductsModel =  res.data
          console.log(data);
          return data;
         

    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch products");
    }
}

async function Addproducts(product:ProductsModel,endpoint:string){

    try{
        let res : AxiosResponse<ProductsModel> = await httpRequest.post(`${endpoint}`,product)
        let data : ProductsModel = res.data
        return data
    }catch(err){
        console.log(err);
    }


} 

async function deleteProduct(id:string,endpoint:string){

    try{
        let res : AxiosResponse<ProductsModel> = await httpRequest.delete(`${endpoint}/${id}`)
        let data : ProductsModel = res.data
        return data
    }catch(err){
        console.log(err);
    }
    
}


export{getProducts,getProduct,Addproducts,getCartProducts,deleteProduct}