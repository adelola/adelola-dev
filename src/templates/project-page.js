import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import get from 'lodash/get'
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class ProjectPageTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const {previous, next} = this.props.pageContext

    return (

        <Layout location={this.props.location} title={siteTitle}>
          <SEO title={siteTitle}/>
              {/* Pagination Arrows */}
              <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >

            <li>
              {next && (
                <AniLink swipe direction="right" top="exit" to={`/projects/${next.slug}`} duration={0.5} entryOffset={100} rel="next">
                  {next.name} ←
                </AniLink>
              )}
            </li>
          <li>
              {previous && (
                <AniLink swipe direction="left" top="exit" to={`/projects/${previous.slug}`} duration={0.5} entryOffset={100} rel="prev">
                  {previous.name} →
                </AniLink>
              )}
            </li>  
          </ul>
          <h1>{project.name}</h1>
          <AniLink swipe direction="right" top="exit" to="/" duration={0.5} entryOffset={100}>Back Home</AniLink>
          <Img alt="" fluid={project.heroImage.fluid} />
          <div dangerouslySetInnerHTML={{ __html: project.description.childContentfulRichText.html }} />
          
      
        </Layout>
      // </PageTransition>
    )
  }
}

export default ProjectPageTemplate

export const pageQuery = graphql`
  query ContentfulProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title  
      }
    }
    contentfulProject( slug: { eq: $slug }) {
        name
        projectUrl
        repositoryUrl
        category
        description {
            childContentfulRichText {
                html
            }
        }
        heroImage {
            fluid(maxWidth: 600){
              ...GatsbyContentfulFluid
            }
        }
    }
  }
`
