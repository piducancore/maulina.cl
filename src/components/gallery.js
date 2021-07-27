/** @jsx jsx */
import { jsx, Grid } from "theme-ui"

import { GatsbyImage } from "gatsby-plugin-image"

export default function Gallery({ featured, gallery }) {
  return (
    <Grid
      sx={{
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gridTemplateRows: "repeat(auto-fit, 160px)",
        gridAutoFlow: "dense",
      }}
    >
      {[featured].concat(gallery).map((photo, index) => {
        return (
          <GatsbyImage
            key={photo.title}
            image={photo.gatsbyImageData}
            alt={photo.title}
            objectFit="cover"
            imgStyle={{
              mixBlendMode: "multiply",
              pointerEvents: "none",
            }}
            sx={{
              ":hover": { bg: "secondary" },
              // gridColumnEnd: `span ${Math.random() < 0.5 ? "2" : "1"}`,
              gridRowEnd: `span ${Math.random() < 0.5 ? "2" : "1"}`,
            }}
          />
        )
      })}
    </Grid>
  )
}
