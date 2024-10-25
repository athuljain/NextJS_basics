import { products } from "../../../../utils/constants";

interface paramsType{params:{productId:string}}


export default function ProductView({params}:paramsType){
    console.log("params",params);

    const id:number=parseInt(params.productId)
    
    const ProductV=products[id]
    console.log("Product:",ProductV);
    
    
    return(
        <div>
            <h1>Product View</h1>

            <h1>{ProductV.name}</h1>
            <h2>{ProductV.price}</h2>
        </div>
    )
}