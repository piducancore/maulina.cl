/** @jsx jsx */
import { jsx, Themed, Grid, Box } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Image from "./image"

export default function Bio({ data }) {
  return (
    <Grid
      columns={[1, "120px auto"]}
      sx={{ my: 5, maxWidth: [null, 640], mx: "auto" }}
    >
      <Box>
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
      </Box>
      <Box>
        <div sx={{ px: 3, textAlign: ["center", "left"] }}>
          <Themed.p sx={{ mt: 0, fontFamily: "heading" }}>{data.name}</Themed.p>
          <div className="bio">
            <MDXRenderer>{data.bio.childMdx.body}</MDXRenderer>
          </div>
        </div>
      </Box>
    </Grid>
  )
}
