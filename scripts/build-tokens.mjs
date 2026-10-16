// Generates src/styles/tokens.css and src/tokens/generated.ts from the
// Figma variable exports in tokens/figma (W3C design-tokens JSON, one file per mode).
//
// Re-run after re-exporting from Figma:   npm run tokens
//
// Mode mapping (Figma collection mode -> CSS selector):
//   Primitives HIG   + Semantic Light       + Components HIG  -> :root            (theme "hig", light)
//                      Semantic Dark                          -> .dark
//   Primitives HOT   + Semantic Hot - Light + Components Omni -> [data-theme="omni"]
//                      Semantic Hot - Dark                    -> [data-theme="omni"].dark
// Primitives "Default" is identical to "HIG" in the current export and is skipped.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const figma = (collection, mode) =>
  JSON.parse(readFileSync(resolve(root, 'tokens/figma', collection, `${mode}.tokens.json`), 'utf8'))

const PREFIX = 'hds'

/** Flatten a DTCG tree into [path, token] pairs. */
function leaves(obj, path = []) {
  const out = []
  for (const [k, v] of Object.entries(obj)) {
    if (v && typeof v === 'object' && '$value' in v) out.push([[...path, k], v])
    else if (v && typeof v === 'object') out.push(...leaves(v, [...path, k]))
  }
  return out
}

/** Normalise a Figma variable path into a CSS-friendly name. */
function cssName(parts) {
  return parts
    .map((p) => p.toLowerCase().replace(/[^a-z0-9_]+/g, '-'))
    .join('-')
    .replace(/^accents-accents-/, 'accents-')
    .replace(/-accents-accents-/, '-accents-')
}

function colorValue(v) {
  const a = v.alpha ?? 1
  if (Math.abs(a - 1) < 1e-6) return v.hex.toUpperCase()
  const [r, g, b] = v.components.map((c) => Math.round(c * 255))
  return `rgb(${r} ${g} ${b} / ${Number(a.toFixed(3))})`
}

function numberValue(parts, n) {
  const group = parts[0]
  if (group === 'opacity') return String(Number(n.toFixed(3)))
  if (group === 'font-weight') return String(n)
  if (group === 'letter-spacing') return `${Number(n.toFixed(3))}em`
  if (n === 9999) return '9999px'
  return `${Number(n.toFixed(3))}px`
}

function tokenValue(parts, t) {
  if (t.$type === 'color') return colorValue(t.$value)
  if (t.$type === 'number') return numberValue(parts, t.$value)
  if (t.$type === 'string') return JSON.stringify(t.$value)
  throw new Error(`Unsupported token type ${t.$type} at ${parts.join('/')}`)
}

// ---- Load collections ------------------------------------------------------
const primitives = { hig: figma('primitives', 'HIG'), hot: figma('primitives', 'HOT') }
const numeric = figma('numeric', 'Default')
const semantic = {
  light: figma('semantic', 'Light'),
  dark: figma('semantic', 'Dark'),
  hotLight: figma('semantic', 'Hot - Light'),
  hotDark: figma('semantic', 'Hot - Dark'),
}
const components = { hig: figma('components', 'HIG'), omni: figma('components', 'Omni') }

// ---- Build variable maps ---------------------------------------------------
/** @returns Map<cssVarName, {value, raw, alias}> */
function buildVars(tree, collection, resolveAlias) {
  const map = new Map()
  for (const [parts, t] of leaves(tree)) {
    const alias = t.$extensions?.['com.figma.aliasData']
    const literal = tokenValue(parts, t)
    let value = literal
    if (alias && resolveAlias) {
      const ref = resolveAlias(alias)
      // Only keep the var() chain when the resolved value in this mode really matches
      // the aliased variable in the corresponding mode; Figma exports per-mode values
      // and some modes override the alias target.
      if (ref && ref.value === literal) value = `var(${ref.name})`
    }
    map.set(`--${PREFIX}-${collection}-${cssName(parts)}`, {
      value,
      literal,
      figmaName: parts.join('/'),
      alias: alias?.targetVariableName,
      type: t.$type,
    })
  }
  return map
}

