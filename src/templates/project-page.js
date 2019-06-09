import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import get from 'lodash/get'
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "@emotion/styled"
import { jsx } from "@emotion/core"
import colors from "../styles/colors"

const ProjectPageStyle = styled.div`


  min-height: 100vh;

`

const HeaderStyle = styled.div`

  background-color: red;
  height: 550px;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 40% 40% auto;
  grid-template-rows: 40px auto;
  grid-template-areas: 
  "back . . ." 
  "left title image right";
`
const BackButton = styled.div`
  grid-area: back;
  grid-row: 1/2;
  grid-column: 1/2;
  text-align: center;
`;
const BackButtonStyle = styled.div`
  grid-area: back;
  grid-row: 1/2;
  grid-column: 1/2;
  text-align: center;
`;
const TitleStyle = styled.div`
  grid-area: title;
  grid-row: 2/3;
  grid-column: 2/3;
  text-align: left;
`;
const ImageStyle = styled.div`
  grid-area: image;
  grid-row: 2/3;
  grid-column: 3/4;
  text-align: right;
`;
const LeftProjectStyle = styled.div`
  grid-area: left;
  grid-row: 2/3;
  grid-column: 1/2;
  text-align: left;
`;

const RightProjectStyle = styled.div`
  grid-area: right;
  grid-row: 2/3;
  grid-column: 3/4;
  text-align: right;
`;






const DescriptionStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3em;

`
const BreakerStyle = styled.div`

  height: 300px;
  border: 1px red dotted;

`
function DescriptionTwo(project) {
  console.log(project.props.description2)
  if (project.props.description2) {
    return (
      <div>
        <BreakerStyle> &nbsp; </BreakerStyle>
        <DescriptionStyle> 
          <div dangerouslySetInnerHTML={{ __html: project.props.description2.childContentfulRichText.html }} />
        </DescriptionStyle> 
        
      </div>
    )
  }
  return (
    <BreakerStyle> 
      &nbsp; 
    </BreakerStyle>
  );
}

class ProjectPageTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const {previous, next} = this.props.pageContext

    return (

        <Layout location={this.props.location} title={siteTitle}>
          <SEO title={siteTitle}/>
          <ProjectPageStyle>
            <HeaderStyle>
              <BackButtonStyle>
                <AniLink swipe direction="right" top="exit" to="/" duration={0.5} entryOffset={100}>Back Home</AniLink>
              </BackButtonStyle>
              <TitleStyle>
                <h1>{project.name}</h1>
              </TitleStyle>
              <ImageStyle>
                <Img alt="" fluid={project.heroImage.fluid} />
              </ImageStyle>
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
              
            </HeaderStyle>
            
            <DescriptionStyle>
              <div dangerouslySetInnerHTML={{ __html: project.description.childContentfulRichText.html }} />
            </DescriptionStyle>
            
           <DescriptionTwo props={project} />
          </ProjectPageStyle>
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
        description2 {
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
