import { useDispatch } from "react-redux";
import Footer from "./Footer";
import Game from "./Game";

import { useState } from "react";
import { Link } from "react-router-dom";
import { addtocart } from "../redux/cartslice";





function Gamef(){
    const [dark,setDark]=useState(false)
  const [games,setGames] =useState([
  {name:"gta5",desc:" open world game",image:"https://placehold.co/100",id:1},
  {name:"cod",desc:" war game ",image:"https://placehold.co/100",id:2},
  {name:"fifa",desc:" football game ",image:"https://placehold.co/100",id:3},
  {name:"far cry 5",desc:" tactics game ",image:"https://placehold.co/100",id:4}
])

const dispatch= useDispatch()
function addgame(){
  return (
    setGames([...games,{name:"need for speed",desc:"racing game ",image:"https://placehold.co/100",id:5}])
  )
}

function removegames(){
  return (
  setGames([])
  )
}
function darke(){
  return (
    setDark(!dark)
  )


}
function deletegame(id){
  return (
  setGames(games.filter((game)=>game.id!==id))
  )
}
function editdesc(id){
  
    const newdesc=prompt("enter new description:")
    setGames(games.map((game)=>
      game.id===id?{...game,desc:newdesc}:game
    ))
  
}
    return(
 <div className={`${dark?"bg-gray-700":"bg-gray-100"} max-w-4xl mx-auto`}>
    <div className="bg-purple-500 text-white p-4 text-center flex justify-between" >
        <p className="col-span-3 text-center">{games.length}  games in library </p>
        <div>
        <button onClick={addgame} className="bg-green-500 text-white p-4 rounded-full mx-4 active:scale-95 hover:bg-green-600">
      add game 
    </button>
    <button onClick={removegames} disabled={games.length === 0} className={` text-white p-4 rounded-full active:scale-95 ${games.length===0?"bg-gray-400 text-gray-700" :" bg-red-500 hover:bg-red-600"}`}>
      clear games 
    </button>
    <button onClick={darke}>Dark mode</button>
    </div>
        </div>
  
 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 ">
    {games.length===0?<p className="col-span-3 text-center">no games found </p>:games.map((game)=>(
      <div>
      <Link to={`/games/${game.id}`}>
      <Game key={game.id} name={game.name} desc={game.desc} image={game.image}  id={game.id} />
      </Link>
      <button onClick={()=>deletegame(game.id)}>Delete game</button>
      <button onClick={()=>editdesc(game.id)}>editdesc</button>
      <button onClick={()=>dispatch(addtocart(game))} className="border rounded bg-red-400 p-2 rounded-full"> add to cart </button>
      
      </div>
      

    ))}
    </div>

    
    <Footer />
    </div>
    )
}
export default Gamef