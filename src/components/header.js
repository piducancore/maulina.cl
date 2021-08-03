/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import { Link } from "gatsby"
import { alpha } from "@theme-ui/color"
import Headroom from "react-headroom"

import Menu from "./menu"
import Logo from "./logo"

import useStore from "../state"

const Header = () => {
  const { isMenuOpen, toggleMenu } = useStore()
  return (
    <Headroom>
      <header
        sx={{
          variant: "layout.header",
          bg: isMenuOpen ? null : alpha("background", 0.8),
        }}
      >
        <Container>
          <Flex sx={{ width: "100%", flexDirection: ["row-reverse", "row"] }}>
            <Link to="/" sx={{ my: "auto", display: "flex", height: [32, 88] }}>
              <Logo height={"100%"} inverted={isMenuOpen} />
            </Link>
            <Menu
              sx={{ my: "auto", mr: ["auto", 0], ml: [0, "auto"] }}
              onClick={toggleMenu}
            />
          </Flex>
        </Container>
      </header>
    </Headroom>
  )
}

export default Header
