import Gamef from "./components/Gamef";
import { Route,Routes } from "react-router-dom";
import PokemonList from "./components/PokemonLIst";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gamedetail from "./components/Gamedetail";
import Contactform from "./components/ContactForm";



function App() {
  
  return (
  

    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/games" element={<Gamef/>}/>
        <Route path="/games/:id" element={<Gamedetail/>}/>
        <Route path="/pokemons" element={<PokemonList/>}/>
        <Route path="/contact" element={<Contactform/>}/>
      </Routes>
    </div>
  );
}

export default App;