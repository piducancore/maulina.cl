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
      <Grid columns={[1, 2]}>
        <Box>
          <Themed.h3>{full_name}</Themed.h3>
          <Themed.h3>
            {residence}, {birthdate.slice(0, 4)}
          </Themed.h3>
          <MDXRenderer>{presentation.childMdx.body}</MDXRenderer>
        </Box>
        <Box>
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
              transition: ".4s",
              m: 1,
              // filter: "grayscale(1)",
              ":hover": { bg: "secondary" /* , filter: "none" */ },
              ":hover~#pipi": {
                opacity: 1,
              },
              width: ["100%", null],
            }}
          />
        </Box>
      </Grid>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  )
}
