import * as HTMLWebpackPlugin from "html-webpack-plugin";
import { IPatsh } from "./types/config";

const plugins = (paths: IPatsh) => {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
  ];
};

export default plugins;
