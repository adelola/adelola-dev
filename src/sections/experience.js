import React from 'react'
import Img from 'gatsby-image'
import { TweenMax  } from 'gsap/TweenMax'
import styled from '@emotion/styled'
import colors from '../styles/colors'
import ScrollMagic from 'scrollmagic'
import { propTypes } from 'react-typography/dist/GoogleFont'

const ExperienceStyle = styled.div`
  padding: 2em;
  min-height: 100vh;
  background-color: ${colors.lightgray};
`;

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: props.sequence }
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    // TweenMax can tween any property of any object. We use this object to cycle through the array
    const obj = {curImg: 0};
    const images = this.state.images;

    // create tween
    const tween = TweenMax.to(obj, 0.5,
      {
        curImg: images.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 3,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          // $("#myimg").attr("src", images[obj.curImg])
        }
      }
    );

    new ScrollMagic.Scene({
      triggerElement: "#trigger",
      duration: 600, // scroll distance
    })
      .setTween(tween)
      .addTo(this.controller); // assign the scene to the controller
  }

    render() {
      

    return (
    <ExperienceStyle id="trigger"> 
      <h1>Experience</h1>
      <div id="imagesequence" >
        {this.state.images.map(( image ) => {
          return (
            <Img fluid={image.fluid}/>
          )})
        }  
      </div>
    </ExperienceStyle > 
      )
    }
  }

  export default Experience