/** @jsx jsx */
import { jsx, Themed, Container, Flex } from "theme-ui"
import { Link } from "gatsby"
import slugify from "slugify"
import { alpha } from "@theme-ui/color"

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
        width: "100%",
        left: isMenuOpen ? "0%" : "-100%",
        bg: alpha("secondary", 0.96),
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        zIndex: 101,
        opacity: isMenuOpen ? 1 : 0,
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Flex variant="layout.header" bg="#00000000">
          <MenuIcon
            inverted
            onClick={toggleMenu}
            sx={{
              cursor: "pointer",
              my: "auto",
              mr: ["auto", 0],
              ml: [0, "auto"],
            }}
          />
          <div sx={{ my: "auto", display: "flex", height: [32, 88] }}>
            <Logo height={"100%"} inverted />
          </div>
        </Flex>
        <Container mt={5}>
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
      </Container>
    </div>
  )
}
