import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Pokemon Fans" />
    <Link to="/showpokemons/">show</Link>
  </Layout>
)

export default IndexPage
