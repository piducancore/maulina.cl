/** @jsx jsx */
import { jsx, NavLink, Themed } from "theme-ui"
import { Link } from "gatsby"
import slugify from "slugify"

const items = ["Somos", "Fotógrafas", "Blog", "Contacto"]

export default function Menu({ sx }) {
  return (
    <div sx={{ display: ["none", "block"], ml: "auto" }}>
      <MenuItem>Inicio</MenuItem>

      {items.map(item => (
        <MenuItem key={slugify(item)}>{item}</MenuItem>
      ))}
    </div>
  )
}

function MenuItem({ children }) {
  return (
    <Themed.p sx={{ my: 0, textAlign: "right" }}>
      <NavLink
        as={Link}
        to={children === "Inicio" ? "/" : "/" + slugify(children).toLowerCase()}
      >
        {children}
      </NavLink>
    </Themed.p>
  )
}
