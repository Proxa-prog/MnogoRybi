import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import CopyWebpackPlugin from 'copy-webpack-plugin';


const plugins = (options: BuildOptions) => [
  new HTMLWebpackPlugin({
    template: options.paths.html,
  }),
  new CopyWebpackPlugin({
    patterns: [
      { from: options.paths.public, to: options.paths.images },
    ],
  }),
];

export default plugins;
