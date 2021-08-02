/** @jsx jsx */
import { jsx, Themed, Container, Flex } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "./layout"

export default function Article({ data }) {
  const { title, content, date, image, author } = data
  return (
    <Layout seo={{ title }}>
      <Container sx={{ variant: "layout.container.text" }}>
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={title}
          objectFit="contain"
          imgStyle={{
            mixBlendMode: "multiply",
            pointerEvents: "none",
          }}
          sx={{
            ":hover": { bg: "secondary" },
            width: "100%",
          }}
        />
        <Themed.h3 sx={{ mb: 0 }}>{title}</Themed.h3>
        <Themed.h3 sx={{ mt: 0 }}>{date}</Themed.h3>
        <Flex sx={{ alignItems: "center" }}>
          <Themed.p>Por</Themed.p>
          <Themed.h4 sx={{ my: 0, ml: 2 }}>{author.name}</Themed.h4>
        </Flex>
        <MDXRenderer>{content.childMdx.body}</MDXRenderer>
      </Container>
    </Layout>
  )
}
