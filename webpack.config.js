const {
  TsConfigPathsPlugin,
} = require("awesome-typescript-loader");
const path = require("path");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin,
} = require("clean-webpack-plugin");
module.exports = {
  optimization: {
    runtimeChunk: "single",
  },
  mode: "production",
  entry: ["./components/index.ts"],
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "pages/index.ejs",
    }),
    new HardSourceWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: {
          loader: "ejs-compiled-loader",
          options: {
            html5: true,
            useShortDoctype: true,
            htmlmin: true,
            htmlminOptions: {
              removeComments: true,
            },
          },
        },
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          //useCache: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    publicPath: ".",
    filename: "[name].[contenthash].js",
    chunkFilename: "[id].js",
    path: path.resolve(__dirname, "out"),
  },
};
