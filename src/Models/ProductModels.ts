export interface ProductsModel {
    id?: number;
    name?: string;
    description?: string;
    qyt?: number;
    price?: number;
    available?: boolean;
}



export interface ProductCartProps extends ProductsModel {
    showExtraButton?: boolean; 
    children?: React.ReactNode;}




    export interface DeleteProductArgs {
        id: string;
        endpoint: string;
      }

      export interface FormProps extends ProductsModel {
        edit?: boolean;
      }



    