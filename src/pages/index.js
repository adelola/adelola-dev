import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const author = get(this, 'props.data.allContentfulPerson.edges')


  return (
    <Layout>
      <SEO title={siteTitle} keywords={[`Adelola`, `Adelola Adekunle`, `Adekunle`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
    )
  }
}
export default RootIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPerson {
      edges {
        node {
          name
          title
        }
      }
    }
  }
`
