const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allContentfulEpisodes {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data: ", result.errors)
      }
      const episodesTemplate = path.resolve("./src/templates/episodepost.js")
      result.data.allContentfulEpisodes.edges.forEach(edge => {
        createPage({
          path: `/episodes/${edge.node.slug}/`,
          component: slash(episodesTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
