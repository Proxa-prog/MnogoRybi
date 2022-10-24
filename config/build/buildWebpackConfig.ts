import { selectConfig } from "./buildLoaders";
import plugins from "./buildPlugins";
import resolvers from "./buildResolvers";
import { merge } from "webpack-merge";
import { IPatsh } from "./types/config";

export const buildWebpackConfig = (paths: IPatsh) => {
  const argv = process.argv;
  const env = argv[argv.length - 1];
  const config = selectConfig(env);

  return merge([
    config,
    {
      mode: env,
      entry: ["@babel/polyfill", paths.entry],
      output: {
        path: paths.output,
        filename: "[name].[contenthash].js",
        clean: true,
      },
      resolve: resolvers(),
      plugins: plugins(paths),
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
};

export default buildWebpackConfig;
