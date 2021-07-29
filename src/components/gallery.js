/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
// import React from "react"

export default function GalleryFlex({ children, size, ...props }) {
  let rows = []
  for (let i = 0; i < children.length; i += size) {
    rows.push(children.slice(i, i + size))
  }
  return (
    <div {...props}>
      {rows.map((elements, index) => {
        return (
          <Flex key={index} sx={{ flexDirection: ["column", "row"] }}>
            {elements}
          </Flex>
        )
      })}
    </div>
  )
}
