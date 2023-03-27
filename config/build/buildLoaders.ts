import webpack from 'webpack';

export default function buildLoaders(global: string): webpack.RuleSetRule[] {
  const scssLoader = {
    test: /\.(sa|sc|c)ss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: global,
        },
      },
    ],
  };

  const fileLoader = {
    test: /\.(jpeg|jpg|png|gif|svg$)$/,
    type: 'asset/resource',
  };

  const babelLoader = {
    test: /\.m?tsx$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [scssLoader, fileLoader, babelLoader, tsLoader];
}
