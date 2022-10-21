import config from "./config/build/buildLoaders";
import plugins from "./config/build/buildPlugins";
import resolvers from "./config/build/buildResolvers";

const path = require("path");
const { merge } = require("webpack-merge");

export const paths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
}

module.exports = merge([
  config,
  {
    devServer: {
      port: 2525,
    },
    resolve: resolvers(),
    plugins: plugins,
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(jpeg|jpg|png|gif)$/,
          use: "file-loader",
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.m?tsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
      ],
    },
  },
]);
