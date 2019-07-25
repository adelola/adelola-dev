import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import colors from '../styles/colors'
// import { propTypes } from 'react-typography/dist/GoogleFont'
import { Controller, Scene } from 'react-scrollmagic'
import TweenMax from 'gsap'

const ExperienceStyle = styled.div`
  padding: 2em;
  min-height: 100vh;
  background-color: ${colors.lightgray};
`;

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  obj: {curImg: 0},
                  images: this.props.sequence,
                  main: this.props.sequence[0]
                  }
  }

  componentDidMount() {
    // TweenMax can tween any property of any object. We use this object to cycle through the array
    // const obj = {curImg: 0};
    // const images = this.state.images;

    // create tween
    // const tween = TweenMax.to(obj, 3 ,
    //   {
    //     curImg: images.length - 1,	// animate propery curImg to number of images
    //     roundProps: "curImg",				// only integers so it can be used as an array index
    //     repeat: 0,									// repeat 3 times
    //     immediateRender: true,			// load first image automatically
    //     ease: Linear.easeNone,			// show every image the same ammount of time
    //     onUpdate:  () =>  {
    //       this.setState({ main:  images[obj.curImg] })
    //     }
    //   }
    // );

    // new ScrollMagic.Scene({
    //   triggerElement: "#imagesequence",
    //   duration: 1000, // scroll distance
    //   offset: 100,
    //   reverse: true
    // })
      // .setTween(tween)
    //   .addIndicators({
    //     colorStart: "green",
    //     colorEnd: "green",
    //     colorTrigger: "blue"
    //   })
    //   .addTo(this.controller); // assign the scene to the controller
  }

    render() {
      // const obj = {curImg: 0};
      // const images = this.state.images;
  
      const tween = TweenMax.to(this.state.obj, 3 ,
        {
          curImg: this.state.images.length - 1,	// animate propery curImg to number of images
          roundProps: "curImg",				// only integers so it can be used as an array index
          repeat: 0,									// repeat 3 times
          immediateRender: true,			// load first image automatically
          ease: Linear.easeNone,			// show every image the same ammount of time
        }
      );

    return (
    <ExperienceStyle id="experience"> 
      <h1>Experience</h1>
      <Controller>
      <Scene triggerHook="onEnter" duration="300%" tween={tween}>
          <Img fluid={this.state.main.fluid}/>
      </Scene>
    </Controller>
   
   
   
   
   
   
   
          
   
      {/* <div id="imagesequence" >  
        
      </div> */}
    </ExperienceStyle > 
      )
    }
  }

  export default Experience