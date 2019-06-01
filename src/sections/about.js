import React from "react"
import Section from "../components/section"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from "@emotion/styled"
import colors from "../styles/colors"

const AboutStyle = styled.div`
  min-height: 100vh;
  color: ${colors.navy};
`;


class About extends React.Component {
    render() {

    return (
    <AboutStyle id="about">  
      <div dangerouslySetInnerHTML={{  __html: this.props.intro, }}></div>
      <div className="social_links"> 
        <ul>
          <li><a href= {this.props.socials.codePen}><FontAwesomeIcon icon={faCodepen} /></a></li>
          <li><a href= {this.props.socials.github}><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href= {this.props.socials.linkedin}><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href= {this.props.socials.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
        </ul>
      </div>
    </AboutStyle>
      )
    }
  }
  export default About