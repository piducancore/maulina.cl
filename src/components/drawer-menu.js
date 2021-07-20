/** @jsx jsx */
import { jsx, Themed, Container } from "theme-ui"
import { Link } from "gatsby"
import slugify from "slugify"
import { alpha } from "@theme-ui/color"

export const items = ["Somos", "Fotógrafas", "Galería", "Blog", "Contacto"]

export default function DrawerMenu({ isOpen, close }) {
  return (
    <div
      sx={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        left: isOpen ? "0%" : "-100%",
        bg: alpha("secondary", 0.96),
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        zIndex: 99,
        opacity: isOpen ? 1 : 0,
      }}
    >
      <Container sx={{ my: 6 }}>
        {items.map(item => (
          <Themed.p key={item}>
            <Themed.a
              as={Link}
              to={"/" + slugify(item).toLowerCase()}
              sx={{ my: 0, color: "background" }}
              onClick={close}
            >
              {item}
            </Themed.a>
          </Themed.p>
        ))}
      </Container>
    </div>
  )
}
