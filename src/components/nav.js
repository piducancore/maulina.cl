/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
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
      <Themed.a as={Link} to={"/" + slugify(children).toLowerCase()}>
        {children}
      </Themed.a>
    </Themed.p>
  )
}
