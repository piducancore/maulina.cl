/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import slugify from "slugify"

function MenuItem({ children }) {
  return (
    <Themed.p sx={{ fontSize: 0, my: 0 }}>
      <Themed.a as={Link} to={"/" + slugify(children).toLowerCase()}>
        {children}
      </Themed.a>
    </Themed.p>
  )
}

export default function Menu({ ...props }) {
  return (
    <div {...props} sx={{ textAlign: "right" }}>
      <MenuItem>Somos</MenuItem>
      <MenuItem>Fotógrafas</MenuItem>
      <MenuItem>Galería</MenuItem>
      <MenuItem>Blog</MenuItem>
      <MenuItem>Contacto</MenuItem>
    </div>
  )
}
