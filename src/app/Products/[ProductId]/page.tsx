"use client";


import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";

export default function ProductDetails() {
  const params = useParams();
  console.log("Params",params);
  
  const searchParams = useSearchParams();

  console.log("search params",searchParams);
  
  const id = params.ProductId; // dynamic route parameter
 const name = searchParams.get("name"); // query parameter
 const price=searchParams.get("price")

  return (
    <div>
      <h1>Product details</h1>
      <div>
      <h2>

<h1>Product Id : {id}</h1>

        Name: {name} for {id} <br></br>
        Price :{price}
      </h2>
      </div> 
     

      <Link href={"/Products"}>Product page</Link>
    </div>
  );
}