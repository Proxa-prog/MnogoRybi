import { IWebpackConfig } from "./types/config";

const buildWebpackConfig = (webpackConfig: IWebpackConfig) => {
  const {
    mode,
    entry 
  } = webpackConfig;

  return (
    {
      mode: mode,
      entry: entry.entry,
      output: entry.output,
    }
  );
};

export default buildWebpackConfig;
