const slugify = require("slugify")

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
      allContentfulColumna {
        nodes {
          contentful_id
          title
        }
      }
    }
  `)

  const profiles = data.allContentfulArtista.nodes
  const articles = data.allContentfulColumna.nodes

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

  articles.map(async (article, idx) => {
    const prev = idx === articles.length - 1 ? null : articles[idx + 1].node
    const next = idx === 0 ? null : articles[idx - 1]
    createPage({
      path: slugify(article.title).toLowerCase(),
      component: require.resolve("./src/templates/article"),
      context: {
        contentful_id: article.contentful_id,
        type: "articlePage",
        prev,
        next,
      },
    })
  })
}
