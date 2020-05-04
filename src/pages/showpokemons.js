import React from "react"

const ShowPokemons = ({data}) =>(
  <div>
    {console.log(data)}
    {data.pokedex.pokemons.map(pokemon => <div>{pokemon.name}<img src={pokemon.image}/></div>)}
  </div>
)

export default ShowPokemons