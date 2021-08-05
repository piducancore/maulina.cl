/** @jsx jsx */
import { jsx, Grid, Box, Container, Themed } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { alpha } from "@theme-ui/color"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState } from "react"

import Layout from "./layout"
import Gallery from "./gallery"
import Image from "./image"
import Modal from "./modal"
import useStore from "../state"

export default function Profile({ current, prev, next }) {
  const photos = [current.featured].concat(current.gallery)
  const { isHeaderVisible, toggleModal } = useStore()
  const [active, setActive] = useState(0)
  console.log(active)
  return (
    <Layout
      seo={{
        title: current.full_name,
        description: current.presentation.presentation,
        image: current.profile_picture.file.url,
      }}
    >
      <Modal active={active}>
        {photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => toggleModal(true)}
            sx={{ display: "flex", height: "100%" }}
          >
            <GatsbyImage
              image={photo.gatsbyImageData}
              alt={photo.title}
              objectFit="contain"
              sx={{ m: "auto", pointerEvents: "none" }}
            />
          </div>
        ))}
      </Modal>
      <Gallery size={4}>
        {photos.map((photo, index) => (
          <Image
            key={index}
            data={photo}
            alt={photo.title}
            overlay={photo.title}
            onClick={() => {
              setActive(index)
              toggleModal(true)
            }}
          />
        ))}
      </Gallery>
      <Container sx={{ variant: "layout.container.text", my: 5 }}>
        <MDXRenderer>{current.curatorship.childMdx.body}</MDXRenderer>
      </Container>
      <Grid columns={[1, 2]}>
        <Box
          sx={{
            gridRow: [2, 1],
            gridColumn: [1, 1],
            zIndex: 98,
            bg: alpha("background", 0.8),
          }}
        >
          <Themed.h3 sx={{ mb: 0 }}>{current.full_name}</Themed.h3>
          <Themed.h3 sx={{ mt: 0 }}>
            {current.residence}, {current.birthdate.slice(0, 4)}
          </Themed.h3>
          <MDXRenderer>{current.presentation.childMdx.body}</MDXRenderer>
        </Box>
        <Box
          sx={{
            gridRow: [1, 1],
            gridColumn: [1, 2],
            position: ["sticky", "sticky"],
            alignSelf: [null, "start"],
            top: [isHeaderVisible ? 58 : 1, isHeaderVisible ? 124 : 1],
          }}
        >
          <Image
            data={current.profile_picture}
            alt={current.full_name}
            imgStyle={{ filter: "grayscale(1)" }}
            objectFit="contain"
            sx={{ mx: "auto" }}
          />
        </Box>
      </Grid>
      <Themed.h3 sx={{ textAlign: "center", my: 5 }}>
        Otras fotógrafas recomendadas
      </Themed.h3>
      <Grid columns={[1, 2]}>
        <Box sx={{ textAlign: "left" }}>
          <Themed.a as={Link} to={"/" + prev.username} sx={{ mx: "auto" }}>
            <Image
              data={prev.profile_picture}
              alt={prev.full_name}
              imgStyle={{ filter: "grayscale(1)" }}
              sx={{ mx: "auto", height: 320, width: 320 }}
            />
            <Themed.h4 sx={{ textAlign: "center" }}>{prev.full_name}</Themed.h4>
          </Themed.a>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Themed.a as={Link} to={"/" + next.username} sx={{ mx: "auto" }}>
            <Image
              data={next.profile_picture}
              alt={next.full_name}
              imgStyle={{ filter: "grayscale(1)" }}
              sx={{ mx: "auto", height: 320, width: 320 }}
            />
            <Themed.h4 sx={{ textAlign: "center" }}>{next.full_name}</Themed.h4>
          </Themed.a>
        </Box>
      </Grid>
    </Layout>
  )
}
