import path from "path";
const HtmlWebpackPlugin = require("html-webpack-plugin");

export default {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "src"), // in dev mode the bundle is created in memory, so no 'dist' folder is required
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    // Create html file that includes a reference to bundled JS/assets
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }, // so we can *import* CSS just as we do JS
    ],
  },
};
