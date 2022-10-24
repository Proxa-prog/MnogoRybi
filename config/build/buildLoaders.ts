import { IDev, IProd } from "./types/config";
import * as path from 'path';

export const development: IDev = {
  entry: [
    "@babel/polyfill",
    path.resolve(__dirname, "../../", "src", "index.tsx"),
  ],
  output: {
    path: path.resolve(__dirname, "../../", "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devServer: {
    port: 2525,
  },
};

export const production: IProd = {
  entry: [
    "@babel/polyfill",
    path.resolve(__dirname, "../../", "src", "index.tsx"),
  ],
  output: {
    path: path.resolve(__dirname, "../../", "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
};
