/** @jsx jsx */
import { jsx, Themed, Grid, Box } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Image from "./image"

export default function Bio({ data }) {
  return (
    <Grid
      columns={[1, "120px auto"]}
      sx={{ my: 5 /* maxWidth: [null, 640] */ }}
    >
      <Box sx={{ display: ["block", "flex"], alignItems: "center" }}>
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
      <Box sx={{ textAlign: ["center", "left"] }}>
        <Themed.h4 sx={{ my: 0 }}>{data.name}</Themed.h4>
        <div className="bio">
          <MDXRenderer>{data.bio.childMdx.body}</MDXRenderer>
        </div>
      </Box>
    </Grid>
  )
}
