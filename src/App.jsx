import Profilecard from "./components/Profilecard";
import Footer from "./components/Footer";
import Header from "./components/Header";
const profiles = [
  { name: "Shahzaib", role: "Aspiring MERN Developer", image: "https://via.placeholder.com/100" },
  { name: "Alex", role: "Backend Engineer", image: "https://via.placeholder.com/100" },
  { name: "Priya", role: "UI Designer", image: "https://via.placeholder.com/100" },
  { name: "Shahzaib",role:"freelancer",image:"https://via.placeholder.com/100"}
];

function App() {
  return (
    <>
    <Header/>
    <h1>Hello, I'm building this myself</h1>
    {profiles.map((profile,index)=>(
      <Profilecard  key ={index} name={profile.name} image={profile.image} role={profile.role}/>
    ))}
    <Footer/>
    </>
  );
}

export default App;