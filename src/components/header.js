import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { colors, fontSizer } from "../Utilities/"
import SMBLogo from "./SMBLogo"

const MainTitle = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  color: ${colors.white};
  font-size: ${fontSizer(2, 3, 76.8, 110)};

  a {
    color: ${colors.white};
    font-size: 1em;
  }
`

const Tagline = styled.p`
  margin: 0;
  margin-top: 1rem;
  color: ${colors.white};
  font-size: ${fontSizer(1.4, 1.8, 76.8, 110)};
  text-align: center;
`

const SiteTitleContainer = styled.div`
  width: 100%;
  text-align: center;
`

const LogoContainer = styled.div`
  width: 100%;
  max-width: 17.5rem;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ff1654`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <MainTitle>
        <LogoContainer>
          <Link to="/">
            <SMBLogo />
          </Link>
        </LogoContainer>
        <SiteTitleContainer>
          {/* <Link to="/">{siteTitle}</Link> */}
        </SiteTitleContainer>
      </MainTitle>
      <Tagline>Eat well, tell stories... be kind.</Tagline>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
