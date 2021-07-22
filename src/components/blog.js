/** @jsx jsx */
import { jsx, Box, Themed } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import slugify from "slugify"

export default function Blog() {
  const data = useStaticQuery(graphql`
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
  `)
  const { nodes } = data.allContentfulColumna

  return (
    <Box>
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
    </Box>
  )
}
