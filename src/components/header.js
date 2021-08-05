/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import { Link } from "gatsby"
import Headroom from "react-headroom"

import Logo from "./logo"
import Nav from "./nav"
import MenuIcon from "./menu-icon"

import useStore from "../state"

const Header = () => {
  const { isMenuOpen, toggleMenu } = useStore()
  return (
    <Headroom>
      <header sx={{ variant: "layout.header" }}>
        <Container>
          <Flex
            sx={{
              width: "100%",
              flexDirection: ["row-reverse", "row"],
              alignItems: "center",
            }}
          >
            <Link to="/" sx={{ display: "flex", height: [32, 88] }}>
              <Logo height={"100%"} inverted={isMenuOpen} />
            </Link>
            <Nav />
            <MenuIcon
              onClick={toggleMenu}
              sx={{ mr: "auto", display: [null, "none"], cursor: "pointer" }}
            />
          </Flex>
        </Container>
      </header>
    </Headroom>
  )
}

export default Header
