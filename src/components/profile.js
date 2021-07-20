/** @jsx jsx */
import { jsx, Grid, Box, Themed } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "./layout"

export default function Profile({ data }) {
  const { full_name, residence, birthdate, presentation, profile_picture } =
    data
  return (
    <Layout seo={{ title: full_name }}>
      <Grid columns={[1, 2]} sx={{ mb: 6 }}>
        <Box sx={{ gridRow: [2, 1], gridColumn: [1, 1] }}>
          <Themed.h3 sx={{ mb: 0 }}>{full_name}</Themed.h3>
          <Themed.h3 sx={{ mt: 0 }}>
            {residence}, {birthdate.slice(0, 4)}
          </Themed.h3>
          <MDXRenderer>{presentation.childMdx.body}</MDXRenderer>
        </Box>
        <Box sx={{ gridRow: [1, 1], gridColumn: [1, 2] }}>
          <GatsbyImage
            placeholder="blurred"
            image={profile_picture.gatsbyImageData}
            alt={full_name}
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
        </Box>
      </Grid>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  )
}
