import React from "react"
import Section from "../components/section"
import Card from "../components/card" 

class Projects extends React.Component {
    render() {
      const projects = this.props.projects

    return (
    <Section id="projects"> 
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
    </Section> 
      )
    }
  }
  export default Projects