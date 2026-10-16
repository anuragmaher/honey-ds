import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(viteConfig) {
    // vite.config.ts is shared with the package build; drop its lib-mode output settings here.
    if (viteConfig.build) {
      delete viteConfig.build.lib
      delete viteConfig.build.rollupOptions
    }
    return viteConfig
  },
}
export default config
