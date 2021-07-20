/** @jsx jsx */
import { jsx, Flex, Themed } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function Thumbnail({ image, alt }) {
  return (
    <div sx={{ position: "relative", m: 1 }}>
      <GatsbyImage
        placeholder="blurred"
        image={image.gatsbyImageData}
        alt={alt}
        objectFit="contain"
        imgStyle={{
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
        sx={{
          width: ["100%", null],
          // filter: "grayscale(1)",
          ":hover": { bg: "secondary" /* filter: "none" */ },
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
          pointerEvents: "none",
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
              height: 320
              quality: 100
              placeholder: DOMINANT_COLOR
              # transformOptions: { grayscale: true }
            )
          }
        }
      }
    }
  `)
  const { nodes } = data.allContentfulArtista
  return (
    <Flex
      sx={{
        mb: 6,
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: ["column", "row"],
      }}
    >
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
