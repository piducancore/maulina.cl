/** @jsx jsx */
import { jsx, Themed, Container, Grid, Box, Flex } from "theme-ui"
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
        {
          /* isHome ? (
          <React.Fragment>
            <Grid columns={[1, "1fr 3fr", "1fr 4fr"]} gap={0}>
              <Box>
                <Flex
                  sx={{
                    flexDirection: ["row", "column"],
                    position: "sticky",
                    top: 0,
                    alignSelf: "start",
                  }}
                >
                  <MenuIcon
                    onClick={toggleMenu}
                    sx={{ cursor: "pointer", mr: "auto" }}
                  />
                  <div sx={{ display: "flex", flexDirection: "column" }}>
                    <Logo height={"100%"} sx={{ mx: 4, height: [32, 88] }} />
                    <Themed.p sx={{ display: ["none", "inherit"] }}>
                      Comunidad de fotografía
                    </Themed.p>
                  </div>
                  <div></div>
                </Flex>
              </Box>
              <Box>
                <main sx={{ variant: "layout.main.cover" }}>{children}</main>
              </Box>
            </Grid>
          </React.Fragment>
        ) : */ <React.Fragment>
            <Header />
            <main sx={{ variant: "layout.main" }}>
              <Container>{children}</Container>
            </main>
          </React.Fragment>
        }
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
