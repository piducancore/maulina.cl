/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "./seo"

const Container = props => (
  <div
    {...props}
    sx={{
      width: "100%",
      maxWidth: "container",
      mx: "auto",
      px: 3,
    }}
  />
)

const Layout = ({ children, pageContext, seo }) => {
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
    <React.Fragment>
      <Seo title={seo?.title || pageContext?.frontmatter?.title || ""} />
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          variant: "layout.root",
        }}
      >
        {/* <header
          sx={{
            width: "100%",
            variant: "layout.header",
          }}
        >
          <Container>{data.site.siteMetadata?.title}</Container>
        </header> */}
        <main
          sx={{
            width: "100%",
            flex: "1 1 auto",
            variant: "layout.main",
          }}
        >
          <Container>{children}</Container>
        </main>
        {/* <footer
          sx={{
            width: "100%",
            variant: "layout.footer",
          }}
        >
          <Container>
            <Themed.p sx={{ textAlign: "center" }}>
              <small>{data.site.siteMetadata?.title}</small>
            </Themed.p>
          </Container>
        </footer> */}
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
