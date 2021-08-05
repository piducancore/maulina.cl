/** @jsx jsx */
import { jsx, Grid, Box, Themed } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Image from "./image"

function Member({ data }) {
  return (
    <div>
      <Image
        data={data.image}
        alt={data.name}
        // overlay={data.name}
        imgStyle={{
          filter: "grayscale(1)",
          borderRadius: 360,
          overflow: "hidden",
        }}
        sx={{
          width: 120,
          height: 120,
          borderRadius: 360,
          overflow: "hidden",
          mx: "auto",
        }}
      />

      <Themed.p
        sx={{ mt: 1, mb: 0, textAlign: "center", fontFamily: "heading" }}
      >
        {data.name}
      </Themed.p>
      <Themed.p sx={{ mt: 0, textAlign: "center", fontSize: 0 }}>
        {data.role}
      </Themed.p>
    </div>
  )
}

export default function Team() {
  const { allContentfulColumnista } = useStaticQuery(
    graphql`
      query Team {
        allContentfulColumnista(filter: { team: { eq: true } }) {
          nodes {
            name
            role
            bio {
              childMdx {
                body
              }
            }
            image {
              gatsbyImageData(width: 120)
            }
          }
        }
      }
    `
  )
  const members = allContentfulColumnista.nodes
  return (
    <Grid columns={[2, 3]} sx={{ my: 5 }}>
      {members.map(member => (
        <Box
          key={member.name}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Member data={member} />
        </Box>
      ))}
    </Grid>
  )
}
