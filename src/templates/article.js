import React from "react"
import { graphql } from "gatsby"

import Article from "../components/article"

export default function ArticlePage({ data }) {
  return <Article {...data} />
}

export const ArticleQuery = graphql`
  query ArticleQuery($contentful_id: String!, $next: String!, $prev: String!) {
    next: contentfulColumna(contentful_id: { eq: $next }) {
      title
      image {
        gatsbyImageData(height: 320, quality: 100, placeholder: DOMINANT_COLOR)
      }
      author {
        name
      }
    }
    prev: contentfulColumna(contentful_id: { eq: $prev }) {
      title
      image {
        gatsbyImageData(height: 320, quality: 100, placeholder: DOMINANT_COLOR)
      }
      author {
        name
      }
    }
    current: contentfulColumna(contentful_id: { eq: $contentful_id }) {
      contentful_id
      title
      date
      image {
        gatsbyImageData(width: 640, quality: 100, placeholder: DOMINANT_COLOR)
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
