import { endPoints } from "../Constant/URLs";
import { ProductsModel } from "../Models/ProductModels";
import { httpRequest } from "../Services/HttpService";
import { AxiosResponse } from "axios";



async function getProducts(): Promise<ProductsModel[]> {
    try {
        let res: AxiosResponse<ProductsModel[]> = await httpRequest.get(endPoints.product);
        let data: ProductsModel[] = res.data;
        return data;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch products");
    }
}


export{getProducts}