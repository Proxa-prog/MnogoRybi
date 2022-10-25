import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[]{
  const cssLoader = {
    test: /\.(css|scss)$/,
    use: ["style-loader", "css-loader", "sass-loader"],
  };

  const fileLoader = {
    test: /\.(jpeg|jpg|png|gif)$/,
    use: "file-loader",
  };

  const babelLoader = {
    test: /\.m?tsx$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    },
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [
    cssLoader,
    fileLoader,
    babelLoader,
    tsLoader,
  ];
}
