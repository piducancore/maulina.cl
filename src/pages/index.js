/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql, Link } from "gatsby"
import shuffle from "array-shuffle"

import Layout from "../components/layout"
import Gallery from "../components/gallery"
import Image from "../components/image"

export default function IndexPage({ data, location }) {
  const allPhotos = data.allContentfulArtista.nodes
    .map(({ username, featured, gallery }) =>
      [featured].concat(gallery).map(photo => {
        photo.username = username
        return photo
      })
    )
    .flat()
  const shuffled = shuffle(allPhotos).slice(-9)

  return (
    <Layout seo={{ title: "Inicio" }} location={location}>
      <Gallery size={3} sx={{ flexDirection: ["column", "row"] }}>
        {shuffled.map(photo => {
          return (
            <Themed.a key={photo.title} as={Link} to={"/" + photo.username}>
              <Image
                data={photo}
                key={photo.title}
                alt={photo.title}
                overlay={photo.title}
              />
            </Themed.a>
          )
        })}
      </Gallery>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allContentfulArtista {
      nodes {
        username
        featured {
          contentful_id
          title
          gatsbyImageData(
            height: 560
            quality: 100
            placeholder: DOMINANT_COLOR
          )
        }
        gallery {
          contentful_id
          title
          gatsbyImageData(
            height: 560
            quality: 100
            placeholder: DOMINANT_COLOR
          )
        }
      }
    }
  }
`
