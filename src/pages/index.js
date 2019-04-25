import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get'
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"
import About from "../sections/about"
import Mission from "../sections/mission"
import Experience from "../sections/experience"
import Projects from "../sections/projects"
import Footer from "../components/footer"


class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const person = get(this, 'props.data.allContentfulPerson.edges')

  return (
    <Layout>
      <SEO title={siteTitle} keywords={[`Adelola`, `Adelola Adekunle`, `Adekunle`]} />
      <Nav />
      <About />
      <Mission />
      <Experience />
      <Projects />
      <Footer />
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
