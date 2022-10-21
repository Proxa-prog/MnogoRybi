const HTMLWebpackPlugin = require("html-webpack-plugin");
const pathss = require("path");

module.exports = new HTMLWebpackPlugin({template: pathss.resolve(__dirname, "../../", 'public', 'index.html')});

