/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Thumbnail({ image, alt }) {
  return (
    <div sx={{ position: "relative", mb: 3 }}>
      <GatsbyImage
        placeholder="blurred"
        image={image.gatsbyImageData}
        alt={alt}
        objectFit="cover"
        imgStyle={{
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
        sx={{
          ":hover": { bg: "secondary" },
          ":hover~#overlay": {
            opacity: 1,
            mb: 2,
          },
        }}
      />
      <Themed.p
        id="overlay"
        sx={{
          mb: 0,
          ml: 2,
          position: "absolute",
          bottom: 0,
          left: 0,
          opacity: 0,
          color: "background",
          fontWeight: "headings",
          pointerEvents: "none",
        }}
      >
        {alt}
      </Themed.p>
    </div>
  )
}
