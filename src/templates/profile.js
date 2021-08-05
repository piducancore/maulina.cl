import React from "react"
import { graphql } from "gatsby"

import Profile from "../components/profile"

export default function ProfilePage({ data }) {
  return <Profile {...data} />
}

export const ProfileQuery = graphql`
  query ProfileQuery($contentful_id: String!, $next: String!, $prev: String!) {
    next: contentfulArtista(contentful_id: { eq: $next }) {
      full_name
      username
      profile_picture {
        gatsbyImageData
      }
    }
    prev: contentfulArtista(contentful_id: { eq: $prev }) {
      full_name
      username
      profile_picture {
        gatsbyImageData
      }
    }
    current: contentfulArtista(contentful_id: { eq: $contentful_id }) {
      contentful_id
      full_name
      username
      instagram
      residence
      birthdate
      profile_picture {
        file {
          url
        }
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
      }
      curatorship {
        childMdx {
          body
        }
      }
    }
  }
`
