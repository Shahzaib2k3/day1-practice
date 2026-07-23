import { useContext } from "react"
import Focusinput from "./Focusinput"
import { ThemeContext } from "../contexts/Themecontext"
import Pokemonquery from "./Pokemonquery"
import Testredux from "./Testredux"

function Home(){
    const {theme}=useContext(ThemeContext)
    return(
        <div className={`text-blue-500 ${theme==="light"?"bg-gray-100":"bg-black"} shadow  flex flex-col justify-center items-center min-h-screen text-6xl`}>
            <Focusinput/>
            <Pokemonquery/>
            <Testredux/>

            <h1 className="hover:text-blue-900"> welcome to my app</h1>
        </div>
    )
}
export default Home
