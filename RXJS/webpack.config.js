const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    filename: "blunde.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
    }),
  ],

  devServer: {
    liveReload: true,
  },
};
