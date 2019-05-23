import React from "react"
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

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

        <div className="boundry">
            <div className="top_info">
              <Link to={`/projects/${project.slug}`}> More... </Link>
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
        </div>

    )
}

export default Card 