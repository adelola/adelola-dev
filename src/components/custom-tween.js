import React, { useState } from 'react'
import TweenMax from 'gsap/TweenMax'
import Img from 'gatsby-image'


const CustomTween = (props) => {

    const [count, setCount] = useState(0);

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

    

    let obj = {nominal: 0}
    TweenMax.from(count, 0.5,
        {
        to: props.images.length - 1,	// animate propery curImg to number of images
        roundProps: "nominal",				// only integers so it can be used as an array index
        repeat: 0,									// no repeat
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
            console.log("something on")
          }
        }
    )

  return(
    <div id="stateful"> 
        <NonStretchedImage fluid={ props.images[`${obj.nominal}`].fluid } />
    </div>
  )


}

export default CustomTween