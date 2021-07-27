/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Gallery from "../components/gallery"

import Image, { Overlay } from "../components/image"
import React from "react"

export default function Fotografas({ data }) {
  const profiles = data.allContentfulArtista.nodes
  return (
    <Layout seo={{ title: "Fotógrafas" }}>
      <Gallery size={3} sx={{ flexDirection: ["column", "row"] }}>
        {profiles.map(profile => {
          return (
            <React.Fragment key={profile.username}>
              <Themed.a
                as={Link}
                to={"/" + profile.username}
                sx={{
                  position: "relative",
                }}
              >
                <Image
                  key={profile.username}
                  data={profile.profile_picture}
                  alt={profile.username}
                  imgStyle={{ filter: "grayscale(1)" }}
                  sx={{ m: 1 }}
                />
                <Overlay>{profile.username}</Overlay>
              </Themed.a>
            </React.Fragment>
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
            # width: 320
            height: 480
            quality: 100
            placeholder: DOMINANT_COLOR
            # transformOptions: { grayscale: true }
          )
        }
      }
    }
  }
`
