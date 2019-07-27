const path = require(`path`)
// const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  try {
    // Create the node Graphql Querry. //
    const { data } = await graphql(`
      {
        episodes: allContentfulEpisodes {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
    // For each Episode use the template page. //
    data.episodes.edges.forEach(({ node }) => {
      createPage({
        path: `/episodes/${node.slug}/`,
        component: path.resolve("./src/templates/episodepost.js"),
        context: {
          slug: node.slug,
        },
      })
    })
    // End of Tours Single Pages Created. //
  } catch (err) {
    // Display any errors with the query. //
    console.log("Error retrieving contentful data", err)
  }
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(
//     `
//       {
//         allContentfulEpisodes {
//           edges {
//             node {
//               id
//               slug
//             }
//           }
//         }
//       }
//     `
//   )
//     .then(result => {
//       if (result.errors) {
//         console.log("Error retrieving contentful data: ", result.errors)
//       }
//       const episodesTemplate = path.resolve("./src/templates/episodepost.js")
//       result.data.allContentfulEpisodes.edges.forEach(edge => {
//         createPage({
//           path: `/episodes/${edge.node.slug}/`,
//           component: slash(episodesTemplate),
//           context: {
//             slug: edge.node.slug,
//             id: edge.node.id,
//           },
//         })
//       })
//     })
//     .catch(error => {
//       console.log("Error retrieving contentful data", error)
//     })
// }
