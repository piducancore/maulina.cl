/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./layout"

export default function Article({ data }) {
  const { title, content, date } = data
  return (
    <Layout seo={{ title }}>
      <Themed.h3>{title}</Themed.h3>
      <Themed.h3>{date}</Themed.h3>
      <MDXRenderer>{content.childMdx.body}</MDXRenderer>
    </Layout>
  )
}
