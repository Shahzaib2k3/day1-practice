//import Profilecard from "./components/Profilecard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Game from "./components/Game";
/*const profiles = [
  { name: "Shahzaib", role: "Aspiring MERN Developer", image: "https://via.placeholder.com/100" },
  { name: "Alex", role: "Backend Engineer", image: "https://via.placeholder.com/100" },
  { name: "Priya", role: "UI Designer", image: "https://via.placeholder.com/100" },
  { name: "Shahzaib",role:"freelancer",image:"https://via.placeholder.com/100"}
];
*/
const games =[
  {name:"gta5",desc:" open world game",image:"https://via.placeholder.com/100"},
  {name:"cod",desc:" war game ",image:"https://via.placeholder.com/100"},
  {name:"fifa",desc:" football game ",image:"https://via.placeholder.com/100"},
  {name:"far cry 5",desc:" tactics game ",image:"https://via.placeholder.com/100"}
]
function App() {
  return (
    <>
    <Header/>
    <h1>Hello, I'm building this myself</h1>
    {games.map((game,index)=>(
      <Game key={index} name={game.name} desc={game.desc} image={game.image} />

    ))}

    <Footer/>
    </>
  );
}

export default App;