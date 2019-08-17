import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CardView from "../components/cardView";


const IndexPage = () => (
  <Layout>
    <SEO title="All News" />
    <h1>🔥 Popular Teams</h1>
    <h1>All News</h1>
    <CardView/>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
