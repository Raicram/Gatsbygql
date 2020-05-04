import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowPokemons from "./showpokemons"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <ShowPokemons data={data}/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
    query{
        pokedex {
            pokemons(first: 150) {
                name,
                image,
                id
            }
        }
    }`

export default IndexPage
