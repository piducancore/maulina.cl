/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql, Link } from "gatsby"
import slugify from "slugify"

import Layout from "../components/layout"

export default function Blog({ data }) {
  const { nodes } = data.allContentfulColumna

  return (
    <Layout seo={{ title: "Blog" }}>
      {nodes.map(post => {
        return (
          <div key={post.contentful_id}>
            <Themed.h3 sx={{ mb: 0 }}>
              <Themed.a as={Link} to={"/" + slugify(post.title).toLowerCase()}>
                {post.title}
              </Themed.a>
            </Themed.h3>
            <Themed.h3 sx={{ mt: 0 }}>{post.date}</Themed.h3>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allContentfulColumna {
      nodes {
        contentful_id
        title
        date
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
  }
`
