/** @jsx jsx */
import { jsx, Flex, Themed } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function Thumbnail({ image, alt }) {
  return (
    <div sx={{ position: "relative" }}>
      <GatsbyImage
        placeholder="blurred"
        image={image.gatsbyImageData}
        alt={alt}
        objectFit="contain"
        imgStyle={{
          mixBlendMode: "multiply",
        }}
        sx={{
          transition: ".4s",
          m: 1,
          // filter: "grayscale(1)",
          ":hover": { bg: "secondary" /* , filter: "none" */ },
          ":hover~#pipi": {
            opacity: 1,
          },
        }}
      />
      <Themed.p
        id="pipi"
        sx={{
          transition: ".8s",
          position: "absolute",
          bottom: 0,
          left: 0,
          ml: 3,
          mb: 2,
          opacity: 0,
          color: "background",
          fontWeight: "body",
        }}
      >
        {alt}
      </Themed.p>
    </div>
  )
}

export default function Fotografas() {
  const data = useStaticQuery(graphql`
    query Artistas {
      allContentfulArtista {
        nodes {
          contentful_id
          username
          profile_picture {
            gatsbyImageData(
              height: 240
              quality: 100
              # transformOptions: { grayscale: true }
            )
          }
        }
      }
    }
  `)
  const { nodes } = data.allContentfulArtista
  return (
    <Flex sx={{ mb: 6, flexWrap: "wrap", justifyContent: "center" }}>
      {nodes.map(({ username, profile_picture }) => {
        return (
          <Themed.a key={username} as={Link} to={"/" + username}>
            <Thumbnail image={profile_picture} alt={username} />
          </Themed.a>
        )
      })}
    </Flex>
  )
}
