const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
            modules: true,
        },
        sassLoaderOptions: {
          additionalData:  (content, loaderContext) => {
            if (loaderContext.resourcePath.endsWith(path.resolve((__dirname), '../src/global.scss'))) {
              return content;
            }

            return `
              @import "/src/global.scss";
            ` + content;

          },
        }
      }
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
}