/** @jsx jsx */
import { jsx, Flex, Themed } from "theme-ui"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Thumbnail from "../components/thumbs"

export default function Fotografas({ data }) {
  const { nodes } = data.allContentfulArtista
  return (
    <Layout seo={{ title: "Fotógrafas" }}>
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
    </Layout>
  )
}

export const query = graphql`
  query ArtistasQuery {
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
`
