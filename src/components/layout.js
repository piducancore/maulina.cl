/** @jsx jsx */
import { jsx, Themed, Container } from "theme-ui"
import React, { useEffect } from "react"

import Seo from "./seo"
import Header from "./header"
import Footer from "./footer"
import MenuIcon from "./menu-icon"
import Logo from "./logo"
import DrawerMenu from "./drawer-menu"

import useStore from "../state"

const Layout = ({ children, location, pageContext, seo }) => {
  const { toggleMenu } = useStore()
  // check if current page is root
  const rootPath = `${__PATH_PREFIX__}/`
  const isHome = location?.pathname === rootPath

  // disable context menu
  useEffect(() => {
    document.addEventListener("contextmenu", e => {
      e.preventDefault()
    })
  })

  return (
    <React.Fragment>
      <Seo
        title={seo?.title || pageContext?.frontmatter?.title || ""}
        description={seo?.description}
        image={seo?.image}
      />
      <DrawerMenu />
      <div sx={{ variant: "layout.root" }}>
        {isHome ? (
          <div
            sx={{
              flexWrap: "wrap",
              display: "flex",
            }}
          >
            <div
              sx={{
                p: 3,
                flexGrow: 1,
                flexBasis: 256,
                position: "sticky",
                top: 0,
                alignSelf: "start",
                display: "flex",
                flexDirection: ["row", "column"],
                height: [null, "100vh"],
                justifyContent: "space-between",
              }}
            >
              <MenuIcon
                onClick={toggleMenu}
                sx={{ cursor: "pointer", mr: "auto" }}
              />
              <div sx={{ display: "flex", flexDirection: "column" }}>
                <Logo height={"100%"} sx={{ mx: "auto", height: [32, 88] }} />
                <Themed.p sx={{ display: ["none", "inherit"] }}>
                  Comunidad de fotografía
                </Themed.p>
              </div>
              <div></div>
            </div>
            <main
              sx={{
                variant: "layout.main",
                flexGrow: 99999,
                flexBasis: 0,
                minWidth: 320,
              }}
            >
              {children}
            </main>
          </div>
        ) : (
          <React.Fragment>
            <Header />
            <main sx={{ variant: "layout.main" }}>
              <Container>{children}</Container>
            </main>
          </React.Fragment>
        )}
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
