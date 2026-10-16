/// <reference types="vitest/config" />
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

// Library build for @grexit/honey-ds.
// React and react-dom are peer dependencies and stay external.
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import pkg from './package.json' with { type: 'json' };

const dirname = import.meta.dirname;
// Everything in dependencies/peerDependencies stays external so consumers get one copy of radix-ui etc.
const external = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
  'react/jsx-runtime',
].map((dep) => new RegExp(`^${dep}(/.*)?$`));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), mode === 'lib' && dts({
    tsconfigPath: './tsconfig.app.json',
        include: ['src'],
    exclude: ['src/**/*.stories.tsx']
  })].filter(Boolean),
  resolve: {
    alias: {
      '@': resolve(dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: {
        index: resolve(dirname, 'src/index.ts'),
        tokens: resolve(dirname, 'src/tokens/index.ts'),
      },
      formats: ['es'],
      fileName: (_format, name) => `${name}.js`
    },
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {
      external,
      output: {
        assetFileNames: info => info.names?.[0]?.endsWith('.css') ? 'honey-ds.css' : 'assets/[name][extname]'
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: resolve(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
}));
