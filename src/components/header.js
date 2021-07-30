/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import React, { useState } from "react"
import { Link } from "gatsby"
import { alpha } from "@theme-ui/color"

import Menu from "./menu"
import Logo from "./logo"
import DrawerMenu from "./drawer-menu"

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <React.Fragment>
      <DrawerMenu isMenuOpen={isMenuOpen} close={() => setMenuOpen(false)} />

      <header
        sx={{
          variant: "layout.header",
          bg: isMenuOpen ? "#00000000" : alpha("background", 0.96),
        }}
      >
        <Container>
          <Flex sx={{ width: "100%", flexDirection: ["row-reverse", "row"] }}>
            <Link to="/" sx={{ my: "auto", display: "flex", height: [32, 48] }}>
              <Logo height={"100%"} inverted={isMenuOpen} />
            </Link>
            <Menu
              color={isMenuOpen ? "background" : "text"}
              onClick={() => setMenuOpen(!isMenuOpen)}
              sx={{ my: "auto", mr: ["auto", 0], ml: [0, "auto"] }}
            />
          </Flex>
        </Container>
      </header>
    </React.Fragment>
  )
}

export default Header
