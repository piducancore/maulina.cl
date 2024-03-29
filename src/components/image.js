/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Image({ data, imgStyle, overlay, onClick, ...props }) {
  return (
    <div sx={{ position: "relative", display: "flex" }} onClick={onClick}>
      <GatsbyImage
        image={data.gatsbyImageData}
        objectFit="cover"
        imgStyle={{
          mixBlendMode: "multiply",
          pointerEvents: "none",
          ...imgStyle,
        }}
        sx={{
          m: 1,
          ":hover": { bg: "secondary" },
          ":hover~.overlay": { opacity: 1, mb: 3 },
        }}
        {...props}
      />
      {overlay && (
        <Themed.p
          className="overlay"
          sx={{
            mb: 0,
            px: 3,
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            opacity: 0,
            color: "background",
            pointerEvents: "none",
            variant: "text.truncate",
          }}
        >
          {overlay}
        </Themed.p>
      )}
    </div>
  )
}
