import { useContext, useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import { ThemeContext } from "../contexts/Themecontext";

function PokemonList() {

  const [selected, setSelected] = useState(null);
  const [details, setDetails] = useState(null);
  const [search ,setSearch]= useState("")
  const [detailsError, setDetailsError] = useState(null);

  const {theme}=useContext(ThemeContext)


  const {data,error,loading}=useFetch("https://pokeapi.co/api/v2/pokemon?limit=20")

  useEffect(() => {
    async function detsfetch() {
      try {
        const responsepok = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${selected}`,
        );
        setDetails(responsepok.data);
      } catch (err) {
        setDetailsError("failed to load data ");
      }
    }
    selected && detsfetch();
  }, [selected]);

  function selectpokemon(name) {
    setSelected(name);
  }
  function goback() {
    setDetails(null);
    setSelected(null);
  }
const pokemons =data?.results ??[]
 const filteredpokemons= pokemons.filter((pokemon)=>pokemon.name.toLowerCase().includes(search.toLowerCase()))
 const pokemonstoDisplay=search?filteredpokemons:pokemons

  return (
    <div className={`${theme==="light"?"bg-gray-100":"bg-black"}`}>
      <h1 className={`text-4xl font-bold text-center py-6 ${theme==="light"?"text-black":"text-white"}`}>
        {" "}
        Pokemons List
      </h1>

      {loading && (
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
      )}
      {error !== null && <p className="text-red-600 text-center">{error}</p>}
    <div className="flex items-center justify-center"> <input type="text"
     placeholder="search for pokemon "
     value={search}
     onChange={(e)=>setSearch(e.target.value)}
      className="bg-red-400 rounded-full shadow-xl text-center py-2 mt-2 border-2 border-blue-500" />
      </div> 
      <div className={details ? "flex justify-center" : "grid grid-cols-3 "}>
        {details ? (
          <div className="text-xl text-center mb-4 ">
            <p>{detailsError}</p>
            <button
              className="bg-red-800 rounded-full p-3 mb-6 mt-2"
              onClick={goback}
            >
              go back{" "}
            </button>
            <p className="border rounded border-red-500 bg-red-200">
              {" "}
              Height:{details.height}
            </p>
            <p className="border rounded border-red-500 bg-red-200">
              Weight:{details.weight}
            </p>
            <p>Abilities:</p>
            {details.abilities.map((ability) => (
              <div
                key={ability.ability.name}
                className="border rounded border-red-500 bg-red-200"
              >
                <p>{ability.ability.name}</p>
              </div>
            ))}
          </div>
        ) : (
          pokemonstoDisplay.map((pokemon) => (
            <div
              key={pokemon.name}
              className="border-2 border-blue-500 mx-2 my-2 rounded p-2 bg-red-400 shadow hover:shadow-xl transition hover:bg-red-800"
              onClick={() => selectpokemon(pokemon.name)}
            >
              <h1>{pokemon.name} </h1>
              <p>{pokemon.url}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PokemonList;
