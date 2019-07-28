import React, { useState } from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import colors from '../styles/colors'
// import CustomTween from '../components/custom-tween'
// import { propTypes } from 'react-typography/dist/GoogleFont'

import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import { jsx } from '@emotion/core'

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
 
  /* grid-area: image;
  grid-row: 2/5;
  grid-column: 2/5; */
`;

const Experience = (props) => {
  const images = props.sequence
  const [count, setCount] = useState(0)
  
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
          <Scene triggerHook="onEnter" duration="1000" offset="700" reverse="true" pin>
            <Tween
              target = { {count} }
              duration={0.5}
              roundProps = { "count"}
              count = { `${images.length}` - 1 }
              immediateRender = {true}
              ease={"Linear.easeNone"}
              // playState={state === 'entering' ? Tween.playState.reverse : state === 'exiting' ? Tween.playState.play : null}
             
            >
              <NonStretchedImage fluid={images[count].fluid} />
            </Tween>
          </Scene>
        </Controller>
      </SequenceStyle>
    </ExperienceStyle > 
  )  
}

  export default Experience