const primVars = {
  hig: buildVars(primitives.hig, 'color', null),
  hot: buildVars(primitives.hot, 'color', null),
}
// Primitive names start with "color/..." or "scale/..." – strip the duplicated "color-color-" prefix.
for (const m of Object.values(primVars)) {
  for (const [k, v] of [...m]) {
    const nk = k.replace(`--${PREFIX}-color-color-`, `--${PREFIX}-color-`).replace(`--${PREFIX}-color-`, (s) => s)
    if (nk !== k) { m.delete(k); m.set(nk, v) }
  }
}
// Non-color primitives (scale, font-*, line-height, letter-spacing) live under their own group.
for (const m of Object.values(primVars)) {
  for (const [k, v] of [...m]) {
    if (v.type !== 'color') {
      m.delete(k)
      m.set(`--${PREFIX}-${cssName(v.figmaName.split('/'))}`, v)
    }
  }
}

const numericVars = buildVars(numeric, 'x', null)
for (const [k, v] of [...numericVars]) {
  numericVars.delete(k)
  numericVars.set(`--${PREFIX}-${cssName(v.figmaName.split('/'))}`, v)
}

function primitiveLookup(primMap) {
  const byFigmaName = new Map([...primMap].map(([name, v]) => [v.figmaName, { name, value: v.value }]))
  return (alias) => byFigmaName.get(alias.targetVariableName)
}
function numericLookup() {
  const byFigmaName = new Map([...numericVars].map(([name, v]) => [v.figmaName, { name, value: v.value }]))
  return (alias) => byFigmaName.get(alias.targetVariableName)
}

const semVars = {
  light: buildVars(semantic.light, 'sem', primitiveLookup(primVars.hig)),
  dark: buildVars(semantic.dark, 'sem', primitiveLookup(primVars.hig)),
  hotLight: buildVars(semantic.hotLight, 'sem', primitiveLookup(primVars.hot)),
  hotDark: buildVars(semantic.hotDark, 'sem', primitiveLookup(primVars.hot)),
}
// Semantic names: --hds-sem-text-... -> --hds-text-...
for (const m of Object.values(semVars)) {
  for (const [k, v] of [...m]) { m.delete(k); m.set(k.replace(`--${PREFIX}-sem-`, `--${PREFIX}-`), v) }
}

function componentLookup(semMap) {
  const bySem = new Map([...semMap].map(([name, v]) => [v.figmaName, { name, value: v.value }]))
  const byNum = numericLookup()
  return (alias) =>
    alias.targetVariableSetName === 'Numeric' ? byNum(alias) : bySem.get(alias.targetVariableName)
}
// Component tokens alias semantic tokens; keep the var() chain so dark mode follows automatically.
function buildComponentVars(tree, lookup) {
  const map = new Map()
  for (const [parts, t] of leaves(tree)) {
    const alias = t.$extensions?.['com.figma.aliasData']
    const literal = tokenValue(parts, t)
    const ref = alias ? lookup(alias) : null
    const value = ref ? `var(${ref.name})` : literal
    map.set(`--${PREFIX}-${cssName(parts)}`, { value, literal, figmaName: parts.join('/'), alias: alias?.targetVariableName, type: t.$type })
  }
  return map
}
const compVars = {
  hig: buildComponentVars(components.hig, componentLookup(semVars.light)),
  omni: buildComponentVars(components.omni, componentLookup(semVars.hotLight)),
}

// ---- Emit CSS --------------------------------------------------------------
function block(selector, maps, comment) {
  const lines = [`/* ${comment} */`, `${selector} {`]
  for (const m of maps) for (const [k, v] of m) lines.push(`  ${k}: ${v.value};`)
  lines.push('}')
  return lines.join('\n')
}
function diffOnly(base, other) {
  const m = new Map()
  for (const [k, v] of other) if (base.get(k)?.value !== v.value) m.set(k, v)
  return m
}

