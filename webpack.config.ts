import * as path from 'path';

import { BuildEnv, BuildPaths } from './config/build/types/config';
import buildWebpackConfig from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    outputImages: path.resolve(__dirname, 'dist', 'images'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public', 'images'),
    src: path.resolve(__dirname, 'src'),
    root: path.resolve(__dirname, 'tsconfig.json'),
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
