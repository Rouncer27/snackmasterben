import React from "react"
import styled from "styled-components"

import YouTubeIcon from "./YouTubeIcon"
import InstagramIcon from "./InstagramIcon"
import { colors, standardWrapper, fontSizer } from "../Utilities/"

const FooterStyled = styled.footer`
  padding: 5rem 2rem;
  background: ${colors.colorShadow};
`

const FooterWrapper = styled.div`
  ${standardWrapper}
`

const FooterCopy = styled.div`
  width: 100%;
  text-align: center;
  p {
    ${fontSizer(1.4, 1.8, 76.8, 110)}
    margin: 0;

    a {
      color: ${colors.black};
      font-size: 1em;

      &:hover {
        color: ${colors.colorPrimary};
      }
    }

    span {
      ${fontSizer(1, 1.2, 76.8, 110)}
      display: block;
    }
  }
`

const FooterSocialMedia = styled.div`
  display: flex;

  a {
    margin: auto 1rem;
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <FooterWrapper>
        <FooterSocialMedia>
          <YouTubeIcon />
          <InstagramIcon />
        </FooterSocialMedia>
        <FooterCopy>
          <p>
            © {new Date().getFullYear()} Snack Master Ben, Built with Love &
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>.{" "}
            <span>A side hustle by @ROUNCER27</span>
          </p>
        </FooterCopy>
      </FooterWrapper>
    </FooterStyled>
  )
}

export default Footer
