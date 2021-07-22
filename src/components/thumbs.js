/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Thumbnail({ image, alt }) {
  return (
    <div sx={{ position: "relative", m: 1 }}>
      <GatsbyImage
        placeholder="blurred"
        image={image.gatsbyImageData}
        alt={alt}
        objectFit="contain"
        imgStyle={{
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
        sx={{
          width: ["100%", null],
          // filter: "grayscale(1)",
          ":hover": { bg: "secondary" /* filter: "none" */ },
          ":hover~#pipi": {
            opacity: 1,
          },
        }}
      />
      <Themed.p
        id="pipi"
        sx={{
          transition: ".8s",
          position: "absolute",
          bottom: 0,
          left: 0,
          ml: 3,
          mb: 2,
          opacity: 0,
          color: "background",
          fontWeight: "body",
          pointerEvents: "none",
        }}
      >
        {alt}
      </Themed.p>
    </div>
  )
}
