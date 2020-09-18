// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDataJson {
        nodes {
          posts {
            id
          }
        }
      }
    }
  `)

  result.data.allDataJson.nodes[0].posts.forEach(({id}) => {
    createPage({
      path: 'post-' + id.toString(),
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        id,
      },
    })
  })
}
