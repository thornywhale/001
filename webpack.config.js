const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pathToDist = path.resolve(__dirname, "dist")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[contenthash].js",
    path: pathToDist,
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: pathToDist,
  },
};
