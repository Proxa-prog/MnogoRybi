import * as path from "path";
import buildWebpackConfig from "./config/build/buildWebpackConfig";

const paths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const webpackConfig = buildWebpackConfig(paths);

export default webpackConfig;
