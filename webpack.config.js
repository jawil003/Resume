const {
  TsConfigPathsPlugin,
} = require("awesome-typescript-loader");
const path = require("path");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

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
