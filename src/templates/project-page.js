import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import get from 'lodash/get'
import Layout from "../components/layout"
import SEO from "../components/seo"

class ProjectPageTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const {previous, next} = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle}/>
        <h1>{project.name}</h1>
        <Link to="/#projects">Back to Projects</Link>
        <Img alt="" fluid={project.heroImage.fluid} />
        <div dangerouslySetInnerHTML={{ __html: project.description.childContentfulRichText.html }} />
        
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
              <Link to={`/projects/${next.slug}`} rel="next">
                {next.name} ←
              </Link>
            )}
          </li>
         <li>
            {previous && (
              <Link to={`/projects/${previous.slug}`} rel="prev">
                 {previous.name} →
              </Link>
            )}
          </li>  
        </ul>
      </Layout>
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
