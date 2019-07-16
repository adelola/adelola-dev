import React from 'react'
import Img from 'gatsby-image'
import { TweenMax  } from "gsap/TweenMax"
import styled from '@emotion/styled'
import colors from '../styles/colors'
import { propTypes } from 'react-typography/dist/GoogleFont';

const ExperienceStyle = styled.div`
  padding: 2em;
  min-height: 100vh;
  background-color: ${colors.lightgray};
`;

class Experience extends React.Component {
    
    render() {
      const images= this.props.sequence

    return (
    <ExperienceStyle id="experience"> 
      <h1>Experience</h1>
      <div id="imagesequence" >
      </div>
    </ExperienceStyle > 
      )
    }
  }

  export default Experience