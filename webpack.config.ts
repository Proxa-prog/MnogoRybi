import * as path from "path";
import buildWebpackConfig from "./config/build/buildWebpackConfig";

export default (env: any) => {
  const paths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || 'development';  
  console.log(mode);
  
  const webpackConfig = buildWebpackConfig(paths, mode);

return webpackConfig;
};
