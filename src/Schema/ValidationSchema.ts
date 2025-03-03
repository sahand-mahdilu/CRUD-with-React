import * as YUP from "yup";


const ValidationSchemaYup= YUP.object({

    name: YUP.string().required("name is required"),
    description: YUP.string().required("description is required"),
    qyt: YUP.number().required("qyt is required").positive("qyt must be positive"),
    price: YUP.number().required("Price is required").positive("Price must be positive")


})


export{ValidationSchemaYup}