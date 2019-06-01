import React from "react"
import styled from "@emotion/styled"
import colors from "../styles/colors"

const FooterStyle = styled.div`
  background-color: ${colors.darknavy};
  color: ${colors.white};
`;

const Footer = () => (
    <FooterStyle>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
     </footer>
  </FooterStyle>
)

export default Footer 