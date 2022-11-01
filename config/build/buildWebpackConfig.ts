import buildLoaders from './buildLoaders';
import plugins from './buildPlugins';
import resolvers from './buildResolvers';
import { BuildOptions } from './types/config';
import buildDevServer from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions) => {
  const {
    paths: { entry, output, global },
    isDev,
    mode,
  } = options;

  return {
    mode,
    entry,
    output: {
      path: output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    resolve: resolvers(),
    plugins: plugins(options),
    module: {
      rules: buildLoaders(global),
    },
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};

export default buildWebpackConfig;
