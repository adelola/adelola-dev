import React from "react"
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "@emotion/styled"
import { jsx } from "@emotion/core"

const CardStyle = styled.div`
max-width: 500px;
min-width: 400px;
height: 600px;
padding: 2em 2em 0 2em;
overflow: hidden;
border-radius: 3px;
margin: 1em 1em;
box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.18);

`;

const ImgStyle = styled.div`
  bottom: 0;
  

`;


const Card = (props) => {
 

    const project = props.project

    const NonStretchedImage = props => {
        let normalizedProps = props
        if (props.fluid) {
          normalizedProps = {
            ...props,
            style: {
              ...(props.style || {}),
              maxWidth: 300,
              margin: "0 auto", // Used to center the image
            },
          }
        }
        return <Img {...normalizedProps} />
      }

    return (

        <CardStyle 
          css={{  backgroundColor: `${project.color}`, 
         
         }}>
            <div className="top_info">
              <AniLink swipe direction="left" top="exit" to={`/projects/${project.slug}`} duration={0.7} entryOffset={100}> More... </AniLink>
              <h1>{project.name}</h1>
              <div className="project_summary" dangerouslySetInnerHTML= {{  __html:project.summary.childMarkdownRemark.html }}></div>
            </div>
            
            <div className="bottom_info">
                <ul className="tools_info">
                {project.tools.map((tool, index) => {
                 return (
                    <li key={index}> 
                      {tool}  
                    </li>
                 )
                })}
                </ul>
                <div className="links">
                    <a href={project.projectUrl}>  <FontAwesomeIcon icon={ faLink} /></a>
                    <a href={project.repositoryUrl}> <FontAwesomeIcon icon={faGithub} /> </a>
                </div>

                <ImgStyle>
                  <NonStretchedImage fluid={project.heroImage.fluid} />
                </ImgStyle>
            </div>
        </CardStyle>

    )
}

export default Card 