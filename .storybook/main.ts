import type { Configuration } from 'webpack';
import type { StorybookConfig } from '@storybook/nextjs';

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }
    return config;
  },
  // webpackFinal: async (config: Configuration) => {
  //   if (!config) {
  //     config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../')];
  //   }
  //   return config;
  // },
};
export default config;
