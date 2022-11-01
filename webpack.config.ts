import * as path from 'path';

import { BuildEnv, BuildPaths } from 'config/build/types/config';
import buildWebpackConfig from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    global: path.resolve(__dirname, 'src', 'global.scss'),
  };

  const mode = (env.mode !== undefined) ? env.mode : 'development';
  const PORT = (env.port !== undefined) ? env.port : 2525;

  const isDev = mode === 'development';

  return buildWebpackConfig({
    mode,
    port: PORT,
    paths,
    isDev,
  });
};
