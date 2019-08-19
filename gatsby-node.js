const each = require('lodash/each')
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const indexPage = path.resolve('./src/pages/index.js')
  createPage({
    path: `posts`,
    component: indexPage,
  })

    const blogPost = path.resolve('./src/templates/blog-post.js')
    const { data } = await graphql(
        `
          {
            allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
              edges {
                node {
                  slug,
                  title
                }
              }
            }
          }
        `
      )

    // Create blog posts pages.
    const posts = data.allCosmicjsPosts.edges;

    each(posts, (post, index) => {
      const next = index === posts.length - 1 ? null : posts[index + 1].node;
      const previous = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `posts/${post.node.slug}`,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })
}
