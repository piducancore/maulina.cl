import React from "react"
import { graphql } from "gatsby"

import Profile from "../components/profile"

export default function ProfilePage({ data, ...props }) {
  const { contentfulArtista } = data
  return <Profile data={contentfulArtista} />
}

export const ProfileQuery = graphql`
  query ProfileQuery($contentful_id: String!) {
    contentfulArtista(contentful_id: { eq: $contentful_id }) {
      contentful_id
      full_name
      username
      instagram
      residence
      birthdate
      profile_picture {
        gatsbyImageData
      }
      featured {
        title
        gatsbyImageData
      }
      gallery {
        title
        gatsbyImageData
      }
      presentation {
        childMdx {
          body
        }

        childrenMdx {
          body
        }
      }
      curatorship {
        childMdx {
          body
        }
      }
    }
  }
`
