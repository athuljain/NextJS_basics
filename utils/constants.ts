// export const products:{id:number;name:string;price:number}[]=[
//     {
//         "id":1,
//         "name":"Product 1",
//         "price":1000
//     },
//     {
//         "id":2,
//         "name":"Product 2",
//         "price":2000
//     },
//     {
//         "id":3,
//         "name":"Product 3",
//         "price":3000
//     },
//     {
//         "id":4,
//         "name":"Product 4",
//         "price":4000
//     }
// ]



// or

interface ProductType{
    id:number;
    name:string;
    price:number
}

export const products:ProductType[]=[
        {
        "id":0,
        "name":"Product 1",
        "price":1000
    },
    {
        "id":1,
        "name":"Product 2",
        "price":2000
    },
    {
        "id":2,
        "name":"Product 3",
        "price":3000
    },
    {
        "id":3,
        "name":"Product 4",
        "price":4000
    }
]
