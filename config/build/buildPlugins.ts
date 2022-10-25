import HTMLWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";

const plugins = (options: BuildOptions) => {
  return [
    new HTMLWebpackPlugin({
      template: options.paths.html,
    }),
  ];
};

export default plugins;
