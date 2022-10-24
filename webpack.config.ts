import * as path from "path";
import * as dotenv from "dotenv";
import buildWebpackConfig from "./config/build/buildWebpackConfig";

dotenv.config();
const paths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};
const NODE_ENV = process.env.NODE_ENV;

const webpackConfig = buildWebpackConfig(paths, NODE_ENV);

export default webpackConfig;
