import { endPoints } from "../Constant/URLs";
import { httpRequest } from "../Services/HttpService";
import { AxiosResponse } from "axios";

interface Product {
    id: number;
    name: string;
    price: number;
    // Add other fields as needed
}

async function getProducts(): Promise<Product[]> {
    try {
        let res: AxiosResponse<Product[]> = await httpRequest.get(endPoints.product);
        let data: Product[] = res.data;
        return data;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch products");
    }
}