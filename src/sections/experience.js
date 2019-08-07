import React, { Component} from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import colors from '../styles/colors'
import { Controller, Scene } from 'react-scrollmagic'

const ExperienceStyle = styled.div`
  padding: 2em;
  min-height: 100vh;
  background-color: ${colors.lightgray};
  /* display: grid;
  grid-template-areas: 
  "title . . ."
  ". image image image"
  ". image image image"
  ". image image image"; */
`;

const TitleStyle = styled.div`
  max-height: 100px;
  max-width: 300px;
  border: 1px green solid;
  /* grid-area: title;
  grid-row: 1/2;
  grid-column: 1/2; */
`;

const SequenceStyle = styled.div`
  border: red 1px dotted;
  .mainimage {
    border: 3px solid black;
  }
  /* grid-area: image;
  grid-row: 2/5;
  grid-column: 2/5; */
`;

class Experience extends Component {  
  render(){
    const images = this.props.sequence
    
    const NonStretchedImage = props => {
      let normalizedProps = props
      if (props.fluid) {
          normalizedProps = {
          ...props,
          style: {
              ...(props.style || {}),
              maxWidth: 350,
              margin: "0 auto", // Used to center the image
          },
          }
      }
      return <Img {...normalizedProps} />
    }

  return (
    <ExperienceStyle id="experience"> 
      <TitleStyle> 
        <h1>Experience</h1>
      </TitleStyle>   
      <SequenceStyle>
        <Controller>
          <Scene triggerHook="onEnter" duration="1000" offset="800" reverse={true} indicators={true} pin>
          {(progress, event) => {
            const base = Math.ceil(100/images.length)
            const count = Math.floor((progress * 100)/base)
            return(
              <div><NonStretchedImage fluid={images[count].fluid} /></div>
            )
          }}
          </Scene>
        </Controller>
      </SequenceStyle>
    </ExperienceStyle > 
  )}
  }  

  export default Experience