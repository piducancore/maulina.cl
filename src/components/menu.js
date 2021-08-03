/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import slugify from "slugify"
import React from "react"

import MenuIcon from "./menu-icon"

const items = ["Somos", "Fotógrafas", "Blog", "Contacto"]

export default function Menu({ onClick, color, ...props }) {
  return (
    <div {...props} sx={{ textAlign: [null, "right"] }}>
      <div sx={{ display: ["none", "block"] }}>
        {items.map(item => (
          <MenuItem key={slugify(item)}>{item}</MenuItem>
        ))}
      </div>
      <MenuIcon
        onClick={onClick}
        sx={{ display: [null, "none"], cursor: "pointer" }}
      />
    </div>
  )
}

function MenuItem({ children }) {
  return (
    <Themed.p sx={{ fontSize: 1, my: 0 }}>
      <Themed.a as={Link} to={"/" + slugify(children).toLowerCase()}>
        {children}
      </Themed.a>
    </Themed.p>
  )
}
