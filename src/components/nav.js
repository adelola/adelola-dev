import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Headroom from 'react-headroom'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import colors from '../styles/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Avatar from '../images/Adelola-avatar.svg'


const Navstyle = styled.header`
  width: 100%;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  align-items: right;
  padding: 0px 100px 0;
  height: 80px;
  margin-bottom: 60px;
  background: ${colors.lightgray};
  
  a {
    color: ${colors.darknavy};
    opacity: 1;
    transition: all 0.6s;
    font-size: 1em;
    text-decoration: none;
  }
  a:hover {
    opacity: .5;
  }
  .hamburger {
    display: none;
    color: ${colors.darknavy};
    font-size: 2rem;
  }
  nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      list-style: none;
    ul {
      display: flex;
      list-style: none;
    }
    li {
      padding-top: 15px;
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      color: ${colors.darknavy};
      font-size: 1em;
      text-decoration: none;
      .active {
        color: #222;
      }  
    }
  }
  #avatar{
    fill: ${colors.orange};
  }
  #avatar:hover {
    fill: ${colors.darknavy};
  }


  #resume {
      color: ${colors.orange};
      border: ${colors.orange} 3px solid;
      border-radius: 15px;
      padding: 2px 5px;
    }
  .logo {
    margin-top: 5px;
    width: 60px;
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      padding-top: 15px;
      width: 70px;
      display: block;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;


class Nav extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render(){
    const { isExpanded } = this.state;
    const anchorLinks = [{ url: "#about", name:"About"}, 
                        { url: "#experience", name:"Experience"}, 
                        { url: "#projects", name:"Projects"} ]
    return (
      <Headroom>
        <Navstyle>
          <div className="logo">
            <Link to="/">
              <Avatar />
            </Link>
          </div>
          <nav className="nav">
            
            <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
              { anchorLinks.map(({ url, name }, i) => (
                <li key={i}><strong>
                  <AnchorLink href={url} onClick= {e => this.handleToggle(e)}>{name}</AnchorLink>
                  </strong></li>
                ))}
            <li><strong><a href="/Adelola_dev_resume.pdf" id="resume" target="_blank" rel="nofollow noopener noreferrer"> Resume </a></strong></li>

            </ul>
            
            <FontAwesomeIcon icon={ faBars } className="hamburger" aria-hidden="true" onClick={e => this.handleToggle(e)} />
          
          </nav>
        </Navstyle>
      </Headroom>
    )
  }
}


// Nav.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Nav.defaultProps = {
//   siteTitle: ``,
// }

export default Nav
