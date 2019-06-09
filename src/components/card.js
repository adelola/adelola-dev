import React from "react"
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
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
grid-template-columns: 100px auto 100px;
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
`;

const TitleStyle = styled.div`
  grid-area: title;
    grid-row: 2/3;
    grid-column: 1/5;
    overflow: hidden;
    text-align: center;

`;

const ImageStyle = styled.div`
    grid-area: image;
    grid-row: 3/6;
    grid-column: 2/5;
    bottom: 0;
    overflow: hidden;
    display:grid;
    
   img {
    justify-self: end;
    position: absolute;
    bottom: 0;
  
    }
`;

const ToolsStyle = styled.div`
  grid-area: tools;
    grid-row: 4/5;
    grid-column: 1/3;
    border-radius: 10px;
    background: ${colors.white};
    z-index: 12;
    padding: 5px auto;
    text-align: center;
    box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.18);
`;

const ExternalLinkStyle = styled.div`
  grid-area: external;
    grid-row: 1/2;
    grid-column: 1/2;
    z-index: 12;
    text-align: left;
    a {
    vertical-align: bottom;
    bottom: 0;
    color: ${colors.darknavy};
    }

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
              <AniLink swipe direction="left" top="exit" to={`/projects/${project.slug}`} duration={0.7} entryOffset={100}> Project Details</AniLink>
             </LinkStyle>
            <TitleStyle>
              <h1>{project.name}</h1>
              <p className="project_summary" dangerouslySetInnerHTML= {{  __html:project.summary.childMarkdownRemark.html }}></p>
            </TitleStyle>
            <ImageStyle>
                  <Img fluid={project.heroImage.fluid} />
                  {/* <NonStretchedImage fluid={project.heroImage.fluid} /> */}
            </ImageStyle>
            
            <ToolsStyle>
                <ul className="tools_info">
                {project.tools.map((tool, index) => {
                 return (
                    <li key={index}> 
                      <p>{tool}</p>     
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