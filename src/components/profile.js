/** @jsx jsx */
import { jsx, Grid, Box, Themed } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { alpha } from "@theme-ui/color"

import Layout from "./layout"
import Gallery from "./gallery"
import Image from "./image"

export default function Profile({ current, prev, next }) {
  const photos = [current.featured].concat(current.gallery)
  return (
    <Layout
      seo={{
        title: current.full_name,
        description: current.presentation.presentation,
        image: current.profile_picture.file.url,
      }}
    >
      <Gallery size={4}>
        {photos.map((photo, index) => (
          <Image
            key={index}
            data={photo}
            alt={photo.title}
            overlay={photo.title}
          />
        ))}
      </Gallery>
      <Grid columns={[1, 2]} sx={{ my: 6 }}>
        <Box
          sx={{
            gridRow: [2, 1],
            gridColumn: [1, 1],
            zIndex: 98,
            bg: alpha("background", 0.8),
          }}
        >
          <Themed.h3 sx={{ mb: 0 }}>{current.full_name}</Themed.h3>
          <Themed.h3 sx={{ mt: 0 }}>
            {current.residence}, {current.birthdate.slice(0, 4)}
          </Themed.h3>
          <MDXRenderer>{current.presentation.childMdx.body}</MDXRenderer>
        </Box>
        <Box
          sx={{
            gridRow: [1, 1],
            gridColumn: [1, 2],
            position: ["sticky", "sticky"],
            alignSelf: [null, "start"],
            top: 2,
          }}
        >
          <Image
            data={current.profile_picture}
            alt={current.full_name}
            objectFit="contain"
          />
        </Box>
      </Grid>
    </Layout>
  )
}
