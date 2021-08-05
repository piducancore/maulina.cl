/** @jsx jsx */
import { jsx, Flex, Box, Container, Themed } from "theme-ui"
import Slider from "@farbenmeer/react-spring-slider"
import { Link } from "gatsby"
import Logo from "./logo"

import useStore from "../state"

export default function Modal({ children, active }) {
  const { isModalOpen, toggleModal } = useStore()
  return (
    <Flex
      sx={{
        flexDirection: "column",
        position: "fixed",
        height: "100vh",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: isModalOpen ? 300 : -300,
        opacity: isModalOpen ? 1 : 0,
        bg: "text",
      }}
    >
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
              <Logo height={"100%"} inverted />
            </Link>
            {/* <MenuIcon
          inverted
          onClick={toggleMenu}
          sx={{ mr: "auto", cursor: "pointer" }}
        /> */}
          </Flex>{" "}
        </Container>
      </header>
      <Slider activeIndex={active} hasArrows={true}>
        {children}
      </Slider>
      <Themed.p
        sx={{ textAlign: "center", color: "background", cursor: "pointer" }}
      >
        <small onClick={() => toggleModal(false)}>[volver]</small>
      </Themed.p>
    </Flex>
  )
}
