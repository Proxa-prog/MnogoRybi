import { IPatsh } from "./types/config";

export const selectConfig = (mode: string, paths: IPatsh) => {
  if (mode === "development") {
    return {
      mode: "development",
      entry: ["@babel/polyfill", paths.entry],
      output: {
        path: paths.output,
        filename: "[name].[contenthash].js",
        clean: true,
      },
      devServer: {
        port: 2525,
      },
    };
  }

  if (mode === "production") {
    return {
      mode: "production",
      entry: ["@babel/polyfill", paths.entry],
      output: {
        path: paths.output,
        filename: "[name].[contenthash].js",
        clean: true,
      },
    };
  }
};
