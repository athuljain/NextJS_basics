import Link from "next/link";
import { products } from "../../../utils/constants";

export default function Products(){



    return(
        <div>
        <h1>Products Page</h1>
        <div style={{display:"flex", gap:"20px"}}>
       {products.map((data)=>(
        <Link href={`/Products/${data.id}`} key={data.id}>
        <div>
          <h1>{data.name}</h1>
          <h2>{data.price}</h2>

        </div>
        </Link>
       ))}
        </div>
        <Link href="/">Home</Link>
      </div>
    )
}