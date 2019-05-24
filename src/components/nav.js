import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Headroom from 'react-headroom'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Navbar = styled.header`
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 80px;
  margin-bottom: 60px;
  background: #E2DADB;
  
  a {
    color: #222;
    opacity: 1;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
    text-decoration: none;
  }
  a:hover {
    opacity: .5;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: #222;
      }
    }
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
      width: 100%;
      display: block;
      padding-top: 20px;
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
      // const { anchorLinks } = this.props
      const anchorLinks = [{ url: "#about", name:"About"}, 
                            { url: "#experience", name:"Experience"}, 
                            { url: "#projects", name:"Projects"} ]
    return (
      <Headroom>
        <Navbar>
          <div className="logo">
            <Link to="/">
              Logo
            </Link>
          </div>
          <nav className="nav">
            <i  
              className="fa fa-bars"
              aria-hidden="true"
              onClick={e => this.handleToggle(e)}
            />
            <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
              { anchorLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <AnchorLink href={url} onClick= {e => this.handleToggle(e)}>{name}</AnchorLink>
                </li>
                ))}
            </ul>
          </nav>
          <a  href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer"> <strong>Resume</strong> </a>
        </Navbar>
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
