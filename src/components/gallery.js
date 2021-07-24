/** @jsx jsx */
import { jsx, div, Box, Themed } from "theme-ui"

import { GatsbyImage } from "gatsby-plugin-image"

export default function Gallery({ featured, gallery }) {
  return (
    <div sx={{ columnCount: [2, 3, 4] }}>
      <GatsbyImage
        image={featured.gatsbyImageData}
        alt={featured.title}
        objectFit="cover"
        imgStyle={{
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
        sx={{
          ":hover": { bg: "secondary" },
          mb: 3,
        }}
      />
      {gallery.map((photo, index) => {
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
              mb: 3,
            }}
          />
        )
      })}
      {console.log({ featured, gallery })}
    </div>
  )
}
