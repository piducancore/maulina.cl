/** @jsx jsx */
import { jsx, Grid, Box, Themed } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./layout"
import Gallery from "./gallery"
import Image from "./image"

export default function Profile({ data }) {
  const photos = [data.featured].concat(data.gallery)
  return (
    <Layout seo={{ title: data.full_name }}>
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
        <Box sx={{ gridRow: [2, 1], gridColumn: [1, 1] }}>
          <Themed.h3 sx={{ mb: 0 }}>{data.full_name}</Themed.h3>
          <Themed.h3 sx={{ mt: 0 }}>
            {data.residence}, {data.birthdate.slice(0, 4)}
          </Themed.h3>
          <MDXRenderer>{data.presentation.childMdx.body}</MDXRenderer>
        </Box>
        <Box
          sx={{
            gridRow: [1, 1],
            gridColumn: [1, 2],
            position: [null, "sticky"],
            alignSelf: [null, "start"],
            top: [null, 88],
          }}
        >
          <Image
            data={data.profile_picture}
            alt={data.full_name}
            objectFit="contain"
          />
        </Box>
      </Grid>
    </Layout>
  )
}
