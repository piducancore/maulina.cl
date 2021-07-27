/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import React from "react"

export default function GalleryFlex({ children, size }) {
  let rows = []
  for (let i = 0; i < children.length; i += size) {
    rows.push(children.slice(i, i + size))
  }
  return (
    <React.Fragment>
      {rows.map((elements, index) => {
        return (
          <Flex key={index} sx={{ flexDirection: ["column", "row"] }}>
            {elements}
          </Flex>
        )
      })}
    </React.Fragment>
  )
}
