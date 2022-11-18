exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/components/Articles/index.js`);

  const resultPt = await graphql(`
    query {
      firsti {
        posts {
          slug
          author
          textOne {
            html
          }
          imageCardOne {
            url
          }
          imageCardTwo {
            url
          }
          imageCover {
            url
          }
          textTwo
          subtitle
          textThree
          textFor {
            html
          }
          linkLinkedin
          editorial
          deepTechTitle
          imageDeeptech {
            url
          }
        }
      }
    }
  `)

  console.log({
    resultPt,
  })
  // Handle errors
  if (resultPt.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const postsPt = resultPt.data.firsti.posts;

  postsPt.forEach(post => {
    console.log(post.slug);
    createPage({
      path: `blog/${post.slug}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
        title: post.title,
        coverImage: post.coverImage,
      }
    })
  })
};