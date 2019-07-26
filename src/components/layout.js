import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import theme from "./styles/Theme"
import GlobalStyle from "./styles/Golbal"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()} Snack Master Ben, Built with Love &
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </React.Fragment>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
