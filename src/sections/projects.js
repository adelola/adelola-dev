import React from "react"
import Section from "../components/section"
import Card from "../components/card"
import styled from "@emotion/styled"
import colors from "../styles/colors"

const ProjectsStyle = styled.div`
  background: ${colors.white};
  max-width: 100vw;

  ul{
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    align-items: flex-start;
  }

`;


class Projects extends React.Component {
    render() {
      const projects = this.props.projects

    return (
    <ProjectsStyle id="projects"> 
      <h1> Projects </h1>
      <ul >
        {projects.map(({ node }) => {
          return (
            <li key={node.slug}>
              <Card project= {node} />
            </li>
          )})
        }
      </ul>
    </ProjectsStyle> 
      )
    }
  }
  export default Projects