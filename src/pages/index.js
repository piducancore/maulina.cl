/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql, Link } from "gatsby"
import _ from "lodash"

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
  const shuffled = _.sampleSize(allPhotos, 32)

  return (
    <Layout seo={{ title: "Inicio" }} location={location}>
      <Gallery size={4}>
        {shuffled.map(photo => {
          return (
            <Themed.a key={photo.title} as={Link} to={"/" + photo.username}>
              <Image data={photo} alt={photo.title} overlay={photo.title} />
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
