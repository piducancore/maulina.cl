/** @jsx jsx */
import { jsx, Themed, Container, Flex, Grid, Box } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import slugify from "slugify"

import Layout from "./layout"
import Bio from "./bio"
import Image from "./image"

export default function Article({ current, prev, next }) {
  return (
    <Layout seo={{ title: current.title }}>
      <Container sx={{ variant: "layout.container.text" }}>
        <Image data={current.image} alt={current.title} sx={{ mx: "auto" }} />
        <Themed.h3 sx={{ mb: 0 }}>{current.title}</Themed.h3>
        <Themed.h3 sx={{ mt: 0 }}>{current.date}</Themed.h3>
        <Flex sx={{ alignItems: "center" }}>
          <Themed.p>Por</Themed.p>
          <Themed.h4 sx={{ my: 0, ml: 2 }}>{current.author.name}</Themed.h4>
        </Flex>
        <MDXRenderer>{current.content.childMdx.body}</MDXRenderer>
        <Bio data={current.author} />
        <Themed.h3 sx={{ textAlign: "center" }}>
          Otros artículos recomendados
        </Themed.h3>
        <Grid columns={[1, 2]}>
          <Box sx={{ textAlign: "left" }}>
            <Themed.a
              as={Link}
              to={"/" + slugify(prev.title).toLowerCase()}
              sx={{ mx: "auto" }}
            >
              <Image
                data={prev.image}
                alt={prev.title}
                sx={{ mx: "auto", height: 320 }}
              />
              <Themed.h4>{prev.title}</Themed.h4>
            </Themed.a>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Themed.a
              as={Link}
              to={"/" + slugify(next.title).toLowerCase()}
              sx={{ mx: "auto" }}
            >
              <Image
                data={next.image}
                alt={next.title}
                sx={{ mx: "auto", height: 320 }}
              />
              <Themed.h4>{next.title}</Themed.h4>
            </Themed.a>
          </Box>
        </Grid>
      </Container>
    </Layout>
  )
}
