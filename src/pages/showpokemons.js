import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {PokemonMesh,EachPokemon,Eachtext} from "../components/styles"

const ShowPokemons = ({data}) =>(
  <Layout>
      <PokemonMesh>
        {data.pokedex.pokemons.map(pokemon => <EachPokemon>
          <img src={pokemon.image} alt={pokemon.name}/>
          <Eachtext>Name: {pokemon.name}</Eachtext>
        </EachPokemon>)}
      </PokemonMesh>
  </Layout>
)

export const query =  graphql`
    query{
        pokedex {
            pokemons(first: 150) {
                name,
                image,
                id
            }
        }
    }`

export default ShowPokemons
