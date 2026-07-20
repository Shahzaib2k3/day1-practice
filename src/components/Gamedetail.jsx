
import { useNavigate, useParams } from "react-router-dom"
 const games=[
  {name:"gta5",desc:" open world game",image:"https://placehold.co/100",id:1},
  {name:"cod",desc:" war game ",image:"https://placehold.co/100",id:2},
  {name:"fifa",desc:" football game ",image:"https://placehold.co/100",id:3},
  {name:"far cry 5",desc:" tactics game ",image:"https://placehold.co/100",id:4}
]


function Gamedetail(){

    const {id}=useParams()
    const navigate = useNavigate()
    const game = games.find((game)=>game.id===Number(id))
     if (!game) {
    return <h1>Game not found</h1>;
  }
    return(
        <div>
        <button onClick={()=>navigate("/games")}>
         back
        </button>
        <h1>{game.name}</h1>
        </div>

    )
} 

export default Gamedetail