import { Link } from "react-router-dom"
import { ThemeContext } from "../contexts/Themecontext"
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/authslice"
function Navbar(){

   const loggedin =useSelector((state)=>state.auth.isLoggedIn)
   const dispatch =useDispatch()
   const {theme,toggletheme}=useContext(ThemeContext)
     return (
        <div className={`${theme === "light" ? "bg-indigo-600" : "bg-blue-600"} shadow-xl p-4`}> 
            <div className="flex items-center  justify-center gap-4 ">
               <button onClick={toggletheme}>change theme</button>
         <Link to ="/" className="border rounded bg-red-400 p-4 rounded-full"> home</Link>
          <Link to ="/games" className="border rounded bg-red-400 p-4 rounded-full" >games </Link>
           <Link to ="/pokemons" className="border rounded bg-red-400 p-4 rounded-full">pokemons</Link>
           <Link to ="/contact" className="border rounded bg-red-400 p-4 rounded-full"> contact us </Link>
           <Link to ="/test"className="border rounded bg-red-400 p-4 rounded-full" > test code</Link>
           <Link to="/protectedpage" className="border rounded bg-red-400 p-4 rounded-full"> protected</Link>
           <Link to="/cart" className="border rounded bg-red-400 p-4 rounded-full" >cart</Link>
           {loggedin?<button onClick={()=>dispatch(logout())} >logout</button>:<Link to="/login" className="border rounded bg-red-400 p-4 rounded-full">login</Link>}
           </div>
        </div>
     )
}
 export default Navbar