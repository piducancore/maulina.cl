/** @jsx jsx */
import { jsx, MenuButton, Themed } from "theme-ui"
import { Link } from "gatsby"
import slugify from "slugify"
import React from "react"

const items = ["Somos", "Fotógrafas", "Galería", "Blog", "Contacto"]

export function MenuMobile() {
  return (
    <React.Fragment>
      {items.map(item => (
        <Themed.p sx={{ fontSize: 1, my: 0 }}>
          <Themed.a as={Link} to={"/" + slugify(item).toLowerCase()}>
            {item}
          </Themed.a>
        </Themed.p>
      ))}
    </React.Fragment>
  )
}

export default function Menu({ onClick, color, ...props }) {
  return (
    <div {...props} sx={{ textAlign: [null, "right"] }}>
      <div sx={{ display: ["none", "block"] }}>
        {items.map(item => (
          <MenuItem key={slugify(item)}>{item}</MenuItem>
        ))}
      </div>
      <MenuButton
        color={color}
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
