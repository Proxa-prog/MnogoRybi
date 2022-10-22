import { development, production } from "./buildLoaders";
import { IWebpackConfig } from "./types/config";

const buildWebpackConfig = (webpackConfig: IWebpackConfig) => {
  const { mode, config } = webpackConfig;

  return {
    mode: mode,
    entry: config.entry,
    output: config.output,
  };
};

export const configDevelopment = buildWebpackConfig({
  mode: "development",
  config: development,
});

export const configProduction = buildWebpackConfig({
  mode: "production",
  config: production,
});

const argv = process.argv;
export const env = argv[argv.length - 1];

export default buildWebpackConfig;
