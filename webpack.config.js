const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.tsx')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devServer: {
        port: 2525
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
      },    
    plugins: [
        new HTMLWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.m?tsx$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"]
                  }
                }
            },
        ]
    }
}