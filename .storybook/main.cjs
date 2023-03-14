module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        rule: {
          test: /\.(scss|sass)$/i,
        },
        loadSassAfterPostCSS: true,
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
        sassLoaderOptions: {
          implementation: require("sass"),
        },
      },
    },
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
};
