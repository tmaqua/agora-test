const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");

const IS_BUNDLE_ANALYZE = !!process.env.IS_BUNDLE_ANALYZE;
const plugins = [
  new Dotenv({ path: path.resolve(__dirname, ".env.production") })
];

if (IS_BUNDLE_ANALYZE) {
  const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: path.join(__dirname, "./analytics/stats/app.html"),
      defaultSizes: "gzip",
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: path.join(__dirname, "./analytics/stats/app.json"),
      statsOptions: null,
      logLevel: "info"
    })
  );
}

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  plugins: plugins
});
