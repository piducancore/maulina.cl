/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Gallery from "../components/gallery"

import Image from "../components/image"

export default function Fotografas({ data }) {
  const profiles = data.allContentfulArtista.nodes
  return (
    <Layout seo={{ title: "Fotógrafas" }}>
      <Gallery size={3} sx={{ flexDirection: ["column", "row"] }}>
        {profiles.map(profile => {
          return (
            <Themed.a
              key={profile.username}
              as={Link}
              to={"/" + profile.username}
            >
              <Image
                data={profile.profile_picture}
                alt={profile.username}
                overlay={profile.username}
                imgStyle={{ filter: "grayscale(1)" }}
              />
            </Themed.a>
          )
        })}
      </Gallery>
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
            height: 560
            quality: 100
            placeholder: DOMINANT_COLOR
          )
        }
      }
    }
  }
`
