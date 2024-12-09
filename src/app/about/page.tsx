"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function About(){

    const router=useRouter()

    const handleNavigate=()=>{
        router.push("/contact")
    }
    return(
        <div>
            <h1>About page</h1>

            <Link href={'/'}>Home Page</Link>
            <button onClick={handleNavigate}>Contact Page</button>
        </div>
    )
}