import * as path from 'path';
import { StorybookConfig } from '@storybook/core-common';

const filterOutCssRule = (rule) => {
  const patterns = [/\.css$/i, /\.css$/];

  return patterns.every((p) => {
    return rule.test.toString() !== p.toString();
  });
};

const config: StorybookConfig = {
  staticDirs: ['../src'],
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/react',
  core: { builder: '@storybook/builder-webpack5' },
  webpackFinal: (config) => {
    if (config.module) {
      config.module.rules = [
        ...(config.module?.rules.filter(filterOutCssRule) || []),
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, '../'),
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: true,
                  localIdentName: '[path][name]__[local]'
                }
              }
            },
            'postcss-loader'
          ]
        }
      ];
    }

    return config;
  }
};

export default config;
