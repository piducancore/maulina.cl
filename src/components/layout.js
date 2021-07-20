/** @jsx jsx */
import { jsx, Themed, Flex, Grid, Container } from "theme-ui"
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { /* useStaticQuery, graphql, */ Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { alpha } from "@theme-ui/color"

import Seo from "./seo"
import Menu from "./menu"
import Logo from "./logo"
import DrawerMenu from "./drawer-menu"
import SocialIcons from "./social-icons"

const Layout = ({ children, pageContext, seo }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [isOpen, setOpen] = useState(false)

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
        <header
          sx={{
            variant: "layout.header",
            bg: isOpen ? "#00000000" : alpha("background", 0.96),
          }}
        >
          <Container>
            <Flex sx={{ width: "100%", flexDirection: ["row-reverse", "row"] }}>
              <Link
                to="/"
                sx={{ my: "auto", display: "flex", height: [32, 48] }}
              >
                {/* <StaticImage
                  src="../images/maulina.png"
                  height={48}
                  quality={100}
                  layout="constrained"
                  placeholder="blurred"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt={data.site.siteMetadata?.title}
                  objectFit="contain"
                  imgStyle={{
                    marginLeft: "auto",
                    width: "auto",
                  }}
                /> */}
                <Logo height={"100%"} inverted={isOpen} />
              </Link>
              <Menu
                color={isOpen ? "background" : "text"}
                onClick={() => setOpen(!isOpen)}
                sx={{ my: "auto", mr: ["auto", 0], ml: [0, "auto"] }}
              />
            </Flex>
          </Container>
        </header>
        <DrawerMenu isOpen={isOpen} close={() => setOpen(false)} />
        <main sx={{ variant: "layout.main" }}>
          <Container>{children}</Container>
        </main>
        <footer sx={{ variant: "layout.footer" }}>
          <Container>
            <Grid columns={[1, 2]} gap={4}>
              <Flex sx={{ gridRow: [1, 1], gridColumn: [1, 2] }}>
                <Themed.p sx={{ fontSize: 0, my: "auto", flex: 1 }}>
                  Proyecto... frase bonita o algo así.
                </Themed.p>
                <SocialIcons inverted />
              </Flex>
              <Flex sx={{ gridRow: [2, 1], gridColumn: [1, 1] }}>
                <StaticImage
                  src="../images/gob.png"
                  placeholder="none"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt={"Ministerio de las Culturas, las Artes y el Patrimonio"}
                  objectFit="contain"
                  quality={95}
                  sx={{ width: 150, flexShrink: 0, mr: 3 }}
                />
                <Themed.p sx={{ fontSize: 0, my: "auto" }}>
                  Proyecto financiado por el Fondo Nacional de Desarrollo
                  Cultural y las Artes, 2021.
                </Themed.p>
              </Flex>
            </Grid>
          </Container>
        </footer>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
