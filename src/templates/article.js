import React from "react"
import { graphql } from "gatsby"

import Article from "../components/article"

export default function ArticlePage({ data, ...props }) {
  const { contentfulColumna } = data
  return <Article data={contentfulColumna} />
}

export const ArticleQuery = graphql`
  query ArticleQuery($contentful_id: String!) {
    contentfulColumna(contentful_id: { eq: $contentful_id }) {
      contentful_id
      title
      date
      image {
        gatsbyImageData(
          height: 1280
          quality: 100
          placeholder: DOMINANT_COLOR
          # transformOptions: { grayscale: true }
        )
      }
      content {
        childMdx {
          body
        }
      }
      author {
        name
        image {
          gatsbyImageData
        }
        bio {
          childMdx {
            body
          }
        }
      }
    }
  }
`
