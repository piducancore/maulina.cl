/** @jsx jsx */
import { jsx, Themed, Container, Flex } from "theme-ui"
import { Link } from "gatsby"
import slugify from "slugify"

import Logo from "./logo"
import MenuIcon from "./menu-icon"
import useStore from "../state"

export const items = ["Somos", "Fotógrafas", "Blog", "Contacto"]

export default function DrawerMenu() {
  const { isMenuOpen, toggleMenu } = useStore()
  return (
    <div
      sx={{
        position: "fixed",
        height: "100vh",
        width: ["100%", 256],
        left: isMenuOpen ? "0%" : "-100%",
        bg: "secondary",
        zIndex: 101,
        opacity: isMenuOpen ? 1 : 0,
      }}
    >
      <div sx={{ height: "100%" }}>
        <header sx={{ variant: "layout.header", bg: "none" }}>
          <Container>
            <Flex
              sx={{
                width: "100%",
                flexDirection: "row-reverse",
                alignItems: "center",
              }}
            >
              <Link to="/" sx={{ display: "flex", height: 32 }}>
                <Logo height={"100%"} inverted={isMenuOpen} />
              </Link>
              <MenuIcon
                inverted
                onClick={toggleMenu}
                sx={{ mr: "auto", cursor: "pointer" }}
              />
            </Flex>
          </Container>
        </header>

        <Container>
          <Themed.p>
            <Themed.a
              as={Link}
              to={"/"}
              sx={{ my: 0, color: "background" }}
              onClick={toggleMenu}
            >
              Inicio
            </Themed.a>
          </Themed.p>
          {items.map(item => (
            <Themed.p key={item}>
              <Themed.a
                as={Link}
                to={"/" + slugify(item).toLowerCase()}
                sx={{ my: 0, color: "background" }}
                onClick={toggleMenu}
              >
                {item}
              </Themed.a>
            </Themed.p>
          ))}
        </Container>
      </div>
    </div>
  )
}
