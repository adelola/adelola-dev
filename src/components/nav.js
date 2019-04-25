import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Navigation = styled.header`
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


`;


class Nav extends React.Component{
    
    render(){
      // const { anchorLinks } = this.props
      const anchorLinks = [{ url: "#about", name:"About"}, { url: "#experience", name:"Experience"}, { url: "#mission", name:"Mission"}, { url: "#projects", name:"Projects"} ]
    return (
    <Navigation>
        <Link to="/">
          Adelola Adekunle
        </Link>
          { anchorLinks.map(({ url, name }, i) => (
            <div key={i} >
              <AnchorLink href={url}>{name}</AnchorLink>
            </div>
          ))}
    </Navigation>
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
