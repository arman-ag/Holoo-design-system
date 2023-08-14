/** @type { import('@storybook/react-vite').StorybookConfig } */
const svgrPlugin = require('vite-plugin-svgr').default
const config = {

  stories: ['../stories/*.mdx', '../stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    config.plugins = [
      ...config.plugins,
      svgrPlugin({
        exclude: "",
        include: "**/*.svg",
        svgrOptions: {
          icon: true,
        },
      })
    ];

    // return the customized config
    return config;
    // Merge custom configuration into the default config

  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
