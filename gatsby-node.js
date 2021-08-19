const loadablePlugin = require("@loadable/webpack-plugin")
const slugify = require("slugify")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [new loadablePlugin()],
  })
}

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
    const next = idx === profiles.length - 1 ? profiles[0] : profiles[idx + 1]
    const prev = idx === 0 ? profiles[profiles.length - 1] : profiles[idx - 1]
    createPage({
      path: profile.username,
      component: require.resolve("./src/templates/profile"),
      context: {
        type: "profilePage",
        contentful_id: profile.contentful_id,
        prev: prev.contentful_id,
        next: next.contentful_id,
      },
    })
  })

  // create a page for each article
  articles.map(async (article, idx) => {
    const next = idx === articles.length - 1 ? articles[0] : articles[idx + 1]
    const prev = idx === 0 ? articles[articles.length - 1] : articles[idx - 1]

    createPage({
      path: slugify(article.title).toLowerCase(),
      component: require.resolve("./src/templates/article"),
      context: {
        type: "articlePage",
        contentful_id: article.contentful_id,
        prev: prev.contentful_id,
        next: next.contentful_id,
      },
    })
  })
}
