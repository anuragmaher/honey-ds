# honey-ds

Hiver's React component library. Built on [shadcn/ui](https://ui.shadcn.com) and Tailwind CSS v4,
themed end-to-end with the **Honey DS - 2026** Figma variables.

## Install & use

```bash
npm install honey-ds
```

```tsx
// once, at the app root
import 'honey-ds/styles.css'

import { Button, Input, Dialog, DialogContent, DialogTrigger } from 'honey-ds'
```

Peer dependencies: `react` and `react-dom` 18.3+ or 19.

### Theme and colour mode

Set attributes on `<html>`; every component follows them.

| Want | Markup |
| --- | --- |
| Default Hiver theme, light | `<html>` |
| Default theme, dark | `<html class="dark">` |
| Hiver Omni theme, light | `<html data-theme="omni">` |
| Hiver Omni theme, dark | `<html data-theme="omni" class="dark">` |

Fonts (Inter for the default theme, Hanken Grotesk for Omni, JetBrains Mono) are referenced by name and
must be loaded by the host app.

### Tailwind utilities in your app

If the host app uses Tailwind v4, import the token layer into its CSS to get utilities such as
`bg-hds-background-royal-subtle`, `text-hds-text-error-default`, `rounded-hds-8` and `p-hds-4`:

```css
@import "tailwindcss";
@import "honey-ds/tokens.css";
```

## Storybook

```bash
npm run storybook        # http://localhost:6006
npm run build-storybook  # static build in storybook-static/
```

The toolbar has **Theme** (HIG / Omni) and **Mode** (Light / Dark) switches. Chromatic snapshots every story
in all four combinations.

### Publishing to Chromatic

```bash
CHROMATIC_PROJECT_TOKEN=<token> npm run chromatic
```

The token comes from the Chromatic project settings. A GitHub Actions workflow is in `.github/workflows/chromatic.yml`;
add the token as the `CHROMATIC_PROJECT_TOKEN` repository secret.

## Design tokens

Figma variables are the single source of truth. The raw exports live in `tokens/figma/` and are compiled by
`scripts/build-tokens.mjs` into:

- `src/styles/tokens.css`: CSS custom properties (`--hds-*`) for every variable, with `.dark` and `[data-theme="omni"]` overrides, plus a Tailwind `@theme` block.
- `src/tokens/generated.ts`: typed token maps for JS consumers and the Storybook foundation pages.

`src/styles/theme.css` maps the shadcn variables (`--primary`, `--border`, `--ring`, ...) onto those tokens.

### Updating from Figma

1. Open the file in Figma Dev Mode, go to **Variables**, and press **Export** for each collection
   (Primitives, Numeric, Semantic, Components).
2. Unzip each into `tokens/figma/<collection>/` (one `<Mode>.tokens.json` per mode).
3. `npm run tokens`

Mode mapping: Primitives HIG + Semantic Light + Components HIG form the default theme; Primitives HOT,
Semantic "Hot - Light/Dark" and Components Omni form the `omni` theme.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run storybook` | Storybook dev server |
| `npm run build-storybook` | Static Storybook |
| `npm run chromatic` | Publish Storybook to Chromatic |
| `npm run tokens` | Regenerate tokens from `tokens/figma` |
| `npm run build` | Library build to `dist/` (ESM + types + `honey-ds.css`) |
| `npm run typecheck` | `tsc -b` |
| `npm run test` | Vitest (Storybook interaction tests in Chromium) |

## Adding components

Components are added with the shadcn CLI and then exported from `src/index.ts`:

```bash
npx shadcn@latest add <component>
```

Keep component styling on the shadcn variables (`bg-primary`, `border-input`, ...) or Honey token utilities
(`bg-hds-*`) so themes and dark mode keep working.
