/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import React, { useEffect } from "react"

import Seo from "./seo"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, location, pageContext, seo }) => {
  // check if current page is root
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isHome = location?.pathname === rootPath

  // disable context menu
  useEffect(() => {
    document.addEventListener("contextmenu", e => {
      e.preventDefault()
    })
  })

  return (
    <React.Fragment>
      <Seo title={seo?.title || pageContext?.frontmatter?.title || ""} />
      <div sx={{ variant: "layout.root" }}>
        <Header />
        <main sx={{ variant: "layout.main" }}>
          <Container>{children}</Container>
        </main>
        <footer sx={{ variant: "layout.footer" }}>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  )
}

export default Layout
