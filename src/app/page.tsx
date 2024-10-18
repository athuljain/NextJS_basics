
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
       <h1>Home Page</h1>
     <Link href={'/about'}><p>About page</p>
     </Link>  


     <Link href={'/Products'}>Products Page</Link>
    </div>
  );
}
