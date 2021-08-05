/** @jsx jsx */
import { jsx, Themed, Container, Flex } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "./layout"
import Image from "./image"

function Bio({ data }) {
  return (
    <Flex sx={{ alignItems: "end" }}>
      <Image
        data={data.image}
        alt={data.name}
        imgStyle={{
          filter: "grayscale(1)",
          borderRadius: 360,
          overflow: "hidden",
        }}
        sx={{
          width: 120,
          height: 120,
          borderRadius: 360,
          overflow: "hidden",
          mx: "auto",
        }}
      />
      <div sx={{ px: 3 }}>
        <Themed.p sx={{ mt: 0, fontFamily: "heading" }}>{data.name}</Themed.p>
        <MDXRenderer>{data.bio.childMdx.body}</MDXRenderer>
      </div>
    </Flex>
  )
}

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
        <Bio data={data.author} />
      </Container>
    </Layout>
  )
}
