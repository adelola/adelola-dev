import React from "react"
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "@emotion/styled"
import { jsx } from "@emotion/core"
import colors from "../styles/colors"

const CardStyle = styled.div`
  max-width: 500px;
  min-width: 400px;
  height: 600px;
  padding: 1em 1em 0 1em;
  overflow: hidden;
  border-radius: 3px;
  margin: 1em 1em;
  box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.18);
  display: grid;
  grid-template-columns: 50px auto 100px;
  grid-template-rows: 50px 150px 250px auto auto;
  grid-template-areas: 
    "external . . link" 
    "title title title title" 
    ". image image image"
    "tools tools image image"
    ". image image image";
`;

const LinkStyle = styled.div`
  grid-area: link;
  grid-row: 1/2;
  grid-column: 4/5;
  text-align: right;
  font-size: 2em;
  a {
   color: ${colors.white};
  }
`;

const TitleStyle = styled.div`
  grid-area: title;
  grid-row: 2/3;
  grid-column: 1/5;
  overflow: hidden;
  text-align: center;
  a{ 
  text-decoration: none;
  color: ${colors.darknavy};
  }
  p {
    color: #474a51; 
    }
`;

const ImageStyle = styled.div`
  grid-area: image;
  grid-row: 3/6;
  grid-column: 2/5;
  bottom: 0;
  overflow: hidden;
  display:grid;
  /* background-color: ${colors.darknavy}; */
  transform: translate(45px, 22px) rotate(-7deg);
  box-shadow: -10px 0px 35px 5px rgba(0,0,0,0.18);    

`;

const ToolsStyle = styled.div`
  grid-area: tools;
  grid-row: 4/5;
  grid-column: 1/3;
  z-index: 12;
  padding: .5em;
  text-align: center;
  background-color: ${colors.navy};
  box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.18);
  .tools-info{
    display: block;
    text-transform: uppercase;
    /* transform: skew(10deg); */
    color: white;

  }
`;

const ExternalLinkStyle = styled.div`
  grid-area: external;
  grid-row: 1/2;
  grid-column: 1/2;
  text-align: left;
  a {
  vertical-align: bottom;
  bottom: 0;
  color: ${colors.white};
  }
  font-size: 1.5em;
`;



const Card = (props) => {
    const project = props.project

    // const NonStretchedImage = props => {
    //     let normalizedProps = props
    //     if (props.fluid) {
    //       normalizedProps = {
    //         ...props,
    //         style: {
    //           ...(props.style || {}),
    //           maxWidth: 300,
    //           margin: "0 auto", // Used to center the image
    //         },
    //       }
    //     }
    //     return <Img {...normalizedProps} />
    //   }

    return (

        <CardStyle 
          css={{  backgroundColor: `${project.color}`, 
         
         }}>
            <LinkStyle> 
              <AniLink swipe direction="left" top="exit" to={`/projects/${project.slug}`} duration={0.7} entryOffset={100}> <FontAwesomeIcon icon={ faArrowAltCircleRight } /></AniLink>
             </LinkStyle>
            <TitleStyle>
            <AniLink swipe direction="left" top="exit" to={`/projects/${project.slug}`} duration={0.7} entryOffset={100}><h1>{project.name}</h1></AniLink>
              <p className="project_summary" dangerouslySetInnerHTML= {{  __html:project.summary.childMarkdownRemark.html }}></p>
            </TitleStyle>
            <ImageStyle>
              <AniLink swipe direction="left" top="exit" to={`/projects/${project.slug}`} duration={0.7} entryOffset={100}>
                <Img className="hero-image" fluid={project.heroImage.fluid} />
              </AniLink>
            </ImageStyle>
            
            <ToolsStyle >
                <ul className="tools-info">
                {project.tools.map((tool, index) => {
                 return (
                    <li key={index}> 
                      <h4>{tool} &nbsp;</h4>     
                    </li>
                 )
                })}
                </ul>
            </ToolsStyle>
            <ExternalLinkStyle>  
                <p><a href={project.repositoryUrl}> <FontAwesomeIcon icon={ faGithub } /> </a></p>
                
                <p> <a href={project.projectUrl}>  <FontAwesomeIcon icon={ faExternalLinkAlt } /></a></p>
            </ExternalLinkStyle> 
        </CardStyle>

    )
}

export default Card 