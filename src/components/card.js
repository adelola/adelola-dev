import React from "react"
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "@emotion/styled"

const CardStyle = styled.header`
  max-width: 500px;
  min-width: 400px;
  border: 1px red solid;
  padding: 2em;
  border-radius: 1%;
  margin: 1em 1em;
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

        <CardStyle>
            <div className="top_info">
              <AniLink swipe direction="left" top="exit" to={`/projects/${project.slug}`} duration={0.7} entryOffset={100}> More... </AniLink>
              <h1>{project.name}</h1>
              <div className="project_summary" dangerouslySetInnerHTML= {{  __html:project.summary.childMarkdownRemark.html }}></div>
            </div>
            <div className="card_image">
                <NonStretchedImage fluid={project.heroImage.fluid} />
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
            </div>
        </CardStyle>

    )
}

export default Card 