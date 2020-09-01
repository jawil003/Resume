const {
  TsConfigPathsPlugin,
} = require("awesome-typescript-loader");
const path = require("path");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
module.exports = {
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  entry: ["./components/index.ts"],
  plugins: [
    new HTMLWebpackPlugin({
      template: "pages/index.ejs",
      inject: "body",
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
          useCache: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    publicPath: ".",
    filename: "index.js",
    chunkFilename: "[id].js",
    path: path.resolve(__dirname, "out"),
  },
};
