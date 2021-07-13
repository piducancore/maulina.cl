exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allContentfulArtista {
        nodes {
          contentful_id
          username
        }
      }
    }
  `)

  const profiles = data.allContentfulArtista.nodes

  // create a page for each profile
  profiles.map(async (profile, idx) => {
    const prev = idx === profiles.length - 1 ? null : profiles[idx + 1].node
    const next = idx === 0 ? null : profiles[idx - 1]
    createPage({
      path: profile.username,
      component: require.resolve("./src/templates/profile"),
      context: {
        contentful_id: profile.contentful_id,
        type: "profilePage",
        prev,
        next,
      },
    })
  })
}
