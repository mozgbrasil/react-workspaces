// Configuration file for react-app-rewired

var path = require("path");
var fs = require("fs");
const {
  override,
  fixBabelImports,
  addBundleVisualizer,
  babelInclude,
} = require("customize-cra");

console.log(`🔶 `, __filename);

// function webpack_loaders_html_loader(config) {
//   // https://webpack.js.org/loaders/html-loader/
//   // do stuff to config
//   config.module.rules.push({
//     test: /\.(html)$/,
//     use: {
//       loader: 'html-loader',
//     },
//   });
//   return config;
// }

// function webpack_loaders_css_loader(config) {
//   // https://webpack.js.org/loaders/css-loader/
//   // do stuff to config
//   config.module.rules.push({
//     test: /\.(s*)css$/,
//     exclude: /node_modules/,
//     use: ["style-loader", "css-loader"],
//     include: path.join(__dirname, "../../", "shared/codepen.io/")
//   });
//   return config;
// }

// function webpack_loaders_raw_loader(config) {
//   // https://webpack.js.org/loaders/raw-loader/
//   // do stuff to config
//   config.module.rules.push({
//     test: /\.(txt|md)$/i,
//     use: "raw-loader",
//     include: path.join(__dirname, "../../", "shared/codepen.io/")
//   });
//   return config;
// }

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      // enable legacy decorators babel plugin
      // addDecoratorsLegacy(),

      // disable eslint in webpack
      // disableEsLint(),

      // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
      process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),

      /*Make sure Babel compiles the stuff in the components folder*/
      //   lerna list --all --long

      // https://github.com/arackaf/customize-cra/blob/master/api.md#babelinclude
      // Overwrites the include option for babel loader, for when you need to transpile a module in your node_modules folder.
      babelInclude([
        path.resolve("src"), // don't forget this
        fs.realpathSync("../../node_modules/codepen.io"),
        fs.realpathSync("../../node_modules/codesandbox.io"),
        fs.realpathSync("../../node_modules/@mozg/common"),
        fs.realpathSync("../../node_modules/github.com"),
      ]),

      // https://github.com/arackaf/customize-cra/blob/master/api.md#fixbabelimportslibraryname-options
      // Adds the babel-plugin-import plugin. See above for an example.
      fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
      })

      //

      // webpack_loaders_html_loader

      // webpack_loaders_css_loader

      // webpack_loaders_raw_loader

      //
    )(config, env)
  );
};
