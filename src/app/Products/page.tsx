import Link from "next/link";

export default function Products(){


const ProductData:{id:number;name:string;price:number}[]=[
    {
        "id":1,
        "name":"Product 1",
        "price":1000
    },
    {
        "id":2,
        "name":"Product 2",
        "price":2000
    },
    {
        "id":3,
        "name":"Product 3",
        "price":3000
    },
    {
        "id":4,
        "name":"Product 4",
        "price":4000
    }
]


    return(
        <div>
        <h1>Products Page</h1>
        <div style={{display:"flex", gap:"20px"}}>
          {ProductData.map((data) => (
            <div  key={data.id} style={{backgroundColor:"gray"}}>
              <h2>Name: {data.name}</h2>
              <p>Price: ${data.price}</p>
              {/* Link to the product details page */}
              <Link href={`/Products/${data.id}?name=${data.name}&price=${data.price}`}>
                View Details
              </Link>
            </div>
          ))}
        </div>
        <Link href="/">Home</Link>
      </div>
    )
}