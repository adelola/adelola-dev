import React from 'react'
import styled from '@emotion/styled'
import colors from '../styles/colors'

const FooterStyle = styled.div`
  background-color: ${colors.gray};
  color: ${colors.darknavy};
  text-align: center;
  font-weight: bold;
  padding: 2em;

  a {
    color: ${colors.darknavy} 
  }
`;

const Footer = () => (
    <FooterStyle>
      <footer>
        © {new Date().getFullYear()}, Built by Adelola with
        {` `}
        <a href="https://www.gatsbyjs.org">GatsbyJS</a>
     </footer>
  </FooterStyle>
)

export default Footer 