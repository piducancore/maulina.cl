/** @jsx jsx */
import { jsx, Themed, Grid, Box, Flex } from "theme-ui"
import { graphql, Link } from "gatsby"
import slugify from "slugify"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

export default function Blog({ data }) {
  const { nodes } = data.allContentfulColumna

  return (
    <Layout seo={{ title: "Blog" }}>
      {nodes.map(post => {
        return (
          <Grid key={post.contentful_id} columns={[1, 2]} sx={{ mb: 4 }}>
            <Box>
              <GatsbyImage
                placeholder="blurred"
                image={post.image.gatsbyImageData}
                alt={post.title}
                objectFit="cover"
                imgStyle={{
                  mixBlendMode: "multiply",
                  pointerEvents: "none",
                }}
                sx={{
                  ":hover": { bg: "secondary" },
                  width: "100%",
                  height: 480,
                }}
              />
            </Box>

            <Flex sx={{ p: 3 }}>
              <div
                sx={
                  {
                    /* my: "auto" */
                  }
                }
              >
                <Themed.h3 sx={{ mb: 0 }}>
                  <Themed.a
                    as={Link}
                    to={"/" + slugify(post.title).toLowerCase()}
                  >
                    {post.title}
                  </Themed.a>
                </Themed.h3>
                <Themed.h3 sx={{ mt: 0 }}>{post.date}</Themed.h3>
                <Themed.h4 sx={{ my: 3 }}>
                  <span sx={{ fontFamily: "body", fontSize: 2 }}>Por </span>
                  {post.author.name}
                </Themed.h4>
                <Themed.p sx={{ mt: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Themed.p>
              </div>
            </Flex>
          </Grid>
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
        image {
          gatsbyImageData
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
  }
`
