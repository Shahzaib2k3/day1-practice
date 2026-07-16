import { useState } from "react"
import Movie from "./movie"

function ScratchTest(){
const [movies,setMovies]= useState([
    {id:1,name:"spideman",desc:"hero movie ",favorite: false},
    {id:2,name:"flight club ",desc:"flight take off ",favorite: false},
    {id:3,name:"cars",desc:"racing ",favorite: false}
])

const [search,setSearch]=useState('')
const [ascending,setAscending]=useState(false)
const [showFavorites, setShowFavorites] = useState(false);

const filteredmovies = movies.filter((movie) =>
  movie.name.toLowerCase().includes(search.toLowerCase())
);
const favMovies=filteredmovies.filter((movie)=>movie.favorite===true)


const moviestosort= showFavorites?favMovies:filteredmovies
const displayedMovies = [...moviestosort].sort((movieA, movieB) =>
  ascending
    ? movieA.name.localeCompare(movieB.name)
    : movieB.name.localeCompare(movieA.name)
);
const moviestoDisplayed= displayedMovies


function sort(){

    setAscending(!ascending)
}
function add(){
    return(
        setMovies([...movies,{id:4,name:"batman",desc:"dark movie ",favorite: false}])
    )
}

function deleteitem(id){
    return (
     setMovies(movies.filter((movie)=>movie.id!==id))
    )
}
function addfav(id){
   setMovies( movies.map((movie)=>movie.id===id?{...movie,favorite:(!movie.favorite)}:movie))
    
}
function showfav(){
    return (
        setShowFavorites(!showFavorites)
    )
}
console.log(movies)
    return (
  <div className="max-w-3xl mx-auto p-4">
    <div className="bg-indigo-500 text-white text-center font-bold py-4 rounded-lg mb-4">
      <h2 className="text-2xl mb-2">Movie Tracker made by shahzaib for react practice</h2>
      <button 
        onClick={add}
        className="bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 active:scale-95 transition"
      >
        + Add Movie
      </button>
    </div>
    <div className="flex justify-between">
       <input type="text"
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
       className="bg-indigo-400 mb-4 text-center rounded"
       placeholder="search for a movie"
       />
       <button
       className="bg-indigo-400 rounded p-4 shadow-xl mb-4  hover:shadow-lg transition hover:bg-indigo-500"
       onClick={showfav}
       >
        favourite movies </button>
       <button 
       className="bg-indigo-400 rounded p-4 shadow-xl mb-4  hover:shadow-lg transition hover:bg-indigo-500"
       onClick={sort}
       > sort </button>
       </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {moviestoDisplayed.map((movie) => (
        <div key={movie.id} className="bg-white border rounded-lg shadow p-4 flex flex-col justify-between hover:shadow-lg transition">
          <Movie desc={movie.desc} name={movie.name} />
          <button 
            onClick={() => deleteitem(movie.id)}
            className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 active:scale-95 self-start"
          >
            Delete
          </button>
          <button
          onClick={()=>addfav(movie.id)}
          className="bg-yellow-400 rounded px-3 py-1 mt-3 hover:bg-yellow-600 active:scale-95 self-start"
          >
            favourite
          </button>
        </div>
      ))}
    </div>
  </div>
);
}

export default ScratchTest