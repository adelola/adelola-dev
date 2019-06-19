import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Nav from '../components/nav'
import SEO from '../components/seo'
import About from '../sections/about'
// import Experience from '../sections/experience'
import Projects from '../sections/projects'
import Footer from '../components/footer'



class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const person = get(this, 'props.data.allContentfulPerson.edges[0].node')
    const projects =  get(this, 'props.data.allContentfulProject.edges')
    const social_links = {codePen: person.codePen, github: person.github, linkedin: person.linkedin, twitter: person.twitter }

  return (
      <Layout>
        <SEO title={siteTitle} keywords={[`Adelola`, `Adelola Adekunle`, `Adekunle`]} />
        <Nav />
        <About intro={person.briefIntro.childMarkdownRemark.html} socials= {social_links}/>
        {/* <Experience /> */}
        <Projects projects= {projects} />
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
          briefIntro {
            childMarkdownRemark{
              html
            }
          }
          email
          codePen
          github
          linkedin
          twitter
        }
      }
    }
    allContentfulProject {
      edges {
        node {
          name
          color
          heroImage  {
            fluid(
              maxWidth: 300
              quality: 100
              background: "rgb:000000"
            ){
              ...GatsbyContentfulFluid

            }
          }
          projectUrl
          rating
          repositoryUrl
          slug
          summary {
            childMarkdownRemark{
              html
            }
          }
          tools
        }
      }
	  }

  }
`
