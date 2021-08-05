/** @jsx jsx */
import { jsx, NavLink, Themed } from "theme-ui"
import { Link } from "gatsby"
import slugify from "slugify"

const items = ["Somos", "Fotógrafas", "Blog", "Contacto"]

export default function Menu({ sx }) {
  return (
    <div sx={{ display: ["none", "block"], ml: "auto" }}>
      {items.map(item => (
        <MenuItem key={slugify(item)}>{item}</MenuItem>
      ))}
    </div>
  )
}

function MenuItem({ children }) {
  return (
    <Themed.p sx={{ fontSize: 1, my: 0 }}>
      <NavLink as={Link} to={"/" + slugify(children).toLowerCase()}>
        {children}
      </NavLink>
    </Themed.p>
  )
}
