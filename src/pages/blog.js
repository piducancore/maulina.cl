/** @jsx jsx */
import { jsx, Themed, Grid, Box, Flex, Container, Button } from "theme-ui"
import { graphql, Link } from "gatsby"
import slugify from "slugify"

import Layout from "../components/layout"
import Image from "../components/image"

export default function Blog({ data }) {
  const { nodes } = data.allContentfulColumna
  return (
    <Layout seo={{ title: "Blog" }}>
      <Themed.h1 sx={{ textAlign: "center" }}>Blog</Themed.h1>
      {nodes.map((post, index) => (
        <Container
          variant="layout.container.text"
          key={post.contentful_id}
          sx={{
            ml: index % 2 ? "auto" : index % 3 ? "auto" : 0,
            mr: index % 2 ? 0 : index % 3 ? "auto" : "auto",
            mb: 6,
          }}
        >
          <Grid
            columns={[1, index % 2 ? "2fr 1fr" : index % 3 ? 1 : "1fr 2fr"]}
            gap={4}
          >
            <Box
              sx={{
                gridRow: 1,
                gridColumn: [1, index % 2 ? 2 : 1],
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Image data={post.image} alt={post.title} />
            </Box>
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <div sx={{ maxWidth: 560 }}>
                <Themed.h3 sx={{ my: 0 }}>
                  <Themed.a
                    as={Link}
                    to={"/" + slugify(post.title).toLowerCase()}
                  >
                    {post.title}
                  </Themed.a>
                </Themed.h3>
                <Themed.p sx={{ my: 0 }}>{post.short_text}</Themed.p>
                <Button variant="secondary" sx={{ mt: 2 }}>
                  Leer más
                </Button>
              </div>
            </Box>
          </Grid>
        </Container>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allContentfulColumna(sort: { fields: date, order: DESC }) {
      nodes {
        contentful_id
        title
        date
        short_text
        image {
          gatsbyImageData(width: 640)
        }
        author {
          name
        }
      }
    }
  }
`
