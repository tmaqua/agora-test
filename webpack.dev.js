const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    watchContentBase: true,
    historyApiFallback: true,
    port: 3333,
    host: "0.0.0.0",
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, ".env.develop"),
    }),
  ],
});
