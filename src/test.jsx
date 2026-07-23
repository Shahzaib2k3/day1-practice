import { Routes,Route, Link } from "react-router-dom"
import Games from "./Games"
import Movies from "./Movies"

function test(){
    return (
        <div>
            <div>
                <Link to="/games">games </Link>
                <Link to="/movies">movies</Link>
            </div>

    <Routes>
        <Route path="/games" element={<Games/>}/>
          <Route path="/movies" element={<Movies/>}/>
    </Routes>
    </div>
    )
}
 export default test