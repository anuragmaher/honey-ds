import type { Meta, StoryObj } from '@storybook/react-vite'
import { primitives, semantic, type TokenMap } from '@/tokens/generated'

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen' },
}
export default meta

function Swatch({ name, cssVar, figmaName }: { name: string; cssVar: string; figmaName: string }) {
  return (
    <div className="flex items-center gap-3 py-1.5">
      <div
        className="size-9 shrink-0 rounded-md border border-border shadow-sm"
        style={{ background: `var(${cssVar})` }}
        aria-label={figmaName}
      />
      <div className="min-w-0 text-sm leading-tight">
        <div className="font-medium truncate">{name}</div>
        <div className="text-muted-foreground font-mono text-xs truncate">{cssVar}</div>
      </div>
    </div>
  )
}

function groupBy(map: TokenMap, depth: number, filter?: (figmaName: string) => boolean) {
  const groups = new Map<string, Array<[string, TokenMap[string]]>>()
  for (const [cssVar, t] of Object.entries(map)) {
    if (t.type !== 'color') continue
    if (filter && !filter(t.figmaName)) continue
    const key = t.figmaName.split('/').slice(0, depth).join(' / ')
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key)!.push([cssVar, t])
  }
  return groups
}

function Palette({ groups }: { groups: ReturnType<typeof groupBy> }) {
  return (
    <div className="grid gap-x-8 gap-y-6 p-6 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
      {[...groups].map(([group, tokens]) => (
        <section key={group}>
          <h3 className="mb-2 text-sm font-semibold capitalize">{group}</h3>
          {tokens.map(([cssVar, t]) => (
            <Swatch key={cssVar} name={t.figmaName.split('/').slice(-1)[0]} cssVar={cssVar} figmaName={t.figmaName} />
          ))}
        </section>
      ))}
    </div>
  )
}

export const Primitives: StoryObj = {
  render: () => <Palette groups={groupBy(primitives.hig, 2, (n) => !n.includes('/alpha/'))} />,
}
export const PrimitivesAlpha: StoryObj = {
  name: 'Primitives / alpha',
  render: () => <Palette groups={groupBy(primitives.hig, 2, (n) => n.includes('/alpha/'))} />,
}
export const Text: StoryObj = {
  render: () => <Palette groups={groupBy(semantic.light, 2, (n) => n.startsWith('text/') && !n.includes('/accents/'))} />,
}
export const Background: StoryObj = {
  render: () => <Palette groups={groupBy(semantic.light, 2, (n) => n.startsWith('background/') && !n.includes('/accents/'))} />,
}
export const Foreground: StoryObj = {
  render: () => <Palette groups={groupBy(semantic.light, 2, (n) => n.startsWith('foreground/') && !n.includes('/accents/'))} />,
}
export const Border: StoryObj = {
  render: () => <Palette groups={groupBy(semantic.light, 2, (n) => n.startsWith('border/') && !n.includes('/accents/'))} />,
}
export const Accents: StoryObj = {
  render: () => <Palette groups={groupBy(semantic.light, 3, (n) => n.includes('/accents/'))} />,
}
export const ChartsAndEffects: StoryObj = {
  name: 'Charts & effects',
  render: () => <Palette groups={groupBy(semantic.light, 1, (n) => n.startsWith('charts/') || n.startsWith('effect/'))} />,
}
