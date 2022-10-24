import * as HTMLWebpackPlugin from "html-webpack-plugin";
import * as path from 'path';

const plugins = [
  new HTMLWebpackPlugin({
    template: path.resolve(__dirname, "../../", "public", "index.html"),
  }),
];

export default plugins;
