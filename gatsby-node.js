const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsPage {
          nodes {
            slug
            title
            body: childDatoCmsPageBodyTextNode {
              md: childMarkdownRemark {
                html
              }
            }
            background {
              title
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsPage.nodes.map(
        ({
          slug,
          title,
          body: {
            md: { html: body }
          },
          background: { title: background }
        }) => {
          createPage({
            path: `${slug}`,
            component: path.resolve(`./src/templates/markdown-template.tsx`),
            context: { title, slug, body, background }
          })
        }
      )
      resolve()
    })
  })
}
