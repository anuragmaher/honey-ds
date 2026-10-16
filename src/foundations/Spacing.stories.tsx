import type { Meta, StoryObj } from '@storybook/react-vite'
import { numeric } from '@/tokens/generated'

const meta: Meta = { title: 'Foundations/Spacing & Radius' }
export default meta

const pick = (prefix: string) =>
  Object.entries(numeric)
    .filter(([, t]) => t.figmaName.startsWith(prefix))
    .sort((a, b) => parseFloat(a[1].value) - parseFloat(b[1].value))

export const Spacing: StoryObj = {
  render: () => (
    <div className="space-y-2">
      {pick('spacing/').map(([cssVar, t]) => (
        <div key={cssVar} className="flex items-center gap-4 text-sm">
          <div className="w-36 font-mono text-xs text-muted-foreground">{t.figmaName}</div>
          <div className="w-14 text-xs">{t.value}</div>
          <div className="h-4 rounded-sm bg-primary" style={{ width: `var(${cssVar})` }} />
        </div>
      ))}
    </div>
  ),
}

export const Radius: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      {pick('radius/').map(([cssVar, t]) => (
        <div key={cssVar} className="flex flex-col items-center gap-2 text-xs">
          <div className="size-16 border-2 border-primary bg-primary/10" style={{ borderRadius: `var(${cssVar})` }} />
          <span className="font-mono text-muted-foreground">{t.figmaName}</span>
          <span>{t.value}</span>
        </div>
      ))}
    </div>
  ),
}

export const BorderWidthAndOpacity: StoryObj = {
  name: 'Border width & opacity',
  render: () => (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-3">
        {pick('border-width/').map(([cssVar, t]) => (
          <div key={cssVar} className="flex items-center gap-4 text-xs">
            <div className="w-36 font-mono text-muted-foreground">{t.figmaName}</div>
            <div className="h-8 w-32 border-foreground" style={{ borderWidth: `var(${cssVar})` }} />
            <span>{t.value}</span>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {pick('opacity/').map(([cssVar, t]) => (
          <div key={cssVar} className="flex items-center gap-4 text-xs">
            <div className="w-36 font-mono text-muted-foreground">{t.figmaName}</div>
            <div className="h-8 w-32 bg-primary" style={{ opacity: `var(${cssVar})` }} />
            <span>{t.value}</span>
          </div>
        ))}
      </div>
    </div>
  ),
}
