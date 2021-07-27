/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Image({ data, imgStyle, ...props }) {
  return (
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
        ":hover": { bg: "secondary" },
        ":hover~.overlay": {
          opacity: 1,
          mb: 2,
        },
      }}
      {...props}
    />
  )
}

export function Overlay({ children }) {
  return (
    <Themed.p
      className="overlay"
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
      {children}
    </Themed.p>
  )
}
