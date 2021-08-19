/** @jsx jsx */
import { jsx } from "theme-ui"
import _ from "lodash"
import Loadable from "@loadable/component"

import Layout from "../components/layout"

const LoadableGallery = Loadable(() => import("../components/loadable-gallery"))

export default function IndexPage({ location }) {
  return (
    <Layout seo={{ title: "Inicio" }} location={location}>
      <LoadableGallery />
    </Layout>
  )
}
