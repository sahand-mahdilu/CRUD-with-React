export interface ProductsModel {
    id?: number;
    name: string;
    description: string;
    qyt: number;
    price: number;
    available: boolean;
}



export interface ProductCartProps extends ProductsModel {
    showExtraButton?: boolean; 
    children?: React.ReactNode;}