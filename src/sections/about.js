import React from "react"
import Section from "../components/section"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


class About extends React.Component {
    render() {

    return (
    <Section id="about">  
      <div dangerouslySetInnerHTML={{  __html: this.props.intro, }}></div>
      <div className="social_links"> 
        <ul>
          <li><a href= {this.props.socials.codePen}><FontAwesomeIcon icon={faCodepen} /></a></li>
          <li><a href= {this.props.socials.github}><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href= {this.props.socials.linkedin}><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href= {this.props.socials.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
        </ul>
      </div>
    </Section>
      )
    }
  }
  export default About