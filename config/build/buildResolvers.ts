import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';


const resolvers = (root: string) => ({
  plugins: [
    new TsconfigPathsPlugin({
        configFile: root,
    }),
],

  extensions: [
    '.ts',
    '.tsx',
    '.js',
    'jsx',
  ],
});

export default resolvers;
