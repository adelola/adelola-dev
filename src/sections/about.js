import React from "react"
import Section from "../components/section"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from "@emotion/styled"
import colors from "../styles/colors"

const AboutPageStyle = styled.div`
  min-height: 100vh;
  color: ${colors.navy};
  padding: 5em 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IntroStyle = styled.div`
  max-width: 70%;
  font-size: 1.25em;
  p{
    color: ${colors.orange};
    font-weight: 700;
  }
  @media (max-width: 768px) {
    max-width: 95%; 
    }
`;

const SocialStyle = styled.div`
  .circle-container a{   
    cursor: pointer;
    color: ${colors.orange};
    display: block;
    position: absolute;
    top: 24%; left: 90%;
    width: 7em; height: 2em;
    margin: -2em;
    @media (max-width: 768px) {
      top: 21%; left: 80%;
    }
    @media (max-width:420px) {
      display: none;
    }
  }

  .circle-container .awesome-icon { 
    display: block; 
    width: 100%; 
    font-size: 2em; 
    @media (max-width:420px) {
      font-size: 1.5em; 
    }
  }
   
  .deg300 { transform: rotate(300deg) translate(7em) rotate(100deg); }
  .deg145 { transform: rotate(145deg) translate(7em) rotate(-295deg); }
  .deg190 { transform: rotate(190deg) translate(7em) rotate(-255deg); }
  .deg245 { transform: rotate(245deg) translate(7em) rotate(-265deg); }
  
  ul {
      list-style: none;
  }
`;


class About extends React.Component {
    render() {

    return (
      <AboutPageStyle id="about">  
        <IntroStyle dangerouslySetInnerHTML={{  __html: this.props.intro, }}></IntroStyle>
        <SocialStyle> 
          <div className='circle-container'>
          <ul>
            <li><a href= {this.props.socials.codePen} className='deg145'><FontAwesomeIcon className='awesome-icon' icon={faCodepen} /></a></li>
            <li><a href= {this.props.socials.github} className='deg190'><FontAwesomeIcon className='awesome-icon' icon={faGithub} /></a></li>
            <li><a href= {this.props.socials.linkedin} className='deg245'><FontAwesomeIcon className='awesome-icon' icon={faLinkedinIn} /></a></li>
            <li><a href= {this.props.socials.twitter} className='deg300'><FontAwesomeIcon className='awesome-icon' icon={faTwitter} /></a></li>
          </ul>
          </div>
          
        </SocialStyle>
      
      </AboutPageStyle>
      )
    }
  }
  export default About