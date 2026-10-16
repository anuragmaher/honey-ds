import type { Decorator, Preview } from '@storybook/react-vite'
import React, { useEffect } from 'react'
import '../src/index.css'

/**
 * Theme = Figma brand variant (hig = default Hiver, omni = Hiver Omni).
 * Mode  = light / dark colour scheme.
 * Both are applied as attributes on <html>, exactly how a consuming app would do it.
 */
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme as string
  const mode = context.globals.mode as string
  useEffect(() => {
    const el = document.documentElement
    if (theme === 'omni') el.setAttribute('data-theme', 'omni')
    else el.removeAttribute('data-theme')
    el.classList.toggle('dark', mode === 'dark')
    el.style.colorScheme = mode
  }, [theme, mode])
  return (
    <div className="bg-background text-foreground font-sans p-6 min-h-[200px]">
      <Story />
    </div>
  )
}

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: 'Honey DS brand theme (Figma collection mode)',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'hig', title: 'HIG (default)' },
          { value: 'omni', title: 'Omni' },
        ],
        dynamicTitle: true,
      },
    },
    mode: {
      description: 'Colour scheme',
      toolbar: {
        title: 'Mode',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'hig', mode: 'light' },
  parameters: {
    layout: 'padded',
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    options: {
      storySort: {
        order: ['Foundations', ['Introduction', 'Colors', 'Typography', 'Spacing & Radius'], 'Components'],
      },
    },
    a11y: { test: 'todo' },
    chromatic: {
      // Snapshot every story in all four theme/mode combinations.
      modes: {
        'hig light': { theme: 'hig', mode: 'light' },
        'hig dark': { theme: 'hig', mode: 'dark' },
        'omni light': { theme: 'omni', mode: 'light' },
        'omni dark': { theme: 'omni', mode: 'dark' },
      },
    },
  },
}

export default preview
