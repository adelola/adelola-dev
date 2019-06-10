import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import get from 'lodash/get'
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import styled from "@emotion/styled"
import { jsx, css } from "@emotion/core"
import colors from "../styles/colors"

const ProjectPageStyle = styled.div`
  min-height: 100vh;
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
`

const HeaderStyle = styled.div`
  height: 550px;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 40% 40% auto;
  grid-template-rows: 40px auto 20em 15em;
  grid-template-areas: 
  "back . . ." 
  ". title image ."
  "link title image link "
  ". title image . ";
`

const BackButtonStyle = styled.div`
  grid-area: back;
  grid-row: 1/2;
  grid-column: 1/2;
  text-align: center;
`;

const LinkStyle = styled.div`
  grid-area: link;
  grid-row: 4/5;
  grid-column: 1/5;
  padding: 2em;
  z-index: 20;
  display:grid;
  a {
    text-decoration: none;
  }
  .fa-chevron-circle-right {
    font-size: 4em;
    justify-self: end;
    @media (max-width: 780px) {
        font-size: 3em;
      }
    &:hover {
      color: ${colors.navy}
    }
  }
  .fa-chevron-circle-left {
    font-size: 4em;

    @media (max-width: 780px) {
      font-size: 3em;
    }
    &:hover {
    color: ${colors.navy}
    }
  }
  .link-name{
    visibility: hidden;
    display: block;
    font-size: 1.2em;
    color: ${colors.darknavy};
  }
`;

const TitleStyle = styled.div`
  grid-area: title;
  grid-row: 2/5;
  grid-column: 2/3;
  text-align: left;
  min-width: 400px;
  z-index: 10;
  padding: 10em 3em;
`;

const ExternalLinkStyle = styled.div`
  font-size: 1.75em;
  a {
    color: ${colors.darknavy};
  }
`;

const ImageStyle = styled.div`
  grid-area: image;
  grid-row: 2/5;
  grid-column: 3/4;
  margin-left: 1em;
  margin-right: 1.5em;
  .project-image{
    box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.18);
    overflow: hidden;
  }
`;

const DescriptionStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3em;
`
const BreakerStyle = styled.div`
  height: 300px;
`
function SupplementalDescription(project) {
  console.log(project.props.description2)
  if (project.props.description2) {
    return (
      <div>
        <BreakerStyle css={{  backgroundColor: `${project.props.color}` 
          }}> &nbsp; </BreakerStyle>
        <DescriptionStyle> 
          <div dangerouslySetInnerHTML={{ __html: project.props.description2.childContentfulRichText.html }} />
        </DescriptionStyle> 
      </div>
    )
  }
    return (
      <BreakerStyle css={{  backgroundColor: `${project.props.color}`}}> 
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
          <HeaderStyle 
          css= {{ background: [
            `white`,
            `${project.color}`,
            `linear-gradient(to bottom, ${project.color},  white)`], 
          }} >
            <BackButtonStyle>
              <AniLink swipe direction="right" top="exit" to="/" duration={0.5} entryOffset={100}>← Adelola</AniLink>
            </BackButtonStyle>
            <TitleStyle>
              <h1>{project.name}</h1>
              <p dangerouslySetInnerHTML= {{  __html:project.summary.childMarkdownRemark.html }}></p>
              <ExternalLinkStyle>  
                <a href={project.repositoryUrl} css={{ ":hover": {color: `${project.color}`}
              }}> <FontAwesomeIcon icon={faGithub} /> </a> &nbsp;&nbsp;
                <a href={project.projectUrl} css={{ ":hover": {color: `${project.color}`}
              }}>  <FontAwesomeIcon icon={ faExternalLinkAlt} /></a>
              </ExternalLinkStyle>
            </TitleStyle>
            <ImageStyle>
              <Img alt="" className="project-image" fluid={project.heroImage.fluid} />
            </ImageStyle>
            <LinkStyle>
            <ul style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}>
                <li>
                  {next && (
                    <AniLink swipe direction="right" top="exit" to={`/projects/${next.slug}`} duration={0.5} entryOffset={100} rel="next" css= {{ ":hover": { ".link-name" : { "visibility": "visible" } } }}>
                      <FontAwesomeIcon css={{ color: `${project.color}`}} icon={faChevronCircleLeft} /><span className="link-name">{next.name}</span>
                    </AniLink>
                  )}
                </li>
                <li>
                  {previous && (
                    <AniLink swipe direction="left" top="exit" to={`/projects/${previous.slug}`} duration={0.5} entryOffset={100} rel="prev" css= {{ ":hover": { ".link-name" : { "visibility": "visible" } } }}>
                        <FontAwesomeIcon css={{ color: `${project.color}`}} icon={faChevronCircleRight} /> <span className="link-name">{previous.name}</span>
                    </AniLink>
                  )}
                </li>
            </ul>
            </LinkStyle>
            
          </HeaderStyle>
          
          <DescriptionStyle>
            <div dangerouslySetInnerHTML={{ __html: project.description.childContentfulRichText.html }} />
          </DescriptionStyle>
          
          <SupplementalDescription props={project} />
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
        color
        projectUrl
        repositoryUrl
        category
        summary {
            childMarkdownRemark{
              html
          }
        }
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
