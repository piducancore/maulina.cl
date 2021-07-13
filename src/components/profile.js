import React from "react"
import { graphql } from "gatsby"

import Layout from "./layout"

export default function ProfilePage({ data, ...props }) {
  const { full_name } = data.contentfulArtista
  return (
    <Layout seo={{ title: full_name }}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
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
        gatsbyImageData
      }
      gallery {
        gatsbyImageData
      }
      presentation {
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
