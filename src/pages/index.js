import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout seo={{ title: "Home" }}>
    <StaticImage
      src="../images/maulina.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="maulina"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
