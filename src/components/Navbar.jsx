import { Link } from "react-router-dom"

function Navbar(){
     return (
        <div className="bg-indigo-600 shadow-xl p-4">
            <div className="flex items-center  justify-center gap-4 ">
         <Link to ="/" className="border rounded bg-red-400 p-4 rounded-full"> home</Link>
          <Link to ="/games" className="border rounded bg-red-400 p-4 rounded-full" >games </Link>
           <Link to ="/pokemons" className="border rounded bg-red-400 p-4 rounded-full">pokemons</Link>
           <Link to ="/contact" className="border rounded bg-red-400 p-4 rounded-full"> contact us </Link>
           </div>
        </div>
     )
}
 export default Navbar