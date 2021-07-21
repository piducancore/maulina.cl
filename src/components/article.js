import React from "react"

export default function Article(props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}
