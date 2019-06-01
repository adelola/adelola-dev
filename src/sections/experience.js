import React from "react"
// import Section from "../components/section"
import styled from "@emotion/styled"
import colors from "../styles/colors"

const ExperienceStyle = styled.div`
  min-height: 100vh;
  background-color: ${colors.lightgray};

`;

class Experience extends React.Component {
    render() {

    return (
    <ExperienceStyle id="experience"> 
      <p>Experience</p>
    </ExperienceStyle > 
      )
    }
  }
  export default Experience