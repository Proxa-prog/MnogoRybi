import plugins from "./config/build/buildPlugins";
import resolvers from "./config/build/buildResolvers";
import {
  configDevelopment,
  configProduction,
  env,
} from "./config/build/buildWebpackConfig";

const { merge } = require("webpack-merge");

const config = env === "development" ? configDevelopment : configProduction;

module.exports = merge([
  config,
  {
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
