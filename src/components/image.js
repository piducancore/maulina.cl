/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Image({ data, imgStyle, overlay, ...props }) {
  return (
    <div key={data.title} sx={{ position: "relative", display: "flex" }}>
      <GatsbyImage
        image={data.gatsbyImageData}
        alt={data.title}
        objectFit="cover"
        imgStyle={{
          mixBlendMode: "multiply",
          pointerEvents: "none",
          ...imgStyle,
        }}
        sx={{
          my: 1,
          mx: ["auto", 1],
          ":hover": { bg: "secondary" },
          ":hover~.overlay": { opacity: 1, mb: 3 },
        }}
        {...props}
      />
      {overlay && <Overlay>{overlay}</Overlay>}
    </div>
  )
}

export function Overlay({ children }) {
  return (
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
      {children}
    </Themed.p>
  )
}
