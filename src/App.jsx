import Gamef from "./components/Gamef";
import { Route,Routes } from "react-router-dom";
import PokemonList from "./components/PokemonLIst";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gamedetail from "./components/Gamedetail";
import Contactform from "./components/ContactForm";

import { ThemeProvider } from "./contexts/Themecontext";
import ProtectedPage from "./components/ProtectedPage";
import LoginForm from "./components/LoginForm";
import Cart from "./components/Cart";





function App() {
  
  return (
  

    <div>
      
      <ThemeProvider>
      <Navbar/>
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/games" element={<Gamef/>}/>
        <Route path="/games/:id" element={<Gamedetail/>}/>
        <Route path="/pokemons" element={<PokemonList/>}/>
        <Route path="/contact" element={<Contactform/>}/>
        <Route path="/protectedpage" element={<ProtectedPage/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;



