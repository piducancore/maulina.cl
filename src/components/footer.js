/** @jsx jsx */
import { jsx, Themed, Container, Flex, Grid } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import SocialIcons from "./social-icons"

export default function Footer() {
  const { site } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <footer sx={{ variant: "layout.footer" }}>
      <Container>
        <Grid columns={[1, 2]} gap={4}>
          <Flex sx={{ gridRow: [1, 1], gridColumn: [1, 2] }}>
            <Themed.p sx={{ mb: "auto", flex: 1, fontSize: 0 }}>
              {site.siteMetadata.title}, {site.siteMetadata.description}
            </Themed.p>
            <SocialIcons inverted sx={{ mb: "auto" }} />
          </Flex>
          <Flex sx={{ gridRow: [2, 1], gridColumn: [1, 1] }}>
            <StaticImage
              src="../images/gob.png"
              alt={"Ministerio de las Culturas, las Artes y el Patrimonio"}
              width={150}
              height={137}
              placeholder="none"
              formats={["AUTO", "WEBP", "AVIF"]}
              quality={100}
              sx={{ width: 150, height: 137, flexShrink: 0 }}
            />
            <Themed.p sx={{ mt: "auto", ml: 3, fontSize: 0 }}>
              Proyecto financiado por el Fondo Nacional de Desarrollo Cultural y
              las Artes, 2021.
            </Themed.p>
          </Flex>
        </Grid>
      </Container>
    </footer>
  )
}
