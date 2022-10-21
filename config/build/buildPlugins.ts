const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const plugins = [
  new HTMLWebpackPlugin({
    template: path.resolve(__dirname, "../../", "public", "index.html"),
  }),
];

export default plugins;