const css = [
  '/* GENERATED FILE – do not edit. Source: tokens/figma/*.tokens.json (Figma "Honey DS - 2026"). */',
  '/* Regenerate with `npm run tokens`. */',
  '',
  block(':root', [primVars.hig, numericVars, semVars.light, compVars.hig], 'Theme: hig (default) · mode: light · Figma: Primitives/HIG + Numeric + Semantic/Light + Components/HIG'),
  '',
  block('.dark, [data-mode="dark"]', [diffOnly(semVars.light, semVars.dark)], 'Theme: hig · mode: dark · Figma: Semantic/Dark'),
  '',
  block('[data-theme="omni"]', [diffOnly(primVars.hig, primVars.hot), diffOnly(semVars.light, semVars.hotLight), diffOnly(compVars.hig, compVars.omni)], 'Theme: omni · mode: light · Figma: Primitives/HOT + Semantic/Hot - Light + Components/Omni'),
  '',
  block('[data-theme="omni"].dark, [data-theme="omni"] .dark, [data-theme="omni"][data-mode="dark"]', [diffOnly(semVars.hotLight, semVars.hotDark)], 'Theme: omni · mode: dark · Figma: Semantic/Hot - Dark'),
  '',
  '/* Expose semantic colors, spacing and radii as Tailwind utilities (e.g. bg-hds-background-royal-default, rounded-hds-8, p-hds-4). */',
  '@theme inline {',
  ...[...semVars.light].filter(([, v]) => v.type === 'color').map(([k]) => `  --color-${k.slice(2)}: var(${k});`),
  ...[...primVars.hig].filter(([, v]) => v.type === 'color').map(([k]) => `  --color-${k.slice(2)}: var(${k});`),
  ...[...numericVars].filter(([k]) => k.startsWith(`--${PREFIX}-spacing-`)).map(([k]) => `  --spacing-${k.slice(2)}: var(${k});`),
  ...[...numericVars].filter(([k]) => k.startsWith(`--${PREFIX}-radius-`)).map(([k]) => `  --radius-${k.slice(2)}: var(${k});`),
  ...[...primVars.hig].filter(([k]) => k.startsWith(`--${PREFIX}-font-size-`)).map(([k]) => `  --text-${k.slice(2)}: var(${k});`),
  ...[...primVars.hig].filter(([k]) => k.startsWith(`--${PREFIX}-font-weight-`)).map(([k]) => `  --font-weight-${k.slice(2)}: var(${k});`),
  '}',
  '',
].join('\n')

mkdirSync(resolve(root, 'src/styles'), { recursive: true })
writeFileSync(resolve(root, 'src/styles/tokens.css'), css)

// ---- Emit TS ---------------------------------------------------------------
const toObj = (m) => Object.fromEntries([...m].map(([k, v]) => [k, { value: v.literal, figmaName: v.figmaName, alias: v.alias ?? null, type: v.type }]))
const ts = `// GENERATED FILE – do not edit. Source: tokens/figma/*.tokens.json. Regenerate with \`npm run tokens\`.
/* eslint-disable */
export type TokenType = 'color' | 'number' | 'string'
export interface TokenMeta { value: string; figmaName: string; alias: string | null; type: TokenType }
export type TokenMap = Record<string, TokenMeta>

/** Primitive palette + typography scale, keyed by CSS variable name. */
export const primitives = {
  hig: ${JSON.stringify(toObj(primVars.hig), null, 2)} as TokenMap,
  hot: ${JSON.stringify(toObj(primVars.hot), null, 2)} as TokenMap,
}
/** Spacing, radius, border-width and opacity scales. */
export const numeric = ${JSON.stringify(toObj(numericVars), null, 2)} as TokenMap
/** Semantic colors per theme/mode. Values are the literal resolved colors for that mode. */
export const semantic = {
  light: ${JSON.stringify(toObj(semVars.light), null, 2)} as TokenMap,
  dark: ${JSON.stringify(toObj(semVars.dark), null, 2)} as TokenMap,
  omniLight: ${JSON.stringify(toObj(semVars.hotLight), null, 2)} as TokenMap,
  omniDark: ${JSON.stringify(toObj(semVars.hotDark), null, 2)} as TokenMap,
}
/** Component-level tokens (button, link, focus). */
export const components = {
  hig: ${JSON.stringify(toObj(compVars.hig), null, 2)} as TokenMap,
  omni: ${JSON.stringify(toObj(compVars.omni), null, 2)} as TokenMap,
}
`
mkdirSync(resolve(root, 'src/tokens'), { recursive: true })
writeFileSync(resolve(root, 'src/tokens/generated.ts'), ts)

const counts = {
  primitives: primVars.hig.size, numeric: numericVars.size, semantic: semVars.light.size, components: compVars.hig.size,
  semanticAliased: [...semVars.light.values()].filter((v) => v.value.startsWith('var(')).length,
}
console.log('tokens.css + generated.ts written', counts)
