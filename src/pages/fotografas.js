/** @jsx jsx */
import { jsx, Flex, Themed } from "theme-ui"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Thumbnail from "../components/thumbs"

export default function Fotografas({ data }) {
  const { nodes } = data.allContentfulArtista
  return (
    <Layout seo={{ title: "Fotógrafas" }}>
      <div
        sx={{
          columnCount: [2, 3, 4],
        }}
      >
        {nodes.map(({ username, profile_picture }) => {
          return (
            <Themed.a key={username} as={Link} to={"/" + username}>
              <Thumbnail image={profile_picture} alt={username} />
            </Themed.a>
          )
        })}
      </div>
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
            width: 320
            quality: 100
            placeholder: DOMINANT_COLOR
            # transformOptions: { grayscale: true }
          )
        }
      }
    }
  }
`
