import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Maindiv,StyledShow } from "../components/styles"

const IndexPage = () => (
  <Layout>
    <SEO title="Pokemon Fans" />
    <Maindiv>
      <h1>Explore universe of Pokemons!</h1>
      <StyledShow to="/showpokemons/">show</StyledShow>
    </Maindiv>
  </Layout>
)

export default IndexPage
