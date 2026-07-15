//import Profilecard from "./components/Profilecard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Game from "./components/Game";
import Counter from "./components/Counter";
import { useState } from "react";
/*const profiles = [
  { name: "Shahzaib", role: "Aspiring MERN Developer", image: "https://via.placeholder.com/100" },
  { name: "Alex", role: "Backend Engineer", image: "https://via.placeholder.com/100" },
  { name: "Priya", role: "UI Designer", image: "https://via.placeholder.com/100" },
  { name: "Shahzaib",role:"freelancer",image:"https://via.placeholder.com/100"}
];
*/

function App() {
  const [games,setGames] =useState([
  {name:"gta5",desc:" open world game",image:"https://via.placeholder.com/100",id:1},
  {name:"cod",desc:" war game ",image:"https://via.placeholder.com/100",id:2},
  {name:"fifa",desc:" football game ",image:"https://via.placeholder.com/100",id:3},
  {name:"far cry 5",desc:" tactics game ",image:"https://via.placeholder.com/100",id:4}
])
function addgame(){
  return (
    setGames([...games,{name:"need for speed",desc:"racing game ",image:"https://via.placeholder.com/100",id:5}])
  )
}
  return (
    <>
    <Header/>
    <h1>Hello, I'm building this myself</h1>
    {games.map((game)=>(
      <Game key={game.id} name={game.name} desc={game.desc} image={game.image} />
      

    ))}
    <button onClick={addgame}>
      add game 
    </button>
     <Counter/>
    <Footer/>
    </>
  );
}

export default App;