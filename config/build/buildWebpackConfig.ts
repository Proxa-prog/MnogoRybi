const paths = require("./buildLoaders.ts");
const resolvers = require("./buildResolvers.ts");
const HTML = require("./buildPlugins.ts");

const mode = "development";


module.exports = {
  mode: mode,
  entry: paths.entry,
  output: paths.output,
  devServer: {
    port: 2525,
  },
  resolve: resolvers,
  plugins: [HTML],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: "file-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.m?tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};