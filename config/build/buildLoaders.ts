import buildWebpackConfig from "./buildWebpackConfig";
import { IPaths } from "./types/config";

const path = require("path");

const entry: IPaths = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "../../", "src", "index.tsx")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
};

export const mode = "development";

const config = buildWebpackConfig({
  mode: mode,
  entry: entry,
})

export default config;