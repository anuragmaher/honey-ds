import type { Meta, StoryObj } from '@storybook/react-vite'
import { primitives } from '@/tokens/generated'

const meta: Meta = { title: 'Foundations/Typography' }
export default meta

const pick = (prefix: string) =>
  Object.entries(primitives.hig).filter(([, t]) => t.figmaName.startsWith(prefix))

export const Scale: StoryObj = {
  render: () => (
    <div className="space-y-4">
      {pick('font-size/').map(([cssVar, t]) => (
        <div key={cssVar} className="flex items-baseline gap-6 border-b border-border pb-3">
          <div className="w-40 shrink-0 font-mono text-xs text-muted-foreground">{t.figmaName} · {t.value}</div>
          <p style={{ fontSize: `var(${cssVar})`, lineHeight: 1.3 }}>The quick brown fox jumps over the lazy dog</p>
        </div>
      ))}
    </div>
  ),
}

export const Weights: StoryObj = {
  render: () => (
    <div className="space-y-3">
      {pick('font-weight/').map(([cssVar, t]) => (
        <p key={cssVar} className="text-lg" style={{ fontWeight: `var(${cssVar})` as never }}>
          {t.figmaName.split('/')[1]} ({t.value}) — Honey DS components
        </p>
      ))}
    </div>
  ),
}

export const Families: StoryObj = {
  render: () => (
    <div className="space-y-3">
      <p className="font-sans text-lg">Sans — <span className="font-mono text-sm text-muted-foreground">var(--hds-font-family-sans)</span> · HIG: Inter · Omni: Hanken Grotesk</p>
      <p className="font-mono text-lg">Mono — var(--hds-font-family-mono) · JetBrains Mono</p>
      <p className="text-sm text-muted-foreground">Fonts are not bundled. Load Inter / Hanken Grotesk / JetBrains Mono in the host app.</p>
    </div>
  ),
}
