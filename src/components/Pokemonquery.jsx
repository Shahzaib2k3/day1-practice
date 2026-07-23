import { useQuery } from "@tanstack/react-query"
import axios from "axios"

function Pokemonquery(){
    const {data,isLoading,isError,refetch}=useQuery({
        queryKey:['pokemon'],
        queryFn:()=> {
              console.log("fetching!")
          return  axios.get('https://pokeapi.co/api/v2/pokemon?limit=20').then(res => res.data)},
          staleTime:1000*60
    })
     const pokemons= data?.results ??[]
    return (

        <div>
          {isLoading&&<p>loading...</p>}
            {isError?<p>{isError}</p>:pokemons.map((pokemon)=>
            <div key={pokemon.name}>
             <p>{pokemon.name}</p>
             <button onClick={refetch}>reftech</button>
            </div>
            )}

        </div>
    )
}
export default Pokemonquery