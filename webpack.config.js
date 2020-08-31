const {
  TsConfigPathsPlugin,
} = require("awesome-typescript-loader");
const path = require("path");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
  entry: "./components/index.ts",
  // Currently we need to add '.ts' to the resolve.extensions array.
  plugins: [new HardSourceWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          useCache: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    publicPath: "/out",
    filename: "index.js",
    chunkFilename: "[id].js",
    path: path.resolve(__dirname, "out"),
  },
};
