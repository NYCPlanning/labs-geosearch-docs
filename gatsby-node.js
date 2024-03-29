/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const Promise = require(`bluebird`)
const path = require(`path`)

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // Make the front page match everything client side.
    // Normally your paths should be a bit more judicious.
    createPage(page)
    resolve()
  })
}

// necessary to get gatsby build to run properly
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-html") {
    const config = getConfig();
    config.module.rules.push({
      test: /(mapbox-gl)\.js$/,
      use: {
        loader: "null-loader",
      }
    })
    actions.replaceWebpackConfig(config)
  }
};
