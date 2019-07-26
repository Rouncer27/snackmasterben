import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { colors, fontSizer } from "../Utilities/"

const MainTitle = styled.h1`
  color: ${colors.white};
  font-size: ${fontSizer(2, 4, 76.8, 110)};

  a {
    color: ${colors.white};
    font-size: 1em;
  }
`

const Tagline = styled.p`
  margin: 0;
  color: ${colors.white};
  font-size: ${fontSizer(1.4, 1.8, 76.8, 110)};
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
        <Link to="/">{siteTitle}</Link>
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
