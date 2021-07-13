/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout seo={{ title: "Pronto..." }}>
    <Flex sx={{ height: 540 }}>
      <StaticImage
        src="../images/maulina.png"
        width={300}
        placeholder="blurred"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Maulina"
        sx={{ m: "auto" }}
      />
    </Flex>
  </Layout>
)

export default IndexPage
