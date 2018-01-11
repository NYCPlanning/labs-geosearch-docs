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
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /(mapbox-gl)\.js$/,
      loader: "null-loader",
    });
  }
};
