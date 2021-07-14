/** @jsx jsx */
import { jsx, Flex, Themed } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { alpha } from "@theme-ui/color"

export default function Fotografas() {
  const data = useStaticQuery(graphql`
    query Artistas {
      allContentfulArtista {
        nodes {
          contentful_id
          username
          profile_picture {
            gatsbyImageData(height: 320)
          }
        }
      }
    }
  `)
  return (
    <Flex sx={{ mb: 6, flexWrap: "wrap" }}>
      {data.allContentfulArtista.nodes.map((artista, idx) => {
        return (
          <Themed.a
            as={Link}
            to={"/" + artista.username}
            sx={{ m: 1, position: "relative" }}
          >
            <GatsbyImage
              key={artista.username}
              placeholder="blurred"
              image={artista.profile_picture.gatsbyImageData}
              alt={artista.username}
              objectFit="contain"
            />
            <div
              sx={{
                position: "absolute",
                zIndex: 2000,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                // bg: "secondary",
                ":hover": {
                  bg: alpha("secondary", 0.8),
                },
                p: 3,
              }}
            >
              <Themed.h3
                sx={{
                  color: "#00000000",
                  width: "100%",
                  height: "100%",
                  my: 0,
                  ":hover": {
                    color: "background",
                  },
                }}
              >
                {artista.username}
              </Themed.h3>
            </div>
          </Themed.a>
        )
      })}
    </Flex>
  )
}
