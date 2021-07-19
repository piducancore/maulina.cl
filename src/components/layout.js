/** @jsx jsx */
import { jsx, useThemeUI, Themed, Flex, Grid } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { SocialIcon } from "react-social-icons"

import Seo from "./seo"
import Menu from "./menu"

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

export const SocialIcons = ({ inverted }) => {
  const { theme } = useThemeUI()
  return (
    <Flex sx={{ flexShrink: 0, my: "auto", mx: "auto" }}>
      <SocialIcon
        target="_blank"
        bgColor="#00000000"
        fgColor={inverted ? theme.colors.background : theme.colors.text}
        url="https://instagram.com/maulina.cl"
      />
      <SocialIcon
        target="_blank"
        bgColor="#00000000"
        fgColor={inverted ? theme.colors.background : theme.colors.text}
        url="https://facebook.com/maulina.cl"
      />
    </Flex>
  )
}

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
        <header
          sx={{
            width: "100%",
            variant: "layout.header",
          }}
        >
          <Container>
            <Flex>
              <Link to="/" sx={{ mt: 2, display: "flex" }}>
                <StaticImage
                  src="../images/maulina.png"
                  height={48}
                  quality={95}
                  placeholder="none"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt={data.site.siteMetadata?.title}
                  objectFit="contain" // quality={95}
                />
              </Link>
              <Menu sx={{ ml: "auto" }} />
            </Flex>
          </Container>
        </header>
        <main
          sx={{
            width: "100%",
            flex: "1 1 auto",
            variant: "layout.main",
          }}
        >
          <Container>{children}</Container>
        </main>
        <footer
          sx={{
            width: "100%",
            variant: "layout.footer",
          }}
        >
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
