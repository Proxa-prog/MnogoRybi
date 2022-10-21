const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "../../", "src", "index.tsx")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
};
