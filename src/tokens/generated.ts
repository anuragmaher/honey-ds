// GENERATED FILE – do not edit. Source: tokens/figma/*.tokens.json. Regenerate with `npm run tokens`.
/* eslint-disable */
export type TokenType = 'color' | 'number' | 'string'
export interface TokenMeta { value: string; figmaName: string; alias: string | null; type: TokenType }
export type TokenMap = Record<string, TokenMeta>

/** Primitive palette + typography scale, keyed by CSS variable name. */
export const primitives = {
  hig: {
  "--hds-color-white-950": {
    "value": "#FFFFFF",
    "figmaName": "color/white/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-5": {
    "value": "rgb(255 255 255 / 0.05)",
    "figmaName": "color/white/alpha/5",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-10": {
    "value": "rgb(255 255 255 / 0.1)",
    "figmaName": "color/white/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-20": {
    "value": "rgb(255 255 255 / 0.2)",
    "figmaName": "color/white/alpha/20",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-30": {
    "value": "rgb(255 255 255 / 0.3)",
    "figmaName": "color/white/alpha/30",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-40": {
    "value": "rgb(255 255 255 / 0.4)",
    "figmaName": "color/white/alpha/40",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-50": {
    "value": "rgb(255 255 255 / 0.5)",
    "figmaName": "color/white/alpha/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-60": {
    "value": "rgb(255 255 255 / 0.6)",
    "figmaName": "color/white/alpha/60",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-70": {
    "value": "rgb(255 255 255 / 0.7)",
    "figmaName": "color/white/alpha/70",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-80": {
    "value": "rgb(255 255 255 / 0.8)",
    "figmaName": "color/white/alpha/80",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-90": {
    "value": "rgb(255 255 255 / 0.9)",
    "figmaName": "color/white/alpha/90",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-950": {
    "value": "#000000",
    "figmaName": "color/black/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-5": {
    "value": "rgb(0 0 0 / 0.05)",
    "figmaName": "color/black/alpha/5",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-10": {
    "value": "rgb(0 0 0 / 0.1)",
    "figmaName": "color/black/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-20": {
    "value": "rgb(0 0 0 / 0.2)",
    "figmaName": "color/black/alpha/20",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-30": {
    "value": "rgb(0 0 0 / 0.3)",
    "figmaName": "color/black/alpha/30",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-40": {
    "value": "rgb(0 0 0 / 0.4)",
    "figmaName": "color/black/alpha/40",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-50": {
    "value": "rgb(0 0 0 / 0.5)",
    "figmaName": "color/black/alpha/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-55": {
    "value": "rgb(0 0 0 / 0.55)",
    "figmaName": "color/black/alpha/55",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-60": {
    "value": "rgb(0 0 0 / 0.6)",
    "figmaName": "color/black/alpha/60",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-65": {
    "value": "rgb(0 0 0 / 0.65)",
    "figmaName": "color/black/alpha/65",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-70": {
    "value": "rgb(0 0 0 / 0.7)",
    "figmaName": "color/black/alpha/70",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-80": {
    "value": "rgb(0 0 0 / 0.8)",
    "figmaName": "color/black/alpha/80",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-90": {
    "value": "rgb(0 0 0 / 0.9)",
    "figmaName": "color/black/alpha/90",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-25": {
    "value": "#F8FAFC",
    "figmaName": "color/gray/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-50": {
    "value": "#F1F5F9",
    "figmaName": "color/gray/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-100": {
    "value": "#EDF1F6",
    "figmaName": "color/gray/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-200": {
    "value": "#E2E8F0",
    "figmaName": "color/gray/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-300": {
    "value": "#CBD5E1",
    "figmaName": "color/gray/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-400": {
    "value": "#94A3B8",
    "figmaName": "color/gray/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-500": {
    "value": "#64758B",
    "figmaName": "color/gray/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-600": {
    "value": "#475569",
    "figmaName": "color/gray/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-700": {
    "value": "#334155",
    "figmaName": "color/gray/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-800": {
    "value": "#1E293B",
    "figmaName": "color/gray/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-900": {
    "value": "#0F172A",
    "figmaName": "color/gray/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-950": {
    "value": "#020617",
    "figmaName": "color/gray/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-alpha-20": {
    "value": "rgb(115 115 115 / 0.2)",
    "figmaName": "color/gray/alpha/20",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-alpha-40": {
    "value": "rgb(115 115 115 / 0.4)",
    "figmaName": "color/gray/alpha/40",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-alpha-50": {
    "value": "rgb(115 115 115 / 0.5)",
    "figmaName": "color/gray/alpha/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-25": {
    "value": "#FFFDF5",
    "figmaName": "color/yellow/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-50": {
    "value": "#FFFBEB",
    "figmaName": "color/yellow/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-100": {
    "value": "#FFF4C7",
    "figmaName": "color/yellow/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-200": {
    "value": "#FFE89A",
    "figmaName": "color/yellow/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-300": {
    "value": "#FFDB6E",
    "figmaName": "color/yellow/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-400": {
    "value": "#FFCF54",
    "figmaName": "color/yellow/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-500": {
    "value": "#F0B82E",
    "figmaName": "color/yellow/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-600": {
    "value": "#C8941A",
    "figmaName": "color/yellow/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-700": {
    "value": "#9A7012",
    "figmaName": "color/yellow/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-800": {
    "value": "#6E4F0C",
    "figmaName": "color/yellow/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-900": {
    "value": "#45310A",
    "figmaName": "color/yellow/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-950": {
    "value": "#261B05",
    "figmaName": "color/yellow/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-alpha-12": {
    "value": "rgb(255 207 84 / 0.12)",
    "figmaName": "color/yellow/alpha/12",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-alpha-20": {
    "value": "rgb(255 207 84 / 0.2)",
    "figmaName": "color/yellow/alpha/20",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-alpha-30": {
    "value": "rgb(255 207 84 / 0.3)",
    "figmaName": "color/yellow/alpha/30",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-alpha-40": {
    "value": "rgb(255 207 84 / 0.4)",
    "figmaName": "color/yellow/alpha/40",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-alpha-50": {
    "value": "rgb(255 207 84 / 0.5)",
    "figmaName": "color/yellow/alpha/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-25": {
    "value": "#FFF8F8",
    "figmaName": "color/red/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-50": {
    "value": "#FEF2F2",
    "figmaName": "color/red/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-100": {
    "value": "#FEE2E2",
    "figmaName": "color/red/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-200": {
    "value": "#FECACA",
    "figmaName": "color/red/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-300": {
    "value": "#FCA5A5",
    "figmaName": "color/red/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-400": {
    "value": "#F87171",
    "figmaName": "color/red/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-500": {
    "value": "#EF4444",
    "figmaName": "color/red/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-600": {
    "value": "#DC2626",
    "figmaName": "color/red/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-700": {
    "value": "#B91C1C",
    "figmaName": "color/red/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-800": {
    "value": "#991B1B",
    "figmaName": "color/red/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-900": {
    "value": "#7F1D1D",
    "figmaName": "color/red/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-950": {
    "value": "#450A0A",
    "figmaName": "color/red/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-alpha-10": {
    "value": "rgb(239 68 68 / 0.1)",
    "figmaName": "color/red/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-alpha-18": {
    "value": "rgb(239 68 68 / 0.18)",
    "figmaName": "color/red/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-alpha-30": {
    "value": "rgb(239 68 68 / 0.3)",
    "figmaName": "color/red/alpha/30",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-alpha-40": {
    "value": "rgb(239 68 68 / 0.4)",
    "figmaName": "color/red/alpha/40",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-alpha-50": {
    "value": "rgb(239 68 68 / 0.5)",
    "figmaName": "color/red/alpha/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-25": {
    "value": "#F7FEF9",
    "figmaName": "color/green/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-50": {
    "value": "#F0FDF4",
    "figmaName": "color/green/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-100": {
    "value": "#DCFCE7",
    "figmaName": "color/green/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-200": {
    "value": "#BBF7D0",
    "figmaName": "color/green/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-300": {
    "value": "#86EFAC",
    "figmaName": "color/green/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-400": {
    "value": "#4ADE80",
    "figmaName": "color/green/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-500": {
    "value": "#22C55E",
    "figmaName": "color/green/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-600": {
    "value": "#16A34A",
    "figmaName": "color/green/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-700": {
    "value": "#15803D",
    "figmaName": "color/green/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-800": {
    "value": "#166534",
    "figmaName": "color/green/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-900": {
    "value": "#14532D",
    "figmaName": "color/green/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-950": {
    "value": "#052E16",
    "figmaName": "color/green/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-alpha-10": {
    "value": "rgb(34 197 94 / 0.1)",
    "figmaName": "color/green/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-alpha-18": {
    "value": "rgb(34 197 94 / 0.18)",
    "figmaName": "color/green/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-25": {
    "value": "#FFFBF6",
    "figmaName": "color/orange/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-50": {
    "value": "#FFF7ED",
    "figmaName": "color/orange/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-100": {
    "value": "#FFEDD5",
    "figmaName": "color/orange/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-200": {
    "value": "#FED7AA",
    "figmaName": "color/orange/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-300": {
    "value": "#FDBA74",
    "figmaName": "color/orange/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-400": {
    "value": "#FB923C",
    "figmaName": "color/orange/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-500": {
    "value": "#F97316",
    "figmaName": "color/orange/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-600": {
    "value": "#EA580C",
    "figmaName": "color/orange/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-700": {
    "value": "#C2410C",
    "figmaName": "color/orange/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-800": {
    "value": "#9A3412",
    "figmaName": "color/orange/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-900": {
    "value": "#7C2D12",
    "figmaName": "color/orange/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-950": {
    "value": "#431407",
    "figmaName": "color/orange/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-alpha-12": {
    "value": "rgb(249 115 22 / 0.12)",
    "figmaName": "color/orange/alpha/12",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-alpha-20": {
    "value": "rgb(249 115 22 / 0.2)",
    "figmaName": "color/orange/alpha/20",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-25": {
    "value": "#F7FBFF",
    "figmaName": "color/royal/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-50": {
    "value": "#EBF3FF",
    "figmaName": "color/royal/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-100": {
    "value": "#D8E7FD",
    "figmaName": "color/royal/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-200": {
    "value": "#B6D2FB",
    "figmaName": "color/royal/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-300": {
    "value": "#8CB5F8",
    "figmaName": "color/royal/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-400": {
    "value": "#5994F2",
    "figmaName": "color/royal/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-500": {
    "value": "#246FEA",
    "figmaName": "color/royal/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-600": {
    "value": "#1956C8",
    "figmaName": "color/royal/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-700": {
    "value": "#19449A",
    "figmaName": "color/royal/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-800": {
    "value": "#17316D",
    "figmaName": "color/royal/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-900": {
    "value": "#132149",
    "figmaName": "color/royal/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-950": {
    "value": "#0F162F",
    "figmaName": "color/royal/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-alpha-12": {
    "value": "rgb(36 111 234 / 0.12)",
    "figmaName": "color/royal/alpha/12",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-alpha-20": {
    "value": "rgb(36 111 234 / 0.2)",
    "figmaName": "color/royal/alpha/20",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-alpha-30": {
    "value": "rgb(36 111 234 / 0.3)",
    "figmaName": "color/royal/alpha/30",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-alpha-40": {
    "value": "rgb(36 111 234 / 0.4)",
    "figmaName": "color/royal/alpha/40",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-alpha-50": {
    "value": "rgb(36 111 234 / 0.5)",
    "figmaName": "color/royal/alpha/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-25": {
    "value": "#F7FAFF",
    "figmaName": "color/blue/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-50": {
    "value": "#EFF6FF",
    "figmaName": "color/blue/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-100": {
    "value": "#DBEAFE",
    "figmaName": "color/blue/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-200": {
    "value": "#BFDBFE",
    "figmaName": "color/blue/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-300": {
    "value": "#93C5FD",
    "figmaName": "color/blue/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-400": {
    "value": "#60A5FA",
    "figmaName": "color/blue/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-500": {
    "value": "#3B82F6",
    "figmaName": "color/blue/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-600": {
    "value": "#2563EB",
    "figmaName": "color/blue/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-700": {
    "value": "#1D4ED8",
    "figmaName": "color/blue/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-800": {
    "value": "#1E40AF",
    "figmaName": "color/blue/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-900": {
    "value": "#1E3A8A",
    "figmaName": "color/blue/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-950": {
    "value": "#172554",
    "figmaName": "color/blue/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-alpha-10": {
    "value": "rgb(59 130 246 / 0.1)",
    "figmaName": "color/blue/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-alpha-18": {
    "value": "rgb(59 130 246 / 0.18)",
    "figmaName": "color/blue/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-25": {
    "value": "#F7FEFC",
    "figmaName": "color/teal/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-50": {
    "value": "#F0FDFA",
    "figmaName": "color/teal/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-100": {
    "value": "#CCFBF1",
    "figmaName": "color/teal/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-200": {
    "value": "#99F6E4",
    "figmaName": "color/teal/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-300": {
    "value": "#5EEAD4",
    "figmaName": "color/teal/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-400": {
    "value": "#2DD4BF",
    "figmaName": "color/teal/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-500": {
    "value": "#14B8A6",
    "figmaName": "color/teal/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-600": {
    "value": "#0D9488",
    "figmaName": "color/teal/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-700": {
    "value": "#0F766E",
    "figmaName": "color/teal/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-800": {
    "value": "#115E59",
    "figmaName": "color/teal/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-900": {
    "value": "#134E4A",
    "figmaName": "color/teal/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-950": {
    "value": "#042F2E",
    "figmaName": "color/teal/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-alpha-10": {
    "value": "rgb(20 184 166 / 0.1)",
    "figmaName": "color/teal/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-alpha-18": {
    "value": "rgb(20 184 166 / 0.18)",
    "figmaName": "color/teal/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-25": {
    "value": "#F5FEFF",
    "figmaName": "color/cyan/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-50": {
    "value": "#ECFEFF",
    "figmaName": "color/cyan/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-100": {
    "value": "#CFFAFE",
    "figmaName": "color/cyan/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-200": {
    "value": "#A5F3FC",
    "figmaName": "color/cyan/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-300": {
    "value": "#67E8F9",
    "figmaName": "color/cyan/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-400": {
    "value": "#22D3EE",
    "figmaName": "color/cyan/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-500": {
    "value": "#06B6D4",
    "figmaName": "color/cyan/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-600": {
    "value": "#0891B2",
    "figmaName": "color/cyan/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-700": {
    "value": "#0E7490",
    "figmaName": "color/cyan/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-800": {
    "value": "#155E75",
    "figmaName": "color/cyan/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-900": {
    "value": "#164E63",
    "figmaName": "color/cyan/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-950": {
    "value": "#083344",
    "figmaName": "color/cyan/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-alpha-10": {
    "value": "rgb(6 182 212 / 0.1)",
    "figmaName": "color/cyan/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-alpha-18": {
    "value": "rgb(6 182 212 / 0.18)",
    "figmaName": "color/cyan/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-25": {
    "value": "#FAF9FF",
    "figmaName": "color/violet/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-50": {
    "value": "#F5F3FF",
    "figmaName": "color/violet/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-100": {
    "value": "#EDE9FE",
    "figmaName": "color/violet/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-200": {
    "value": "#DDD6FE",
    "figmaName": "color/violet/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-300": {
    "value": "#C4B5FD",
    "figmaName": "color/violet/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-400": {
    "value": "#A78BFA",
    "figmaName": "color/violet/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-500": {
    "value": "#8B5CF6",
    "figmaName": "color/violet/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-600": {
    "value": "#7C3AED",
    "figmaName": "color/violet/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-700": {
    "value": "#6D28D9",
    "figmaName": "color/violet/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-800": {
    "value": "#5B21B6",
    "figmaName": "color/violet/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-900": {
    "value": "#4C1D95",
    "figmaName": "color/violet/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-950": {
    "value": "#2E1065",
    "figmaName": "color/violet/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-alpha-10": {
    "value": "rgb(139 92 246 / 0.1)",
    "figmaName": "color/violet/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-alpha-18": {
    "value": "rgb(139 92 246 / 0.18)",
    "figmaName": "color/violet/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-25": {
    "value": "#FEF8FB",
    "figmaName": "color/pink/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-50": {
    "value": "#FDF2F8",
    "figmaName": "color/pink/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-100": {
    "value": "#FCE7F3",
    "figmaName": "color/pink/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-200": {
    "value": "#FBCFE8",
    "figmaName": "color/pink/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-300": {
    "value": "#F9A8D4",
    "figmaName": "color/pink/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-400": {
    "value": "#F472B6",
    "figmaName": "color/pink/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-500": {
    "value": "#EC4899",
    "figmaName": "color/pink/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-600": {
    "value": "#DB2777",
    "figmaName": "color/pink/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-700": {
    "value": "#BE185D",
    "figmaName": "color/pink/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-800": {
    "value": "#9D174D",
    "figmaName": "color/pink/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-900": {
    "value": "#831843",
    "figmaName": "color/pink/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-950": {
    "value": "#500724",
    "figmaName": "color/pink/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-alpha-10": {
    "value": "rgb(236 72 153 / 0.1)",
    "figmaName": "color/pink/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-alpha-18": {
    "value": "rgb(236 72 153 / 0.18)",
    "figmaName": "color/pink/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-25": {
    "value": "#F6F8FF",
    "figmaName": "color/indigo/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-50": {
    "value": "#EEF2FF",
    "figmaName": "color/indigo/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-100": {
    "value": "#E0E7FF",
    "figmaName": "color/indigo/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-200": {
    "value": "#C7D2FE",
    "figmaName": "color/indigo/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-300": {
    "value": "#A5B4FC",
    "figmaName": "color/indigo/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-400": {
    "value": "#818CF8",
    "figmaName": "color/indigo/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-500": {
    "value": "#6366F1",
    "figmaName": "color/indigo/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-600": {
    "value": "#4F46E5",
    "figmaName": "color/indigo/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-700": {
    "value": "#4338CA",
    "figmaName": "color/indigo/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-800": {
    "value": "#3730A3",
    "figmaName": "color/indigo/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-900": {
    "value": "#312E81",
    "figmaName": "color/indigo/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-950": {
    "value": "#1E1B4B",
    "figmaName": "color/indigo/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-alpha-10": {
    "value": "rgb(99 102 241 / 0.1)",
    "figmaName": "color/indigo/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-alpha-18": {
    "value": "rgb(99 102 241 / 0.18)",
    "figmaName": "color/indigo/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-25": {
    "value": "#FBFEF3",
    "figmaName": "color/lime/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-50": {
    "value": "#F7FEE7",
    "figmaName": "color/lime/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-100": {
    "value": "#ECFCCB",
    "figmaName": "color/lime/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-200": {
    "value": "#D9F99D",
    "figmaName": "color/lime/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-300": {
    "value": "#BEF264",
    "figmaName": "color/lime/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-400": {
    "value": "#A3E635",
    "figmaName": "color/lime/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-500": {
    "value": "#84CC16",
    "figmaName": "color/lime/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-600": {
    "value": "#65A30D",
    "figmaName": "color/lime/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-700": {
    "value": "#4D7C0F",
    "figmaName": "color/lime/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-800": {
    "value": "#3F6212",
    "figmaName": "color/lime/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-900": {
    "value": "#365314",
    "figmaName": "color/lime/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-950": {
    "value": "#1A2E05",
    "figmaName": "color/lime/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-alpha-10": {
    "value": "rgb(132 204 22 / 0.1)",
    "figmaName": "color/lime/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-alpha-18": {
    "value": "rgb(132 204 22 / 0.18)",
    "figmaName": "color/lime/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-25": {
    "value": "#FBFCFE",
    "figmaName": "color/hig/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-50": {
    "value": "#F6F8FC",
    "figmaName": "color/hig/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-100": {
    "value": "#F0F3FA",
    "figmaName": "color/hig/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-200": {
    "value": "#E8EDF7",
    "figmaName": "color/hig/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-300": {
    "value": "#D9E1F2",
    "figmaName": "color/hig/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-400": {
    "value": "#B7C5E3",
    "figmaName": "color/hig/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-500": {
    "value": "#8CA0CD",
    "figmaName": "color/hig/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-600": {
    "value": "#647CB4",
    "figmaName": "color/hig/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-700": {
    "value": "#465F99",
    "figmaName": "color/hig/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-800": {
    "value": "#2F467A",
    "figmaName": "color/hig/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-900": {
    "value": "#25375F",
    "figmaName": "color/hig/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-950": {
    "value": "#101F41",
    "figmaName": "color/hig/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-alpha-10": {
    "value": "rgb(140 160 205 / 0.1)",
    "figmaName": "color/hig/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-alpha-18": {
    "value": "rgb(140 160 205 / 0.18)",
    "figmaName": "color/hig/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-25": {
    "value": "#FFFDF5",
    "figmaName": "color/amber/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-50": {
    "value": "#FFFBEB",
    "figmaName": "color/amber/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-100": {
    "value": "#FEF3C7",
    "figmaName": "color/amber/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-200": {
    "value": "#FDE68A",
    "figmaName": "color/amber/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-300": {
    "value": "#FCD34D",
    "figmaName": "color/amber/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-400": {
    "value": "#FBBF24",
    "figmaName": "color/amber/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-500": {
    "value": "#F59E0B",
    "figmaName": "color/amber/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-600": {
    "value": "#D97706",
    "figmaName": "color/amber/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-700": {
    "value": "#B45309",
    "figmaName": "color/amber/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-800": {
    "value": "#92400E",
    "figmaName": "color/amber/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-900": {
    "value": "#78350F",
    "figmaName": "color/amber/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-950": {
    "value": "#451A03",
    "figmaName": "color/amber/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-alpha-10": {
    "value": "rgb(245 158 11 / 0.1)",
    "figmaName": "color/amber/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-alpha-18": {
    "value": "rgb(245 158 11 / 0.18)",
    "figmaName": "color/amber/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-25": {
    "value": "#F8FCFF",
    "figmaName": "color/sky/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-50": {
    "value": "#F0F9FF",
    "figmaName": "color/sky/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-100": {
    "value": "#EBF7FF",
    "figmaName": "color/sky/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-200": {
    "value": "#E0F3FF",
    "figmaName": "color/sky/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-300": {
    "value": "#C9E8FD",
    "figmaName": "color/sky/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-400": {
    "value": "#81D6FD",
    "figmaName": "color/sky/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-500": {
    "value": "#3DC1FA",
    "figmaName": "color/sky/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-600": {
    "value": "#0BA7EF",
    "figmaName": "color/sky/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-700": {
    "value": "#0081C2",
    "figmaName": "color/sky/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-800": {
    "value": "#065B89",
    "figmaName": "color/sky/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-900": {
    "value": "#0B4D74",
    "figmaName": "color/sky/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-950": {
    "value": "#062F46",
    "figmaName": "color/sky/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-alpha-10": {
    "value": "rgb(14 165 233 / 0.1)",
    "figmaName": "color/sky/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-alpha-18": {
    "value": "rgb(14 165 233 / 0.18)",
    "figmaName": "color/sky/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-25": {
    "value": "#FEFAFF",
    "figmaName": "color/fuchsia/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-50": {
    "value": "#FDF4FF",
    "figmaName": "color/fuchsia/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-100": {
    "value": "#FAE8FF",
    "figmaName": "color/fuchsia/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-200": {
    "value": "#F5D0FE",
    "figmaName": "color/fuchsia/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-300": {
    "value": "#F0ABFC",
    "figmaName": "color/fuchsia/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-400": {
    "value": "#E879F9",
    "figmaName": "color/fuchsia/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-500": {
    "value": "#D946EF",
    "figmaName": "color/fuchsia/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-600": {
    "value": "#C026D3",
    "figmaName": "color/fuchsia/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-700": {
    "value": "#A21CAF",
    "figmaName": "color/fuchsia/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-800": {
    "value": "#86198F",
    "figmaName": "color/fuchsia/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-900": {
    "value": "#701A75",
    "figmaName": "color/fuchsia/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-950": {
    "value": "#4A044E",
    "figmaName": "color/fuchsia/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-alpha-10": {
    "value": "rgb(217 70 239 / 0.1)",
    "figmaName": "color/fuchsia/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-alpha-18": {
    "value": "rgb(217 70 239 / 0.18)",
    "figmaName": "color/fuchsia/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-50": {
    "value": "#F8FAFC",
    "figmaName": "color/Slate/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-100": {
    "value": "#F1F5F9",
    "figmaName": "color/Slate/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-150": {
    "value": "#EDF1F6",
    "figmaName": "color/Slate/150",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-200": {
    "value": "#E2E8F0",
    "figmaName": "color/Slate/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-300": {
    "value": "#CBD5E1",
    "figmaName": "color/Slate/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-400": {
    "value": "#94A3B8",
    "figmaName": "color/Slate/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-500": {
    "value": "#64758B",
    "figmaName": "color/Slate/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-600": {
    "value": "#475569",
    "figmaName": "color/Slate/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-700": {
    "value": "#334155",
    "figmaName": "color/Slate/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-800": {
    "value": "#1E293B",
    "figmaName": "color/Slate/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-900": {
    "value": "#0F172A",
    "figmaName": "color/Slate/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-950": {
    "value": "#020617",
    "figmaName": "color/Slate/950",
    "alias": null,
    "type": "color"
  },
  "--hds-scale-0": {
    "value": "0px",
    "figmaName": "scale/0",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-1": {
    "value": "4px",
    "figmaName": "scale/1",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-2": {
    "value": "8px",
    "figmaName": "scale/2",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-3": {
    "value": "12px",
    "figmaName": "scale/3",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-4": {
    "value": "16px",
    "figmaName": "scale/4",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-5": {
    "value": "20px",
    "figmaName": "scale/5",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-6": {
    "value": "24px",
    "figmaName": "scale/6",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-7": {
    "value": "28px",
    "figmaName": "scale/7",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-8": {
    "value": "32px",
    "figmaName": "scale/8",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-9": {
    "value": "36px",
    "figmaName": "scale/9",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-10": {
    "value": "40px",
    "figmaName": "scale/10",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-12": {
    "value": "48px",
    "figmaName": "scale/12",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-14": {
    "value": "56px",
    "figmaName": "scale/14",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-16": {
    "value": "64px",
    "figmaName": "scale/16",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-20": {
    "value": "80px",
    "figmaName": "scale/20",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-24": {
    "value": "96px",
    "figmaName": "scale/24",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-30": {
    "value": "120px",
    "figmaName": "scale/30",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-32": {
    "value": "128px",
    "figmaName": "scale/32",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-36": {
    "value": "144px",
    "figmaName": "scale/36",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-40": {
    "value": "160px",
    "figmaName": "scale/40",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-48": {
    "value": "192px",
    "figmaName": "scale/48",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-64": {
    "value": "256px",
    "figmaName": "scale/64",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-80": {
    "value": "320px",
    "figmaName": "scale/80",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-96": {
    "value": "384px",
    "figmaName": "scale/96",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-0_5": {
    "value": "2px",
    "figmaName": "scale/0_5",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-1_5": {
    "value": "6px",
    "figmaName": "scale/1_5",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-2_5": {
    "value": "10px",
    "figmaName": "scale/2_5",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-3_5": {
    "value": "14px",
    "figmaName": "scale/3_5",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-full": {
    "value": "9999px",
    "figmaName": "scale/full",
    "alias": null,
    "type": "number"
  },
  "--hds-font-weight-regular": {
    "value": "400",
    "figmaName": "font-weight/regular",
    "alias": null,
    "type": "number"
  },
  "--hds-font-weight-medium": {
    "value": "500",
    "figmaName": "font-weight/medium",
    "alias": null,
    "type": "number"
  },
  "--hds-font-weight-semibold": {
    "value": "600",
    "figmaName": "font-weight/semibold",
    "alias": null,
    "type": "number"
  },
  "--hds-font-weight-bold": {
    "value": "700",
    "figmaName": "font-weight/bold",
    "alias": null,
    "type": "number"
  },
  "--hds-font-family-sans": {
    "value": "\"Inter\"",
    "figmaName": "font-family/sans",
    "alias": null,
    "type": "string"
  },
  "--hds-font-family-mono": {
    "value": "\"JetBrains Mono\"",
    "figmaName": "font-family/mono",
    "alias": null,
    "type": "string"
  },
  "--hds-font-size-12": {
    "value": "12px",
    "figmaName": "font-size/12",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-13": {
    "value": "13px",
    "figmaName": "font-size/13",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-14": {
    "value": "14px",
    "figmaName": "font-size/14",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-16": {
    "value": "16px",
    "figmaName": "font-size/16",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-18": {
    "value": "18px",
    "figmaName": "font-size/18",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-20": {
    "value": "20px",
    "figmaName": "font-size/20",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-24": {
    "value": "24px",
    "figmaName": "font-size/24",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-28": {
    "value": "28px",
    "figmaName": "font-size/28",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-14": {
    "value": "14px",
    "figmaName": "line-height/14",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-18": {
    "value": "18px",
    "figmaName": "line-height/18",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-19": {
    "value": "19px",
    "figmaName": "line-height/19",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-20": {
    "value": "20px",
    "figmaName": "line-height/20",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-22": {
    "value": "22px",
    "figmaName": "line-height/22",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-24": {
    "value": "24px",
    "figmaName": "line-height/24",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-28": {
    "value": "28px",
    "figmaName": "line-height/28",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-32": {
    "value": "32px",
    "figmaName": "line-height/32",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-36": {
    "value": "36px",
    "figmaName": "line-height/36",
    "alias": null,
    "type": "number"
  },
  "--hds-letter-spacing-normal": {
    "value": "0em",
    "figmaName": "letter-spacing/normal",
    "alias": null,
    "type": "number"
  },
  "--hds-letter-spacing-wide": {
    "value": "0.08em",
    "figmaName": "letter-spacing/wide",
    "alias": null,
    "type": "number"
  }
} as TokenMap,
  hot: {
  "--hds-color-white-950": {
    "value": "#FFFFFF",
    "figmaName": "color/white/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-5": {
    "value": "rgb(255 255 255 / 0.05)",
    "figmaName": "color/white/alpha/5",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-10": {
    "value": "rgb(255 255 255 / 0.1)",
    "figmaName": "color/white/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-20": {
    "value": "rgb(255 255 255 / 0.2)",
    "figmaName": "color/white/alpha/20",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-30": {
    "value": "rgb(255 255 255 / 0.3)",
    "figmaName": "color/white/alpha/30",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-40": {
    "value": "rgb(255 255 255 / 0.4)",
    "figmaName": "color/white/alpha/40",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-50": {
    "value": "rgb(255 255 255 / 0.5)",
    "figmaName": "color/white/alpha/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-60": {
    "value": "rgb(255 255 255 / 0.6)",
    "figmaName": "color/white/alpha/60",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-70": {
    "value": "rgb(255 255 255 / 0.7)",
    "figmaName": "color/white/alpha/70",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-80": {
    "value": "rgb(255 255 255 / 0.8)",
    "figmaName": "color/white/alpha/80",
    "alias": null,
    "type": "color"
  },
  "--hds-color-white-alpha-90": {
    "value": "rgb(255 255 255 / 0.9)",
    "figmaName": "color/white/alpha/90",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-950": {
    "value": "#000000",
    "figmaName": "color/black/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-5": {
    "value": "rgb(0 0 0 / 0.05)",
    "figmaName": "color/black/alpha/5",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-10": {
    "value": "rgb(0 0 0 / 0.1)",
    "figmaName": "color/black/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-20": {
    "value": "rgb(0 0 0 / 0.2)",
    "figmaName": "color/black/alpha/20",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-30": {
    "value": "rgb(0 0 0 / 0.3)",
    "figmaName": "color/black/alpha/30",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-40": {
    "value": "rgb(0 0 0 / 0.4)",
    "figmaName": "color/black/alpha/40",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-50": {
    "value": "rgb(0 0 0 / 0.5)",
    "figmaName": "color/black/alpha/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-55": {
    "value": "rgb(0 0 0 / 0.55)",
    "figmaName": "color/black/alpha/55",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-60": {
    "value": "rgb(0 0 0 / 0.6)",
    "figmaName": "color/black/alpha/60",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-65": {
    "value": "rgb(0 0 0 / 0.65)",
    "figmaName": "color/black/alpha/65",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-70": {
    "value": "rgb(0 0 0 / 0.7)",
    "figmaName": "color/black/alpha/70",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-80": {
    "value": "rgb(0 0 0 / 0.8)",
    "figmaName": "color/black/alpha/80",
    "alias": null,
    "type": "color"
  },
  "--hds-color-black-alpha-90": {
    "value": "rgb(0 0 0 / 0.9)",
    "figmaName": "color/black/alpha/90",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-25": {
    "value": "#FAFAFA",
    "figmaName": "color/gray/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-50": {
    "value": "#F5F5F5",
    "figmaName": "color/gray/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-100": {
    "value": "#EEEEEE",
    "figmaName": "color/gray/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-200": {
    "value": "#E0E0E0",
    "figmaName": "color/gray/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-300": {
    "value": "#D4D4D4",
    "figmaName": "color/gray/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-400": {
    "value": "#A3A3A3",
    "figmaName": "color/gray/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-500": {
    "value": "#737373",
    "figmaName": "color/gray/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-600": {
    "value": "#525252",
    "figmaName": "color/gray/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-700": {
    "value": "#404040",
    "figmaName": "color/gray/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-800": {
    "value": "#262626",
    "figmaName": "color/gray/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-900": {
    "value": "#171717",
    "figmaName": "color/gray/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-950": {
    "value": "#0A0A0A",
    "figmaName": "color/gray/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-alpha-20": {
    "value": "rgb(115 115 115 / 0.2)",
    "figmaName": "color/gray/alpha/20",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-alpha-40": {
    "value": "rgb(115 115 115 / 0.4)",
    "figmaName": "color/gray/alpha/40",
    "alias": null,
    "type": "color"
  },
  "--hds-color-gray-alpha-50": {
    "value": "rgb(115 115 115 / 0.5)",
    "figmaName": "color/gray/alpha/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-25": {
    "value": "#FFFDF5",
    "figmaName": "color/yellow/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-50": {
    "value": "#FFFBEB",
    "figmaName": "color/yellow/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-100": {
    "value": "#FFF4C7",
    "figmaName": "color/yellow/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-200": {
    "value": "#FFE89A",
    "figmaName": "color/yellow/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-300": {
    "value": "#FFDB6E",
    "figmaName": "color/yellow/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-400": {
    "value": "#FFCF54",
    "figmaName": "color/yellow/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-500": {
    "value": "#F0B82E",
    "figmaName": "color/yellow/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-600": {
    "value": "#C8941A",
    "figmaName": "color/yellow/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-700": {
    "value": "#9A7012",
    "figmaName": "color/yellow/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-800": {
    "value": "#6E4F0C",
    "figmaName": "color/yellow/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-900": {
    "value": "#45310A",
    "figmaName": "color/yellow/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-950": {
    "value": "#261B05",
    "figmaName": "color/yellow/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-alpha-12": {
    "value": "rgb(255 207 84 / 0.12)",
    "figmaName": "color/yellow/alpha/12",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-alpha-20": {
    "value": "rgb(255 207 84 / 0.2)",
    "figmaName": "color/yellow/alpha/20",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-alpha-30": {
    "value": "rgb(255 207 84 / 0.3)",
    "figmaName": "color/yellow/alpha/30",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-alpha-40": {
    "value": "rgb(255 207 84 / 0.4)",
    "figmaName": "color/yellow/alpha/40",
    "alias": null,
    "type": "color"
  },
  "--hds-color-yellow-alpha-50": {
    "value": "rgb(255 207 84 / 0.5)",
    "figmaName": "color/yellow/alpha/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-25": {
    "value": "#FFF8F8",
    "figmaName": "color/red/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-50": {
    "value": "#FEF2F2",
    "figmaName": "color/red/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-100": {
    "value": "#FEE2E2",
    "figmaName": "color/red/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-200": {
    "value": "#FECACA",
    "figmaName": "color/red/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-300": {
    "value": "#FCA5A5",
    "figmaName": "color/red/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-400": {
    "value": "#F87171",
    "figmaName": "color/red/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-500": {
    "value": "#EF4444",
    "figmaName": "color/red/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-600": {
    "value": "#DC2626",
    "figmaName": "color/red/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-700": {
    "value": "#B91C1C",
    "figmaName": "color/red/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-800": {
    "value": "#991B1B",
    "figmaName": "color/red/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-900": {
    "value": "#7F1D1D",
    "figmaName": "color/red/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-950": {
    "value": "#450A0A",
    "figmaName": "color/red/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-alpha-10": {
    "value": "rgb(239 68 68 / 0.1)",
    "figmaName": "color/red/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-alpha-18": {
    "value": "rgb(239 68 68 / 0.18)",
    "figmaName": "color/red/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-alpha-30": {
    "value": "rgb(239 68 68 / 0.3)",
    "figmaName": "color/red/alpha/30",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-alpha-40": {
    "value": "rgb(239 68 68 / 0.4)",
    "figmaName": "color/red/alpha/40",
    "alias": null,
    "type": "color"
  },
  "--hds-color-red-alpha-50": {
    "value": "rgb(239 68 68 / 0.5)",
    "figmaName": "color/red/alpha/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-25": {
    "value": "#F7FEF9",
    "figmaName": "color/green/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-50": {
    "value": "#F0FDF4",
    "figmaName": "color/green/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-100": {
    "value": "#DCFCE7",
    "figmaName": "color/green/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-200": {
    "value": "#BBF7D0",
    "figmaName": "color/green/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-300": {
    "value": "#86EFAC",
    "figmaName": "color/green/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-400": {
    "value": "#4ADE80",
    "figmaName": "color/green/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-500": {
    "value": "#22C55E",
    "figmaName": "color/green/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-600": {
    "value": "#16A34A",
    "figmaName": "color/green/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-700": {
    "value": "#15803D",
    "figmaName": "color/green/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-800": {
    "value": "#166534",
    "figmaName": "color/green/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-900": {
    "value": "#14532D",
    "figmaName": "color/green/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-950": {
    "value": "#052E16",
    "figmaName": "color/green/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-alpha-10": {
    "value": "rgb(34 197 94 / 0.1)",
    "figmaName": "color/green/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-green-alpha-18": {
    "value": "rgb(34 197 94 / 0.18)",
    "figmaName": "color/green/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-25": {
    "value": "#FFFBF6",
    "figmaName": "color/orange/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-50": {
    "value": "#FFF7ED",
    "figmaName": "color/orange/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-100": {
    "value": "#FFEDD5",
    "figmaName": "color/orange/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-200": {
    "value": "#FED7AA",
    "figmaName": "color/orange/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-300": {
    "value": "#FDBA74",
    "figmaName": "color/orange/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-400": {
    "value": "#FB923C",
    "figmaName": "color/orange/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-500": {
    "value": "#F97316",
    "figmaName": "color/orange/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-600": {
    "value": "#EA580C",
    "figmaName": "color/orange/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-700": {
    "value": "#C2410C",
    "figmaName": "color/orange/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-800": {
    "value": "#9A3412",
    "figmaName": "color/orange/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-900": {
    "value": "#7C2D12",
    "figmaName": "color/orange/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-950": {
    "value": "#431407",
    "figmaName": "color/orange/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-alpha-12": {
    "value": "rgb(249 115 22 / 0.12)",
    "figmaName": "color/orange/alpha/12",
    "alias": null,
    "type": "color"
  },
  "--hds-color-orange-alpha-20": {
    "value": "rgb(249 115 22 / 0.2)",
    "figmaName": "color/orange/alpha/20",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-25": {
    "value": "#F7FBFF",
    "figmaName": "color/royal/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-50": {
    "value": "#EBF3FF",
    "figmaName": "color/royal/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-100": {
    "value": "#D8E7FD",
    "figmaName": "color/royal/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-200": {
    "value": "#B6D2FB",
    "figmaName": "color/royal/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-300": {
    "value": "#8CB5F8",
    "figmaName": "color/royal/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-400": {
    "value": "#5994F2",
    "figmaName": "color/royal/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-500": {
    "value": "#246FEA",
    "figmaName": "color/royal/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-600": {
    "value": "#1956C8",
    "figmaName": "color/royal/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-700": {
    "value": "#19449A",
    "figmaName": "color/royal/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-800": {
    "value": "#17316D",
    "figmaName": "color/royal/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-900": {
    "value": "#132149",
    "figmaName": "color/royal/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-950": {
    "value": "#0F162F",
    "figmaName": "color/royal/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-alpha-12": {
    "value": "rgb(36 111 234 / 0.12)",
    "figmaName": "color/royal/alpha/12",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-alpha-20": {
    "value": "rgb(36 111 234 / 0.2)",
    "figmaName": "color/royal/alpha/20",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-alpha-30": {
    "value": "rgb(36 111 234 / 0.3)",
    "figmaName": "color/royal/alpha/30",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-alpha-40": {
    "value": "rgb(36 111 234 / 0.4)",
    "figmaName": "color/royal/alpha/40",
    "alias": null,
    "type": "color"
  },
  "--hds-color-royal-alpha-50": {
    "value": "rgb(36 111 234 / 0.5)",
    "figmaName": "color/royal/alpha/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-25": {
    "value": "#F7FAFF",
    "figmaName": "color/blue/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-50": {
    "value": "#EFF6FF",
    "figmaName": "color/blue/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-100": {
    "value": "#DBEAFE",
    "figmaName": "color/blue/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-200": {
    "value": "#BFDBFE",
    "figmaName": "color/blue/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-300": {
    "value": "#93C5FD",
    "figmaName": "color/blue/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-400": {
    "value": "#60A5FA",
    "figmaName": "color/blue/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-500": {
    "value": "#3B82F6",
    "figmaName": "color/blue/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-600": {
    "value": "#2563EB",
    "figmaName": "color/blue/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-700": {
    "value": "#1D4ED8",
    "figmaName": "color/blue/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-800": {
    "value": "#1E40AF",
    "figmaName": "color/blue/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-900": {
    "value": "#1E3A8A",
    "figmaName": "color/blue/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-950": {
    "value": "#172554",
    "figmaName": "color/blue/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-alpha-10": {
    "value": "rgb(59 130 246 / 0.1)",
    "figmaName": "color/blue/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-blue-alpha-18": {
    "value": "rgb(59 130 246 / 0.18)",
    "figmaName": "color/blue/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-25": {
    "value": "#F7FEFC",
    "figmaName": "color/teal/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-50": {
    "value": "#F0FDFA",
    "figmaName": "color/teal/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-100": {
    "value": "#CCFBF1",
    "figmaName": "color/teal/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-200": {
    "value": "#99F6E4",
    "figmaName": "color/teal/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-300": {
    "value": "#5EEAD4",
    "figmaName": "color/teal/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-400": {
    "value": "#2DD4BF",
    "figmaName": "color/teal/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-500": {
    "value": "#14B8A6",
    "figmaName": "color/teal/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-600": {
    "value": "#0D9488",
    "figmaName": "color/teal/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-700": {
    "value": "#0F766E",
    "figmaName": "color/teal/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-800": {
    "value": "#115E59",
    "figmaName": "color/teal/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-900": {
    "value": "#134E4A",
    "figmaName": "color/teal/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-950": {
    "value": "#042F2E",
    "figmaName": "color/teal/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-alpha-10": {
    "value": "rgb(20 184 166 / 0.1)",
    "figmaName": "color/teal/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-teal-alpha-18": {
    "value": "rgb(20 184 166 / 0.18)",
    "figmaName": "color/teal/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-25": {
    "value": "#F5FEFF",
    "figmaName": "color/cyan/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-50": {
    "value": "#ECFEFF",
    "figmaName": "color/cyan/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-100": {
    "value": "#CFFAFE",
    "figmaName": "color/cyan/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-200": {
    "value": "#A5F3FC",
    "figmaName": "color/cyan/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-300": {
    "value": "#67E8F9",
    "figmaName": "color/cyan/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-400": {
    "value": "#22D3EE",
    "figmaName": "color/cyan/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-500": {
    "value": "#06B6D4",
    "figmaName": "color/cyan/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-600": {
    "value": "#0891B2",
    "figmaName": "color/cyan/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-700": {
    "value": "#0E7490",
    "figmaName": "color/cyan/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-800": {
    "value": "#155E75",
    "figmaName": "color/cyan/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-900": {
    "value": "#164E63",
    "figmaName": "color/cyan/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-950": {
    "value": "#083344",
    "figmaName": "color/cyan/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-alpha-10": {
    "value": "rgb(6 182 212 / 0.1)",
    "figmaName": "color/cyan/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-cyan-alpha-18": {
    "value": "rgb(6 182 212 / 0.18)",
    "figmaName": "color/cyan/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-25": {
    "value": "#FAF9FF",
    "figmaName": "color/violet/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-50": {
    "value": "#F5F3FF",
    "figmaName": "color/violet/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-100": {
    "value": "#EDE9FE",
    "figmaName": "color/violet/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-200": {
    "value": "#DDD6FE",
    "figmaName": "color/violet/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-300": {
    "value": "#C4B5FD",
    "figmaName": "color/violet/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-400": {
    "value": "#A78BFA",
    "figmaName": "color/violet/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-500": {
    "value": "#8B5CF6",
    "figmaName": "color/violet/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-600": {
    "value": "#7C3AED",
    "figmaName": "color/violet/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-700": {
    "value": "#6D28D9",
    "figmaName": "color/violet/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-800": {
    "value": "#5B21B6",
    "figmaName": "color/violet/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-900": {
    "value": "#4C1D95",
    "figmaName": "color/violet/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-950": {
    "value": "#2E1065",
    "figmaName": "color/violet/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-alpha-10": {
    "value": "rgb(139 92 246 / 0.1)",
    "figmaName": "color/violet/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-violet-alpha-18": {
    "value": "rgb(139 92 246 / 0.18)",
    "figmaName": "color/violet/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-25": {
    "value": "#FEF8FB",
    "figmaName": "color/pink/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-50": {
    "value": "#FDF2F8",
    "figmaName": "color/pink/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-100": {
    "value": "#FCE7F3",
    "figmaName": "color/pink/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-200": {
    "value": "#FBCFE8",
    "figmaName": "color/pink/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-300": {
    "value": "#F9A8D4",
    "figmaName": "color/pink/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-400": {
    "value": "#F472B6",
    "figmaName": "color/pink/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-500": {
    "value": "#EC4899",
    "figmaName": "color/pink/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-600": {
    "value": "#DB2777",
    "figmaName": "color/pink/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-700": {
    "value": "#BE185D",
    "figmaName": "color/pink/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-800": {
    "value": "#9D174D",
    "figmaName": "color/pink/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-900": {
    "value": "#831843",
    "figmaName": "color/pink/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-950": {
    "value": "#500724",
    "figmaName": "color/pink/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-alpha-10": {
    "value": "rgb(236 72 153 / 0.1)",
    "figmaName": "color/pink/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-pink-alpha-18": {
    "value": "rgb(236 72 153 / 0.18)",
    "figmaName": "color/pink/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-25": {
    "value": "#F6F8FF",
    "figmaName": "color/indigo/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-50": {
    "value": "#EEF2FF",
    "figmaName": "color/indigo/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-100": {
    "value": "#E0E7FF",
    "figmaName": "color/indigo/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-200": {
    "value": "#C7D2FE",
    "figmaName": "color/indigo/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-300": {
    "value": "#A5B4FC",
    "figmaName": "color/indigo/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-400": {
    "value": "#818CF8",
    "figmaName": "color/indigo/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-500": {
    "value": "#6366F1",
    "figmaName": "color/indigo/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-600": {
    "value": "#4F46E5",
    "figmaName": "color/indigo/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-700": {
    "value": "#4338CA",
    "figmaName": "color/indigo/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-800": {
    "value": "#3730A3",
    "figmaName": "color/indigo/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-900": {
    "value": "#312E81",
    "figmaName": "color/indigo/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-950": {
    "value": "#1E1B4B",
    "figmaName": "color/indigo/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-alpha-10": {
    "value": "rgb(99 102 241 / 0.1)",
    "figmaName": "color/indigo/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-indigo-alpha-18": {
    "value": "rgb(99 102 241 / 0.18)",
    "figmaName": "color/indigo/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-25": {
    "value": "#FBFEF3",
    "figmaName": "color/lime/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-50": {
    "value": "#F7FEE7",
    "figmaName": "color/lime/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-100": {
    "value": "#ECFCCB",
    "figmaName": "color/lime/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-200": {
    "value": "#D9F99D",
    "figmaName": "color/lime/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-300": {
    "value": "#BEF264",
    "figmaName": "color/lime/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-400": {
    "value": "#A3E635",
    "figmaName": "color/lime/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-500": {
    "value": "#84CC16",
    "figmaName": "color/lime/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-600": {
    "value": "#65A30D",
    "figmaName": "color/lime/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-700": {
    "value": "#4D7C0F",
    "figmaName": "color/lime/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-800": {
    "value": "#3F6212",
    "figmaName": "color/lime/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-900": {
    "value": "#365314",
    "figmaName": "color/lime/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-950": {
    "value": "#1A2E05",
    "figmaName": "color/lime/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-alpha-10": {
    "value": "rgb(132 204 22 / 0.1)",
    "figmaName": "color/lime/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-lime-alpha-18": {
    "value": "rgb(132 204 22 / 0.18)",
    "figmaName": "color/lime/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-25": {
    "value": "#FBFCFE",
    "figmaName": "color/hig/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-50": {
    "value": "#F6F8FC",
    "figmaName": "color/hig/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-100": {
    "value": "#F0F3FA",
    "figmaName": "color/hig/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-200": {
    "value": "#E8EDF7",
    "figmaName": "color/hig/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-300": {
    "value": "#D9E1F2",
    "figmaName": "color/hig/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-400": {
    "value": "#B7C5E3",
    "figmaName": "color/hig/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-500": {
    "value": "#8CA0CD",
    "figmaName": "color/hig/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-600": {
    "value": "#647CB4",
    "figmaName": "color/hig/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-700": {
    "value": "#465F99",
    "figmaName": "color/hig/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-800": {
    "value": "#2F467A",
    "figmaName": "color/hig/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-900": {
    "value": "#25375F",
    "figmaName": "color/hig/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-950": {
    "value": "#101F41",
    "figmaName": "color/hig/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-alpha-10": {
    "value": "rgb(140 160 205 / 0.1)",
    "figmaName": "color/hig/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-hig-alpha-18": {
    "value": "rgb(140 160 205 / 0.18)",
    "figmaName": "color/hig/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-25": {
    "value": "#FFFDF5",
    "figmaName": "color/amber/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-50": {
    "value": "#FFFBEB",
    "figmaName": "color/amber/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-100": {
    "value": "#FEF3C7",
    "figmaName": "color/amber/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-200": {
    "value": "#FDE68A",
    "figmaName": "color/amber/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-300": {
    "value": "#FCD34D",
    "figmaName": "color/amber/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-400": {
    "value": "#FBBF24",
    "figmaName": "color/amber/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-500": {
    "value": "#F59E0B",
    "figmaName": "color/amber/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-600": {
    "value": "#D97706",
    "figmaName": "color/amber/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-700": {
    "value": "#B45309",
    "figmaName": "color/amber/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-800": {
    "value": "#92400E",
    "figmaName": "color/amber/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-900": {
    "value": "#78350F",
    "figmaName": "color/amber/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-950": {
    "value": "#451A03",
    "figmaName": "color/amber/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-alpha-10": {
    "value": "rgb(245 158 11 / 0.1)",
    "figmaName": "color/amber/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-amber-alpha-18": {
    "value": "rgb(245 158 11 / 0.18)",
    "figmaName": "color/amber/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-25": {
    "value": "#F8FCFF",
    "figmaName": "color/sky/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-50": {
    "value": "#F0F9FF",
    "figmaName": "color/sky/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-100": {
    "value": "#EBF7FF",
    "figmaName": "color/sky/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-200": {
    "value": "#E0F3FF",
    "figmaName": "color/sky/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-300": {
    "value": "#C9E8FD",
    "figmaName": "color/sky/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-400": {
    "value": "#81D6FD",
    "figmaName": "color/sky/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-500": {
    "value": "#3DC1FA",
    "figmaName": "color/sky/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-600": {
    "value": "#0BA7EF",
    "figmaName": "color/sky/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-700": {
    "value": "#0081C2",
    "figmaName": "color/sky/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-800": {
    "value": "#065B89",
    "figmaName": "color/sky/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-900": {
    "value": "#0B4D74",
    "figmaName": "color/sky/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-950": {
    "value": "#062F46",
    "figmaName": "color/sky/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-alpha-10": {
    "value": "rgb(14 165 233 / 0.1)",
    "figmaName": "color/sky/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-sky-alpha-18": {
    "value": "rgb(14 165 233 / 0.18)",
    "figmaName": "color/sky/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-25": {
    "value": "#FEFAFF",
    "figmaName": "color/fuchsia/25",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-50": {
    "value": "#FDF4FF",
    "figmaName": "color/fuchsia/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-100": {
    "value": "#FAE8FF",
    "figmaName": "color/fuchsia/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-200": {
    "value": "#F5D0FE",
    "figmaName": "color/fuchsia/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-300": {
    "value": "#F0ABFC",
    "figmaName": "color/fuchsia/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-400": {
    "value": "#E879F9",
    "figmaName": "color/fuchsia/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-500": {
    "value": "#D946EF",
    "figmaName": "color/fuchsia/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-600": {
    "value": "#C026D3",
    "figmaName": "color/fuchsia/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-700": {
    "value": "#A21CAF",
    "figmaName": "color/fuchsia/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-800": {
    "value": "#86198F",
    "figmaName": "color/fuchsia/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-900": {
    "value": "#701A75",
    "figmaName": "color/fuchsia/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-950": {
    "value": "#4A044E",
    "figmaName": "color/fuchsia/950",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-alpha-10": {
    "value": "rgb(217 70 239 / 0.1)",
    "figmaName": "color/fuchsia/alpha/10",
    "alias": null,
    "type": "color"
  },
  "--hds-color-fuchsia-alpha-18": {
    "value": "rgb(217 70 239 / 0.18)",
    "figmaName": "color/fuchsia/alpha/18",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-50": {
    "value": "#F8FAFC",
    "figmaName": "color/Slate/50",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-100": {
    "value": "#F1F5F9",
    "figmaName": "color/Slate/100",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-150": {
    "value": "#EDF1F6",
    "figmaName": "color/Slate/150",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-200": {
    "value": "#E2E8F0",
    "figmaName": "color/Slate/200",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-300": {
    "value": "#CBD5E1",
    "figmaName": "color/Slate/300",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-400": {
    "value": "#94A3B8",
    "figmaName": "color/Slate/400",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-500": {
    "value": "#64758B",
    "figmaName": "color/Slate/500",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-600": {
    "value": "#475569",
    "figmaName": "color/Slate/600",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-700": {
    "value": "#334155",
    "figmaName": "color/Slate/700",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-800": {
    "value": "#1E293B",
    "figmaName": "color/Slate/800",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-900": {
    "value": "#0F172A",
    "figmaName": "color/Slate/900",
    "alias": null,
    "type": "color"
  },
  "--hds-color-slate-950": {
    "value": "#020617",
    "figmaName": "color/Slate/950",
    "alias": null,
    "type": "color"
  },
  "--hds-scale-0": {
    "value": "0px",
    "figmaName": "scale/0",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-1": {
    "value": "4px",
    "figmaName": "scale/1",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-2": {
    "value": "8px",
    "figmaName": "scale/2",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-3": {
    "value": "12px",
    "figmaName": "scale/3",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-4": {
    "value": "16px",
    "figmaName": "scale/4",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-5": {
    "value": "20px",
    "figmaName": "scale/5",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-6": {
    "value": "24px",
    "figmaName": "scale/6",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-7": {
    "value": "28px",
    "figmaName": "scale/7",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-8": {
    "value": "32px",
    "figmaName": "scale/8",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-9": {
    "value": "36px",
    "figmaName": "scale/9",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-10": {
    "value": "40px",
    "figmaName": "scale/10",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-12": {
    "value": "48px",
    "figmaName": "scale/12",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-14": {
    "value": "56px",
    "figmaName": "scale/14",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-16": {
    "value": "64px",
    "figmaName": "scale/16",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-20": {
    "value": "80px",
    "figmaName": "scale/20",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-24": {
    "value": "96px",
    "figmaName": "scale/24",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-30": {
    "value": "120px",
    "figmaName": "scale/30",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-32": {
    "value": "128px",
    "figmaName": "scale/32",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-36": {
    "value": "144px",
    "figmaName": "scale/36",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-40": {
    "value": "160px",
    "figmaName": "scale/40",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-48": {
    "value": "192px",
    "figmaName": "scale/48",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-64": {
    "value": "256px",
    "figmaName": "scale/64",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-80": {
    "value": "320px",
    "figmaName": "scale/80",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-96": {
    "value": "384px",
    "figmaName": "scale/96",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-0_5": {
    "value": "2px",
    "figmaName": "scale/0_5",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-1_5": {
    "value": "6px",
    "figmaName": "scale/1_5",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-2_5": {
    "value": "10px",
    "figmaName": "scale/2_5",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-3_5": {
    "value": "14px",
    "figmaName": "scale/3_5",
    "alias": null,
    "type": "number"
  },
  "--hds-scale-full": {
    "value": "9999px",
    "figmaName": "scale/full",
    "alias": null,
    "type": "number"
  },
  "--hds-font-weight-regular": {
    "value": "400",
    "figmaName": "font-weight/regular",
    "alias": null,
    "type": "number"
  },
  "--hds-font-weight-medium": {
    "value": "500",
    "figmaName": "font-weight/medium",
    "alias": null,
    "type": "number"
  },
  "--hds-font-weight-semibold": {
    "value": "600",
    "figmaName": "font-weight/semibold",
    "alias": null,
    "type": "number"
  },
  "--hds-font-weight-bold": {
    "value": "700",
    "figmaName": "font-weight/bold",
    "alias": null,
    "type": "number"
  },
  "--hds-font-family-sans": {
    "value": "\"Hanken Grotesk\"",
    "figmaName": "font-family/sans",
    "alias": null,
    "type": "string"
  },
  "--hds-font-family-mono": {
    "value": "\"JetBrains Mono\"",
    "figmaName": "font-family/mono",
    "alias": null,
    "type": "string"
  },
  "--hds-font-size-12": {
    "value": "12px",
    "figmaName": "font-size/12",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-13": {
    "value": "13px",
    "figmaName": "font-size/13",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-14": {
    "value": "14px",
    "figmaName": "font-size/14",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-16": {
    "value": "16px",
    "figmaName": "font-size/16",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-18": {
    "value": "18px",
    "figmaName": "font-size/18",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-20": {
    "value": "20px",
    "figmaName": "font-size/20",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-24": {
    "value": "24px",
    "figmaName": "font-size/24",
    "alias": null,
    "type": "number"
  },
  "--hds-font-size-28": {
    "value": "28px",
    "figmaName": "font-size/28",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-14": {
    "value": "14px",
    "figmaName": "line-height/14",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-18": {
    "value": "18px",
    "figmaName": "line-height/18",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-19": {
    "value": "19px",
    "figmaName": "line-height/19",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-20": {
    "value": "20px",
    "figmaName": "line-height/20",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-22": {
    "value": "22px",
    "figmaName": "line-height/22",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-24": {
    "value": "24px",
    "figmaName": "line-height/24",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-28": {
    "value": "28px",
    "figmaName": "line-height/28",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-32": {
    "value": "32px",
    "figmaName": "line-height/32",
    "alias": null,
    "type": "number"
  },
  "--hds-line-height-36": {
    "value": "36px",
    "figmaName": "line-height/36",
    "alias": null,
    "type": "number"
  },
  "--hds-letter-spacing-normal": {
    "value": "0em",
    "figmaName": "letter-spacing/normal",
    "alias": null,
    "type": "number"
  },
  "--hds-letter-spacing-wide": {
    "value": "0.08em",
    "figmaName": "letter-spacing/wide",
    "alias": null,
    "type": "number"
  }
} as TokenMap,
}
/** Spacing, radius, border-width and opacity scales. */
export const numeric = {
  "--hds-spacing-0": {
    "value": "0px",
    "figmaName": "spacing/0",
    "alias": "scale/0",
    "type": "number"
  },
  "--hds-spacing-1": {
    "value": "4px",
    "figmaName": "spacing/1",
    "alias": "scale/1",
    "type": "number"
  },
  "--hds-spacing-2": {
    "value": "8px",
    "figmaName": "spacing/2",
    "alias": "scale/2",
    "type": "number"
  },
  "--hds-spacing-3": {
    "value": "12px",
    "figmaName": "spacing/3",
    "alias": "scale/3",
    "type": "number"
  },
  "--hds-spacing-4": {
    "value": "16px",
    "figmaName": "spacing/4",
    "alias": "scale/4",
    "type": "number"
  },
  "--hds-spacing-5": {
    "value": "20px",
    "figmaName": "spacing/5",
    "alias": "scale/5",
    "type": "number"
  },
  "--hds-spacing-6": {
    "value": "24px",
    "figmaName": "spacing/6",
    "alias": "scale/6",
    "type": "number"
  },
  "--hds-spacing-7": {
    "value": "28px",
    "figmaName": "spacing/7",
    "alias": "scale/7",
    "type": "number"
  },
  "--hds-spacing-8": {
    "value": "32px",
    "figmaName": "spacing/8",
    "alias": "scale/8",
    "type": "number"
  },
  "--hds-spacing-9": {
    "value": "36px",
    "figmaName": "spacing/9",
    "alias": "scale/9",
    "type": "number"
  },
  "--hds-spacing-10": {
    "value": "40px",
    "figmaName": "spacing/10",
    "alias": "scale/10",
    "type": "number"
  },
  "--hds-spacing-12": {
    "value": "48px",
    "figmaName": "spacing/12",
    "alias": "scale/12",
    "type": "number"
  },
  "--hds-spacing-14": {
    "value": "56px",
    "figmaName": "spacing/14",
    "alias": "scale/14",
    "type": "number"
  },
  "--hds-spacing-16": {
    "value": "64px",
    "figmaName": "spacing/16",
    "alias": "scale/16",
    "type": "number"
  },
  "--hds-spacing-20": {
    "value": "80px",
    "figmaName": "spacing/20",
    "alias": "scale/20",
    "type": "number"
  },
  "--hds-spacing-24": {
    "value": "96px",
    "figmaName": "spacing/24",
    "alias": "scale/24",
    "type": "number"
  },
  "--hds-spacing-30": {
    "value": "120px",
    "figmaName": "spacing/30",
    "alias": "scale/30",
    "type": "number"
  },
  "--hds-spacing-32": {
    "value": "128px",
    "figmaName": "spacing/32",
    "alias": "scale/32",
    "type": "number"
  },
  "--hds-spacing-36": {
    "value": "144px",
    "figmaName": "spacing/36",
    "alias": "scale/36",
    "type": "number"
  },
  "--hds-spacing-40": {
    "value": "160px",
    "figmaName": "spacing/40",
    "alias": "scale/40",
    "type": "number"
  },
  "--hds-spacing-48": {
    "value": "192px",
    "figmaName": "spacing/48",
    "alias": "scale/48",
    "type": "number"
  },
  "--hds-spacing-64": {
    "value": "256px",
    "figmaName": "spacing/64",
    "alias": "scale/64",
    "type": "number"
  },
  "--hds-spacing-80": {
    "value": "320px",
    "figmaName": "spacing/80",
    "alias": "scale/80",
    "type": "number"
  },
  "--hds-spacing-96": {
    "value": "384px",
    "figmaName": "spacing/96",
    "alias": "scale/96",
    "type": "number"
  },
  "--hds-spacing-0_5": {
    "value": "2px",
    "figmaName": "spacing/0_5",
    "alias": "scale/0_5",
    "type": "number"
  },
  "--hds-spacing-1_5": {
    "value": "6px",
    "figmaName": "spacing/1_5",
    "alias": "scale/1_5",
    "type": "number"
  },
  "--hds-spacing-2_5": {
    "value": "10px",
    "figmaName": "spacing/2_5",
    "alias": "scale/2_5",
    "type": "number"
  },
  "--hds-radius-0": {
    "value": "0px",
    "figmaName": "radius/0",
    "alias": "scale/0",
    "type": "number"
  },
  "--hds-radius-2": {
    "value": "2px",
    "figmaName": "radius/2",
    "alias": "scale/0_5",
    "type": "number"
  },
  "--hds-radius-4": {
    "value": "4px",
    "figmaName": "radius/4",
    "alias": "scale/1",
    "type": "number"
  },
  "--hds-radius-6": {
    "value": "6px",
    "figmaName": "radius/6",
    "alias": "scale/1_5",
    "type": "number"
  },
  "--hds-radius-8": {
    "value": "8px",
    "figmaName": "radius/8",
    "alias": "scale/2",
    "type": "number"
  },
  "--hds-radius-10": {
    "value": "10px",
    "figmaName": "radius/10",
    "alias": "scale/2_5",
    "type": "number"
  },
  "--hds-radius-12": {
    "value": "12px",
    "figmaName": "radius/12",
    "alias": "scale/3",
    "type": "number"
  },
  "--hds-radius-14": {
    "value": "14px",
    "figmaName": "radius/14",
    "alias": "scale/3_5",
    "type": "number"
  },
  "--hds-radius-16": {
    "value": "16px",
    "figmaName": "radius/16",
    "alias": "scale/4",
    "type": "number"
  },
  "--hds-radius-20": {
    "value": "20px",
    "figmaName": "radius/20",
    "alias": "scale/5",
    "type": "number"
  },
  "--hds-radius-24": {
    "value": "24px",
    "figmaName": "radius/24",
    "alias": "scale/6",
    "type": "number"
  },
  "--hds-radius-28": {
    "value": "28px",
    "figmaName": "radius/28",
    "alias": "scale/7",
    "type": "number"
  },
  "--hds-radius-32": {
    "value": "32px",
    "figmaName": "radius/32",
    "alias": "scale/8",
    "type": "number"
  },
  "--hds-radius-36": {
    "value": "36px",
    "figmaName": "radius/36",
    "alias": "scale/9",
    "type": "number"
  },
  "--hds-radius-40": {
    "value": "40px",
    "figmaName": "radius/40",
    "alias": "scale/10",
    "type": "number"
  },
  "--hds-radius-48": {
    "value": "48px",
    "figmaName": "radius/48",
    "alias": "scale/12",
    "type": "number"
  },
  "--hds-radius-64": {
    "value": "64px",
    "figmaName": "radius/64",
    "alias": "scale/16",
    "type": "number"
  },
  "--hds-radius-80": {
    "value": "80px",
    "figmaName": "radius/80",
    "alias": "scale/20",
    "type": "number"
  },
  "--hds-radius-96": {
    "value": "96px",
    "figmaName": "radius/96",
    "alias": "scale/24",
    "type": "number"
  },
  "--hds-radius-120": {
    "value": "120px",
    "figmaName": "radius/120",
    "alias": "scale/30",
    "type": "number"
  },
  "--hds-radius-128": {
    "value": "128px",
    "figmaName": "radius/128",
    "alias": "scale/32",
    "type": "number"
  },
  "--hds-radius-144": {
    "value": "144px",
    "figmaName": "radius/144",
    "alias": "scale/36",
    "type": "number"
  },
  "--hds-radius-full": {
    "value": "9999px",
    "figmaName": "radius/full",
    "alias": "scale/full",
    "type": "number"
  },
  "--hds-border-width-0": {
    "value": "0px",
    "figmaName": "border-width/0",
    "alias": null,
    "type": "number"
  },
  "--hds-border-width-14": {
    "value": "1px",
    "figmaName": "border-width/14",
    "alias": null,
    "type": "number"
  },
  "--hds-border-width-18": {
    "value": "1.33px",
    "figmaName": "border-width/18",
    "alias": null,
    "type": "number"
  },
  "--hds-border-width-24": {
    "value": "1.5px",
    "figmaName": "border-width/24",
    "alias": null,
    "type": "number"
  },
  "--hds-border-width-32": {
    "value": "1.7px",
    "figmaName": "border-width/32",
    "alias": null,
    "type": "number"
  },
  "--hds-border-width-36": {
    "value": "2px",
    "figmaName": "border-width/36",
    "alias": null,
    "type": "number"
  },
  "--hds-border-width-40": {
    "value": "2.25px",
    "figmaName": "border-width/40",
    "alias": null,
    "type": "number"
  },
  "--hds-border-width-48": {
    "value": "2.5px",
    "figmaName": "border-width/48",
    "alias": null,
    "type": "number"
  },
  "--hds-opacity-0": {
    "value": "0",
    "figmaName": "opacity/0",
    "alias": null,
    "type": "number"
  },
  "--hds-opacity-10": {
    "value": "0.1",
    "figmaName": "opacity/10",
    "alias": null,
    "type": "number"
  },
  "--hds-opacity-20": {
    "value": "0.2",
    "figmaName": "opacity/20",
    "alias": null,
    "type": "number"
  },
  "--hds-opacity-40": {
    "value": "0.4",
    "figmaName": "opacity/40",
    "alias": null,
    "type": "number"
  },
  "--hds-opacity-80": {
    "value": "0.8",
    "figmaName": "opacity/80",
    "alias": null,
    "type": "number"
  },
  "--hds-opacity-100": {
    "value": "1",
    "figmaName": "opacity/100",
    "alias": null,
    "type": "number"
  }
} as TokenMap
/** Semantic colors per theme/mode. Values are the literal resolved colors for that mode. */
export const semantic = {
  light: {
  "--hds-text-inverse": {
    "value": "#F8FAFC",
    "figmaName": "text/inverse",
    "alias": "color/gray/25",
    "type": "color"
  },
  "--hds-text-disabled": {
    "value": "#94A3B8",
    "figmaName": "text/disabled",
    "alias": "color/gray/400",
    "type": "color"
  },
  "--hds-text-neutral-white": {
    "value": "#FFFFFF",
    "figmaName": "text/neutral/White",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-neutral-subtle": {
    "value": "#94A3B8",
    "figmaName": "text/neutral/subtle",
    "alias": "color/gray/400",
    "type": "color"
  },
  "--hds-text-neutral-soft": {
    "value": "#64758B",
    "figmaName": "text/neutral/soft",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-text-neutral-default": {
    "value": "#334155",
    "figmaName": "text/neutral/default",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-text-neutral-strong": {
    "value": "#0F172A",
    "figmaName": "text/neutral/strong",
    "alias": "color/gray/900",
    "type": "color"
  },
  "--hds-text-neutral-intense": {
    "value": "#020617",
    "figmaName": "text/neutral/intense",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-text-brand-subtle": {
    "value": "#FFDB6E",
    "figmaName": "text/brand/subtle",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-text-brand-soft": {
    "value": "#F0B82E",
    "figmaName": "text/brand/soft",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-text-brand-default": {
    "value": "#C8941A",
    "figmaName": "text/brand/default",
    "alias": "color/yellow/600",
    "type": "color"
  },
  "--hds-text-brand-strong": {
    "value": "#9A7012",
    "figmaName": "text/brand/strong",
    "alias": "color/yellow/700",
    "type": "color"
  },
  "--hds-text-brand-intense": {
    "value": "#6E4F0C",
    "figmaName": "text/brand/intense",
    "alias": "color/yellow/800",
    "type": "color"
  },
  "--hds-text-royal-subtle": {
    "value": "#8CB5F8",
    "figmaName": "text/royal/subtle",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-text-royal-soft": {
    "value": "#246FEA",
    "figmaName": "text/royal/soft",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-text-royal-default": {
    "value": "#1956C8",
    "figmaName": "text/royal/default",
    "alias": "color/royal/600",
    "type": "color"
  },
  "--hds-text-royal-strong": {
    "value": "#19449A",
    "figmaName": "text/royal/strong",
    "alias": "color/royal/700",
    "type": "color"
  },
  "--hds-text-royal-intense": {
    "value": "#17316D",
    "figmaName": "text/royal/intense",
    "alias": "color/royal/800",
    "type": "color"
  },
  "--hds-text-success-subtle": {
    "value": "#22C55E",
    "figmaName": "text/success/subtle",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-text-success-soft": {
    "value": "#16A34A",
    "figmaName": "text/success/soft",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-text-success-default": {
    "value": "#15803D",
    "figmaName": "text/success/default",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-text-success-strong": {
    "value": "#166534",
    "figmaName": "text/success/strong",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-text-success-intense": {
    "value": "#14532D",
    "figmaName": "text/success/intense",
    "alias": "color/green/900",
    "type": "color"
  },
  "--hds-text-warning-subtle": {
    "value": "#F97316",
    "figmaName": "text/warning/subtle",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-text-warning-soft": {
    "value": "#EA580C",
    "figmaName": "text/warning/soft",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-text-warning-default": {
    "value": "#C2410C",
    "figmaName": "text/warning/default",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-text-warning-strong": {
    "value": "#9A3412",
    "figmaName": "text/warning/strong",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-text-warning-intense": {
    "value": "#7C2D12",
    "figmaName": "text/warning/intense",
    "alias": "color/orange/900",
    "type": "color"
  },
  "--hds-text-error-subtle": {
    "value": "#EF4444",
    "figmaName": "text/error/subtle",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-text-error-soft": {
    "value": "#DC2626",
    "figmaName": "text/error/soft",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-text-error-default": {
    "value": "#B91C1C",
    "figmaName": "text/error/default",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-text-error-strong": {
    "value": "#991B1B",
    "figmaName": "text/error/strong",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-text-error-intense": {
    "value": "#7F1D1D",
    "figmaName": "text/error/intense",
    "alias": "color/red/900",
    "type": "color"
  },
  "--hds-text-info-subtle": {
    "value": "#3B82F6",
    "figmaName": "text/info/subtle",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-text-info-soft": {
    "value": "#2563EB",
    "figmaName": "text/info/soft",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-text-info-default": {
    "value": "#1D4ED8",
    "figmaName": "text/info/default",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-text-info-strong": {
    "value": "#1E40AF",
    "figmaName": "text/info/strong",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-text-info-intense": {
    "value": "#1E3A8A",
    "figmaName": "text/info/intense",
    "alias": "color/blue/900",
    "type": "color"
  },
  "--hds-text-accents-teal-subtle": {
    "value": "#14B8A6",
    "figmaName": "text/accents/teal/subtle",
    "alias": "color/teal/500",
    "type": "color"
  },
  "--hds-text-accents-teal-soft": {
    "value": "#0D9488",
    "figmaName": "text/accents/teal/soft",
    "alias": "color/teal/600",
    "type": "color"
  },
  "--hds-text-accents-teal-default": {
    "value": "#0F766E",
    "figmaName": "text/accents/teal/default",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-text-accents-teal-strong": {
    "value": "#0F766E",
    "figmaName": "text/accents/teal/strong",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-text-accents-teal-intense": {
    "value": "#115E59",
    "figmaName": "text/accents/teal/intense",
    "alias": "color/teal/800",
    "type": "color"
  },
  "--hds-text-accents-cyan-subtle": {
    "value": "#06B6D4",
    "figmaName": "text/accents/cyan/subtle",
    "alias": "color/cyan/500",
    "type": "color"
  },
  "--hds-text-accents-cyan-soft": {
    "value": "#0891B2",
    "figmaName": "text/accents/cyan/soft",
    "alias": "color/cyan/600",
    "type": "color"
  },
  "--hds-text-accents-cyan-default": {
    "value": "#0E7490",
    "figmaName": "text/accents/cyan/default",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-text-accents-cyan-strong": {
    "value": "#0E7490",
    "figmaName": "text/accents/cyan/strong",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-text-accents-cyan-intense": {
    "value": "#155E75",
    "figmaName": "text/accents/cyan/intense",
    "alias": "color/cyan/800",
    "type": "color"
  },
  "--hds-text-accents-violet-subtle": {
    "value": "#8B5CF6",
    "figmaName": "text/accents/violet/subtle",
    "alias": "color/violet/500",
    "type": "color"
  },
  "--hds-text-accents-violet-soft": {
    "value": "#7C3AED",
    "figmaName": "text/accents/violet/soft",
    "alias": "color/violet/600",
    "type": "color"
  },
  "--hds-text-accents-violet-default": {
    "value": "#6D28D9",
    "figmaName": "text/accents/violet/default",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-text-accents-violet-strong": {
    "value": "#6D28D9",
    "figmaName": "text/accents/violet/strong",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-text-accents-violet-intense": {
    "value": "#5B21B6",
    "figmaName": "text/accents/violet/intense",
    "alias": "color/violet/800",
    "type": "color"
  },
  "--hds-text-accents-pink-subtle": {
    "value": "#EC4899",
    "figmaName": "text/accents/pink/subtle",
    "alias": "color/pink/500",
    "type": "color"
  },
  "--hds-text-accents-pink-soft": {
    "value": "#DB2777",
    "figmaName": "text/accents/pink/soft",
    "alias": "color/pink/600",
    "type": "color"
  },
  "--hds-text-accents-pink-default": {
    "value": "#BE185D",
    "figmaName": "text/accents/pink/default",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-text-accents-pink-strong": {
    "value": "#BE185D",
    "figmaName": "text/accents/pink/strong",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-text-accents-pink-intense": {
    "value": "#9D174D",
    "figmaName": "text/accents/pink/intense",
    "alias": "color/pink/800",
    "type": "color"
  },
  "--hds-text-accents-indigo-subtle": {
    "value": "#6366F1",
    "figmaName": "text/accents/indigo/subtle",
    "alias": "color/indigo/500",
    "type": "color"
  },
  "--hds-text-accents-indigo-soft": {
    "value": "#4F46E5",
    "figmaName": "text/accents/indigo/soft",
    "alias": "color/indigo/600",
    "type": "color"
  },
  "--hds-text-accents-indigo-default": {
    "value": "#4338CA",
    "figmaName": "text/accents/indigo/default",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-text-accents-indigo-strong": {
    "value": "#4338CA",
    "figmaName": "text/accents/indigo/strong",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-text-accents-indigo-intense": {
    "value": "#3730A3",
    "figmaName": "text/accents/indigo/intense",
    "alias": "color/indigo/800",
    "type": "color"
  },
  "--hds-text-accents-lime-subtle": {
    "value": "#65A30D",
    "figmaName": "text/accents/lime/subtle",
    "alias": "color/lime/600",
    "type": "color"
  },
  "--hds-text-accents-lime-soft": {
    "value": "#4D7C0F",
    "figmaName": "text/accents/lime/soft",
    "alias": "color/lime/700",
    "type": "color"
  },
  "--hds-text-accents-lime-default": {
    "value": "#3F6212",
    "figmaName": "text/accents/lime/default",
    "alias": "color/lime/800",
    "type": "color"
  },
  "--hds-text-accents-lime-strong": {
    "value": "#3F6212",
    "figmaName": "text/accents/lime/strong",
    "alias": "color/lime/800",
    "type": "color"
  },
  "--hds-text-accents-lime-intense": {
    "value": "#365314",
    "figmaName": "text/accents/lime/intense",
    "alias": "color/lime/900",
    "type": "color"
  },
  "--hds-text-accents-amber-subtle": {
    "value": "#F59E0B",
    "figmaName": "text/accents/amber/subtle",
    "alias": "color/amber/500",
    "type": "color"
  },
  "--hds-text-accents-amber-soft": {
    "value": "#D97706",
    "figmaName": "text/accents/amber/soft",
    "alias": "color/amber/600",
    "type": "color"
  },
  "--hds-text-accents-amber-default": {
    "value": "#B45309",
    "figmaName": "text/accents/amber/default",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-text-accents-amber-strong": {
    "value": "#B45309",
    "figmaName": "text/accents/amber/strong",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-text-accents-amber-intense": {
    "value": "#92400E",
    "figmaName": "text/accents/amber/intense",
    "alias": "color/amber/800",
    "type": "color"
  },
  "--hds-text-accents-sky-subtle": {
    "value": "#3DC1FA",
    "figmaName": "text/accents/sky/subtle",
    "alias": "color/sky/500",
    "type": "color"
  },
  "--hds-text-accents-sky-soft": {
    "value": "#0BA7EF",
    "figmaName": "text/accents/sky/soft",
    "alias": "color/sky/600",
    "type": "color"
  },
  "--hds-text-accents-sky-default": {
    "value": "#0081C2",
    "figmaName": "text/accents/sky/default",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-text-accents-sky-strong": {
    "value": "#0081C2",
    "figmaName": "text/accents/sky/strong",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-text-accents-sky-intense": {
    "value": "#065B89",
    "figmaName": "text/accents/sky/intense",
    "alias": "color/sky/800",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-subtle": {
    "value": "#D946EF",
    "figmaName": "text/accents/fuchsia/subtle",
    "alias": "color/fuchsia/500",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-soft": {
    "value": "#C026D3",
    "figmaName": "text/accents/fuchsia/soft",
    "alias": "color/fuchsia/600",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-default": {
    "value": "#A21CAF",
    "figmaName": "text/accents/fuchsia/default",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-strong": {
    "value": "#A21CAF",
    "figmaName": "text/accents/fuchsia/strong",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-intense": {
    "value": "#86198F",
    "figmaName": "text/accents/fuchsia/intense",
    "alias": "color/fuchsia/800",
    "type": "color"
  },
  "--hds-text-accents-green-subtle": {
    "value": "#22C55E",
    "figmaName": "text/accents/green/subtle",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-text-accents-green-soft": {
    "value": "#16A34A",
    "figmaName": "text/accents/green/soft",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-text-accents-green-default": {
    "value": "#15803D",
    "figmaName": "text/accents/green/default",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-text-accents-green-intense": {
    "value": "#166534",
    "figmaName": "text/accents/green/intense",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-text-accents-green-strong": {
    "value": "#15803D",
    "figmaName": "text/accents/green/strong",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-text-accents-blue-subtle": {
    "value": "#3B82F6",
    "figmaName": "text/accents/blue/subtle",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-text-accents-blue-soft": {
    "value": "#2563EB",
    "figmaName": "text/accents/blue/soft",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-text-accents-blue-default": {
    "value": "#1D4ED8",
    "figmaName": "text/accents/blue/default",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-text-accents-blue-intense": {
    "value": "#1E40AF",
    "figmaName": "text/accents/blue/intense",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-text-accents-blue-strong": {
    "value": "#1D4ED8",
    "figmaName": "text/accents/blue/strong",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-text-accents-orange-subtle": {
    "value": "#F97316",
    "figmaName": "text/accents/orange/subtle",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-text-accents-orange-soft": {
    "value": "#EA580C",
    "figmaName": "text/accents/orange/soft",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-text-accents-orange-default": {
    "value": "#C2410C",
    "figmaName": "text/accents/orange/default",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-text-accents-orange-intense": {
    "value": "#9A3412",
    "figmaName": "text/accents/orange/intense",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-text-accents-orange-strong": {
    "value": "#C2410C",
    "figmaName": "text/accents/orange/strong",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-text-accents-red-subtle": {
    "value": "#EF4444",
    "figmaName": "text/accents/red/subtle",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-text-accents-red-soft": {
    "value": "#DC2626",
    "figmaName": "text/accents/red/soft",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-text-accents-red-default": {
    "value": "#B91C1C",
    "figmaName": "text/accents/red/default",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-text-accents-red-intense": {
    "value": "#991B1B",
    "figmaName": "text/accents/red/intense",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-text-accents-red-strong": {
    "value": "#B91C1C",
    "figmaName": "text/accents/red/strong",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-text-accents-gray-subtle": {
    "value": "#64758B",
    "figmaName": "text/accents/gray/subtle",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-text-accents-gray-soft": {
    "value": "#475569",
    "figmaName": "text/accents/gray/soft",
    "alias": "color/gray/600",
    "type": "color"
  },
  "--hds-text-accents-gray-default": {
    "value": "#334155",
    "figmaName": "text/accents/gray/default",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-text-accents-gray-intense": {
    "value": "#1E293B",
    "figmaName": "text/accents/gray/intense",
    "alias": "color/gray/800",
    "type": "color"
  },
  "--hds-text-accents-gray-strong": {
    "value": "#334155",
    "figmaName": "text/accents/gray/strong",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-text-on-brand": {
    "value": "#020617",
    "figmaName": "text/on/brand",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-text-on-success": {
    "value": "#FFFFFF",
    "figmaName": "text/on/success",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-warning": {
    "value": "#FFFFFF",
    "figmaName": "text/on/warning",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-error": {
    "value": "#FFFFFF",
    "figmaName": "text/on/error",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-info": {
    "value": "#FFFFFF",
    "figmaName": "text/on/info",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-royal": {
    "value": "#FFFFFF",
    "figmaName": "text/on/royal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-teal": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/teal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-cyan": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/cyan",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-violet": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/violet",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-pink": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/pink",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-indigo": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/indigo",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-lime": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/lime",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-amber": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/amber",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-sky": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/sky",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-fuchsia": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/fuchsia",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-green": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/green",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-blue": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/blue",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-orange": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/orange",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-red": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/red",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-gray": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/gray",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-background-disabled": {
    "value": "#F1F5F9",
    "figmaName": "background/disabled",
    "alias": "color/gray/50",
    "type": "color"
  },
  "--hds-background-overlay": {
    "value": "rgb(0 0 0 / 0.55)",
    "figmaName": "background/overlay",
    "alias": "color/black/alpha/55",
    "type": "color"
  },
  "--hds-background-alpha-black-5": {
    "value": "rgb(0 0 0 / 0.05)",
    "figmaName": "background/alpha/black/5",
    "alias": "color/black/alpha/5",
    "type": "color"
  },
  "--hds-background-alpha-black-10": {
    "value": "rgb(0 0 0 / 0.1)",
    "figmaName": "background/alpha/black/10",
    "alias": "color/black/alpha/10",
    "type": "color"
  },
  "--hds-background-static-white": {
    "value": "#FFFFFF",
    "figmaName": "background/static/white",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-background-static-black": {
    "value": "#020617",
    "figmaName": "background/static/black",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-background-neutral-white": {
    "value": "#FFFFFF",
    "figmaName": "background/neutral/white",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-background-neutral-subtle": {
    "value": "#F8FAFC",
    "figmaName": "background/neutral/subtle",
    "alias": "color/gray/25",
    "type": "color"
  },
  "--hds-background-neutral-soft": {
    "value": "#F1F5F9",
    "figmaName": "background/neutral/soft",
    "alias": "color/gray/50",
    "type": "color"
  },
  "--hds-background-neutral-default": {
    "value": "#EDF1F6",
    "figmaName": "background/neutral/default",
    "alias": "color/gray/100",
    "type": "color"
  },
  "--hds-background-neutral-strong": {
    "value": "#E2E8F0",
    "figmaName": "background/neutral/strong",
    "alias": "color/gray/200",
    "type": "color"
  },
  "--hds-background-neutral-bold-soft": {
    "value": "#334155",
    "figmaName": "background/neutral-bold/soft",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-background-neutral-bold-default": {
    "value": "#1E293B",
    "figmaName": "background/neutral-bold/default",
    "alias": "color/gray/800",
    "type": "color"
  },
  "--hds-background-neutral-bold-strong": {
    "value": "#0F172A",
    "figmaName": "background/neutral-bold/strong",
    "alias": "color/gray/900",
    "type": "color"
  },
  "--hds-background-neutral-bold-intense": {
    "value": "#020617",
    "figmaName": "background/neutral-bold/intense",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-background-neutral-bold-black": {
    "value": "#000000",
    "figmaName": "background/neutral-bold/black",
    "alias": "color/black/950",
    "type": "color"
  },
  "--hds-background-brand-subtle": {
    "value": "#FFFBEB",
    "figmaName": "background/brand/subtle",
    "alias": "color/yellow/50",
    "type": "color"
  },
  "--hds-background-brand-soft": {
    "value": "#FFF4C7",
    "figmaName": "background/brand/soft",
    "alias": "color/yellow/100",
    "type": "color"
  },
  "--hds-background-brand-default": {
    "value": "#FFCF54",
    "figmaName": "background/brand/default",
    "alias": "color/yellow/400",
    "type": "color"
  },
  "--hds-background-brand-strong": {
    "value": "#F0B82E",
    "figmaName": "background/brand/strong",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-background-brand-intense": {
    "value": "#C8941A",
    "figmaName": "background/brand/intense",
    "alias": "color/yellow/600",
    "type": "color"
  },
  "--hds-background-royal-subtle": {
    "value": "#EBF3FF",
    "figmaName": "background/royal/subtle",
    "alias": "color/royal/50",
    "type": "color"
  },
  "--hds-background-royal-soft": {
    "value": "#D8E7FD",
    "figmaName": "background/royal/soft",
    "alias": "color/royal/100",
    "type": "color"
  },
  "--hds-background-royal-default": {
    "value": "#246FEA",
    "figmaName": "background/royal/default",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-background-royal-strong": {
    "value": "#1956C8",
    "figmaName": "background/royal/strong",
    "alias": "color/royal/600",
    "type": "color"
  },
  "--hds-background-royal-intense": {
    "value": "#19449A",
    "figmaName": "background/royal/intense",
    "alias": "color/royal/700",
    "type": "color"
  },
  "--hds-background-success-subtle": {
    "value": "#F0FDF4",
    "figmaName": "background/success/subtle",
    "alias": "color/green/50",
    "type": "color"
  },
  "--hds-background-success-soft": {
    "value": "#DCFCE7",
    "figmaName": "background/success/soft",
    "alias": "color/green/100",
    "type": "color"
  },
  "--hds-background-success-default": {
    "value": "#22C55E",
    "figmaName": "background/success/default",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-background-success-strong": {
    "value": "#15803D",
    "figmaName": "background/success/strong",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-background-success-intense": {
    "value": "#166534",
    "figmaName": "background/success/intense",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-background-warning-subtle": {
    "value": "#FFF7ED",
    "figmaName": "background/warning/subtle",
    "alias": "color/orange/50",
    "type": "color"
  },
  "--hds-background-warning-soft": {
    "value": "#FFEDD5",
    "figmaName": "background/warning/soft",
    "alias": "color/orange/100",
    "type": "color"
  },
  "--hds-background-warning-default": {
    "value": "#FDBA74",
    "figmaName": "background/warning/default",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-background-warning-strong": {
    "value": "#F97316",
    "figmaName": "background/warning/strong",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-background-warning-intense": {
    "value": "#C2410C",
    "figmaName": "background/warning/intense",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-background-error-subtle": {
    "value": "#FEF2F2",
    "figmaName": "background/error/subtle",
    "alias": "color/red/50",
    "type": "color"
  },
  "--hds-background-error-soft": {
    "value": "#FEE2E2",
    "figmaName": "background/error/soft",
    "alias": "color/red/100",
    "type": "color"
  },
  "--hds-background-error-default": {
    "value": "#DC2626",
    "figmaName": "background/error/default",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-background-error-strong": {
    "value": "#B91C1C",
    "figmaName": "background/error/strong",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-background-error-intense": {
    "value": "#991B1B",
    "figmaName": "background/error/intense",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-background-info-subtle": {
    "value": "#EFF6FF",
    "figmaName": "background/info/subtle",
    "alias": "color/blue/50",
    "type": "color"
  },
  "--hds-background-info-soft": {
    "value": "#DBEAFE",
    "figmaName": "background/info/soft",
    "alias": "color/blue/100",
    "type": "color"
  },
  "--hds-background-info-default": {
    "value": "#2563EB",
    "figmaName": "background/info/default",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-background-info-strong": {
    "value": "#1D4ED8",
    "figmaName": "background/info/strong",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-background-info-intense": {
    "value": "#1E40AF",
    "figmaName": "background/info/intense",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-background-accents-teal-subtle": {
    "value": "#F0FDFA",
    "figmaName": "background/accents/teal/subtle",
    "alias": "color/teal/50",
    "type": "color"
  },
  "--hds-background-accents-teal-soft": {
    "value": "#CCFBF1",
    "figmaName": "background/accents/teal/soft",
    "alias": "color/teal/100",
    "type": "color"
  },
  "--hds-background-accents-teal-default": {
    "value": "#5EEAD4",
    "figmaName": "background/accents/teal/default",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-background-accents-teal-strong": {
    "value": "#0D9488",
    "figmaName": "background/accents/teal/strong",
    "alias": "color/teal/600",
    "type": "color"
  },
  "--hds-background-accents-teal-intense": {
    "value": "#0F766E",
    "figmaName": "background/accents/teal/intense",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-background-accents-cyan-subtle": {
    "value": "#ECFEFF",
    "figmaName": "background/accents/cyan/subtle",
    "alias": "color/cyan/50",
    "type": "color"
  },
  "--hds-background-accents-cyan-soft": {
    "value": "#CFFAFE",
    "figmaName": "background/accents/cyan/soft",
    "alias": "color/cyan/100",
    "type": "color"
  },
  "--hds-background-accents-cyan-default": {
    "value": "#67E8F9",
    "figmaName": "background/accents/cyan/default",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-background-accents-cyan-strong": {
    "value": "#0891B2",
    "figmaName": "background/accents/cyan/strong",
    "alias": "color/cyan/600",
    "type": "color"
  },
  "--hds-background-accents-cyan-intense": {
    "value": "#0E7490",
    "figmaName": "background/accents/cyan/intense",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-background-accents-violet-subtle": {
    "value": "#F5F3FF",
    "figmaName": "background/accents/violet/subtle",
    "alias": "color/violet/50",
    "type": "color"
  },
  "--hds-background-accents-violet-soft": {
    "value": "#EDE9FE",
    "figmaName": "background/accents/violet/soft",
    "alias": "color/violet/100",
    "type": "color"
  },
  "--hds-background-accents-violet-default": {
    "value": "#C4B5FD",
    "figmaName": "background/accents/violet/default",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-background-accents-violet-strong": {
    "value": "#7C3AED",
    "figmaName": "background/accents/violet/strong",
    "alias": "color/violet/600",
    "type": "color"
  },
  "--hds-background-accents-violet-intense": {
    "value": "#6D28D9",
    "figmaName": "background/accents/violet/intense",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-background-accents-pink-subtle": {
    "value": "#FDF2F8",
    "figmaName": "background/accents/pink/subtle",
    "alias": "color/pink/50",
    "type": "color"
  },
  "--hds-background-accents-pink-soft": {
    "value": "#FCE7F3",
    "figmaName": "background/accents/pink/soft",
    "alias": "color/pink/100",
    "type": "color"
  },
  "--hds-background-accents-pink-default": {
    "value": "#F9A8D4",
    "figmaName": "background/accents/pink/default",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-background-accents-pink-strong": {
    "value": "#DB2777",
    "figmaName": "background/accents/pink/strong",
    "alias": "color/pink/600",
    "type": "color"
  },
  "--hds-background-accents-pink-intense": {
    "value": "#BE185D",
    "figmaName": "background/accents/pink/intense",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-background-accents-indigo-subtle": {
    "value": "#EEF2FF",
    "figmaName": "background/accents/indigo/subtle",
    "alias": "color/indigo/50",
    "type": "color"
  },
  "--hds-background-accents-indigo-soft": {
    "value": "#E0E7FF",
    "figmaName": "background/accents/indigo/soft",
    "alias": "color/indigo/100",
    "type": "color"
  },
  "--hds-background-accents-indigo-default": {
    "value": "#A5B4FC",
    "figmaName": "background/accents/indigo/default",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-background-accents-indigo-strong": {
    "value": "#4F46E5",
    "figmaName": "background/accents/indigo/strong",
    "alias": "color/indigo/600",
    "type": "color"
  },
  "--hds-background-accents-indigo-intense": {
    "value": "#4338CA",
    "figmaName": "background/accents/indigo/intense",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-background-accents-lime-subtle": {
    "value": "#F7FEE7",
    "figmaName": "background/accents/lime/subtle",
    "alias": "color/lime/50",
    "type": "color"
  },
  "--hds-background-accents-lime-soft": {
    "value": "#ECFCCB",
    "figmaName": "background/accents/lime/soft",
    "alias": "color/lime/100",
    "type": "color"
  },
  "--hds-background-accents-lime-default": {
    "value": "#BEF264",
    "figmaName": "background/accents/lime/default",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-background-accents-lime-strong": {
    "value": "#65A30D",
    "figmaName": "background/accents/lime/strong",
    "alias": "color/lime/600",
    "type": "color"
  },
  "--hds-background-accents-lime-intense": {
    "value": "#4D7C0F",
    "figmaName": "background/accents/lime/intense",
    "alias": "color/lime/700",
    "type": "color"
  },
  "--hds-background-accents-amber-subtle": {
    "value": "#FFFBEB",
    "figmaName": "background/accents/amber/subtle",
    "alias": "color/amber/50",
    "type": "color"
  },
  "--hds-background-accents-amber-soft": {
    "value": "#FEF3C7",
    "figmaName": "background/accents/amber/soft",
    "alias": "color/amber/100",
    "type": "color"
  },
  "--hds-background-accents-amber-default": {
    "value": "#FCD34D",
    "figmaName": "background/accents/amber/default",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-background-accents-amber-strong": {
    "value": "#D97706",
    "figmaName": "background/accents/amber/strong",
    "alias": "color/amber/600",
    "type": "color"
  },
  "--hds-background-accents-amber-intense": {
    "value": "#B45309",
    "figmaName": "background/accents/amber/intense",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-background-accents-sky-subtle": {
    "value": "#F0F9FF",
    "figmaName": "background/accents/sky/subtle",
    "alias": "color/sky/50",
    "type": "color"
  },
  "--hds-background-accents-sky-soft": {
    "value": "#EBF7FF",
    "figmaName": "background/accents/sky/soft",
    "alias": "color/sky/100",
    "type": "color"
  },
  "--hds-background-accents-sky-default": {
    "value": "#C9E8FD",
    "figmaName": "background/accents/sky/default",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-background-accents-sky-strong": {
    "value": "#0BA7EF",
    "figmaName": "background/accents/sky/strong",
    "alias": "color/sky/600",
    "type": "color"
  },
  "--hds-background-accents-sky-intense": {
    "value": "#0081C2",
    "figmaName": "background/accents/sky/intense",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-subtle": {
    "value": "#FDF4FF",
    "figmaName": "background/accents/fuchsia/subtle",
    "alias": "color/fuchsia/50",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-soft": {
    "value": "#FAE8FF",
    "figmaName": "background/accents/fuchsia/soft",
    "alias": "color/fuchsia/100",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-default": {
    "value": "#F0ABFC",
    "figmaName": "background/accents/fuchsia/default",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-strong": {
    "value": "#C026D3",
    "figmaName": "background/accents/fuchsia/strong",
    "alias": "color/fuchsia/600",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-intense": {
    "value": "#A21CAF",
    "figmaName": "background/accents/fuchsia/intense",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-background-accents-hig-subtle": {
    "value": "#FBFCFE",
    "figmaName": "background/accents/hig/Subtle",
    "alias": "color/hig/25",
    "type": "color"
  },
  "--hds-background-accents-hig-soft": {
    "value": "#F6F8FC",
    "figmaName": "background/accents/hig/Soft",
    "alias": "color/hig/50",
    "type": "color"
  },
  "--hds-background-accents-hig-default": {
    "value": "#F0F3FA",
    "figmaName": "background/accents/hig/Default",
    "alias": "color/hig/100",
    "type": "color"
  },
  "--hds-background-accents-hig-strong": {
    "value": "#E8EDF7",
    "figmaName": "background/accents/hig/Strong",
    "alias": "color/hig/200",
    "type": "color"
  },
  "--hds-background-accents-hig-intense": {
    "value": "#D9E1F2",
    "figmaName": "background/accents/hig/Intense",
    "alias": "color/hig/300",
    "type": "color"
  },
  "--hds-background-accents-green-subtle": {
    "value": "#F0FDF4",
    "figmaName": "background/accents/green/subtle",
    "alias": "color/green/50",
    "type": "color"
  },
  "--hds-background-accents-green-soft": {
    "value": "#DCFCE7",
    "figmaName": "background/accents/green/soft",
    "alias": "color/green/100",
    "type": "color"
  },
  "--hds-background-accents-green-default": {
    "value": "#86EFAC",
    "figmaName": "background/accents/green/default",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-background-accents-green-intense": {
    "value": "#15803D",
    "figmaName": "background/accents/green/intense",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-background-accents-green-strong": {
    "value": "#16A34A",
    "figmaName": "background/accents/green/strong",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-background-accents-blue-subtle": {
    "value": "#EFF6FF",
    "figmaName": "background/accents/blue/subtle",
    "alias": "color/blue/50",
    "type": "color"
  },
  "--hds-background-accents-blue-soft": {
    "value": "#DBEAFE",
    "figmaName": "background/accents/blue/soft",
    "alias": "color/blue/100",
    "type": "color"
  },
  "--hds-background-accents-blue-default": {
    "value": "#93C5FD",
    "figmaName": "background/accents/blue/default",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-background-accents-blue-intense": {
    "value": "#1D4ED8",
    "figmaName": "background/accents/blue/intense",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-background-accents-blue-strong": {
    "value": "#2563EB",
    "figmaName": "background/accents/blue/strong",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-background-accents-orange-subtle": {
    "value": "#FFF7ED",
    "figmaName": "background/accents/orange/subtle",
    "alias": "color/orange/50",
    "type": "color"
  },
  "--hds-background-accents-orange-soft": {
    "value": "#FFEDD5",
    "figmaName": "background/accents/orange/soft",
    "alias": "color/orange/100",
    "type": "color"
  },
  "--hds-background-accents-orange-default": {
    "value": "#FDBA74",
    "figmaName": "background/accents/orange/default",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-background-accents-orange-intense": {
    "value": "#C2410C",
    "figmaName": "background/accents/orange/intense",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-background-accents-orange-strong": {
    "value": "#EA580C",
    "figmaName": "background/accents/orange/strong",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-background-accents-red-subtle": {
    "value": "#FEF2F2",
    "figmaName": "background/accents/red/subtle",
    "alias": "color/red/50",
    "type": "color"
  },
  "--hds-background-accents-red-soft": {
    "value": "#FEE2E2",
    "figmaName": "background/accents/red/soft",
    "alias": "color/red/100",
    "type": "color"
  },
  "--hds-background-accents-red-default": {
    "value": "#FCA5A5",
    "figmaName": "background/accents/red/default",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-background-accents-red-intense": {
    "value": "#B91C1C",
    "figmaName": "background/accents/red/intense",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-background-accents-red-strong": {
    "value": "#DC2626",
    "figmaName": "background/accents/red/strong",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-background-accents-gray-subtle": {
    "value": "#F1F5F9",
    "figmaName": "background/accents/gray/subtle",
    "alias": "color/gray/50",
    "type": "color"
  },
  "--hds-background-accents-gray-soft": {
    "value": "#EDF1F6",
    "figmaName": "background/accents/gray/soft",
    "alias": "color/gray/100",
    "type": "color"
  },
  "--hds-background-accents-gray-default": {
    "value": "#CBD5E1",
    "figmaName": "background/accents/gray/default",
    "alias": "color/gray/300",
    "type": "color"
  },
  "--hds-background-accents-gray-intense": {
    "value": "#334155",
    "figmaName": "background/accents/gray/intense",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-background-accents-gray-strong": {
    "value": "#475569",
    "figmaName": "background/accents/gray/strong",
    "alias": "color/gray/600",
    "type": "color"
  },
  "--hds-foreground-inverse": {
    "value": "#FFFFFF",
    "figmaName": "foreground/inverse",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-disabled": {
    "value": "#94A3B8",
    "figmaName": "foreground/disabled",
    "alias": "color/gray/400",
    "type": "color"
  },
  "--hds-foreground-alpha-30": {
    "value": "rgb(0 0 0 / 0.3)",
    "figmaName": "foreground/alpha/30",
    "alias": "color/black/alpha/30",
    "type": "color"
  },
  "--hds-foreground-alpha-40": {
    "value": "rgb(0 0 0 / 0.4)",
    "figmaName": "foreground/alpha/40",
    "alias": "color/black/alpha/40",
    "type": "color"
  },
  "--hds-foreground-static-white": {
    "value": "#FFFFFF",
    "figmaName": "foreground/static/white",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-static-black": {
    "value": "#000000",
    "figmaName": "foreground/static/black",
    "alias": "color/black/950",
    "type": "color"
  },
  "--hds-foreground-neutral-subtle": {
    "value": "#EDF1F6",
    "figmaName": "foreground/neutral/subtle",
    "alias": "color/gray/100",
    "type": "color"
  },
  "--hds-foreground-neutral-soft": {
    "value": "#E2E8F0",
    "figmaName": "foreground/neutral/soft",
    "alias": "color/gray/200",
    "type": "color"
  },
  "--hds-foreground-neutral-default": {
    "value": "#CBD5E1",
    "figmaName": "foreground/neutral/default",
    "alias": "color/gray/300",
    "type": "color"
  },
  "--hds-foreground-neutral-strong": {
    "value": "#94A3B8",
    "figmaName": "foreground/neutral/strong",
    "alias": "color/gray/400",
    "type": "color"
  },
  "--hds-foreground-neutral-intense": {
    "value": "#64758B",
    "figmaName": "foreground/neutral/intense",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-subtle": {
    "value": "#475569",
    "figmaName": "foreground/neutral-bold/subtle",
    "alias": "color/gray/600",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-soft": {
    "value": "#334155",
    "figmaName": "foreground/neutral-bold/soft",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-default": {
    "value": "#1E293B",
    "figmaName": "foreground/neutral-bold/default",
    "alias": "color/gray/800",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-strong": {
    "value": "#0F172A",
    "figmaName": "foreground/neutral-bold/strong",
    "alias": "color/gray/900",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-intense": {
    "value": "#020617",
    "figmaName": "foreground/neutral-bold/intense",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-foreground-brand-subtle": {
    "value": "#FFDB6E",
    "figmaName": "foreground/brand/subtle",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-foreground-brand-soft": {
    "value": "#F0B82E",
    "figmaName": "foreground/brand/soft",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-foreground-brand-default": {
    "value": "#C8941A",
    "figmaName": "foreground/brand/default",
    "alias": "color/yellow/600",
    "type": "color"
  },
  "--hds-foreground-brand-strong": {
    "value": "#9A7012",
    "figmaName": "foreground/brand/strong",
    "alias": "color/yellow/700",
    "type": "color"
  },
  "--hds-foreground-brand-intense": {
    "value": "#6E4F0C",
    "figmaName": "foreground/brand/intense",
    "alias": "color/yellow/800",
    "type": "color"
  },
  "--hds-foreground-royal-subtle": {
    "value": "#8CB5F8",
    "figmaName": "foreground/royal/subtle",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-foreground-royal-soft": {
    "value": "#246FEA",
    "figmaName": "foreground/royal/soft",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-foreground-royal-default": {
    "value": "#1956C8",
    "figmaName": "foreground/royal/default",
    "alias": "color/royal/600",
    "type": "color"
  },
  "--hds-foreground-royal-strong": {
    "value": "#19449A",
    "figmaName": "foreground/royal/strong",
    "alias": "color/royal/700",
    "type": "color"
  },
  "--hds-foreground-royal-intense": {
    "value": "#17316D",
    "figmaName": "foreground/royal/intense",
    "alias": "color/royal/800",
    "type": "color"
  },
  "--hds-foreground-success-subtle": {
    "value": "#22C55E",
    "figmaName": "foreground/success/subtle",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-foreground-success-soft": {
    "value": "#16A34A",
    "figmaName": "foreground/success/soft",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-foreground-success-default": {
    "value": "#15803D",
    "figmaName": "foreground/success/default",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-foreground-success-strong": {
    "value": "#166534",
    "figmaName": "foreground/success/strong",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-foreground-success-intense": {
    "value": "#14532D",
    "figmaName": "foreground/success/intense",
    "alias": "color/green/900",
    "type": "color"
  },
  "--hds-foreground-warning-subtle": {
    "value": "#F97316",
    "figmaName": "foreground/warning/subtle",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-foreground-warning-soft": {
    "value": "#EA580C",
    "figmaName": "foreground/warning/soft",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-foreground-warning-default": {
    "value": "#C2410C",
    "figmaName": "foreground/warning/default",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-foreground-warning-strong": {
    "value": "#9A3412",
    "figmaName": "foreground/warning/strong",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-foreground-warning-intense": {
    "value": "#7C2D12",
    "figmaName": "foreground/warning/intense",
    "alias": "color/orange/900",
    "type": "color"
  },
  "--hds-foreground-error-subtle": {
    "value": "#EF4444",
    "figmaName": "foreground/error/subtle",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-foreground-error-soft": {
    "value": "#DC2626",
    "figmaName": "foreground/error/soft",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-foreground-error-default": {
    "value": "#B91C1C",
    "figmaName": "foreground/error/default",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-foreground-error-strong": {
    "value": "#991B1B",
    "figmaName": "foreground/error/strong",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-foreground-error-intense": {
    "value": "#991B1B",
    "figmaName": "foreground/error/intense",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-foreground-info-subtle": {
    "value": "#3B82F6",
    "figmaName": "foreground/info/subtle",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-foreground-info-soft": {
    "value": "#2563EB",
    "figmaName": "foreground/info/soft",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-foreground-info-default": {
    "value": "#1D4ED8",
    "figmaName": "foreground/info/default",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-foreground-info-strong": {
    "value": "#1E40AF",
    "figmaName": "foreground/info/strong",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-foreground-info-intense": {
    "value": "#1E3A8A",
    "figmaName": "foreground/info/intense",
    "alias": "color/blue/900",
    "type": "color"
  },
  "--hds-foreground-accents-teal-subtle": {
    "value": "#14B8A6",
    "figmaName": "foreground/accents/teal/subtle",
    "alias": "color/teal/500",
    "type": "color"
  },
  "--hds-foreground-accents-teal-soft": {
    "value": "#0D9488",
    "figmaName": "foreground/accents/teal/soft",
    "alias": "color/teal/600",
    "type": "color"
  },
  "--hds-foreground-accents-teal-default": {
    "value": "#0F766E",
    "figmaName": "foreground/accents/teal/default",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-foreground-accents-teal-strong": {
    "value": "#0F766E",
    "figmaName": "foreground/accents/teal/strong",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-foreground-accents-teal-intense": {
    "value": "#115E59",
    "figmaName": "foreground/accents/teal/intense",
    "alias": "color/teal/800",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-subtle": {
    "value": "#06B6D4",
    "figmaName": "foreground/accents/cyan/subtle",
    "alias": "color/cyan/500",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-soft": {
    "value": "#0891B2",
    "figmaName": "foreground/accents/cyan/soft",
    "alias": "color/cyan/600",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-default": {
    "value": "#0E7490",
    "figmaName": "foreground/accents/cyan/default",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-strong": {
    "value": "#0E7490",
    "figmaName": "foreground/accents/cyan/strong",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-intense": {
    "value": "#155E75",
    "figmaName": "foreground/accents/cyan/intense",
    "alias": "color/cyan/800",
    "type": "color"
  },
  "--hds-foreground-accents-violet-subtle": {
    "value": "#8B5CF6",
    "figmaName": "foreground/accents/violet/subtle",
    "alias": "color/violet/500",
    "type": "color"
  },
  "--hds-foreground-accents-violet-soft": {
    "value": "#7C3AED",
    "figmaName": "foreground/accents/violet/soft",
    "alias": "color/violet/600",
    "type": "color"
  },
  "--hds-foreground-accents-violet-default": {
    "value": "#6D28D9",
    "figmaName": "foreground/accents/violet/default",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-foreground-accents-violet-strong": {
    "value": "#6D28D9",
    "figmaName": "foreground/accents/violet/strong",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-foreground-accents-violet-intense": {
    "value": "#5B21B6",
    "figmaName": "foreground/accents/violet/intense",
    "alias": "color/violet/800",
    "type": "color"
  },
  "--hds-foreground-accents-pink-subtle": {
    "value": "#EC4899",
    "figmaName": "foreground/accents/pink/subtle",
    "alias": "color/pink/500",
    "type": "color"
  },
  "--hds-foreground-accents-pink-soft": {
    "value": "#DB2777",
    "figmaName": "foreground/accents/pink/soft",
    "alias": "color/pink/600",
    "type": "color"
  },
  "--hds-foreground-accents-pink-default": {
    "value": "#BE185D",
    "figmaName": "foreground/accents/pink/default",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-foreground-accents-pink-strong": {
    "value": "#BE185D",
    "figmaName": "foreground/accents/pink/strong",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-foreground-accents-pink-intense": {
    "value": "#9D174D",
    "figmaName": "foreground/accents/pink/intense",
    "alias": "color/pink/800",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-subtle": {
    "value": "#6366F1",
    "figmaName": "foreground/accents/indigo/subtle",
    "alias": "color/indigo/500",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-soft": {
    "value": "#4F46E5",
    "figmaName": "foreground/accents/indigo/soft",
    "alias": "color/indigo/600",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-default": {
    "value": "#4338CA",
    "figmaName": "foreground/accents/indigo/default",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-strong": {
    "value": "#4338CA",
    "figmaName": "foreground/accents/indigo/strong",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-intense": {
    "value": "#3730A3",
    "figmaName": "foreground/accents/indigo/intense",
    "alias": "color/indigo/800",
    "type": "color"
  },
  "--hds-foreground-accents-lime-subtle": {
    "value": "#65A30D",
    "figmaName": "foreground/accents/lime/subtle",
    "alias": "color/lime/600",
    "type": "color"
  },
  "--hds-foreground-accents-lime-soft": {
    "value": "#4D7C0F",
    "figmaName": "foreground/accents/lime/soft",
    "alias": "color/lime/700",
    "type": "color"
  },
  "--hds-foreground-accents-lime-default": {
    "value": "#3F6212",
    "figmaName": "foreground/accents/lime/default",
    "alias": "color/lime/800",
    "type": "color"
  },
  "--hds-foreground-accents-lime-strong": {
    "value": "#3F6212",
    "figmaName": "foreground/accents/lime/strong",
    "alias": "color/lime/800",
    "type": "color"
  },
  "--hds-foreground-accents-lime-intense": {
    "value": "#365314",
    "figmaName": "foreground/accents/lime/intense",
    "alias": "color/lime/900",
    "type": "color"
  },
  "--hds-foreground-accents-green-subtle": {
    "value": "#22C55E",
    "figmaName": "foreground/accents/green/subtle",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-foreground-accents-green-soft": {
    "value": "#16A34A",
    "figmaName": "foreground/accents/green/soft",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-foreground-accents-green-default": {
    "value": "#15803D",
    "figmaName": "foreground/accents/green/default",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-foreground-accents-green-intense": {
    "value": "#166534",
    "figmaName": "foreground/accents/green/intense",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-foreground-accents-green-strong": {
    "value": "#15803D",
    "figmaName": "foreground/accents/green/strong",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-foreground-accents-blue-subtle": {
    "value": "#3B82F6",
    "figmaName": "foreground/accents/blue/subtle",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-foreground-accents-blue-soft": {
    "value": "#2563EB",
    "figmaName": "foreground/accents/blue/soft",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-foreground-accents-blue-default": {
    "value": "#1D4ED8",
    "figmaName": "foreground/accents/blue/default",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-foreground-accents-blue-intense": {
    "value": "#1E40AF",
    "figmaName": "foreground/accents/blue/intense",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-foreground-accents-blue-strong": {
    "value": "#1D4ED8",
    "figmaName": "foreground/accents/blue/strong",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-foreground-accents-orange-subtle": {
    "value": "#F97316",
    "figmaName": "foreground/accents/orange/subtle",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-foreground-accents-orange-soft": {
    "value": "#EA580C",
    "figmaName": "foreground/accents/orange/soft",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-foreground-accents-orange-default": {
    "value": "#C2410C",
    "figmaName": "foreground/accents/orange/default",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-foreground-accents-orange-intense": {
    "value": "#9A3412",
    "figmaName": "foreground/accents/orange/intense",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-foreground-accents-orange-strong": {
    "value": "#C2410C",
    "figmaName": "foreground/accents/orange/strong",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-foreground-accents-red-subtle": {
    "value": "#EF4444",
    "figmaName": "foreground/accents/red/subtle",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-foreground-accents-red-soft": {
    "value": "#DC2626",
    "figmaName": "foreground/accents/red/soft",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-foreground-accents-red-default": {
    "value": "#B91C1C",
    "figmaName": "foreground/accents/red/default",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-foreground-accents-red-intense": {
    "value": "#991B1B",
    "figmaName": "foreground/accents/red/intense",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-foreground-accents-red-strong": {
    "value": "#B91C1C",
    "figmaName": "foreground/accents/red/strong",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-foreground-accents-amber-subtle": {
    "value": "#F59E0B",
    "figmaName": "foreground/accents/amber/subtle",
    "alias": "color/amber/500",
    "type": "color"
  },
  "--hds-foreground-accents-amber-soft": {
    "value": "#D97706",
    "figmaName": "foreground/accents/amber/soft",
    "alias": "color/amber/600",
    "type": "color"
  },
  "--hds-foreground-accents-amber-default": {
    "value": "#B45309",
    "figmaName": "foreground/accents/amber/default",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-foreground-accents-amber-intense": {
    "value": "#92400E",
    "figmaName": "foreground/accents/amber/intense",
    "alias": "color/amber/800",
    "type": "color"
  },
  "--hds-foreground-accents-amber-strong": {
    "value": "#B45309",
    "figmaName": "foreground/accents/amber/strong",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-subtle": {
    "value": "#D946EF",
    "figmaName": "foreground/accents/fuchsia/subtle",
    "alias": "color/fuchsia/500",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-soft": {
    "value": "#C026D3",
    "figmaName": "foreground/accents/fuchsia/soft",
    "alias": "color/fuchsia/600",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-default": {
    "value": "#A21CAF",
    "figmaName": "foreground/accents/fuchsia/default",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-intense": {
    "value": "#86198F",
    "figmaName": "foreground/accents/fuchsia/intense",
    "alias": "color/fuchsia/800",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-strong": {
    "value": "#A21CAF",
    "figmaName": "foreground/accents/fuchsia/strong",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-foreground-accents-sky-subtle": {
    "value": "#3DC1FA",
    "figmaName": "foreground/accents/sky/subtle",
    "alias": "color/sky/500",
    "type": "color"
  },
  "--hds-foreground-accents-sky-soft": {
    "value": "#0BA7EF",
    "figmaName": "foreground/accents/sky/soft",
    "alias": "color/sky/600",
    "type": "color"
  },
  "--hds-foreground-accents-sky-default": {
    "value": "#0081C2",
    "figmaName": "foreground/accents/sky/default",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-foreground-accents-sky-intense": {
    "value": "#065B89",
    "figmaName": "foreground/accents/sky/intense",
    "alias": "color/sky/800",
    "type": "color"
  },
  "--hds-foreground-accents-sky-strong": {
    "value": "#0081C2",
    "figmaName": "foreground/accents/sky/strong",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-foreground-accents-gray-subtle": {
    "value": "#64758B",
    "figmaName": "foreground/accents/gray/subtle",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-foreground-accents-gray-soft": {
    "value": "#475569",
    "figmaName": "foreground/accents/gray/soft",
    "alias": "color/gray/600",
    "type": "color"
  },
  "--hds-foreground-accents-gray-default": {
    "value": "#334155",
    "figmaName": "foreground/accents/gray/default",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-foreground-accents-gray-intense": {
    "value": "#1E293B",
    "figmaName": "foreground/accents/gray/intense",
    "alias": "color/gray/800",
    "type": "color"
  },
  "--hds-foreground-accents-gray-strong": {
    "value": "#334155",
    "figmaName": "foreground/accents/gray/strong",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-foreground-on-brand": {
    "value": "#020617",
    "figmaName": "foreground/on/brand",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-foreground-on-success": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/success",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-warning": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/warning",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-error": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/error",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-info": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/info",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-royal": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/royal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-teal": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/teal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-cyan": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/cyan",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-violet": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/violet",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-pink": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/pink",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-indigo": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/indigo",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-lime": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/lime",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-green": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/green",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-blue": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/blue",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-orange": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/orange",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-red": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/red",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-amber": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/amber",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-fuchsia": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/fuchsia",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-sky": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/sky",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-gray": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/gray",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-border-disabled": {
    "value": "#E2E8F0",
    "figmaName": "border/disabled",
    "alias": "color/gray/200",
    "type": "color"
  },
  "--hds-border-neutral-white": {
    "value": "#FFFFFF",
    "figmaName": "border/neutral/white",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-border-neutral-subtle": {
    "value": "#EDF1F6",
    "figmaName": "border/neutral/subtle",
    "alias": "color/gray/100",
    "type": "color"
  },
  "--hds-border-neutral-soft": {
    "value": "#E2E8F0",
    "figmaName": "border/neutral/soft",
    "alias": "color/gray/200",
    "type": "color"
  },
  "--hds-border-neutral-default": {
    "value": "#CBD5E1",
    "figmaName": "border/neutral/default",
    "alias": "color/gray/300",
    "type": "color"
  },
  "--hds-border-neutral-strong": {
    "value": "#94A3B8",
    "figmaName": "border/neutral/strong",
    "alias": "color/gray/400",
    "type": "color"
  },
  "--hds-border-neutral-intense": {
    "value": "#64758B",
    "figmaName": "border/neutral/intense",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-border-neutral-bold-subtle": {
    "value": "#475569",
    "figmaName": "border/neutral-bold/subtle",
    "alias": "color/gray/600",
    "type": "color"
  },
  "--hds-border-neutral-bold-soft": {
    "value": "#334155",
    "figmaName": "border/neutral-bold/soft",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-border-neutral-bold-default": {
    "value": "#1E293B",
    "figmaName": "border/neutral-bold/default",
    "alias": "color/gray/800",
    "type": "color"
  },
  "--hds-border-neutral-bold-strong": {
    "value": "#0F172A",
    "figmaName": "border/neutral-bold/strong",
    "alias": "color/gray/900",
    "type": "color"
  },
  "--hds-border-neutral-bold-intense": {
    "value": "#020617",
    "figmaName": "border/neutral-bold/intense",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-border-brand-subtle": {
    "value": "#FFE89A",
    "figmaName": "border/brand/subtle",
    "alias": "color/yellow/200",
    "type": "color"
  },
  "--hds-border-brand-soft": {
    "value": "#FFDB6E",
    "figmaName": "border/brand/soft",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-border-brand-default": {
    "value": "#FFCF54",
    "figmaName": "border/brand/default",
    "alias": "color/yellow/400",
    "type": "color"
  },
  "--hds-border-brand-strong": {
    "value": "#F0B82E",
    "figmaName": "border/brand/strong",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-border-brand-intense": {
    "value": "#9A7012",
    "figmaName": "border/brand/intense",
    "alias": "color/yellow/700",
    "type": "color"
  },
  "--hds-border-royal-subtle": {
    "value": "#B6D2FB",
    "figmaName": "border/royal/subtle",
    "alias": "color/royal/200",
    "type": "color"
  },
  "--hds-border-royal-soft": {
    "value": "#8CB5F8",
    "figmaName": "border/royal/soft",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-border-royal-default": {
    "value": "#5994F2",
    "figmaName": "border/royal/default",
    "alias": "color/royal/400",
    "type": "color"
  },
  "--hds-border-royal-strong": {
    "value": "#246FEA",
    "figmaName": "border/royal/strong",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-border-royal-intense": {
    "value": "#1956C8",
    "figmaName": "border/royal/intense",
    "alias": "color/royal/600",
    "type": "color"
  },
  "--hds-border-success-subtle": {
    "value": "#DCFCE7",
    "figmaName": "border/success/subtle",
    "alias": "color/green/100",
    "type": "color"
  },
  "--hds-border-success-soft": {
    "value": "#86EFAC",
    "figmaName": "border/success/soft",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-border-success-default": {
    "value": "#16A34A",
    "figmaName": "border/success/default",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-border-success-strong": {
    "value": "#15803D",
    "figmaName": "border/success/strong",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-border-success-intense": {
    "value": "#166534",
    "figmaName": "border/success/intense",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-border-warning-subtle": {
    "value": "#FFEDD5",
    "figmaName": "border/warning/subtle",
    "alias": "color/orange/100",
    "type": "color"
  },
  "--hds-border-warning-soft": {
    "value": "#FED7AA",
    "figmaName": "border/warning/soft",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-border-warning-default": {
    "value": "#EA580C",
    "figmaName": "border/warning/default",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-border-warning-strong": {
    "value": "#C2410C",
    "figmaName": "border/warning/strong",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-border-warning-intense": {
    "value": "#9A3412",
    "figmaName": "border/warning/intense",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-border-error-subtle": {
    "value": "#FEE2E2",
    "figmaName": "border/error/subtle",
    "alias": "color/red/100",
    "type": "color"
  },
  "--hds-border-error-soft": {
    "value": "#FECACA",
    "figmaName": "border/error/soft",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-border-error-default": {
    "value": "#DC2626",
    "figmaName": "border/error/default",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-border-error-strong": {
    "value": "#B91C1C",
    "figmaName": "border/error/strong",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-border-error-intense": {
    "value": "#991B1B",
    "figmaName": "border/error/intense",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-border-info-subtle": {
    "value": "#DBEAFE",
    "figmaName": "border/info/subtle",
    "alias": "color/blue/100",
    "type": "color"
  },
  "--hds-border-info-soft": {
    "value": "#BFDBFE",
    "figmaName": "border/info/soft",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-border-info-default": {
    "value": "#2563EB",
    "figmaName": "border/info/default",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-border-info-strong": {
    "value": "#1D4ED8",
    "figmaName": "border/info/strong",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-border-info-intense": {
    "value": "#1E40AF",
    "figmaName": "border/info/intense",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-border-accents-teal-subtle": {
    "value": "#CCFBF1",
    "figmaName": "border/accents/teal/subtle",
    "alias": "color/teal/100",
    "type": "color"
  },
  "--hds-border-accents-teal-soft": {
    "value": "#99F6E4",
    "figmaName": "border/accents/teal/soft",
    "alias": "color/teal/200",
    "type": "color"
  },
  "--hds-border-accents-teal-default": {
    "value": "#5EEAD4",
    "figmaName": "border/accents/teal/default",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-border-accents-teal-strong": {
    "value": "#14B8A6",
    "figmaName": "border/accents/teal/strong",
    "alias": "color/teal/500",
    "type": "color"
  },
  "--hds-border-accents-teal-intense": {
    "value": "#0F766E",
    "figmaName": "border/accents/teal/intense",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-border-accents-cyan-subtle": {
    "value": "#CFFAFE",
    "figmaName": "border/accents/cyan/subtle",
    "alias": "color/cyan/100",
    "type": "color"
  },
  "--hds-border-accents-cyan-soft": {
    "value": "#A5F3FC",
    "figmaName": "border/accents/cyan/soft",
    "alias": "color/cyan/200",
    "type": "color"
  },
  "--hds-border-accents-cyan-default": {
    "value": "#67E8F9",
    "figmaName": "border/accents/cyan/default",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-border-accents-cyan-strong": {
    "value": "#06B6D4",
    "figmaName": "border/accents/cyan/strong",
    "alias": "color/cyan/500",
    "type": "color"
  },
  "--hds-border-accents-cyan-intense": {
    "value": "#0E7490",
    "figmaName": "border/accents/cyan/intense",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-border-accents-violet-subtle": {
    "value": "#EDE9FE",
    "figmaName": "border/accents/violet/subtle",
    "alias": "color/violet/100",
    "type": "color"
  },
  "--hds-border-accents-violet-soft": {
    "value": "#DDD6FE",
    "figmaName": "border/accents/violet/soft",
    "alias": "color/violet/200",
    "type": "color"
  },
  "--hds-border-accents-violet-default": {
    "value": "#C4B5FD",
    "figmaName": "border/accents/violet/default",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-border-accents-violet-strong": {
    "value": "#8B5CF6",
    "figmaName": "border/accents/violet/strong",
    "alias": "color/violet/500",
    "type": "color"
  },
  "--hds-border-accents-violet-intense": {
    "value": "#6D28D9",
    "figmaName": "border/accents/violet/intense",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-border-accents-pink-subtle": {
    "value": "#FCE7F3",
    "figmaName": "border/accents/pink/subtle",
    "alias": "color/pink/100",
    "type": "color"
  },
  "--hds-border-accents-pink-soft": {
    "value": "#FBCFE8",
    "figmaName": "border/accents/pink/soft",
    "alias": "color/pink/200",
    "type": "color"
  },
  "--hds-border-accents-pink-default": {
    "value": "#F9A8D4",
    "figmaName": "border/accents/pink/default",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-border-accents-pink-strong": {
    "value": "#EC4899",
    "figmaName": "border/accents/pink/strong",
    "alias": "color/pink/500",
    "type": "color"
  },
  "--hds-border-accents-pink-intense": {
    "value": "#BE185D",
    "figmaName": "border/accents/pink/intense",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-border-accents-indigo-subtle": {
    "value": "#E0E7FF",
    "figmaName": "border/accents/indigo/subtle",
    "alias": "color/indigo/100",
    "type": "color"
  },
  "--hds-border-accents-indigo-soft": {
    "value": "#C7D2FE",
    "figmaName": "border/accents/indigo/soft",
    "alias": "color/indigo/200",
    "type": "color"
  },
  "--hds-border-accents-indigo-default": {
    "value": "#A5B4FC",
    "figmaName": "border/accents/indigo/default",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-border-accents-indigo-strong": {
    "value": "#6366F1",
    "figmaName": "border/accents/indigo/strong",
    "alias": "color/indigo/500",
    "type": "color"
  },
  "--hds-border-accents-indigo-intense": {
    "value": "#4338CA",
    "figmaName": "border/accents/indigo/intense",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-border-accents-lime-subtle": {
    "value": "#ECFCCB",
    "figmaName": "border/accents/lime/subtle",
    "alias": "color/lime/100",
    "type": "color"
  },
  "--hds-border-accents-lime-soft": {
    "value": "#D9F99D",
    "figmaName": "border/accents/lime/soft",
    "alias": "color/lime/200",
    "type": "color"
  },
  "--hds-border-accents-lime-default": {
    "value": "#BEF264",
    "figmaName": "border/accents/lime/default",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-border-accents-lime-strong": {
    "value": "#84CC16",
    "figmaName": "border/accents/lime/strong",
    "alias": "color/lime/500",
    "type": "color"
  },
  "--hds-border-accents-lime-intense": {
    "value": "#4D7C0F",
    "figmaName": "border/accents/lime/intense",
    "alias": "color/lime/700",
    "type": "color"
  },
  "--hds-border-accents-amber-subtle": {
    "value": "#FEF3C7",
    "figmaName": "border/accents/amber/subtle",
    "alias": "color/amber/100",
    "type": "color"
  },
  "--hds-border-accents-amber-soft": {
    "value": "#FDE68A",
    "figmaName": "border/accents/amber/soft",
    "alias": "color/amber/200",
    "type": "color"
  },
  "--hds-border-accents-amber-default": {
    "value": "#FCD34D",
    "figmaName": "border/accents/amber/default",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-border-accents-amber-strong": {
    "value": "#F59E0B",
    "figmaName": "border/accents/amber/strong",
    "alias": "color/amber/500",
    "type": "color"
  },
  "--hds-border-accents-amber-intense": {
    "value": "#B45309",
    "figmaName": "border/accents/amber/intense",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-border-accents-sky-subtle": {
    "value": "#EBF7FF",
    "figmaName": "border/accents/sky/subtle",
    "alias": "color/sky/100",
    "type": "color"
  },
  "--hds-border-accents-sky-soft": {
    "value": "#E0F3FF",
    "figmaName": "border/accents/sky/soft",
    "alias": "color/sky/200",
    "type": "color"
  },
  "--hds-border-accents-sky-default": {
    "value": "#C9E8FD",
    "figmaName": "border/accents/sky/default",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-border-accents-sky-strong": {
    "value": "#3DC1FA",
    "figmaName": "border/accents/sky/strong",
    "alias": "color/sky/500",
    "type": "color"
  },
  "--hds-border-accents-sky-intense": {
    "value": "#0081C2",
    "figmaName": "border/accents/sky/intense",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-subtle": {
    "value": "#FAE8FF",
    "figmaName": "border/accents/fuchsia/subtle",
    "alias": "color/fuchsia/100",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-soft": {
    "value": "#F5D0FE",
    "figmaName": "border/accents/fuchsia/soft",
    "alias": "color/fuchsia/200",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-default": {
    "value": "#F0ABFC",
    "figmaName": "border/accents/fuchsia/default",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-strong": {
    "value": "#D946EF",
    "figmaName": "border/accents/fuchsia/strong",
    "alias": "color/fuchsia/500",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-intense": {
    "value": "#A21CAF",
    "figmaName": "border/accents/fuchsia/intense",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-border-accents-green-subtle": {
    "value": "#DCFCE7",
    "figmaName": "border/accents/green/subtle",
    "alias": "color/green/100",
    "type": "color"
  },
  "--hds-border-accents-green-soft": {
    "value": "#BBF7D0",
    "figmaName": "border/accents/green/soft",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-border-accents-green-default": {
    "value": "#86EFAC",
    "figmaName": "border/accents/green/default",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-border-accents-green-intense": {
    "value": "#15803D",
    "figmaName": "border/accents/green/intense",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-border-accents-green-strong": {
    "value": "#22C55E",
    "figmaName": "border/accents/green/strong",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-border-accents-blue-subtle": {
    "value": "#DBEAFE",
    "figmaName": "border/accents/blue/subtle",
    "alias": "color/blue/100",
    "type": "color"
  },
  "--hds-border-accents-blue-soft": {
    "value": "#BFDBFE",
    "figmaName": "border/accents/blue/soft",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-border-accents-blue-default": {
    "value": "#93C5FD",
    "figmaName": "border/accents/blue/default",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-border-accents-blue-intense": {
    "value": "#1D4ED8",
    "figmaName": "border/accents/blue/intense",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-border-accents-blue-strong": {
    "value": "#3B82F6",
    "figmaName": "border/accents/blue/strong",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-border-accents-orange-subtle": {
    "value": "#FFEDD5",
    "figmaName": "border/accents/orange/subtle",
    "alias": "color/orange/100",
    "type": "color"
  },
  "--hds-border-accents-orange-soft": {
    "value": "#FED7AA",
    "figmaName": "border/accents/orange/soft",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-border-accents-orange-default": {
    "value": "#FDBA74",
    "figmaName": "border/accents/orange/default",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-border-accents-orange-intense": {
    "value": "#C2410C",
    "figmaName": "border/accents/orange/intense",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-border-accents-orange-strong": {
    "value": "#F97316",
    "figmaName": "border/accents/orange/strong",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-border-accents-red-subtle": {
    "value": "#FEE2E2",
    "figmaName": "border/accents/red/subtle",
    "alias": "color/red/100",
    "type": "color"
  },
  "--hds-border-accents-red-soft": {
    "value": "#FECACA",
    "figmaName": "border/accents/red/soft",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-border-accents-red-default": {
    "value": "#FCA5A5",
    "figmaName": "border/accents/red/default",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-border-accents-red-intense": {
    "value": "#B91C1C",
    "figmaName": "border/accents/red/intense",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-border-accents-red-strong": {
    "value": "#EF4444",
    "figmaName": "border/accents/red/strong",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-border-accents-gray-subtle": {
    "value": "#EDF1F6",
    "figmaName": "border/accents/gray/subtle",
    "alias": "color/gray/100",
    "type": "color"
  },
  "--hds-border-accents-gray-soft": {
    "value": "#E2E8F0",
    "figmaName": "border/accents/gray/soft",
    "alias": "color/gray/200",
    "type": "color"
  },
  "--hds-border-accents-gray-default": {
    "value": "#CBD5E1",
    "figmaName": "border/accents/gray/default",
    "alias": "color/gray/300",
    "type": "color"
  },
  "--hds-border-accents-gray-intense": {
    "value": "#334155",
    "figmaName": "border/accents/gray/intense",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-border-accents-gray-strong": {
    "value": "#64758B",
    "figmaName": "border/accents/gray/strong",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-charts-1": {
    "value": "#3B82F6",
    "figmaName": "charts/1",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-charts-2": {
    "value": "#14B8A6",
    "figmaName": "charts/2",
    "alias": "color/teal/500",
    "type": "color"
  },
  "--hds-charts-3": {
    "value": "#F97316",
    "figmaName": "charts/3",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-charts-4": {
    "value": "#8B5CF6",
    "figmaName": "charts/4",
    "alias": "color/violet/500",
    "type": "color"
  },
  "--hds-charts-5": {
    "value": "#EC4899",
    "figmaName": "charts/5",
    "alias": "color/pink/500",
    "type": "color"
  },
  "--hds-charts-6": {
    "value": "#22C55E",
    "figmaName": "charts/6",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-charts-7": {
    "value": "#EF4444",
    "figmaName": "charts/7",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-charts-8": {
    "value": "#06B6D4",
    "figmaName": "charts/8",
    "alias": "color/cyan/500",
    "type": "color"
  },
  "--hds-effect-focus-brand": {
    "value": "rgb(255 207 84 / 0.3)",
    "figmaName": "effect/focus/brand",
    "alias": "color/yellow/alpha/30",
    "type": "color"
  },
  "--hds-effect-focus-neutral": {
    "value": "rgb(115 115 115 / 0.2)",
    "figmaName": "effect/focus/neutral",
    "alias": "color/gray/alpha/20",
    "type": "color"
  },
  "--hds-effect-focus-royal": {
    "value": "rgb(36 111 234 / 0.3)",
    "figmaName": "effect/focus/royal",
    "alias": "color/royal/alpha/30",
    "type": "color"
  },
  "--hds-effect-focus-error": {
    "value": "rgb(239 68 68 / 0.3)",
    "figmaName": "effect/focus/error",
    "alias": "color/red/alpha/30",
    "type": "color"
  }
} as TokenMap,
  dark: {
  "--hds-text-inverse": {
    "value": "#F8FAFC",
    "figmaName": "text/inverse",
    "alias": "color/gray/25",
    "type": "color"
  },
  "--hds-text-disabled": {
    "value": "#94A3B8",
    "figmaName": "text/disabled",
    "alias": "color/gray/400",
    "type": "color"
  },
  "--hds-text-neutral-white": {
    "value": "#000000",
    "figmaName": "text/neutral/White",
    "alias": "color/black/950",
    "type": "color"
  },
  "--hds-text-neutral-subtle": {
    "value": "#64758B",
    "figmaName": "text/neutral/subtle",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-text-neutral-soft": {
    "value": "#94A3B8",
    "figmaName": "text/neutral/soft",
    "alias": "color/gray/400",
    "type": "color"
  },
  "--hds-text-neutral-default": {
    "value": "#CBD5E1",
    "figmaName": "text/neutral/default",
    "alias": "color/gray/300",
    "type": "color"
  },
  "--hds-text-neutral-strong": {
    "value": "#F1F5F9",
    "figmaName": "text/neutral/strong",
    "alias": "color/gray/50",
    "type": "color"
  },
  "--hds-text-neutral-intense": {
    "value": "#F8FAFC",
    "figmaName": "text/neutral/intense",
    "alias": "color/gray/25",
    "type": "color"
  },
  "--hds-text-brand-subtle": {
    "value": "#FFE89A",
    "figmaName": "text/brand/subtle",
    "alias": "color/yellow/200",
    "type": "color"
  },
  "--hds-text-brand-soft": {
    "value": "#FFDB6E",
    "figmaName": "text/brand/soft",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-text-brand-default": {
    "value": "#FFCF54",
    "figmaName": "text/brand/default",
    "alias": "color/yellow/400",
    "type": "color"
  },
  "--hds-text-brand-strong": {
    "value": "#FFDB6E",
    "figmaName": "text/brand/strong",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-text-brand-intense": {
    "value": "#FFE89A",
    "figmaName": "text/brand/intense",
    "alias": "color/yellow/200",
    "type": "color"
  },
  "--hds-text-royal-subtle": {
    "value": "#B6D2FB",
    "figmaName": "text/royal/subtle",
    "alias": "color/royal/200",
    "type": "color"
  },
  "--hds-text-royal-soft": {
    "value": "#8CB5F8",
    "figmaName": "text/royal/soft",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-text-royal-default": {
    "value": "#5994F2",
    "figmaName": "text/royal/default",
    "alias": "color/royal/400",
    "type": "color"
  },
  "--hds-text-royal-strong": {
    "value": "#8CB5F8",
    "figmaName": "text/royal/strong",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-text-royal-intense": {
    "value": "#B6D2FB",
    "figmaName": "text/royal/intense",
    "alias": "color/royal/200",
    "type": "color"
  },
  "--hds-text-success-subtle": {
    "value": "#BBF7D0",
    "figmaName": "text/success/subtle",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-text-success-soft": {
    "value": "#86EFAC",
    "figmaName": "text/success/soft",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-text-success-default": {
    "value": "#4ADE80",
    "figmaName": "text/success/default",
    "alias": "color/green/400",
    "type": "color"
  },
  "--hds-text-success-strong": {
    "value": "#86EFAC",
    "figmaName": "text/success/strong",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-text-success-intense": {
    "value": "#BBF7D0",
    "figmaName": "text/success/intense",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-text-warning-subtle": {
    "value": "#FED7AA",
    "figmaName": "text/warning/subtle",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-text-warning-soft": {
    "value": "#FDBA74",
    "figmaName": "text/warning/soft",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-text-warning-default": {
    "value": "#FB923C",
    "figmaName": "text/warning/default",
    "alias": "color/orange/400",
    "type": "color"
  },
  "--hds-text-warning-strong": {
    "value": "#FDBA74",
    "figmaName": "text/warning/strong",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-text-warning-intense": {
    "value": "#FED7AA",
    "figmaName": "text/warning/intense",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-text-error-subtle": {
    "value": "#FECACA",
    "figmaName": "text/error/subtle",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-text-error-soft": {
    "value": "#FCA5A5",
    "figmaName": "text/error/soft",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-text-error-default": {
    "value": "#F87171",
    "figmaName": "text/error/default",
    "alias": "color/red/400",
    "type": "color"
  },
  "--hds-text-error-strong": {
    "value": "#FCA5A5",
    "figmaName": "text/error/strong",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-text-error-intense": {
    "value": "#FECACA",
    "figmaName": "text/error/intense",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-text-info-subtle": {
    "value": "#2563EB",
    "figmaName": "text/info/subtle",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-text-info-soft": {
    "value": "#3B82F6",
    "figmaName": "text/info/soft",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-text-info-default": {
    "value": "#60A5FA",
    "figmaName": "text/info/default",
    "alias": "color/blue/400",
    "type": "color"
  },
  "--hds-text-info-strong": {
    "value": "#93C5FD",
    "figmaName": "text/info/strong",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-text-info-intense": {
    "value": "#BFDBFE",
    "figmaName": "text/info/intense",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-text-accents-teal-subtle": {
    "value": "#99F6E4",
    "figmaName": "text/accents/teal/subtle",
    "alias": "color/teal/200",
    "type": "color"
  },
  "--hds-text-accents-teal-soft": {
    "value": "#5EEAD4",
    "figmaName": "text/accents/teal/soft",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-text-accents-teal-default": {
    "value": "#2DD4BF",
    "figmaName": "text/accents/teal/default",
    "alias": "color/teal/400",
    "type": "color"
  },
  "--hds-text-accents-teal-strong": {
    "value": "#5EEAD4",
    "figmaName": "text/accents/teal/strong",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-text-accents-teal-intense": {
    "value": "#99F6E4",
    "figmaName": "text/accents/teal/intense",
    "alias": "color/teal/200",
    "type": "color"
  },
  "--hds-text-accents-cyan-subtle": {
    "value": "#A5F3FC",
    "figmaName": "text/accents/cyan/subtle",
    "alias": "color/cyan/200",
    "type": "color"
  },
  "--hds-text-accents-cyan-soft": {
    "value": "#67E8F9",
    "figmaName": "text/accents/cyan/soft",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-text-accents-cyan-default": {
    "value": "#22D3EE",
    "figmaName": "text/accents/cyan/default",
    "alias": "color/cyan/400",
    "type": "color"
  },
  "--hds-text-accents-cyan-strong": {
    "value": "#67E8F9",
    "figmaName": "text/accents/cyan/strong",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-text-accents-cyan-intense": {
    "value": "#A5F3FC",
    "figmaName": "text/accents/cyan/intense",
    "alias": "color/cyan/200",
    "type": "color"
  },
  "--hds-text-accents-violet-subtle": {
    "value": "#DDD6FE",
    "figmaName": "text/accents/violet/subtle",
    "alias": "color/violet/200",
    "type": "color"
  },
  "--hds-text-accents-violet-soft": {
    "value": "#C4B5FD",
    "figmaName": "text/accents/violet/soft",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-text-accents-violet-default": {
    "value": "#A78BFA",
    "figmaName": "text/accents/violet/default",
    "alias": "color/violet/400",
    "type": "color"
  },
  "--hds-text-accents-violet-strong": {
    "value": "#C4B5FD",
    "figmaName": "text/accents/violet/strong",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-text-accents-violet-intense": {
    "value": "#DDD6FE",
    "figmaName": "text/accents/violet/intense",
    "alias": "color/violet/200",
    "type": "color"
  },
  "--hds-text-accents-pink-subtle": {
    "value": "#FBCFE8",
    "figmaName": "text/accents/pink/subtle",
    "alias": "color/pink/200",
    "type": "color"
  },
  "--hds-text-accents-pink-soft": {
    "value": "#F9A8D4",
    "figmaName": "text/accents/pink/soft",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-text-accents-pink-default": {
    "value": "#F472B6",
    "figmaName": "text/accents/pink/default",
    "alias": "color/pink/400",
    "type": "color"
  },
  "--hds-text-accents-pink-strong": {
    "value": "#F9A8D4",
    "figmaName": "text/accents/pink/strong",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-text-accents-pink-intense": {
    "value": "#FBCFE8",
    "figmaName": "text/accents/pink/intense",
    "alias": "color/pink/200",
    "type": "color"
  },
  "--hds-text-accents-indigo-subtle": {
    "value": "#C7D2FE",
    "figmaName": "text/accents/indigo/subtle",
    "alias": "color/indigo/200",
    "type": "color"
  },
  "--hds-text-accents-indigo-soft": {
    "value": "#A5B4FC",
    "figmaName": "text/accents/indigo/soft",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-text-accents-indigo-default": {
    "value": "#818CF8",
    "figmaName": "text/accents/indigo/default",
    "alias": "color/indigo/400",
    "type": "color"
  },
  "--hds-text-accents-indigo-strong": {
    "value": "#A5B4FC",
    "figmaName": "text/accents/indigo/strong",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-text-accents-indigo-intense": {
    "value": "#C7D2FE",
    "figmaName": "text/accents/indigo/intense",
    "alias": "color/indigo/200",
    "type": "color"
  },
  "--hds-text-accents-lime-subtle": {
    "value": "#D9F99D",
    "figmaName": "text/accents/lime/subtle",
    "alias": "color/lime/200",
    "type": "color"
  },
  "--hds-text-accents-lime-soft": {
    "value": "#BEF264",
    "figmaName": "text/accents/lime/soft",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-text-accents-lime-default": {
    "value": "#A3E635",
    "figmaName": "text/accents/lime/default",
    "alias": "color/lime/400",
    "type": "color"
  },
  "--hds-text-accents-lime-strong": {
    "value": "#BEF264",
    "figmaName": "text/accents/lime/strong",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-text-accents-lime-intense": {
    "value": "#D9F99D",
    "figmaName": "text/accents/lime/intense",
    "alias": "color/lime/200",
    "type": "color"
  },
  "--hds-text-accents-amber-subtle": {
    "value": "#FDE68A",
    "figmaName": "text/accents/amber/subtle",
    "alias": "color/amber/200",
    "type": "color"
  },
  "--hds-text-accents-amber-soft": {
    "value": "#FCD34D",
    "figmaName": "text/accents/amber/soft",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-text-accents-amber-default": {
    "value": "#FBBF24",
    "figmaName": "text/accents/amber/default",
    "alias": "color/amber/400",
    "type": "color"
  },
  "--hds-text-accents-amber-strong": {
    "value": "#FCD34D",
    "figmaName": "text/accents/amber/strong",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-text-accents-amber-intense": {
    "value": "#FDE68A",
    "figmaName": "text/accents/amber/intense",
    "alias": "color/amber/200",
    "type": "color"
  },
  "--hds-text-accents-sky-subtle": {
    "value": "#E0F3FF",
    "figmaName": "text/accents/sky/subtle",
    "alias": "color/sky/200",
    "type": "color"
  },
  "--hds-text-accents-sky-soft": {
    "value": "#C9E8FD",
    "figmaName": "text/accents/sky/soft",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-text-accents-sky-default": {
    "value": "#81D6FD",
    "figmaName": "text/accents/sky/default",
    "alias": "color/sky/400",
    "type": "color"
  },
  "--hds-text-accents-sky-strong": {
    "value": "#C9E8FD",
    "figmaName": "text/accents/sky/strong",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-text-accents-sky-intense": {
    "value": "#E0F3FF",
    "figmaName": "text/accents/sky/intense",
    "alias": "color/sky/200",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-subtle": {
    "value": "#F5D0FE",
    "figmaName": "text/accents/fuchsia/subtle",
    "alias": "color/fuchsia/200",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-soft": {
    "value": "#F0ABFC",
    "figmaName": "text/accents/fuchsia/soft",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-default": {
    "value": "#E879F9",
    "figmaName": "text/accents/fuchsia/default",
    "alias": "color/fuchsia/400",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-strong": {
    "value": "#F0ABFC",
    "figmaName": "text/accents/fuchsia/strong",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-intense": {
    "value": "#F5D0FE",
    "figmaName": "text/accents/fuchsia/intense",
    "alias": "color/fuchsia/200",
    "type": "color"
  },
  "--hds-text-accents-green-subtle": {
    "value": "#BBF7D0",
    "figmaName": "text/accents/green/subtle",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-text-accents-green-soft": {
    "value": "#86EFAC",
    "figmaName": "text/accents/green/soft",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-text-accents-green-default": {
    "value": "#4ADE80",
    "figmaName": "text/accents/green/default",
    "alias": "color/green/400",
    "type": "color"
  },
  "--hds-text-accents-green-intense": {
    "value": "#BBF7D0",
    "figmaName": "text/accents/green/intense",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-text-accents-green-strong": {
    "value": "#86EFAC",
    "figmaName": "text/accents/green/strong",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-text-accents-blue-subtle": {
    "value": "#BFDBFE",
    "figmaName": "text/accents/blue/subtle",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-text-accents-blue-soft": {
    "value": "#93C5FD",
    "figmaName": "text/accents/blue/soft",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-text-accents-blue-default": {
    "value": "#60A5FA",
    "figmaName": "text/accents/blue/default",
    "alias": "color/blue/400",
    "type": "color"
  },
  "--hds-text-accents-blue-intense": {
    "value": "#BFDBFE",
    "figmaName": "text/accents/blue/intense",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-text-accents-blue-strong": {
    "value": "#93C5FD",
    "figmaName": "text/accents/blue/strong",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-text-accents-orange-subtle": {
    "value": "#FED7AA",
    "figmaName": "text/accents/orange/subtle",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-text-accents-orange-soft": {
    "value": "#FDBA74",
    "figmaName": "text/accents/orange/soft",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-text-accents-orange-default": {
    "value": "#FB923C",
    "figmaName": "text/accents/orange/default",
    "alias": "color/orange/400",
    "type": "color"
  },
  "--hds-text-accents-orange-intense": {
    "value": "#FED7AA",
    "figmaName": "text/accents/orange/intense",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-text-accents-orange-strong": {
    "value": "#FDBA74",
    "figmaName": "text/accents/orange/strong",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-text-accents-red-subtle": {
    "value": "#FECACA",
    "figmaName": "text/accents/red/subtle",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-text-accents-red-soft": {
    "value": "#FCA5A5",
    "figmaName": "text/accents/red/soft",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-text-accents-red-default": {
    "value": "#F87171",
    "figmaName": "text/accents/red/default",
    "alias": "color/red/400",
    "type": "color"
  },
  "--hds-text-accents-red-intense": {
    "value": "#FECACA",
    "figmaName": "text/accents/red/intense",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-text-accents-red-strong": {
    "value": "#FCA5A5",
    "figmaName": "text/accents/red/strong",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-text-accents-gray-subtle": {
    "value": "#E2E8F0",
    "figmaName": "text/accents/gray/subtle",
    "alias": "color/gray/200",
    "type": "color"
  },
  "--hds-text-accents-gray-soft": {
    "value": "#CBD5E1",
    "figmaName": "text/accents/gray/soft",
    "alias": "color/gray/300",
    "type": "color"
  },
  "--hds-text-accents-gray-default": {
    "value": "#94A3B8",
    "figmaName": "text/accents/gray/default",
    "alias": "color/gray/400",
    "type": "color"
  },
  "--hds-text-accents-gray-intense": {
    "value": "#E2E8F0",
    "figmaName": "text/accents/gray/intense",
    "alias": "color/gray/200",
    "type": "color"
  },
  "--hds-text-accents-gray-strong": {
    "value": "#CBD5E1",
    "figmaName": "text/accents/gray/strong",
    "alias": "color/gray/300",
    "type": "color"
  },
  "--hds-text-on-brand": {
    "value": "#020617",
    "figmaName": "text/on/brand",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-text-on-success": {
    "value": "#FFFFFF",
    "figmaName": "text/on/success",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-warning": {
    "value": "#FFFFFF",
    "figmaName": "text/on/warning",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-error": {
    "value": "#FFFFFF",
    "figmaName": "text/on/error",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-info": {
    "value": "#FFFFFF",
    "figmaName": "text/on/info",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-royal": {
    "value": "#FFFFFF",
    "figmaName": "text/on/royal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-teal": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/teal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-cyan": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/cyan",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-violet": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/violet",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-pink": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/pink",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-indigo": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/indigo",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-lime": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/lime",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-amber": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/amber",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-sky": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/sky",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-fuchsia": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/fuchsia",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-green": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/green",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-blue": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/blue",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-orange": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/orange",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-red": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/red",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-gray": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/gray",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-background-disabled": {
    "value": "#1E293B",
    "figmaName": "background/disabled",
    "alias": "color/gray/800",
    "type": "color"
  },
  "--hds-background-overlay": {
    "value": "rgb(0 0 0 / 0.65)",
    "figmaName": "background/overlay",
    "alias": "color/black/alpha/65",
    "type": "color"
  },
  "--hds-background-alpha-black-5": {
    "value": "rgb(255 255 255 / 0.05)",
    "figmaName": "background/alpha/black/5",
    "alias": "color/white/alpha/5",
    "type": "color"
  },
  "--hds-background-alpha-black-10": {
    "value": "rgb(255 255 255 / 0.1)",
    "figmaName": "background/alpha/black/10",
    "alias": "color/white/alpha/10",
    "type": "color"
  },
  "--hds-background-static-white": {
    "value": "#FFFFFF",
    "figmaName": "background/static/white",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-background-static-black": {
    "value": "#020617",
    "figmaName": "background/static/black",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-background-neutral-white": {
    "value": "#020617",
    "figmaName": "background/neutral/white",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-background-neutral-subtle": {
    "value": "#020617",
    "figmaName": "background/neutral/subtle",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-background-neutral-soft": {
    "value": "#0F172A",
    "figmaName": "background/neutral/soft",
    "alias": "color/gray/900",
    "type": "color"
  },
  "--hds-background-neutral-default": {
    "value": "#1E293B",
    "figmaName": "background/neutral/default",
    "alias": "color/gray/800",
    "type": "color"
  },
  "--hds-background-neutral-strong": {
    "value": "#334155",
    "figmaName": "background/neutral/strong",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-background-neutral-bold-soft": {
    "value": "#E2E8F0",
    "figmaName": "background/neutral-bold/soft",
    "alias": "color/gray/200",
    "type": "color"
  },
  "--hds-background-neutral-bold-default": {
    "value": "#EDF1F6",
    "figmaName": "background/neutral-bold/default",
    "alias": "color/gray/100",
    "type": "color"
  },
  "--hds-background-neutral-bold-strong": {
    "value": "#F1F5F9",
    "figmaName": "background/neutral-bold/strong",
    "alias": "color/gray/50",
    "type": "color"
  },
  "--hds-background-neutral-bold-intense": {
    "value": "#F8FAFC",
    "figmaName": "background/neutral-bold/intense",
    "alias": "color/gray/25",
    "type": "color"
  },
  "--hds-background-neutral-bold-black": {
    "value": "#FFFFFF",
    "figmaName": "background/neutral-bold/black",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-background-brand-subtle": {
    "value": "rgb(255 207 84 / 0.12)",
    "figmaName": "background/brand/subtle",
    "alias": "color/yellow/alpha/12",
    "type": "color"
  },
  "--hds-background-brand-soft": {
    "value": "rgb(255 207 84 / 0.2)",
    "figmaName": "background/brand/soft",
    "alias": "color/yellow/alpha/20",
    "type": "color"
  },
  "--hds-background-brand-default": {
    "value": "#FFCF54",
    "figmaName": "background/brand/default",
    "alias": "color/yellow/400",
    "type": "color"
  },
  "--hds-background-brand-strong": {
    "value": "#FFDB6E",
    "figmaName": "background/brand/strong",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-background-brand-intense": {
    "value": "#F0B82E",
    "figmaName": "background/brand/intense",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-background-royal-subtle": {
    "value": "rgb(36 111 234 / 0.12)",
    "figmaName": "background/royal/subtle",
    "alias": "color/royal/alpha/12",
    "type": "color"
  },
  "--hds-background-royal-soft": {
    "value": "rgb(36 111 234 / 0.2)",
    "figmaName": "background/royal/soft",
    "alias": "color/royal/alpha/20",
    "type": "color"
  },
  "--hds-background-royal-default": {
    "value": "#246FEA",
    "figmaName": "background/royal/default",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-background-royal-strong": {
    "value": "#5994F2",
    "figmaName": "background/royal/strong",
    "alias": "color/royal/400",
    "type": "color"
  },
  "--hds-background-royal-intense": {
    "value": "#1956C8",
    "figmaName": "background/royal/intense",
    "alias": "color/royal/600",
    "type": "color"
  },
  "--hds-background-success-subtle": {
    "value": "rgb(34 197 94 / 0.1)",
    "figmaName": "background/success/subtle",
    "alias": "color/green/alpha/10",
    "type": "color"
  },
  "--hds-background-success-soft": {
    "value": "rgb(34 197 94 / 0.18)",
    "figmaName": "background/success/soft",
    "alias": "color/green/alpha/18",
    "type": "color"
  },
  "--hds-background-success-default": {
    "value": "#14532D",
    "figmaName": "background/success/default",
    "alias": "color/green/900",
    "type": "color"
  },
  "--hds-background-success-strong": {
    "value": "#16A34A",
    "figmaName": "background/success/strong",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-background-success-intense": {
    "value": "#15803D",
    "figmaName": "background/success/intense",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-background-warning-subtle": {
    "value": "rgb(249 115 22 / 0.12)",
    "figmaName": "background/warning/subtle",
    "alias": "color/orange/alpha/12",
    "type": "color"
  },
  "--hds-background-warning-soft": {
    "value": "rgb(249 115 22 / 0.2)",
    "figmaName": "background/warning/soft",
    "alias": "color/orange/alpha/20",
    "type": "color"
  },
  "--hds-background-warning-default": {
    "value": "#7C2D12",
    "figmaName": "background/warning/default",
    "alias": "color/orange/900",
    "type": "color"
  },
  "--hds-background-warning-strong": {
    "value": "#F97316",
    "figmaName": "background/warning/strong",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-background-warning-intense": {
    "value": "#C2410C",
    "figmaName": "background/warning/intense",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-background-error-subtle": {
    "value": "rgb(239 68 68 / 0.1)",
    "figmaName": "background/error/subtle",
    "alias": "color/red/alpha/10",
    "type": "color"
  },
  "--hds-background-error-soft": {
    "value": "rgb(239 68 68 / 0.18)",
    "figmaName": "background/error/soft",
    "alias": "color/red/alpha/18",
    "type": "color"
  },
  "--hds-background-error-default": {
    "value": "#7F1D1D",
    "figmaName": "background/error/default",
    "alias": "color/red/900",
    "type": "color"
  },
  "--hds-background-error-strong": {
    "value": "#DC2626",
    "figmaName": "background/error/strong",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-background-error-intense": {
    "value": "#991B1B",
    "figmaName": "background/error/intense",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-background-info-subtle": {
    "value": "rgb(59 130 246 / 0.1)",
    "figmaName": "background/info/subtle",
    "alias": "color/blue/alpha/10",
    "type": "color"
  },
  "--hds-background-info-soft": {
    "value": "rgb(59 130 246 / 0.18)",
    "figmaName": "background/info/soft",
    "alias": "color/blue/alpha/18",
    "type": "color"
  },
  "--hds-background-info-default": {
    "value": "#1E3A8A",
    "figmaName": "background/info/default",
    "alias": "color/blue/900",
    "type": "color"
  },
  "--hds-background-info-strong": {
    "value": "#2563EB",
    "figmaName": "background/info/strong",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-background-info-intense": {
    "value": "#1D4ED8",
    "figmaName": "background/info/intense",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-background-accents-teal-subtle": {
    "value": "rgb(20 184 166 / 0.1)",
    "figmaName": "background/accents/teal/subtle",
    "alias": "color/teal/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-teal-soft": {
    "value": "rgb(20 184 166 / 0.18)",
    "figmaName": "background/accents/teal/soft",
    "alias": "color/teal/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-teal-default": {
    "value": "#134E4A",
    "figmaName": "background/accents/teal/default",
    "alias": "color/teal/900",
    "type": "color"
  },
  "--hds-background-accents-teal-strong": {
    "value": "#0D9488",
    "figmaName": "background/accents/teal/strong",
    "alias": "color/teal/600",
    "type": "color"
  },
  "--hds-background-accents-teal-intense": {
    "value": "#0F766E",
    "figmaName": "background/accents/teal/intense",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-background-accents-cyan-subtle": {
    "value": "rgb(6 182 212 / 0.1)",
    "figmaName": "background/accents/cyan/subtle",
    "alias": "color/cyan/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-cyan-soft": {
    "value": "rgb(6 182 212 / 0.18)",
    "figmaName": "background/accents/cyan/soft",
    "alias": "color/cyan/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-cyan-default": {
    "value": "#164E63",
    "figmaName": "background/accents/cyan/default",
    "alias": "color/cyan/900",
    "type": "color"
  },
  "--hds-background-accents-cyan-strong": {
    "value": "#0891B2",
    "figmaName": "background/accents/cyan/strong",
    "alias": "color/cyan/600",
    "type": "color"
  },
  "--hds-background-accents-cyan-intense": {
    "value": "#0E7490",
    "figmaName": "background/accents/cyan/intense",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-background-accents-violet-subtle": {
    "value": "rgb(139 92 246 / 0.1)",
    "figmaName": "background/accents/violet/subtle",
    "alias": "color/violet/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-violet-soft": {
    "value": "rgb(139 92 246 / 0.18)",
    "figmaName": "background/accents/violet/soft",
    "alias": "color/violet/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-violet-default": {
    "value": "#4C1D95",
    "figmaName": "background/accents/violet/default",
    "alias": "color/violet/900",
    "type": "color"
  },
  "--hds-background-accents-violet-strong": {
    "value": "#7C3AED",
    "figmaName": "background/accents/violet/strong",
    "alias": "color/violet/600",
    "type": "color"
  },
  "--hds-background-accents-violet-intense": {
    "value": "#6D28D9",
    "figmaName": "background/accents/violet/intense",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-background-accents-pink-subtle": {
    "value": "rgb(236 72 153 / 0.1)",
    "figmaName": "background/accents/pink/subtle",
    "alias": "color/pink/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-pink-soft": {
    "value": "rgb(236 72 153 / 0.18)",
    "figmaName": "background/accents/pink/soft",
    "alias": "color/pink/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-pink-default": {
    "value": "#831843",
    "figmaName": "background/accents/pink/default",
    "alias": "color/pink/900",
    "type": "color"
  },
  "--hds-background-accents-pink-strong": {
    "value": "#DB2777",
    "figmaName": "background/accents/pink/strong",
    "alias": "color/pink/600",
    "type": "color"
  },
  "--hds-background-accents-pink-intense": {
    "value": "#BE185D",
    "figmaName": "background/accents/pink/intense",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-background-accents-indigo-subtle": {
    "value": "rgb(99 102 241 / 0.1)",
    "figmaName": "background/accents/indigo/subtle",
    "alias": "color/indigo/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-indigo-soft": {
    "value": "rgb(99 102 241 / 0.18)",
    "figmaName": "background/accents/indigo/soft",
    "alias": "color/indigo/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-indigo-default": {
    "value": "#312E81",
    "figmaName": "background/accents/indigo/default",
    "alias": "color/indigo/900",
    "type": "color"
  },
  "--hds-background-accents-indigo-strong": {
    "value": "#4F46E5",
    "figmaName": "background/accents/indigo/strong",
    "alias": "color/indigo/600",
    "type": "color"
  },
  "--hds-background-accents-indigo-intense": {
    "value": "#4338CA",
    "figmaName": "background/accents/indigo/intense",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-background-accents-lime-subtle": {
    "value": "rgb(132 204 22 / 0.1)",
    "figmaName": "background/accents/lime/subtle",
    "alias": "color/lime/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-lime-soft": {
    "value": "rgb(132 204 22 / 0.18)",
    "figmaName": "background/accents/lime/soft",
    "alias": "color/lime/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-lime-default": {
    "value": "#365314",
    "figmaName": "background/accents/lime/default",
    "alias": "color/lime/900",
    "type": "color"
  },
  "--hds-background-accents-lime-strong": {
    "value": "#65A30D",
    "figmaName": "background/accents/lime/strong",
    "alias": "color/lime/600",
    "type": "color"
  },
  "--hds-background-accents-lime-intense": {
    "value": "#4D7C0F",
    "figmaName": "background/accents/lime/intense",
    "alias": "color/lime/700",
    "type": "color"
  },
  "--hds-background-accents-amber-subtle": {
    "value": "rgb(245 158 11 / 0.1)",
    "figmaName": "background/accents/amber/subtle",
    "alias": "color/amber/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-amber-soft": {
    "value": "rgb(245 158 11 / 0.18)",
    "figmaName": "background/accents/amber/soft",
    "alias": "color/amber/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-amber-default": {
    "value": "#78350F",
    "figmaName": "background/accents/amber/default",
    "alias": "color/amber/900",
    "type": "color"
  },
  "--hds-background-accents-amber-strong": {
    "value": "#D97706",
    "figmaName": "background/accents/amber/strong",
    "alias": "color/amber/600",
    "type": "color"
  },
  "--hds-background-accents-amber-intense": {
    "value": "#B45309",
    "figmaName": "background/accents/amber/intense",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-background-accents-sky-subtle": {
    "value": "rgb(14 165 233 / 0.1)",
    "figmaName": "background/accents/sky/subtle",
    "alias": "color/sky/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-sky-soft": {
    "value": "rgb(14 165 233 / 0.18)",
    "figmaName": "background/accents/sky/soft",
    "alias": "color/sky/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-sky-default": {
    "value": "#0B4D74",
    "figmaName": "background/accents/sky/default",
    "alias": "color/sky/900",
    "type": "color"
  },
  "--hds-background-accents-sky-strong": {
    "value": "#0BA7EF",
    "figmaName": "background/accents/sky/strong",
    "alias": "color/sky/600",
    "type": "color"
  },
  "--hds-background-accents-sky-intense": {
    "value": "#0081C2",
    "figmaName": "background/accents/sky/intense",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-subtle": {
    "value": "rgb(217 70 239 / 0.1)",
    "figmaName": "background/accents/fuchsia/subtle",
    "alias": "color/fuchsia/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-soft": {
    "value": "rgb(217 70 239 / 0.18)",
    "figmaName": "background/accents/fuchsia/soft",
    "alias": "color/fuchsia/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-default": {
    "value": "#701A75",
    "figmaName": "background/accents/fuchsia/default",
    "alias": "color/fuchsia/900",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-strong": {
    "value": "#C026D3",
    "figmaName": "background/accents/fuchsia/strong",
    "alias": "color/fuchsia/600",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-intense": {
    "value": "#A21CAF",
    "figmaName": "background/accents/fuchsia/intense",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-background-accents-hig-subtle": {
    "value": "#020617",
    "figmaName": "background/accents/hig/Subtle",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-background-accents-hig-soft": {
    "value": "#0F172A",
    "figmaName": "background/accents/hig/Soft",
    "alias": "color/gray/900",
    "type": "color"
  },
  "--hds-background-accents-hig-default": {
    "value": "#1E293B",
    "figmaName": "background/accents/hig/Default",
    "alias": "color/gray/800",
    "type": "color"
  },
  "--hds-background-accents-hig-strong": {
    "value": "#1E293B",
    "figmaName": "background/accents/hig/Strong",
    "alias": "color/gray/800",
    "type": "color"
  },
  "--hds-background-accents-hig-intense": {
    "value": "#334155",
    "figmaName": "background/accents/hig/Intense",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-background-accents-green-subtle": {
    "value": "rgb(34 197 94 / 0.1)",
    "figmaName": "background/accents/green/subtle",
    "alias": "color/green/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-green-soft": {
    "value": "rgb(34 197 94 / 0.18)",
    "figmaName": "background/accents/green/soft",
    "alias": "color/green/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-green-default": {
    "value": "#14532D",
    "figmaName": "background/accents/green/default",
    "alias": "color/green/900",
    "type": "color"
  },
  "--hds-background-accents-green-intense": {
    "value": "#15803D",
    "figmaName": "background/accents/green/intense",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-background-accents-green-strong": {
    "value": "#16A34A",
    "figmaName": "background/accents/green/strong",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-background-accents-blue-subtle": {
    "value": "rgb(59 130 246 / 0.1)",
    "figmaName": "background/accents/blue/subtle",
    "alias": "color/blue/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-blue-soft": {
    "value": "rgb(59 130 246 / 0.18)",
    "figmaName": "background/accents/blue/soft",
    "alias": "color/blue/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-blue-default": {
    "value": "#1E3A8A",
    "figmaName": "background/accents/blue/default",
    "alias": "color/blue/900",
    "type": "color"
  },
  "--hds-background-accents-blue-intense": {
    "value": "#1D4ED8",
    "figmaName": "background/accents/blue/intense",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-background-accents-blue-strong": {
    "value": "#2563EB",
    "figmaName": "background/accents/blue/strong",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-background-accents-orange-subtle": {
    "value": "rgb(249 115 22 / 0.12)",
    "figmaName": "background/accents/orange/subtle",
    "alias": "color/orange/alpha/12",
    "type": "color"
  },
  "--hds-background-accents-orange-soft": {
    "value": "rgb(249 115 22 / 0.2)",
    "figmaName": "background/accents/orange/soft",
    "alias": "color/orange/alpha/20",
    "type": "color"
  },
  "--hds-background-accents-orange-default": {
    "value": "#7C2D12",
    "figmaName": "background/accents/orange/default",
    "alias": "color/orange/900",
    "type": "color"
  },
  "--hds-background-accents-orange-intense": {
    "value": "#C2410C",
    "figmaName": "background/accents/orange/intense",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-background-accents-orange-strong": {
    "value": "#EA580C",
    "figmaName": "background/accents/orange/strong",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-background-accents-red-subtle": {
    "value": "rgb(239 68 68 / 0.1)",
    "figmaName": "background/accents/red/subtle",
    "alias": "color/red/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-red-soft": {
    "value": "rgb(239 68 68 / 0.18)",
    "figmaName": "background/accents/red/soft",
    "alias": "color/red/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-red-default": {
    "value": "#7F1D1D",
    "figmaName": "background/accents/red/default",
    "alias": "color/red/900",
    "type": "color"
  },
  "--hds-background-accents-red-intense": {
    "value": "#B91C1C",
    "figmaName": "background/accents/red/intense",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-background-accents-red-strong": {
    "value": "#DC2626",
    "figmaName": "background/accents/red/strong",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-background-accents-gray-subtle": {
    "value": "rgb(115 115 115 / 0.2)",
    "figmaName": "background/accents/gray/subtle",
    "alias": "color/gray/alpha/20",
    "type": "color"
  },
  "--hds-background-accents-gray-soft": {
    "value": "rgb(115 115 115 / 0.4)",
    "figmaName": "background/accents/gray/soft",
    "alias": "color/gray/alpha/40",
    "type": "color"
  },
  "--hds-background-accents-gray-default": {
    "value": "#0F172A",
    "figmaName": "background/accents/gray/default",
    "alias": "color/gray/900",
    "type": "color"
  },
  "--hds-background-accents-gray-intense": {
    "value": "#334155",
    "figmaName": "background/accents/gray/intense",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-background-accents-gray-strong": {
    "value": "#475569",
    "figmaName": "background/accents/gray/strong",
    "alias": "color/gray/600",
    "type": "color"
  },
  "--hds-foreground-inverse": {
    "value": "#0F172A",
    "figmaName": "foreground/inverse",
    "alias": "color/gray/900",
    "type": "color"
  },
  "--hds-foreground-disabled": {
    "value": "#475569",
    "figmaName": "foreground/disabled",
    "alias": "color/gray/600",
    "type": "color"
  },
  "--hds-foreground-alpha-30": {
    "value": "rgb(255 255 255 / 0.3)",
    "figmaName": "foreground/alpha/30",
    "alias": "color/white/alpha/30",
    "type": "color"
  },
  "--hds-foreground-alpha-40": {
    "value": "rgb(255 255 255 / 0.4)",
    "figmaName": "foreground/alpha/40",
    "alias": "color/white/alpha/40",
    "type": "color"
  },
  "--hds-foreground-static-white": {
    "value": "#FFFFFF",
    "figmaName": "foreground/static/white",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-static-black": {
    "value": "#000000",
    "figmaName": "foreground/static/black",
    "alias": "color/black/950",
    "type": "color"
  },
  "--hds-foreground-neutral-subtle": {
    "value": "#64758B",
    "figmaName": "foreground/neutral/subtle",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-foreground-neutral-soft": {
    "value": "#64758B",
    "figmaName": "foreground/neutral/soft",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-foreground-neutral-default": {
    "value": "#64758B",
    "figmaName": "foreground/neutral/default",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-foreground-neutral-strong": {
    "value": "#64758B",
    "figmaName": "foreground/neutral/strong",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-foreground-neutral-intense": {
    "value": "#94A3B8",
    "figmaName": "foreground/neutral/intense",
    "alias": "color/gray/400",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-subtle": {
    "value": "#CBD5E1",
    "figmaName": "foreground/neutral-bold/subtle",
    "alias": "color/gray/300",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-soft": {
    "value": "#E2E8F0",
    "figmaName": "foreground/neutral-bold/soft",
    "alias": "color/gray/200",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-default": {
    "value": "#EDF1F6",
    "figmaName": "foreground/neutral-bold/default",
    "alias": "color/gray/100",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-strong": {
    "value": "#F1F5F9",
    "figmaName": "foreground/neutral-bold/strong",
    "alias": "color/gray/50",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-intense": {
    "value": "#F8FAFC",
    "figmaName": "foreground/neutral-bold/intense",
    "alias": "color/gray/25",
    "type": "color"
  },
  "--hds-foreground-brand-subtle": {
    "value": "#C8941A",
    "figmaName": "foreground/brand/subtle",
    "alias": "color/yellow/600",
    "type": "color"
  },
  "--hds-foreground-brand-soft": {
    "value": "#F0B82E",
    "figmaName": "foreground/brand/soft",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-foreground-brand-default": {
    "value": "#FFCF54",
    "figmaName": "foreground/brand/default",
    "alias": "color/yellow/400",
    "type": "color"
  },
  "--hds-foreground-brand-strong": {
    "value": "#FFDB6E",
    "figmaName": "foreground/brand/strong",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-foreground-brand-intense": {
    "value": "#FFE89A",
    "figmaName": "foreground/brand/intense",
    "alias": "color/yellow/200",
    "type": "color"
  },
  "--hds-foreground-royal-subtle": {
    "value": "#1956C8",
    "figmaName": "foreground/royal/subtle",
    "alias": "color/royal/600",
    "type": "color"
  },
  "--hds-foreground-royal-soft": {
    "value": "#246FEA",
    "figmaName": "foreground/royal/soft",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-foreground-royal-default": {
    "value": "#5994F2",
    "figmaName": "foreground/royal/default",
    "alias": "color/royal/400",
    "type": "color"
  },
  "--hds-foreground-royal-strong": {
    "value": "#8CB5F8",
    "figmaName": "foreground/royal/strong",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-foreground-royal-intense": {
    "value": "#B6D2FB",
    "figmaName": "foreground/royal/intense",
    "alias": "color/royal/200",
    "type": "color"
  },
  "--hds-foreground-success-subtle": {
    "value": "#16A34A",
    "figmaName": "foreground/success/subtle",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-foreground-success-soft": {
    "value": "#22C55E",
    "figmaName": "foreground/success/soft",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-foreground-success-default": {
    "value": "#4ADE80",
    "figmaName": "foreground/success/default",
    "alias": "color/green/400",
    "type": "color"
  },
  "--hds-foreground-success-strong": {
    "value": "#86EFAC",
    "figmaName": "foreground/success/strong",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-foreground-success-intense": {
    "value": "#BBF7D0",
    "figmaName": "foreground/success/intense",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-foreground-warning-subtle": {
    "value": "#EA580C",
    "figmaName": "foreground/warning/subtle",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-foreground-warning-soft": {
    "value": "#F97316",
    "figmaName": "foreground/warning/soft",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-foreground-warning-default": {
    "value": "#FB923C",
    "figmaName": "foreground/warning/default",
    "alias": "color/orange/400",
    "type": "color"
  },
  "--hds-foreground-warning-strong": {
    "value": "#FDBA74",
    "figmaName": "foreground/warning/strong",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-foreground-warning-intense": {
    "value": "#FED7AA",
    "figmaName": "foreground/warning/intense",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-foreground-error-subtle": {
    "value": "#DC2626",
    "figmaName": "foreground/error/subtle",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-foreground-error-soft": {
    "value": "#EF4444",
    "figmaName": "foreground/error/soft",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-foreground-error-default": {
    "value": "#F87171",
    "figmaName": "foreground/error/default",
    "alias": "color/red/400",
    "type": "color"
  },
  "--hds-foreground-error-strong": {
    "value": "#FCA5A5",
    "figmaName": "foreground/error/strong",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-foreground-error-intense": {
    "value": "#FECACA",
    "figmaName": "foreground/error/intense",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-foreground-info-subtle": {
    "value": "#2563EB",
    "figmaName": "foreground/info/subtle",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-foreground-info-soft": {
    "value": "#3B82F6",
    "figmaName": "foreground/info/soft",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-foreground-info-default": {
    "value": "#60A5FA",
    "figmaName": "foreground/info/default",
    "alias": "color/blue/400",
    "type": "color"
  },
  "--hds-foreground-info-strong": {
    "value": "#93C5FD",
    "figmaName": "foreground/info/strong",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-foreground-info-intense": {
    "value": "#BFDBFE",
    "figmaName": "foreground/info/intense",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-foreground-accents-teal-subtle": {
    "value": "#99F6E4",
    "figmaName": "foreground/accents/teal/subtle",
    "alias": "color/teal/200",
    "type": "color"
  },
  "--hds-foreground-accents-teal-soft": {
    "value": "#5EEAD4",
    "figmaName": "foreground/accents/teal/soft",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-foreground-accents-teal-default": {
    "value": "#2DD4BF",
    "figmaName": "foreground/accents/teal/default",
    "alias": "color/teal/400",
    "type": "color"
  },
  "--hds-foreground-accents-teal-strong": {
    "value": "#5EEAD4",
    "figmaName": "foreground/accents/teal/strong",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-foreground-accents-teal-intense": {
    "value": "#99F6E4",
    "figmaName": "foreground/accents/teal/intense",
    "alias": "color/teal/200",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-subtle": {
    "value": "#A5F3FC",
    "figmaName": "foreground/accents/cyan/subtle",
    "alias": "color/cyan/200",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-soft": {
    "value": "#67E8F9",
    "figmaName": "foreground/accents/cyan/soft",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-default": {
    "value": "#22D3EE",
    "figmaName": "foreground/accents/cyan/default",
    "alias": "color/cyan/400",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-strong": {
    "value": "#67E8F9",
    "figmaName": "foreground/accents/cyan/strong",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-intense": {
    "value": "#A5F3FC",
    "figmaName": "foreground/accents/cyan/intense",
    "alias": "color/cyan/200",
    "type": "color"
  },
  "--hds-foreground-accents-violet-subtle": {
    "value": "#DDD6FE",
    "figmaName": "foreground/accents/violet/subtle",
    "alias": "color/violet/200",
    "type": "color"
  },
  "--hds-foreground-accents-violet-soft": {
    "value": "#C4B5FD",
    "figmaName": "foreground/accents/violet/soft",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-foreground-accents-violet-default": {
    "value": "#A78BFA",
    "figmaName": "foreground/accents/violet/default",
    "alias": "color/violet/400",
    "type": "color"
  },
  "--hds-foreground-accents-violet-strong": {
    "value": "#C4B5FD",
    "figmaName": "foreground/accents/violet/strong",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-foreground-accents-violet-intense": {
    "value": "#DDD6FE",
    "figmaName": "foreground/accents/violet/intense",
    "alias": "color/violet/200",
    "type": "color"
  },
  "--hds-foreground-accents-pink-subtle": {
    "value": "#FBCFE8",
    "figmaName": "foreground/accents/pink/subtle",
    "alias": "color/pink/200",
    "type": "color"
  },
  "--hds-foreground-accents-pink-soft": {
    "value": "#F9A8D4",
    "figmaName": "foreground/accents/pink/soft",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-foreground-accents-pink-default": {
    "value": "#F472B6",
    "figmaName": "foreground/accents/pink/default",
    "alias": "color/pink/400",
    "type": "color"
  },
  "--hds-foreground-accents-pink-strong": {
    "value": "#F9A8D4",
    "figmaName": "foreground/accents/pink/strong",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-foreground-accents-pink-intense": {
    "value": "#FBCFE8",
    "figmaName": "foreground/accents/pink/intense",
    "alias": "color/pink/200",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-subtle": {
    "value": "#C7D2FE",
    "figmaName": "foreground/accents/indigo/subtle",
    "alias": "color/indigo/200",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-soft": {
    "value": "#A5B4FC",
    "figmaName": "foreground/accents/indigo/soft",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-default": {
    "value": "#818CF8",
    "figmaName": "foreground/accents/indigo/default",
    "alias": "color/indigo/400",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-strong": {
    "value": "#A5B4FC",
    "figmaName": "foreground/accents/indigo/strong",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-intense": {
    "value": "#C7D2FE",
    "figmaName": "foreground/accents/indigo/intense",
    "alias": "color/indigo/200",
    "type": "color"
  },
  "--hds-foreground-accents-lime-subtle": {
    "value": "#D9F99D",
    "figmaName": "foreground/accents/lime/subtle",
    "alias": "color/lime/200",
    "type": "color"
  },
  "--hds-foreground-accents-lime-soft": {
    "value": "#BEF264",
    "figmaName": "foreground/accents/lime/soft",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-foreground-accents-lime-default": {
    "value": "#A3E635",
    "figmaName": "foreground/accents/lime/default",
    "alias": "color/lime/400",
    "type": "color"
  },
  "--hds-foreground-accents-lime-strong": {
    "value": "#BEF264",
    "figmaName": "foreground/accents/lime/strong",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-foreground-accents-lime-intense": {
    "value": "#D9F99D",
    "figmaName": "foreground/accents/lime/intense",
    "alias": "color/lime/200",
    "type": "color"
  },
  "--hds-foreground-accents-green-subtle": {
    "value": "#BBF7D0",
    "figmaName": "foreground/accents/green/subtle",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-foreground-accents-green-soft": {
    "value": "#86EFAC",
    "figmaName": "foreground/accents/green/soft",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-foreground-accents-green-default": {
    "value": "#4ADE80",
    "figmaName": "foreground/accents/green/default",
    "alias": "color/green/400",
    "type": "color"
  },
  "--hds-foreground-accents-green-intense": {
    "value": "#BBF7D0",
    "figmaName": "foreground/accents/green/intense",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-foreground-accents-green-strong": {
    "value": "#86EFAC",
    "figmaName": "foreground/accents/green/strong",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-foreground-accents-blue-subtle": {
    "value": "#BFDBFE",
    "figmaName": "foreground/accents/blue/subtle",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-foreground-accents-blue-soft": {
    "value": "#93C5FD",
    "figmaName": "foreground/accents/blue/soft",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-foreground-accents-blue-default": {
    "value": "#60A5FA",
    "figmaName": "foreground/accents/blue/default",
    "alias": "color/blue/400",
    "type": "color"
  },
  "--hds-foreground-accents-blue-intense": {
    "value": "#BFDBFE",
    "figmaName": "foreground/accents/blue/intense",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-foreground-accents-blue-strong": {
    "value": "#93C5FD",
    "figmaName": "foreground/accents/blue/strong",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-foreground-accents-orange-subtle": {
    "value": "#FED7AA",
    "figmaName": "foreground/accents/orange/subtle",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-foreground-accents-orange-soft": {
    "value": "#FDBA74",
    "figmaName": "foreground/accents/orange/soft",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-foreground-accents-orange-default": {
    "value": "#FB923C",
    "figmaName": "foreground/accents/orange/default",
    "alias": "color/orange/400",
    "type": "color"
  },
  "--hds-foreground-accents-orange-intense": {
    "value": "#FED7AA",
    "figmaName": "foreground/accents/orange/intense",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-foreground-accents-orange-strong": {
    "value": "#FDBA74",
    "figmaName": "foreground/accents/orange/strong",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-foreground-accents-red-subtle": {
    "value": "#FECACA",
    "figmaName": "foreground/accents/red/subtle",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-foreground-accents-red-soft": {
    "value": "#FCA5A5",
    "figmaName": "foreground/accents/red/soft",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-foreground-accents-red-default": {
    "value": "#F87171",
    "figmaName": "foreground/accents/red/default",
    "alias": "color/red/400",
    "type": "color"
  },
  "--hds-foreground-accents-red-intense": {
    "value": "#FECACA",
    "figmaName": "foreground/accents/red/intense",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-foreground-accents-red-strong": {
    "value": "#FCA5A5",
    "figmaName": "foreground/accents/red/strong",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-foreground-accents-amber-subtle": {
    "value": "#FDE68A",
    "figmaName": "foreground/accents/amber/subtle",
    "alias": "color/amber/200",
    "type": "color"
  },
  "--hds-foreground-accents-amber-soft": {
    "value": "#FCD34D",
    "figmaName": "foreground/accents/amber/soft",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-foreground-accents-amber-default": {
    "value": "#FBBF24",
    "figmaName": "foreground/accents/amber/default",
    "alias": "color/amber/400",
    "type": "color"
  },
  "--hds-foreground-accents-amber-intense": {
    "value": "#FDE68A",
    "figmaName": "foreground/accents/amber/intense",
    "alias": "color/amber/200",
    "type": "color"
  },
  "--hds-foreground-accents-amber-strong": {
    "value": "#FCD34D",
    "figmaName": "foreground/accents/amber/strong",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-subtle": {
    "value": "#F5D0FE",
    "figmaName": "foreground/accents/fuchsia/subtle",
    "alias": "color/fuchsia/200",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-soft": {
    "value": "#F0ABFC",
    "figmaName": "foreground/accents/fuchsia/soft",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-default": {
    "value": "#E879F9",
    "figmaName": "foreground/accents/fuchsia/default",
    "alias": "color/fuchsia/400",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-intense": {
    "value": "#F5D0FE",
    "figmaName": "foreground/accents/fuchsia/intense",
    "alias": "color/fuchsia/200",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-strong": {
    "value": "#F0ABFC",
    "figmaName": "foreground/accents/fuchsia/strong",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-foreground-accents-sky-subtle": {
    "value": "#E0F3FF",
    "figmaName": "foreground/accents/sky/subtle",
    "alias": "color/sky/200",
    "type": "color"
  },
  "--hds-foreground-accents-sky-soft": {
    "value": "#C9E8FD",
    "figmaName": "foreground/accents/sky/soft",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-foreground-accents-sky-default": {
    "value": "#81D6FD",
    "figmaName": "foreground/accents/sky/default",
    "alias": "color/sky/400",
    "type": "color"
  },
  "--hds-foreground-accents-sky-intense": {
    "value": "#E0F3FF",
    "figmaName": "foreground/accents/sky/intense",
    "alias": "color/sky/200",
    "type": "color"
  },
  "--hds-foreground-accents-sky-strong": {
    "value": "#C9E8FD",
    "figmaName": "foreground/accents/sky/strong",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-foreground-accents-gray-subtle": {
    "value": "#E2E8F0",
    "figmaName": "foreground/accents/gray/subtle",
    "alias": "color/gray/200",
    "type": "color"
  },
  "--hds-foreground-accents-gray-soft": {
    "value": "#CBD5E1",
    "figmaName": "foreground/accents/gray/soft",
    "alias": "color/gray/300",
    "type": "color"
  },
  "--hds-foreground-accents-gray-default": {
    "value": "#94A3B8",
    "figmaName": "foreground/accents/gray/default",
    "alias": "color/gray/400",
    "type": "color"
  },
  "--hds-foreground-accents-gray-intense": {
    "value": "#E2E8F0",
    "figmaName": "foreground/accents/gray/intense",
    "alias": "color/gray/200",
    "type": "color"
  },
  "--hds-foreground-accents-gray-strong": {
    "value": "#CBD5E1",
    "figmaName": "foreground/accents/gray/strong",
    "alias": "color/gray/300",
    "type": "color"
  },
  "--hds-foreground-on-brand": {
    "value": "#020617",
    "figmaName": "foreground/on/brand",
    "alias": "color/gray/950",
    "type": "color"
  },
  "--hds-foreground-on-success": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/success",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-warning": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/warning",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-error": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/error",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-info": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/info",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-royal": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/royal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-teal": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/teal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-cyan": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/cyan",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-violet": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/violet",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-pink": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/pink",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-indigo": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/indigo",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-lime": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/lime",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-green": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/green",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-blue": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/blue",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-orange": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/orange",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-red": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/red",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-amber": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/amber",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-fuchsia": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/fuchsia",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-sky": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/sky",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-gray": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/gray",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-border-disabled": {
    "value": "#334155",
    "figmaName": "border/disabled",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-border-neutral-white": {
    "value": "#000000",
    "figmaName": "border/neutral/white",
    "alias": "color/black/950",
    "type": "color"
  },
  "--hds-border-neutral-subtle": {
    "value": "#1E293B",
    "figmaName": "border/neutral/subtle",
    "alias": "color/gray/800",
    "type": "color"
  },
  "--hds-border-neutral-soft": {
    "value": "#334155",
    "figmaName": "border/neutral/soft",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-border-neutral-default": {
    "value": "#475569",
    "figmaName": "border/neutral/default",
    "alias": "color/gray/600",
    "type": "color"
  },
  "--hds-border-neutral-strong": {
    "value": "#475569",
    "figmaName": "border/neutral/strong",
    "alias": "color/gray/600",
    "type": "color"
  },
  "--hds-border-neutral-intense": {
    "value": "#64758B",
    "figmaName": "border/neutral/intense",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-border-neutral-bold-subtle": {
    "value": "#64758B",
    "figmaName": "border/neutral-bold/subtle",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-border-neutral-bold-soft": {
    "value": "#CBD5E1",
    "figmaName": "border/neutral-bold/soft",
    "alias": "color/gray/300",
    "type": "color"
  },
  "--hds-border-neutral-bold-default": {
    "value": "#E2E8F0",
    "figmaName": "border/neutral-bold/default",
    "alias": "color/gray/200",
    "type": "color"
  },
  "--hds-border-neutral-bold-strong": {
    "value": "#EDF1F6",
    "figmaName": "border/neutral-bold/strong",
    "alias": "color/gray/100",
    "type": "color"
  },
  "--hds-border-neutral-bold-intense": {
    "value": "#F8FAFC",
    "figmaName": "border/neutral-bold/intense",
    "alias": "color/gray/25",
    "type": "color"
  },
  "--hds-border-brand-subtle": {
    "value": "#45310A",
    "figmaName": "border/brand/subtle",
    "alias": "color/yellow/900",
    "type": "color"
  },
  "--hds-border-brand-soft": {
    "value": "#6E4F0C",
    "figmaName": "border/brand/soft",
    "alias": "color/yellow/800",
    "type": "color"
  },
  "--hds-border-brand-default": {
    "value": "#9A7012",
    "figmaName": "border/brand/default",
    "alias": "color/yellow/700",
    "type": "color"
  },
  "--hds-border-brand-strong": {
    "value": "#F0B82E",
    "figmaName": "border/brand/strong",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-border-brand-intense": {
    "value": "#FFDB6E",
    "figmaName": "border/brand/intense",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-border-royal-subtle": {
    "value": "#132149",
    "figmaName": "border/royal/subtle",
    "alias": "color/royal/900",
    "type": "color"
  },
  "--hds-border-royal-soft": {
    "value": "#17316D",
    "figmaName": "border/royal/soft",
    "alias": "color/royal/800",
    "type": "color"
  },
  "--hds-border-royal-default": {
    "value": "#19449A",
    "figmaName": "border/royal/default",
    "alias": "color/royal/700",
    "type": "color"
  },
  "--hds-border-royal-strong": {
    "value": "#246FEA",
    "figmaName": "border/royal/strong",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-border-royal-intense": {
    "value": "#8CB5F8",
    "figmaName": "border/royal/intense",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-border-success-subtle": {
    "value": "#14532D",
    "figmaName": "border/success/subtle",
    "alias": "color/green/900",
    "type": "color"
  },
  "--hds-border-success-soft": {
    "value": "#166534",
    "figmaName": "border/success/soft",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-border-success-default": {
    "value": "#15803D",
    "figmaName": "border/success/default",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-border-success-strong": {
    "value": "#22C55E",
    "figmaName": "border/success/strong",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-border-success-intense": {
    "value": "#86EFAC",
    "figmaName": "border/success/intense",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-border-warning-subtle": {
    "value": "#7C2D12",
    "figmaName": "border/warning/subtle",
    "alias": "color/orange/900",
    "type": "color"
  },
  "--hds-border-warning-soft": {
    "value": "#9A3412",
    "figmaName": "border/warning/soft",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-border-warning-default": {
    "value": "#C2410C",
    "figmaName": "border/warning/default",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-border-warning-strong": {
    "value": "#F97316",
    "figmaName": "border/warning/strong",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-border-warning-intense": {
    "value": "#FDBA74",
    "figmaName": "border/warning/intense",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-border-error-subtle": {
    "value": "#7F1D1D",
    "figmaName": "border/error/subtle",
    "alias": "color/red/900",
    "type": "color"
  },
  "--hds-border-error-soft": {
    "value": "#991B1B",
    "figmaName": "border/error/soft",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-border-error-default": {
    "value": "#B91C1C",
    "figmaName": "border/error/default",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-border-error-strong": {
    "value": "#EF4444",
    "figmaName": "border/error/strong",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-border-error-intense": {
    "value": "#FCA5A5",
    "figmaName": "border/error/intense",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-border-info-subtle": {
    "value": "#1E3A8A",
    "figmaName": "border/info/subtle",
    "alias": "color/blue/900",
    "type": "color"
  },
  "--hds-border-info-soft": {
    "value": "#1E40AF",
    "figmaName": "border/info/soft",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-border-info-default": {
    "value": "#1D4ED8",
    "figmaName": "border/info/default",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-border-info-strong": {
    "value": "#3B82F6",
    "figmaName": "border/info/strong",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-border-info-intense": {
    "value": "#93C5FD",
    "figmaName": "border/info/intense",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-border-accents-teal-subtle": {
    "value": "#134E4A",
    "figmaName": "border/accents/teal/subtle",
    "alias": "color/teal/900",
    "type": "color"
  },
  "--hds-border-accents-teal-soft": {
    "value": "#115E59",
    "figmaName": "border/accents/teal/soft",
    "alias": "color/teal/800",
    "type": "color"
  },
  "--hds-border-accents-teal-default": {
    "value": "#0F766E",
    "figmaName": "border/accents/teal/default",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-border-accents-teal-strong": {
    "value": "#14B8A6",
    "figmaName": "border/accents/teal/strong",
    "alias": "color/teal/500",
    "type": "color"
  },
  "--hds-border-accents-teal-intense": {
    "value": "#5EEAD4",
    "figmaName": "border/accents/teal/intense",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-border-accents-cyan-subtle": {
    "value": "#164E63",
    "figmaName": "border/accents/cyan/subtle",
    "alias": "color/cyan/900",
    "type": "color"
  },
  "--hds-border-accents-cyan-soft": {
    "value": "#155E75",
    "figmaName": "border/accents/cyan/soft",
    "alias": "color/cyan/800",
    "type": "color"
  },
  "--hds-border-accents-cyan-default": {
    "value": "#0E7490",
    "figmaName": "border/accents/cyan/default",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-border-accents-cyan-strong": {
    "value": "#06B6D4",
    "figmaName": "border/accents/cyan/strong",
    "alias": "color/cyan/500",
    "type": "color"
  },
  "--hds-border-accents-cyan-intense": {
    "value": "#67E8F9",
    "figmaName": "border/accents/cyan/intense",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-border-accents-violet-subtle": {
    "value": "#4C1D95",
    "figmaName": "border/accents/violet/subtle",
    "alias": "color/violet/900",
    "type": "color"
  },
  "--hds-border-accents-violet-soft": {
    "value": "#5B21B6",
    "figmaName": "border/accents/violet/soft",
    "alias": "color/violet/800",
    "type": "color"
  },
  "--hds-border-accents-violet-default": {
    "value": "#6D28D9",
    "figmaName": "border/accents/violet/default",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-border-accents-violet-strong": {
    "value": "#8B5CF6",
    "figmaName": "border/accents/violet/strong",
    "alias": "color/violet/500",
    "type": "color"
  },
  "--hds-border-accents-violet-intense": {
    "value": "#C4B5FD",
    "figmaName": "border/accents/violet/intense",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-border-accents-pink-subtle": {
    "value": "#831843",
    "figmaName": "border/accents/pink/subtle",
    "alias": "color/pink/900",
    "type": "color"
  },
  "--hds-border-accents-pink-soft": {
    "value": "#9D174D",
    "figmaName": "border/accents/pink/soft",
    "alias": "color/pink/800",
    "type": "color"
  },
  "--hds-border-accents-pink-default": {
    "value": "#BE185D",
    "figmaName": "border/accents/pink/default",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-border-accents-pink-strong": {
    "value": "#EC4899",
    "figmaName": "border/accents/pink/strong",
    "alias": "color/pink/500",
    "type": "color"
  },
  "--hds-border-accents-pink-intense": {
    "value": "#F9A8D4",
    "figmaName": "border/accents/pink/intense",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-border-accents-indigo-subtle": {
    "value": "#312E81",
    "figmaName": "border/accents/indigo/subtle",
    "alias": "color/indigo/900",
    "type": "color"
  },
  "--hds-border-accents-indigo-soft": {
    "value": "#3730A3",
    "figmaName": "border/accents/indigo/soft",
    "alias": "color/indigo/800",
    "type": "color"
  },
  "--hds-border-accents-indigo-default": {
    "value": "#4338CA",
    "figmaName": "border/accents/indigo/default",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-border-accents-indigo-strong": {
    "value": "#6366F1",
    "figmaName": "border/accents/indigo/strong",
    "alias": "color/indigo/500",
    "type": "color"
  },
  "--hds-border-accents-indigo-intense": {
    "value": "#A5B4FC",
    "figmaName": "border/accents/indigo/intense",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-border-accents-lime-subtle": {
    "value": "#365314",
    "figmaName": "border/accents/lime/subtle",
    "alias": "color/lime/900",
    "type": "color"
  },
  "--hds-border-accents-lime-soft": {
    "value": "#3F6212",
    "figmaName": "border/accents/lime/soft",
    "alias": "color/lime/800",
    "type": "color"
  },
  "--hds-border-accents-lime-default": {
    "value": "#4D7C0F",
    "figmaName": "border/accents/lime/default",
    "alias": "color/lime/700",
    "type": "color"
  },
  "--hds-border-accents-lime-strong": {
    "value": "#84CC16",
    "figmaName": "border/accents/lime/strong",
    "alias": "color/lime/500",
    "type": "color"
  },
  "--hds-border-accents-lime-intense": {
    "value": "#BEF264",
    "figmaName": "border/accents/lime/intense",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-border-accents-amber-subtle": {
    "value": "#78350F",
    "figmaName": "border/accents/amber/subtle",
    "alias": "color/amber/900",
    "type": "color"
  },
  "--hds-border-accents-amber-soft": {
    "value": "#92400E",
    "figmaName": "border/accents/amber/soft",
    "alias": "color/amber/800",
    "type": "color"
  },
  "--hds-border-accents-amber-default": {
    "value": "#B45309",
    "figmaName": "border/accents/amber/default",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-border-accents-amber-strong": {
    "value": "#F59E0B",
    "figmaName": "border/accents/amber/strong",
    "alias": "color/amber/500",
    "type": "color"
  },
  "--hds-border-accents-amber-intense": {
    "value": "#FCD34D",
    "figmaName": "border/accents/amber/intense",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-border-accents-sky-subtle": {
    "value": "#0B4D74",
    "figmaName": "border/accents/sky/subtle",
    "alias": "color/sky/900",
    "type": "color"
  },
  "--hds-border-accents-sky-soft": {
    "value": "#065B89",
    "figmaName": "border/accents/sky/soft",
    "alias": "color/sky/800",
    "type": "color"
  },
  "--hds-border-accents-sky-default": {
    "value": "#0081C2",
    "figmaName": "border/accents/sky/default",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-border-accents-sky-strong": {
    "value": "#3DC1FA",
    "figmaName": "border/accents/sky/strong",
    "alias": "color/sky/500",
    "type": "color"
  },
  "--hds-border-accents-sky-intense": {
    "value": "#C9E8FD",
    "figmaName": "border/accents/sky/intense",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-subtle": {
    "value": "#701A75",
    "figmaName": "border/accents/fuchsia/subtle",
    "alias": "color/fuchsia/900",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-soft": {
    "value": "#86198F",
    "figmaName": "border/accents/fuchsia/soft",
    "alias": "color/fuchsia/800",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-default": {
    "value": "#A21CAF",
    "figmaName": "border/accents/fuchsia/default",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-strong": {
    "value": "#D946EF",
    "figmaName": "border/accents/fuchsia/strong",
    "alias": "color/fuchsia/500",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-intense": {
    "value": "#F0ABFC",
    "figmaName": "border/accents/fuchsia/intense",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-border-accents-green-subtle": {
    "value": "#14532D",
    "figmaName": "border/accents/green/subtle",
    "alias": "color/green/900",
    "type": "color"
  },
  "--hds-border-accents-green-soft": {
    "value": "#166534",
    "figmaName": "border/accents/green/soft",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-border-accents-green-default": {
    "value": "#15803D",
    "figmaName": "border/accents/green/default",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-border-accents-green-intense": {
    "value": "#86EFAC",
    "figmaName": "border/accents/green/intense",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-border-accents-green-strong": {
    "value": "#22C55E",
    "figmaName": "border/accents/green/strong",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-border-accents-blue-subtle": {
    "value": "#1E3A8A",
    "figmaName": "border/accents/blue/subtle",
    "alias": "color/blue/900",
    "type": "color"
  },
  "--hds-border-accents-blue-soft": {
    "value": "#1E40AF",
    "figmaName": "border/accents/blue/soft",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-border-accents-blue-default": {
    "value": "#1D4ED8",
    "figmaName": "border/accents/blue/default",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-border-accents-blue-intense": {
    "value": "#93C5FD",
    "figmaName": "border/accents/blue/intense",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-border-accents-blue-strong": {
    "value": "#3B82F6",
    "figmaName": "border/accents/blue/strong",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-border-accents-orange-subtle": {
    "value": "#7C2D12",
    "figmaName": "border/accents/orange/subtle",
    "alias": "color/orange/900",
    "type": "color"
  },
  "--hds-border-accents-orange-soft": {
    "value": "#9A3412",
    "figmaName": "border/accents/orange/soft",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-border-accents-orange-default": {
    "value": "#C2410C",
    "figmaName": "border/accents/orange/default",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-border-accents-orange-intense": {
    "value": "#FDBA74",
    "figmaName": "border/accents/orange/intense",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-border-accents-orange-strong": {
    "value": "#F97316",
    "figmaName": "border/accents/orange/strong",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-border-accents-red-subtle": {
    "value": "#7F1D1D",
    "figmaName": "border/accents/red/subtle",
    "alias": "color/red/900",
    "type": "color"
  },
  "--hds-border-accents-red-soft": {
    "value": "#991B1B",
    "figmaName": "border/accents/red/soft",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-border-accents-red-default": {
    "value": "#B91C1C",
    "figmaName": "border/accents/red/default",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-border-accents-red-intense": {
    "value": "#FCA5A5",
    "figmaName": "border/accents/red/intense",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-border-accents-red-strong": {
    "value": "#EF4444",
    "figmaName": "border/accents/red/strong",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-border-accents-gray-subtle": {
    "value": "#0F172A",
    "figmaName": "border/accents/gray/subtle",
    "alias": "color/gray/900",
    "type": "color"
  },
  "--hds-border-accents-gray-soft": {
    "value": "#1E293B",
    "figmaName": "border/accents/gray/soft",
    "alias": "color/gray/800",
    "type": "color"
  },
  "--hds-border-accents-gray-default": {
    "value": "#334155",
    "figmaName": "border/accents/gray/default",
    "alias": "color/gray/700",
    "type": "color"
  },
  "--hds-border-accents-gray-intense": {
    "value": "#CBD5E1",
    "figmaName": "border/accents/gray/intense",
    "alias": "color/gray/300",
    "type": "color"
  },
  "--hds-border-accents-gray-strong": {
    "value": "#64758B",
    "figmaName": "border/accents/gray/strong",
    "alias": "color/gray/500",
    "type": "color"
  },
  "--hds-charts-1": {
    "value": "#60A5FA",
    "figmaName": "charts/1",
    "alias": "color/blue/400",
    "type": "color"
  },
  "--hds-charts-2": {
    "value": "#2DD4BF",
    "figmaName": "charts/2",
    "alias": "color/teal/400",
    "type": "color"
  },
  "--hds-charts-3": {
    "value": "#FB923C",
    "figmaName": "charts/3",
    "alias": "color/orange/400",
    "type": "color"
  },
  "--hds-charts-4": {
    "value": "#A78BFA",
    "figmaName": "charts/4",
    "alias": "color/violet/400",
    "type": "color"
  },
  "--hds-charts-5": {
    "value": "#F472B6",
    "figmaName": "charts/5",
    "alias": "color/pink/400",
    "type": "color"
  },
  "--hds-charts-6": {
    "value": "#4ADE80",
    "figmaName": "charts/6",
    "alias": "color/green/400",
    "type": "color"
  },
  "--hds-charts-7": {
    "value": "#F87171",
    "figmaName": "charts/7",
    "alias": "color/red/400",
    "type": "color"
  },
  "--hds-charts-8": {
    "value": "#22D3EE",
    "figmaName": "charts/8",
    "alias": "color/cyan/400",
    "type": "color"
  },
  "--hds-effect-focus-brand": {
    "value": "rgb(255 207 84 / 0.5)",
    "figmaName": "effect/focus/brand",
    "alias": "color/yellow/alpha/50",
    "type": "color"
  },
  "--hds-effect-focus-neutral": {
    "value": "rgb(115 115 115 / 0.5)",
    "figmaName": "effect/focus/neutral",
    "alias": "color/gray/alpha/50",
    "type": "color"
  },
  "--hds-effect-focus-royal": {
    "value": "rgb(36 111 234 / 0.5)",
    "figmaName": "effect/focus/royal",
    "alias": "color/royal/alpha/50",
    "type": "color"
  },
  "--hds-effect-focus-error": {
    "value": "rgb(239 68 68 / 0.4)",
    "figmaName": "effect/focus/error",
    "alias": "color/red/alpha/40",
    "type": "color"
  }
} as TokenMap,
  omniLight: {
  "--hds-text-inverse": {
    "value": "#F8FAFC",
    "figmaName": "text/inverse",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-text-disabled": {
    "value": "#94A3B8",
    "figmaName": "text/disabled",
    "alias": "color/Slate/400",
    "type": "color"
  },
  "--hds-text-neutral-white": {
    "value": "#FFFFFF",
    "figmaName": "text/neutral/White",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-neutral-subtle": {
    "value": "#94A3B8",
    "figmaName": "text/neutral/subtle",
    "alias": "color/Slate/400",
    "type": "color"
  },
  "--hds-text-neutral-soft": {
    "value": "#64758B",
    "figmaName": "text/neutral/soft",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-text-neutral-default": {
    "value": "#334155",
    "figmaName": "text/neutral/default",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-text-neutral-strong": {
    "value": "#0F172A",
    "figmaName": "text/neutral/strong",
    "alias": "color/Slate/900",
    "type": "color"
  },
  "--hds-text-neutral-intense": {
    "value": "#020617",
    "figmaName": "text/neutral/intense",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-text-brand-subtle": {
    "value": "#FFDB6E",
    "figmaName": "text/brand/subtle",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-text-brand-soft": {
    "value": "#F0B82E",
    "figmaName": "text/brand/soft",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-text-brand-default": {
    "value": "#C8941A",
    "figmaName": "text/brand/default",
    "alias": "color/yellow/600",
    "type": "color"
  },
  "--hds-text-brand-strong": {
    "value": "#9A7012",
    "figmaName": "text/brand/strong",
    "alias": "color/yellow/700",
    "type": "color"
  },
  "--hds-text-brand-intense": {
    "value": "#6E4F0C",
    "figmaName": "text/brand/intense",
    "alias": "color/yellow/800",
    "type": "color"
  },
  "--hds-text-royal-subtle": {
    "value": "#8CB5F8",
    "figmaName": "text/royal/subtle",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-text-royal-soft": {
    "value": "#246FEA",
    "figmaName": "text/royal/soft",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-text-royal-default": {
    "value": "#1956C8",
    "figmaName": "text/royal/default",
    "alias": "color/royal/600",
    "type": "color"
  },
  "--hds-text-royal-strong": {
    "value": "#19449A",
    "figmaName": "text/royal/strong",
    "alias": "color/royal/700",
    "type": "color"
  },
  "--hds-text-royal-intense": {
    "value": "#17316D",
    "figmaName": "text/royal/intense",
    "alias": "color/royal/800",
    "type": "color"
  },
  "--hds-text-success-subtle": {
    "value": "#22C55E",
    "figmaName": "text/success/subtle",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-text-success-soft": {
    "value": "#16A34A",
    "figmaName": "text/success/soft",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-text-success-default": {
    "value": "#15803D",
    "figmaName": "text/success/default",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-text-success-strong": {
    "value": "#166534",
    "figmaName": "text/success/strong",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-text-success-intense": {
    "value": "#14532D",
    "figmaName": "text/success/intense",
    "alias": "color/green/900",
    "type": "color"
  },
  "--hds-text-warning-subtle": {
    "value": "#F97316",
    "figmaName": "text/warning/subtle",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-text-warning-soft": {
    "value": "#EA580C",
    "figmaName": "text/warning/soft",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-text-warning-default": {
    "value": "#C2410C",
    "figmaName": "text/warning/default",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-text-warning-strong": {
    "value": "#9A3412",
    "figmaName": "text/warning/strong",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-text-warning-intense": {
    "value": "#7C2D12",
    "figmaName": "text/warning/intense",
    "alias": "color/orange/900",
    "type": "color"
  },
  "--hds-text-error-subtle": {
    "value": "#EF4444",
    "figmaName": "text/error/subtle",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-text-error-soft": {
    "value": "#DC2626",
    "figmaName": "text/error/soft",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-text-error-default": {
    "value": "#B91C1C",
    "figmaName": "text/error/default",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-text-error-strong": {
    "value": "#991B1B",
    "figmaName": "text/error/strong",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-text-error-intense": {
    "value": "#7F1D1D",
    "figmaName": "text/error/intense",
    "alias": "color/red/900",
    "type": "color"
  },
  "--hds-text-info-subtle": {
    "value": "#3B82F6",
    "figmaName": "text/info/subtle",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-text-info-soft": {
    "value": "#2563EB",
    "figmaName": "text/info/soft",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-text-info-default": {
    "value": "#1D4ED8",
    "figmaName": "text/info/default",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-text-info-strong": {
    "value": "#1E40AF",
    "figmaName": "text/info/strong",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-text-info-intense": {
    "value": "#1E3A8A",
    "figmaName": "text/info/intense",
    "alias": "color/blue/900",
    "type": "color"
  },
  "--hds-text-accents-teal-subtle": {
    "value": "#14B8A6",
    "figmaName": "text/accents/teal/subtle",
    "alias": "color/teal/500",
    "type": "color"
  },
  "--hds-text-accents-teal-soft": {
    "value": "#0D9488",
    "figmaName": "text/accents/teal/soft",
    "alias": "color/teal/600",
    "type": "color"
  },
  "--hds-text-accents-teal-default": {
    "value": "#0F766E",
    "figmaName": "text/accents/teal/default",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-text-accents-teal-strong": {
    "value": "#0F766E",
    "figmaName": "text/accents/teal/strong",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-text-accents-teal-intense": {
    "value": "#115E59",
    "figmaName": "text/accents/teal/intense",
    "alias": "color/teal/800",
    "type": "color"
  },
  "--hds-text-accents-cyan-subtle": {
    "value": "#06B6D4",
    "figmaName": "text/accents/cyan/subtle",
    "alias": "color/cyan/500",
    "type": "color"
  },
  "--hds-text-accents-cyan-soft": {
    "value": "#0891B2",
    "figmaName": "text/accents/cyan/soft",
    "alias": "color/cyan/600",
    "type": "color"
  },
  "--hds-text-accents-cyan-default": {
    "value": "#0E7490",
    "figmaName": "text/accents/cyan/default",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-text-accents-cyan-strong": {
    "value": "#0E7490",
    "figmaName": "text/accents/cyan/strong",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-text-accents-cyan-intense": {
    "value": "#155E75",
    "figmaName": "text/accents/cyan/intense",
    "alias": "color/cyan/800",
    "type": "color"
  },
  "--hds-text-accents-violet-subtle": {
    "value": "#8B5CF6",
    "figmaName": "text/accents/violet/subtle",
    "alias": "color/violet/500",
    "type": "color"
  },
  "--hds-text-accents-violet-soft": {
    "value": "#7C3AED",
    "figmaName": "text/accents/violet/soft",
    "alias": "color/violet/600",
    "type": "color"
  },
  "--hds-text-accents-violet-default": {
    "value": "#6D28D9",
    "figmaName": "text/accents/violet/default",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-text-accents-violet-strong": {
    "value": "#6D28D9",
    "figmaName": "text/accents/violet/strong",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-text-accents-violet-intense": {
    "value": "#5B21B6",
    "figmaName": "text/accents/violet/intense",
    "alias": "color/violet/800",
    "type": "color"
  },
  "--hds-text-accents-pink-subtle": {
    "value": "#EC4899",
    "figmaName": "text/accents/pink/subtle",
    "alias": "color/pink/500",
    "type": "color"
  },
  "--hds-text-accents-pink-soft": {
    "value": "#DB2777",
    "figmaName": "text/accents/pink/soft",
    "alias": "color/pink/600",
    "type": "color"
  },
  "--hds-text-accents-pink-default": {
    "value": "#BE185D",
    "figmaName": "text/accents/pink/default",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-text-accents-pink-strong": {
    "value": "#BE185D",
    "figmaName": "text/accents/pink/strong",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-text-accents-pink-intense": {
    "value": "#9D174D",
    "figmaName": "text/accents/pink/intense",
    "alias": "color/pink/800",
    "type": "color"
  },
  "--hds-text-accents-indigo-subtle": {
    "value": "#6366F1",
    "figmaName": "text/accents/indigo/subtle",
    "alias": "color/indigo/500",
    "type": "color"
  },
  "--hds-text-accents-indigo-soft": {
    "value": "#4F46E5",
    "figmaName": "text/accents/indigo/soft",
    "alias": "color/indigo/600",
    "type": "color"
  },
  "--hds-text-accents-indigo-default": {
    "value": "#4338CA",
    "figmaName": "text/accents/indigo/default",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-text-accents-indigo-strong": {
    "value": "#4338CA",
    "figmaName": "text/accents/indigo/strong",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-text-accents-indigo-intense": {
    "value": "#3730A3",
    "figmaName": "text/accents/indigo/intense",
    "alias": "color/indigo/800",
    "type": "color"
  },
  "--hds-text-accents-lime-subtle": {
    "value": "#65A30D",
    "figmaName": "text/accents/lime/subtle",
    "alias": "color/lime/600",
    "type": "color"
  },
  "--hds-text-accents-lime-soft": {
    "value": "#4D7C0F",
    "figmaName": "text/accents/lime/soft",
    "alias": "color/lime/700",
    "type": "color"
  },
  "--hds-text-accents-lime-default": {
    "value": "#3F6212",
    "figmaName": "text/accents/lime/default",
    "alias": "color/lime/800",
    "type": "color"
  },
  "--hds-text-accents-lime-strong": {
    "value": "#3F6212",
    "figmaName": "text/accents/lime/strong",
    "alias": "color/lime/800",
    "type": "color"
  },
  "--hds-text-accents-lime-intense": {
    "value": "#365314",
    "figmaName": "text/accents/lime/intense",
    "alias": "color/lime/900",
    "type": "color"
  },
  "--hds-text-accents-amber-subtle": {
    "value": "#F59E0B",
    "figmaName": "text/accents/amber/subtle",
    "alias": "color/amber/500",
    "type": "color"
  },
  "--hds-text-accents-amber-soft": {
    "value": "#D97706",
    "figmaName": "text/accents/amber/soft",
    "alias": "color/amber/600",
    "type": "color"
  },
  "--hds-text-accents-amber-default": {
    "value": "#B45309",
    "figmaName": "text/accents/amber/default",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-text-accents-amber-strong": {
    "value": "#B45309",
    "figmaName": "text/accents/amber/strong",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-text-accents-amber-intense": {
    "value": "#92400E",
    "figmaName": "text/accents/amber/intense",
    "alias": "color/amber/800",
    "type": "color"
  },
  "--hds-text-accents-sky-subtle": {
    "value": "#3DC1FA",
    "figmaName": "text/accents/sky/subtle",
    "alias": "color/sky/500",
    "type": "color"
  },
  "--hds-text-accents-sky-soft": {
    "value": "#0BA7EF",
    "figmaName": "text/accents/sky/soft",
    "alias": "color/sky/600",
    "type": "color"
  },
  "--hds-text-accents-sky-default": {
    "value": "#0081C2",
    "figmaName": "text/accents/sky/default",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-text-accents-sky-strong": {
    "value": "#0081C2",
    "figmaName": "text/accents/sky/strong",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-text-accents-sky-intense": {
    "value": "#065B89",
    "figmaName": "text/accents/sky/intense",
    "alias": "color/sky/800",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-subtle": {
    "value": "#D946EF",
    "figmaName": "text/accents/fuchsia/subtle",
    "alias": "color/fuchsia/500",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-soft": {
    "value": "#C026D3",
    "figmaName": "text/accents/fuchsia/soft",
    "alias": "color/fuchsia/600",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-default": {
    "value": "#A21CAF",
    "figmaName": "text/accents/fuchsia/default",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-strong": {
    "value": "#A21CAF",
    "figmaName": "text/accents/fuchsia/strong",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-intense": {
    "value": "#86198F",
    "figmaName": "text/accents/fuchsia/intense",
    "alias": "color/fuchsia/800",
    "type": "color"
  },
  "--hds-text-accents-green-subtle": {
    "value": "#22C55E",
    "figmaName": "text/accents/green/subtle",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-text-accents-green-soft": {
    "value": "#16A34A",
    "figmaName": "text/accents/green/soft",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-text-accents-green-default": {
    "value": "#15803D",
    "figmaName": "text/accents/green/default",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-text-accents-green-intense": {
    "value": "#166534",
    "figmaName": "text/accents/green/intense",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-text-accents-green-strong": {
    "value": "#15803D",
    "figmaName": "text/accents/green/strong",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-text-accents-blue-subtle": {
    "value": "#3B82F6",
    "figmaName": "text/accents/blue/subtle",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-text-accents-blue-soft": {
    "value": "#2563EB",
    "figmaName": "text/accents/blue/soft",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-text-accents-blue-default": {
    "value": "#1D4ED8",
    "figmaName": "text/accents/blue/default",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-text-accents-blue-intense": {
    "value": "#1E40AF",
    "figmaName": "text/accents/blue/intense",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-text-accents-blue-strong": {
    "value": "#1D4ED8",
    "figmaName": "text/accents/blue/strong",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-text-accents-orange-subtle": {
    "value": "#F97316",
    "figmaName": "text/accents/orange/subtle",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-text-accents-orange-soft": {
    "value": "#EA580C",
    "figmaName": "text/accents/orange/soft",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-text-accents-orange-default": {
    "value": "#C2410C",
    "figmaName": "text/accents/orange/default",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-text-accents-orange-intense": {
    "value": "#9A3412",
    "figmaName": "text/accents/orange/intense",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-text-accents-orange-strong": {
    "value": "#C2410C",
    "figmaName": "text/accents/orange/strong",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-text-accents-red-subtle": {
    "value": "#EF4444",
    "figmaName": "text/accents/red/subtle",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-text-accents-red-soft": {
    "value": "#DC2626",
    "figmaName": "text/accents/red/soft",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-text-accents-red-default": {
    "value": "#B91C1C",
    "figmaName": "text/accents/red/default",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-text-accents-red-intense": {
    "value": "#991B1B",
    "figmaName": "text/accents/red/intense",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-text-accents-red-strong": {
    "value": "#B91C1C",
    "figmaName": "text/accents/red/strong",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-text-accents-gray-subtle": {
    "value": "#64758B",
    "figmaName": "text/accents/gray/subtle",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-text-accents-gray-soft": {
    "value": "#475569",
    "figmaName": "text/accents/gray/soft",
    "alias": "color/Slate/600",
    "type": "color"
  },
  "--hds-text-accents-gray-default": {
    "value": "#334155",
    "figmaName": "text/accents/gray/default",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-text-accents-gray-intense": {
    "value": "#1E293B",
    "figmaName": "text/accents/gray/intense",
    "alias": "color/Slate/800",
    "type": "color"
  },
  "--hds-text-accents-gray-strong": {
    "value": "#334155",
    "figmaName": "text/accents/gray/strong",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-text-on-brand": {
    "value": "#020617",
    "figmaName": "text/on/brand",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-text-on-success": {
    "value": "#FFFFFF",
    "figmaName": "text/on/success",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-warning": {
    "value": "#FFFFFF",
    "figmaName": "text/on/warning",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-error": {
    "value": "#FFFFFF",
    "figmaName": "text/on/error",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-info": {
    "value": "#FFFFFF",
    "figmaName": "text/on/info",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-royal": {
    "value": "#FFFFFF",
    "figmaName": "text/on/royal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-teal": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/teal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-cyan": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/cyan",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-violet": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/violet",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-pink": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/pink",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-indigo": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/indigo",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-lime": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/lime",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-amber": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/amber",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-sky": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/sky",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-fuchsia": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/fuchsia",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-green": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/green",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-blue": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/blue",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-orange": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/orange",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-red": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/red",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-gray": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/gray",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-background-disabled": {
    "value": "#F8FAFC",
    "figmaName": "background/disabled",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-background-overlay": {
    "value": "rgb(0 0 0 / 0.55)",
    "figmaName": "background/overlay",
    "alias": "color/black/alpha/55",
    "type": "color"
  },
  "--hds-background-alpha-black-5": {
    "value": "rgb(0 0 0 / 0.05)",
    "figmaName": "background/alpha/black/5",
    "alias": "color/black/alpha/5",
    "type": "color"
  },
  "--hds-background-alpha-black-10": {
    "value": "rgb(0 0 0 / 0.1)",
    "figmaName": "background/alpha/black/10",
    "alias": "color/black/alpha/10",
    "type": "color"
  },
  "--hds-background-static-white": {
    "value": "#FFFFFF",
    "figmaName": "background/static/white",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-background-static-black": {
    "value": "#020617",
    "figmaName": "background/static/black",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-background-neutral-white": {
    "value": "#FFFFFF",
    "figmaName": "background/neutral/white",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-background-neutral-subtle": {
    "value": "#F8FAFC",
    "figmaName": "background/neutral/subtle",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-background-neutral-soft": {
    "value": "#F8FAFC",
    "figmaName": "background/neutral/soft",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-background-neutral-default": {
    "value": "#F1F5F9",
    "figmaName": "background/neutral/default",
    "alias": "color/Slate/100",
    "type": "color"
  },
  "--hds-background-neutral-strong": {
    "value": "#E2E8F0",
    "figmaName": "background/neutral/strong",
    "alias": "color/Slate/200",
    "type": "color"
  },
  "--hds-background-neutral-bold-soft": {
    "value": "#334155",
    "figmaName": "background/neutral-bold/soft",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-background-neutral-bold-default": {
    "value": "#1E293B",
    "figmaName": "background/neutral-bold/default",
    "alias": "color/Slate/800",
    "type": "color"
  },
  "--hds-background-neutral-bold-strong": {
    "value": "#0F172A",
    "figmaName": "background/neutral-bold/strong",
    "alias": "color/Slate/900",
    "type": "color"
  },
  "--hds-background-neutral-bold-intense": {
    "value": "#020617",
    "figmaName": "background/neutral-bold/intense",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-background-neutral-bold-black": {
    "value": "#000000",
    "figmaName": "background/neutral-bold/black",
    "alias": "color/black/950",
    "type": "color"
  },
  "--hds-background-brand-subtle": {
    "value": "#FFFBEB",
    "figmaName": "background/brand/subtle",
    "alias": "color/yellow/50",
    "type": "color"
  },
  "--hds-background-brand-soft": {
    "value": "#FFF4C7",
    "figmaName": "background/brand/soft",
    "alias": "color/yellow/100",
    "type": "color"
  },
  "--hds-background-brand-default": {
    "value": "#FFCF54",
    "figmaName": "background/brand/default",
    "alias": "color/yellow/400",
    "type": "color"
  },
  "--hds-background-brand-strong": {
    "value": "#F0B82E",
    "figmaName": "background/brand/strong",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-background-brand-intense": {
    "value": "#C8941A",
    "figmaName": "background/brand/intense",
    "alias": "color/yellow/600",
    "type": "color"
  },
  "--hds-background-royal-subtle": {
    "value": "#EBF3FF",
    "figmaName": "background/royal/subtle",
    "alias": "color/royal/50",
    "type": "color"
  },
  "--hds-background-royal-soft": {
    "value": "#D8E7FD",
    "figmaName": "background/royal/soft",
    "alias": "color/royal/100",
    "type": "color"
  },
  "--hds-background-royal-default": {
    "value": "#246FEA",
    "figmaName": "background/royal/default",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-background-royal-strong": {
    "value": "#1956C8",
    "figmaName": "background/royal/strong",
    "alias": "color/royal/600",
    "type": "color"
  },
  "--hds-background-royal-intense": {
    "value": "#19449A",
    "figmaName": "background/royal/intense",
    "alias": "color/royal/700",
    "type": "color"
  },
  "--hds-background-success-subtle": {
    "value": "#F0FDF4",
    "figmaName": "background/success/subtle",
    "alias": "color/green/50",
    "type": "color"
  },
  "--hds-background-success-soft": {
    "value": "#DCFCE7",
    "figmaName": "background/success/soft",
    "alias": "color/green/100",
    "type": "color"
  },
  "--hds-background-success-default": {
    "value": "#22C55E",
    "figmaName": "background/success/default",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-background-success-strong": {
    "value": "#15803D",
    "figmaName": "background/success/strong",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-background-success-intense": {
    "value": "#166534",
    "figmaName": "background/success/intense",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-background-warning-subtle": {
    "value": "#FFF7ED",
    "figmaName": "background/warning/subtle",
    "alias": "color/orange/50",
    "type": "color"
  },
  "--hds-background-warning-soft": {
    "value": "#FFEDD5",
    "figmaName": "background/warning/soft",
    "alias": "color/orange/100",
    "type": "color"
  },
  "--hds-background-warning-default": {
    "value": "#FDBA74",
    "figmaName": "background/warning/default",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-background-warning-strong": {
    "value": "#F97316",
    "figmaName": "background/warning/strong",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-background-warning-intense": {
    "value": "#C2410C",
    "figmaName": "background/warning/intense",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-background-error-subtle": {
    "value": "#FEF2F2",
    "figmaName": "background/error/subtle",
    "alias": "color/red/50",
    "type": "color"
  },
  "--hds-background-error-soft": {
    "value": "#FEE2E2",
    "figmaName": "background/error/soft",
    "alias": "color/red/100",
    "type": "color"
  },
  "--hds-background-error-default": {
    "value": "#DC2626",
    "figmaName": "background/error/default",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-background-error-strong": {
    "value": "#B91C1C",
    "figmaName": "background/error/strong",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-background-error-intense": {
    "value": "#991B1B",
    "figmaName": "background/error/intense",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-background-info-subtle": {
    "value": "#EFF6FF",
    "figmaName": "background/info/subtle",
    "alias": "color/blue/50",
    "type": "color"
  },
  "--hds-background-info-soft": {
    "value": "#DBEAFE",
    "figmaName": "background/info/soft",
    "alias": "color/blue/100",
    "type": "color"
  },
  "--hds-background-info-default": {
    "value": "#2563EB",
    "figmaName": "background/info/default",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-background-info-strong": {
    "value": "#1D4ED8",
    "figmaName": "background/info/strong",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-background-info-intense": {
    "value": "#1E40AF",
    "figmaName": "background/info/intense",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-background-accents-teal-subtle": {
    "value": "#F0FDFA",
    "figmaName": "background/accents/teal/subtle",
    "alias": "color/teal/50",
    "type": "color"
  },
  "--hds-background-accents-teal-soft": {
    "value": "#CCFBF1",
    "figmaName": "background/accents/teal/soft",
    "alias": "color/teal/100",
    "type": "color"
  },
  "--hds-background-accents-teal-default": {
    "value": "#5EEAD4",
    "figmaName": "background/accents/teal/default",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-background-accents-teal-strong": {
    "value": "#0D9488",
    "figmaName": "background/accents/teal/strong",
    "alias": "color/teal/600",
    "type": "color"
  },
  "--hds-background-accents-teal-intense": {
    "value": "#0F766E",
    "figmaName": "background/accents/teal/intense",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-background-accents-cyan-subtle": {
    "value": "#ECFEFF",
    "figmaName": "background/accents/cyan/subtle",
    "alias": "color/cyan/50",
    "type": "color"
  },
  "--hds-background-accents-cyan-soft": {
    "value": "#CFFAFE",
    "figmaName": "background/accents/cyan/soft",
    "alias": "color/cyan/100",
    "type": "color"
  },
  "--hds-background-accents-cyan-default": {
    "value": "#67E8F9",
    "figmaName": "background/accents/cyan/default",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-background-accents-cyan-strong": {
    "value": "#0891B2",
    "figmaName": "background/accents/cyan/strong",
    "alias": "color/cyan/600",
    "type": "color"
  },
  "--hds-background-accents-cyan-intense": {
    "value": "#0E7490",
    "figmaName": "background/accents/cyan/intense",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-background-accents-violet-subtle": {
    "value": "#F5F3FF",
    "figmaName": "background/accents/violet/subtle",
    "alias": "color/violet/50",
    "type": "color"
  },
  "--hds-background-accents-violet-soft": {
    "value": "#EDE9FE",
    "figmaName": "background/accents/violet/soft",
    "alias": "color/violet/100",
    "type": "color"
  },
  "--hds-background-accents-violet-default": {
    "value": "#C4B5FD",
    "figmaName": "background/accents/violet/default",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-background-accents-violet-strong": {
    "value": "#7C3AED",
    "figmaName": "background/accents/violet/strong",
    "alias": "color/violet/600",
    "type": "color"
  },
  "--hds-background-accents-violet-intense": {
    "value": "#6D28D9",
    "figmaName": "background/accents/violet/intense",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-background-accents-pink-subtle": {
    "value": "#FDF2F8",
    "figmaName": "background/accents/pink/subtle",
    "alias": "color/pink/50",
    "type": "color"
  },
  "--hds-background-accents-pink-soft": {
    "value": "#FCE7F3",
    "figmaName": "background/accents/pink/soft",
    "alias": "color/pink/100",
    "type": "color"
  },
  "--hds-background-accents-pink-default": {
    "value": "#F9A8D4",
    "figmaName": "background/accents/pink/default",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-background-accents-pink-strong": {
    "value": "#DB2777",
    "figmaName": "background/accents/pink/strong",
    "alias": "color/pink/600",
    "type": "color"
  },
  "--hds-background-accents-pink-intense": {
    "value": "#BE185D",
    "figmaName": "background/accents/pink/intense",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-background-accents-indigo-subtle": {
    "value": "#EEF2FF",
    "figmaName": "background/accents/indigo/subtle",
    "alias": "color/indigo/50",
    "type": "color"
  },
  "--hds-background-accents-indigo-soft": {
    "value": "#E0E7FF",
    "figmaName": "background/accents/indigo/soft",
    "alias": "color/indigo/100",
    "type": "color"
  },
  "--hds-background-accents-indigo-default": {
    "value": "#A5B4FC",
    "figmaName": "background/accents/indigo/default",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-background-accents-indigo-strong": {
    "value": "#4F46E5",
    "figmaName": "background/accents/indigo/strong",
    "alias": "color/indigo/600",
    "type": "color"
  },
  "--hds-background-accents-indigo-intense": {
    "value": "#4338CA",
    "figmaName": "background/accents/indigo/intense",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-background-accents-lime-subtle": {
    "value": "#F7FEE7",
    "figmaName": "background/accents/lime/subtle",
    "alias": "color/lime/50",
    "type": "color"
  },
  "--hds-background-accents-lime-soft": {
    "value": "#ECFCCB",
    "figmaName": "background/accents/lime/soft",
    "alias": "color/lime/100",
    "type": "color"
  },
  "--hds-background-accents-lime-default": {
    "value": "#BEF264",
    "figmaName": "background/accents/lime/default",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-background-accents-lime-strong": {
    "value": "#65A30D",
    "figmaName": "background/accents/lime/strong",
    "alias": "color/lime/600",
    "type": "color"
  },
  "--hds-background-accents-lime-intense": {
    "value": "#4D7C0F",
    "figmaName": "background/accents/lime/intense",
    "alias": "color/lime/700",
    "type": "color"
  },
  "--hds-background-accents-amber-subtle": {
    "value": "#FFFBEB",
    "figmaName": "background/accents/amber/subtle",
    "alias": "color/amber/50",
    "type": "color"
  },
  "--hds-background-accents-amber-soft": {
    "value": "#FEF3C7",
    "figmaName": "background/accents/amber/soft",
    "alias": "color/amber/100",
    "type": "color"
  },
  "--hds-background-accents-amber-default": {
    "value": "#FCD34D",
    "figmaName": "background/accents/amber/default",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-background-accents-amber-strong": {
    "value": "#D97706",
    "figmaName": "background/accents/amber/strong",
    "alias": "color/amber/600",
    "type": "color"
  },
  "--hds-background-accents-amber-intense": {
    "value": "#B45309",
    "figmaName": "background/accents/amber/intense",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-background-accents-sky-subtle": {
    "value": "#F0F9FF",
    "figmaName": "background/accents/sky/subtle",
    "alias": "color/sky/50",
    "type": "color"
  },
  "--hds-background-accents-sky-soft": {
    "value": "#EBF7FF",
    "figmaName": "background/accents/sky/soft",
    "alias": "color/sky/100",
    "type": "color"
  },
  "--hds-background-accents-sky-default": {
    "value": "#C9E8FD",
    "figmaName": "background/accents/sky/default",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-background-accents-sky-strong": {
    "value": "#0BA7EF",
    "figmaName": "background/accents/sky/strong",
    "alias": "color/sky/600",
    "type": "color"
  },
  "--hds-background-accents-sky-intense": {
    "value": "#0081C2",
    "figmaName": "background/accents/sky/intense",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-subtle": {
    "value": "#FDF4FF",
    "figmaName": "background/accents/fuchsia/subtle",
    "alias": "color/fuchsia/50",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-soft": {
    "value": "#FAE8FF",
    "figmaName": "background/accents/fuchsia/soft",
    "alias": "color/fuchsia/100",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-default": {
    "value": "#F0ABFC",
    "figmaName": "background/accents/fuchsia/default",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-strong": {
    "value": "#C026D3",
    "figmaName": "background/accents/fuchsia/strong",
    "alias": "color/fuchsia/600",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-intense": {
    "value": "#A21CAF",
    "figmaName": "background/accents/fuchsia/intense",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-background-accents-hig-subtle": {
    "value": "#FBFCFE",
    "figmaName": "background/accents/hig/Subtle",
    "alias": "color/hig/25",
    "type": "color"
  },
  "--hds-background-accents-hig-soft": {
    "value": "#F6F8FC",
    "figmaName": "background/accents/hig/Soft",
    "alias": "color/hig/50",
    "type": "color"
  },
  "--hds-background-accents-hig-default": {
    "value": "#F0F3FA",
    "figmaName": "background/accents/hig/Default",
    "alias": "color/hig/100",
    "type": "color"
  },
  "--hds-background-accents-hig-strong": {
    "value": "#E8EDF7",
    "figmaName": "background/accents/hig/Strong",
    "alias": "color/hig/200",
    "type": "color"
  },
  "--hds-background-accents-hig-intense": {
    "value": "#D9E1F2",
    "figmaName": "background/accents/hig/Intense",
    "alias": "color/hig/300",
    "type": "color"
  },
  "--hds-background-accents-green-subtle": {
    "value": "#F0FDF4",
    "figmaName": "background/accents/green/subtle",
    "alias": "color/green/50",
    "type": "color"
  },
  "--hds-background-accents-green-soft": {
    "value": "#DCFCE7",
    "figmaName": "background/accents/green/soft",
    "alias": "color/green/100",
    "type": "color"
  },
  "--hds-background-accents-green-default": {
    "value": "#86EFAC",
    "figmaName": "background/accents/green/default",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-background-accents-green-intense": {
    "value": "#15803D",
    "figmaName": "background/accents/green/intense",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-background-accents-green-strong": {
    "value": "#16A34A",
    "figmaName": "background/accents/green/strong",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-background-accents-blue-subtle": {
    "value": "#EFF6FF",
    "figmaName": "background/accents/blue/subtle",
    "alias": "color/blue/50",
    "type": "color"
  },
  "--hds-background-accents-blue-soft": {
    "value": "#DBEAFE",
    "figmaName": "background/accents/blue/soft",
    "alias": "color/blue/100",
    "type": "color"
  },
  "--hds-background-accents-blue-default": {
    "value": "#93C5FD",
    "figmaName": "background/accents/blue/default",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-background-accents-blue-intense": {
    "value": "#1D4ED8",
    "figmaName": "background/accents/blue/intense",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-background-accents-blue-strong": {
    "value": "#2563EB",
    "figmaName": "background/accents/blue/strong",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-background-accents-orange-subtle": {
    "value": "#FFF7ED",
    "figmaName": "background/accents/orange/subtle",
    "alias": "color/orange/50",
    "type": "color"
  },
  "--hds-background-accents-orange-soft": {
    "value": "#FFEDD5",
    "figmaName": "background/accents/orange/soft",
    "alias": "color/orange/100",
    "type": "color"
  },
  "--hds-background-accents-orange-default": {
    "value": "#FDBA74",
    "figmaName": "background/accents/orange/default",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-background-accents-orange-intense": {
    "value": "#C2410C",
    "figmaName": "background/accents/orange/intense",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-background-accents-orange-strong": {
    "value": "#EA580C",
    "figmaName": "background/accents/orange/strong",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-background-accents-red-subtle": {
    "value": "#FEF2F2",
    "figmaName": "background/accents/red/subtle",
    "alias": "color/red/50",
    "type": "color"
  },
  "--hds-background-accents-red-soft": {
    "value": "#FEE2E2",
    "figmaName": "background/accents/red/soft",
    "alias": "color/red/100",
    "type": "color"
  },
  "--hds-background-accents-red-default": {
    "value": "#FCA5A5",
    "figmaName": "background/accents/red/default",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-background-accents-red-intense": {
    "value": "#B91C1C",
    "figmaName": "background/accents/red/intense",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-background-accents-red-strong": {
    "value": "#DC2626",
    "figmaName": "background/accents/red/strong",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-background-accents-gray-subtle": {
    "value": "#F8FAFC",
    "figmaName": "background/accents/gray/subtle",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-background-accents-gray-soft": {
    "value": "#F1F5F9",
    "figmaName": "background/accents/gray/soft",
    "alias": "color/Slate/100",
    "type": "color"
  },
  "--hds-background-accents-gray-default": {
    "value": "#CBD5E1",
    "figmaName": "background/accents/gray/default",
    "alias": "color/Slate/300",
    "type": "color"
  },
  "--hds-background-accents-gray-intense": {
    "value": "#334155",
    "figmaName": "background/accents/gray/intense",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-background-accents-gray-strong": {
    "value": "#475569",
    "figmaName": "background/accents/gray/strong",
    "alias": "color/Slate/600",
    "type": "color"
  },
  "--hds-foreground-inverse": {
    "value": "#FFFFFF",
    "figmaName": "foreground/inverse",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-disabled": {
    "value": "#94A3B8",
    "figmaName": "foreground/disabled",
    "alias": "color/Slate/400",
    "type": "color"
  },
  "--hds-foreground-alpha-30": {
    "value": "rgb(0 0 0 / 0.3)",
    "figmaName": "foreground/alpha/30",
    "alias": "color/black/alpha/30",
    "type": "color"
  },
  "--hds-foreground-alpha-40": {
    "value": "rgb(0 0 0 / 0.4)",
    "figmaName": "foreground/alpha/40",
    "alias": "color/black/alpha/40",
    "type": "color"
  },
  "--hds-foreground-static-white": {
    "value": "#FFFFFF",
    "figmaName": "foreground/static/white",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-static-black": {
    "value": "#000000",
    "figmaName": "foreground/static/black",
    "alias": "color/black/950",
    "type": "color"
  },
  "--hds-foreground-neutral-subtle": {
    "value": "#F1F5F9",
    "figmaName": "foreground/neutral/subtle",
    "alias": "color/Slate/100",
    "type": "color"
  },
  "--hds-foreground-neutral-soft": {
    "value": "#E2E8F0",
    "figmaName": "foreground/neutral/soft",
    "alias": "color/Slate/200",
    "type": "color"
  },
  "--hds-foreground-neutral-default": {
    "value": "#CBD5E1",
    "figmaName": "foreground/neutral/default",
    "alias": "color/Slate/300",
    "type": "color"
  },
  "--hds-foreground-neutral-strong": {
    "value": "#94A3B8",
    "figmaName": "foreground/neutral/strong",
    "alias": "color/Slate/400",
    "type": "color"
  },
  "--hds-foreground-neutral-intense": {
    "value": "#64758B",
    "figmaName": "foreground/neutral/intense",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-subtle": {
    "value": "#475569",
    "figmaName": "foreground/neutral-bold/subtle",
    "alias": "color/Slate/600",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-soft": {
    "value": "#334155",
    "figmaName": "foreground/neutral-bold/soft",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-default": {
    "value": "#1E293B",
    "figmaName": "foreground/neutral-bold/default",
    "alias": "color/Slate/800",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-strong": {
    "value": "#0F172A",
    "figmaName": "foreground/neutral-bold/strong",
    "alias": "color/Slate/900",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-intense": {
    "value": "#020617",
    "figmaName": "foreground/neutral-bold/intense",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-foreground-brand-subtle": {
    "value": "#FFDB6E",
    "figmaName": "foreground/brand/subtle",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-foreground-brand-soft": {
    "value": "#F0B82E",
    "figmaName": "foreground/brand/soft",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-foreground-brand-default": {
    "value": "#C8941A",
    "figmaName": "foreground/brand/default",
    "alias": "color/yellow/600",
    "type": "color"
  },
  "--hds-foreground-brand-strong": {
    "value": "#9A7012",
    "figmaName": "foreground/brand/strong",
    "alias": "color/yellow/700",
    "type": "color"
  },
  "--hds-foreground-brand-intense": {
    "value": "#6E4F0C",
    "figmaName": "foreground/brand/intense",
    "alias": "color/yellow/800",
    "type": "color"
  },
  "--hds-foreground-royal-subtle": {
    "value": "#8CB5F8",
    "figmaName": "foreground/royal/subtle",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-foreground-royal-soft": {
    "value": "#246FEA",
    "figmaName": "foreground/royal/soft",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-foreground-royal-default": {
    "value": "#1956C8",
    "figmaName": "foreground/royal/default",
    "alias": "color/royal/600",
    "type": "color"
  },
  "--hds-foreground-royal-strong": {
    "value": "#19449A",
    "figmaName": "foreground/royal/strong",
    "alias": "color/royal/700",
    "type": "color"
  },
  "--hds-foreground-royal-intense": {
    "value": "#17316D",
    "figmaName": "foreground/royal/intense",
    "alias": "color/royal/800",
    "type": "color"
  },
  "--hds-foreground-success-subtle": {
    "value": "#22C55E",
    "figmaName": "foreground/success/subtle",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-foreground-success-soft": {
    "value": "#16A34A",
    "figmaName": "foreground/success/soft",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-foreground-success-default": {
    "value": "#15803D",
    "figmaName": "foreground/success/default",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-foreground-success-strong": {
    "value": "#166534",
    "figmaName": "foreground/success/strong",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-foreground-success-intense": {
    "value": "#14532D",
    "figmaName": "foreground/success/intense",
    "alias": "color/green/900",
    "type": "color"
  },
  "--hds-foreground-warning-subtle": {
    "value": "#F97316",
    "figmaName": "foreground/warning/subtle",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-foreground-warning-soft": {
    "value": "#EA580C",
    "figmaName": "foreground/warning/soft",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-foreground-warning-default": {
    "value": "#C2410C",
    "figmaName": "foreground/warning/default",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-foreground-warning-strong": {
    "value": "#9A3412",
    "figmaName": "foreground/warning/strong",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-foreground-warning-intense": {
    "value": "#7C2D12",
    "figmaName": "foreground/warning/intense",
    "alias": "color/orange/900",
    "type": "color"
  },
  "--hds-foreground-error-subtle": {
    "value": "#EF4444",
    "figmaName": "foreground/error/subtle",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-foreground-error-soft": {
    "value": "#DC2626",
    "figmaName": "foreground/error/soft",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-foreground-error-default": {
    "value": "#B91C1C",
    "figmaName": "foreground/error/default",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-foreground-error-strong": {
    "value": "#991B1B",
    "figmaName": "foreground/error/strong",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-foreground-error-intense": {
    "value": "#991B1B",
    "figmaName": "foreground/error/intense",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-foreground-info-subtle": {
    "value": "#3B82F6",
    "figmaName": "foreground/info/subtle",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-foreground-info-soft": {
    "value": "#2563EB",
    "figmaName": "foreground/info/soft",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-foreground-info-default": {
    "value": "#1D4ED8",
    "figmaName": "foreground/info/default",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-foreground-info-strong": {
    "value": "#1E40AF",
    "figmaName": "foreground/info/strong",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-foreground-info-intense": {
    "value": "#1E3A8A",
    "figmaName": "foreground/info/intense",
    "alias": "color/blue/900",
    "type": "color"
  },
  "--hds-foreground-accents-teal-subtle": {
    "value": "#14B8A6",
    "figmaName": "foreground/accents/teal/subtle",
    "alias": "color/teal/500",
    "type": "color"
  },
  "--hds-foreground-accents-teal-soft": {
    "value": "#0D9488",
    "figmaName": "foreground/accents/teal/soft",
    "alias": "color/teal/600",
    "type": "color"
  },
  "--hds-foreground-accents-teal-default": {
    "value": "#0F766E",
    "figmaName": "foreground/accents/teal/default",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-foreground-accents-teal-strong": {
    "value": "#0F766E",
    "figmaName": "foreground/accents/teal/strong",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-foreground-accents-teal-intense": {
    "value": "#115E59",
    "figmaName": "foreground/accents/teal/intense",
    "alias": "color/teal/800",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-subtle": {
    "value": "#06B6D4",
    "figmaName": "foreground/accents/cyan/subtle",
    "alias": "color/cyan/500",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-soft": {
    "value": "#0891B2",
    "figmaName": "foreground/accents/cyan/soft",
    "alias": "color/cyan/600",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-default": {
    "value": "#0E7490",
    "figmaName": "foreground/accents/cyan/default",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-strong": {
    "value": "#0E7490",
    "figmaName": "foreground/accents/cyan/strong",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-intense": {
    "value": "#155E75",
    "figmaName": "foreground/accents/cyan/intense",
    "alias": "color/cyan/800",
    "type": "color"
  },
  "--hds-foreground-accents-violet-subtle": {
    "value": "#8B5CF6",
    "figmaName": "foreground/accents/violet/subtle",
    "alias": "color/violet/500",
    "type": "color"
  },
  "--hds-foreground-accents-violet-soft": {
    "value": "#7C3AED",
    "figmaName": "foreground/accents/violet/soft",
    "alias": "color/violet/600",
    "type": "color"
  },
  "--hds-foreground-accents-violet-default": {
    "value": "#6D28D9",
    "figmaName": "foreground/accents/violet/default",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-foreground-accents-violet-strong": {
    "value": "#6D28D9",
    "figmaName": "foreground/accents/violet/strong",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-foreground-accents-violet-intense": {
    "value": "#5B21B6",
    "figmaName": "foreground/accents/violet/intense",
    "alias": "color/violet/800",
    "type": "color"
  },
  "--hds-foreground-accents-pink-subtle": {
    "value": "#EC4899",
    "figmaName": "foreground/accents/pink/subtle",
    "alias": "color/pink/500",
    "type": "color"
  },
  "--hds-foreground-accents-pink-soft": {
    "value": "#DB2777",
    "figmaName": "foreground/accents/pink/soft",
    "alias": "color/pink/600",
    "type": "color"
  },
  "--hds-foreground-accents-pink-default": {
    "value": "#BE185D",
    "figmaName": "foreground/accents/pink/default",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-foreground-accents-pink-strong": {
    "value": "#BE185D",
    "figmaName": "foreground/accents/pink/strong",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-foreground-accents-pink-intense": {
    "value": "#9D174D",
    "figmaName": "foreground/accents/pink/intense",
    "alias": "color/pink/800",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-subtle": {
    "value": "#6366F1",
    "figmaName": "foreground/accents/indigo/subtle",
    "alias": "color/indigo/500",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-soft": {
    "value": "#4F46E5",
    "figmaName": "foreground/accents/indigo/soft",
    "alias": "color/indigo/600",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-default": {
    "value": "#4338CA",
    "figmaName": "foreground/accents/indigo/default",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-strong": {
    "value": "#4338CA",
    "figmaName": "foreground/accents/indigo/strong",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-intense": {
    "value": "#3730A3",
    "figmaName": "foreground/accents/indigo/intense",
    "alias": "color/indigo/800",
    "type": "color"
  },
  "--hds-foreground-accents-lime-subtle": {
    "value": "#65A30D",
    "figmaName": "foreground/accents/lime/subtle",
    "alias": "color/lime/600",
    "type": "color"
  },
  "--hds-foreground-accents-lime-soft": {
    "value": "#4D7C0F",
    "figmaName": "foreground/accents/lime/soft",
    "alias": "color/lime/700",
    "type": "color"
  },
  "--hds-foreground-accents-lime-default": {
    "value": "#3F6212",
    "figmaName": "foreground/accents/lime/default",
    "alias": "color/lime/800",
    "type": "color"
  },
  "--hds-foreground-accents-lime-strong": {
    "value": "#3F6212",
    "figmaName": "foreground/accents/lime/strong",
    "alias": "color/lime/800",
    "type": "color"
  },
  "--hds-foreground-accents-lime-intense": {
    "value": "#365314",
    "figmaName": "foreground/accents/lime/intense",
    "alias": "color/lime/900",
    "type": "color"
  },
  "--hds-foreground-accents-green-subtle": {
    "value": "#22C55E",
    "figmaName": "foreground/accents/green/subtle",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-foreground-accents-green-soft": {
    "value": "#16A34A",
    "figmaName": "foreground/accents/green/soft",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-foreground-accents-green-default": {
    "value": "#15803D",
    "figmaName": "foreground/accents/green/default",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-foreground-accents-green-intense": {
    "value": "#166534",
    "figmaName": "foreground/accents/green/intense",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-foreground-accents-green-strong": {
    "value": "#15803D",
    "figmaName": "foreground/accents/green/strong",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-foreground-accents-blue-subtle": {
    "value": "#3B82F6",
    "figmaName": "foreground/accents/blue/subtle",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-foreground-accents-blue-soft": {
    "value": "#2563EB",
    "figmaName": "foreground/accents/blue/soft",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-foreground-accents-blue-default": {
    "value": "#1D4ED8",
    "figmaName": "foreground/accents/blue/default",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-foreground-accents-blue-intense": {
    "value": "#1E40AF",
    "figmaName": "foreground/accents/blue/intense",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-foreground-accents-blue-strong": {
    "value": "#1D4ED8",
    "figmaName": "foreground/accents/blue/strong",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-foreground-accents-orange-subtle": {
    "value": "#F97316",
    "figmaName": "foreground/accents/orange/subtle",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-foreground-accents-orange-soft": {
    "value": "#EA580C",
    "figmaName": "foreground/accents/orange/soft",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-foreground-accents-orange-default": {
    "value": "#C2410C",
    "figmaName": "foreground/accents/orange/default",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-foreground-accents-orange-intense": {
    "value": "#9A3412",
    "figmaName": "foreground/accents/orange/intense",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-foreground-accents-orange-strong": {
    "value": "#C2410C",
    "figmaName": "foreground/accents/orange/strong",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-foreground-accents-red-subtle": {
    "value": "#EF4444",
    "figmaName": "foreground/accents/red/subtle",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-foreground-accents-red-soft": {
    "value": "#DC2626",
    "figmaName": "foreground/accents/red/soft",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-foreground-accents-red-default": {
    "value": "#B91C1C",
    "figmaName": "foreground/accents/red/default",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-foreground-accents-red-intense": {
    "value": "#991B1B",
    "figmaName": "foreground/accents/red/intense",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-foreground-accents-red-strong": {
    "value": "#B91C1C",
    "figmaName": "foreground/accents/red/strong",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-foreground-accents-amber-subtle": {
    "value": "#F59E0B",
    "figmaName": "foreground/accents/amber/subtle",
    "alias": "color/amber/500",
    "type": "color"
  },
  "--hds-foreground-accents-amber-soft": {
    "value": "#D97706",
    "figmaName": "foreground/accents/amber/soft",
    "alias": "color/amber/600",
    "type": "color"
  },
  "--hds-foreground-accents-amber-default": {
    "value": "#B45309",
    "figmaName": "foreground/accents/amber/default",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-foreground-accents-amber-intense": {
    "value": "#92400E",
    "figmaName": "foreground/accents/amber/intense",
    "alias": "color/amber/800",
    "type": "color"
  },
  "--hds-foreground-accents-amber-strong": {
    "value": "#B45309",
    "figmaName": "foreground/accents/amber/strong",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-subtle": {
    "value": "#D946EF",
    "figmaName": "foreground/accents/fuchsia/subtle",
    "alias": "color/fuchsia/500",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-soft": {
    "value": "#C026D3",
    "figmaName": "foreground/accents/fuchsia/soft",
    "alias": "color/fuchsia/600",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-default": {
    "value": "#A21CAF",
    "figmaName": "foreground/accents/fuchsia/default",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-intense": {
    "value": "#86198F",
    "figmaName": "foreground/accents/fuchsia/intense",
    "alias": "color/fuchsia/800",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-strong": {
    "value": "#A21CAF",
    "figmaName": "foreground/accents/fuchsia/strong",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-foreground-accents-sky-subtle": {
    "value": "#3DC1FA",
    "figmaName": "foreground/accents/sky/subtle",
    "alias": "color/sky/500",
    "type": "color"
  },
  "--hds-foreground-accents-sky-soft": {
    "value": "#0BA7EF",
    "figmaName": "foreground/accents/sky/soft",
    "alias": "color/sky/600",
    "type": "color"
  },
  "--hds-foreground-accents-sky-default": {
    "value": "#0081C2",
    "figmaName": "foreground/accents/sky/default",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-foreground-accents-sky-intense": {
    "value": "#065B89",
    "figmaName": "foreground/accents/sky/intense",
    "alias": "color/sky/800",
    "type": "color"
  },
  "--hds-foreground-accents-sky-strong": {
    "value": "#0081C2",
    "figmaName": "foreground/accents/sky/strong",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-foreground-accents-gray-subtle": {
    "value": "#64758B",
    "figmaName": "foreground/accents/gray/subtle",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-foreground-accents-gray-soft": {
    "value": "#475569",
    "figmaName": "foreground/accents/gray/soft",
    "alias": "color/Slate/600",
    "type": "color"
  },
  "--hds-foreground-accents-gray-default": {
    "value": "#334155",
    "figmaName": "foreground/accents/gray/default",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-foreground-accents-gray-intense": {
    "value": "#1E293B",
    "figmaName": "foreground/accents/gray/intense",
    "alias": "color/Slate/800",
    "type": "color"
  },
  "--hds-foreground-accents-gray-strong": {
    "value": "#334155",
    "figmaName": "foreground/accents/gray/strong",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-foreground-on-brand": {
    "value": "#020617",
    "figmaName": "foreground/on/brand",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-foreground-on-success": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/success",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-warning": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/warning",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-error": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/error",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-info": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/info",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-royal": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/royal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-teal": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/teal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-cyan": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/cyan",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-violet": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/violet",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-pink": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/pink",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-indigo": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/indigo",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-lime": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/lime",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-green": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/green",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-blue": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/blue",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-orange": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/orange",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-red": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/red",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-amber": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/amber",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-fuchsia": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/fuchsia",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-sky": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/sky",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-gray": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/gray",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-border-disabled": {
    "value": "#E2E8F0",
    "figmaName": "border/disabled",
    "alias": "color/Slate/200",
    "type": "color"
  },
  "--hds-border-neutral-white": {
    "value": "#FFFFFF",
    "figmaName": "border/neutral/white",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-border-neutral-subtle": {
    "value": "#F1F5F9",
    "figmaName": "border/neutral/subtle",
    "alias": "color/Slate/100",
    "type": "color"
  },
  "--hds-border-neutral-soft": {
    "value": "#E2E8F0",
    "figmaName": "border/neutral/soft",
    "alias": "color/Slate/200",
    "type": "color"
  },
  "--hds-border-neutral-default": {
    "value": "#CBD5E1",
    "figmaName": "border/neutral/default",
    "alias": "color/Slate/300",
    "type": "color"
  },
  "--hds-border-neutral-strong": {
    "value": "#94A3B8",
    "figmaName": "border/neutral/strong",
    "alias": "color/Slate/400",
    "type": "color"
  },
  "--hds-border-neutral-intense": {
    "value": "#64758B",
    "figmaName": "border/neutral/intense",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-border-neutral-bold-subtle": {
    "value": "#475569",
    "figmaName": "border/neutral-bold/subtle",
    "alias": "color/Slate/600",
    "type": "color"
  },
  "--hds-border-neutral-bold-soft": {
    "value": "#334155",
    "figmaName": "border/neutral-bold/soft",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-border-neutral-bold-default": {
    "value": "#1E293B",
    "figmaName": "border/neutral-bold/default",
    "alias": "color/Slate/800",
    "type": "color"
  },
  "--hds-border-neutral-bold-strong": {
    "value": "#0F172A",
    "figmaName": "border/neutral-bold/strong",
    "alias": "color/Slate/900",
    "type": "color"
  },
  "--hds-border-neutral-bold-intense": {
    "value": "#020617",
    "figmaName": "border/neutral-bold/intense",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-border-brand-subtle": {
    "value": "#FFE89A",
    "figmaName": "border/brand/subtle",
    "alias": "color/yellow/200",
    "type": "color"
  },
  "--hds-border-brand-soft": {
    "value": "#FFDB6E",
    "figmaName": "border/brand/soft",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-border-brand-default": {
    "value": "#FFCF54",
    "figmaName": "border/brand/default",
    "alias": "color/yellow/400",
    "type": "color"
  },
  "--hds-border-brand-strong": {
    "value": "#F0B82E",
    "figmaName": "border/brand/strong",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-border-brand-intense": {
    "value": "#9A7012",
    "figmaName": "border/brand/intense",
    "alias": "color/yellow/700",
    "type": "color"
  },
  "--hds-border-royal-subtle": {
    "value": "#B6D2FB",
    "figmaName": "border/royal/subtle",
    "alias": "color/royal/200",
    "type": "color"
  },
  "--hds-border-royal-soft": {
    "value": "#8CB5F8",
    "figmaName": "border/royal/soft",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-border-royal-default": {
    "value": "#5994F2",
    "figmaName": "border/royal/default",
    "alias": "color/royal/400",
    "type": "color"
  },
  "--hds-border-royal-strong": {
    "value": "#246FEA",
    "figmaName": "border/royal/strong",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-border-royal-intense": {
    "value": "#1956C8",
    "figmaName": "border/royal/intense",
    "alias": "color/royal/600",
    "type": "color"
  },
  "--hds-border-success-subtle": {
    "value": "#DCFCE7",
    "figmaName": "border/success/subtle",
    "alias": "color/green/100",
    "type": "color"
  },
  "--hds-border-success-soft": {
    "value": "#86EFAC",
    "figmaName": "border/success/soft",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-border-success-default": {
    "value": "#16A34A",
    "figmaName": "border/success/default",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-border-success-strong": {
    "value": "#15803D",
    "figmaName": "border/success/strong",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-border-success-intense": {
    "value": "#166534",
    "figmaName": "border/success/intense",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-border-warning-subtle": {
    "value": "#FFEDD5",
    "figmaName": "border/warning/subtle",
    "alias": "color/orange/100",
    "type": "color"
  },
  "--hds-border-warning-soft": {
    "value": "#FED7AA",
    "figmaName": "border/warning/soft",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-border-warning-default": {
    "value": "#EA580C",
    "figmaName": "border/warning/default",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-border-warning-strong": {
    "value": "#C2410C",
    "figmaName": "border/warning/strong",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-border-warning-intense": {
    "value": "#9A3412",
    "figmaName": "border/warning/intense",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-border-error-subtle": {
    "value": "#FEE2E2",
    "figmaName": "border/error/subtle",
    "alias": "color/red/100",
    "type": "color"
  },
  "--hds-border-error-soft": {
    "value": "#FECACA",
    "figmaName": "border/error/soft",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-border-error-default": {
    "value": "#DC2626",
    "figmaName": "border/error/default",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-border-error-strong": {
    "value": "#B91C1C",
    "figmaName": "border/error/strong",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-border-error-intense": {
    "value": "#991B1B",
    "figmaName": "border/error/intense",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-border-info-subtle": {
    "value": "#DBEAFE",
    "figmaName": "border/info/subtle",
    "alias": "color/blue/100",
    "type": "color"
  },
  "--hds-border-info-soft": {
    "value": "#BFDBFE",
    "figmaName": "border/info/soft",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-border-info-default": {
    "value": "#2563EB",
    "figmaName": "border/info/default",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-border-info-strong": {
    "value": "#1D4ED8",
    "figmaName": "border/info/strong",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-border-info-intense": {
    "value": "#1E40AF",
    "figmaName": "border/info/intense",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-border-accents-teal-subtle": {
    "value": "#CCFBF1",
    "figmaName": "border/accents/teal/subtle",
    "alias": "color/teal/100",
    "type": "color"
  },
  "--hds-border-accents-teal-soft": {
    "value": "#99F6E4",
    "figmaName": "border/accents/teal/soft",
    "alias": "color/teal/200",
    "type": "color"
  },
  "--hds-border-accents-teal-default": {
    "value": "#5EEAD4",
    "figmaName": "border/accents/teal/default",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-border-accents-teal-strong": {
    "value": "#14B8A6",
    "figmaName": "border/accents/teal/strong",
    "alias": "color/teal/500",
    "type": "color"
  },
  "--hds-border-accents-teal-intense": {
    "value": "#0F766E",
    "figmaName": "border/accents/teal/intense",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-border-accents-cyan-subtle": {
    "value": "#CFFAFE",
    "figmaName": "border/accents/cyan/subtle",
    "alias": "color/cyan/100",
    "type": "color"
  },
  "--hds-border-accents-cyan-soft": {
    "value": "#A5F3FC",
    "figmaName": "border/accents/cyan/soft",
    "alias": "color/cyan/200",
    "type": "color"
  },
  "--hds-border-accents-cyan-default": {
    "value": "#67E8F9",
    "figmaName": "border/accents/cyan/default",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-border-accents-cyan-strong": {
    "value": "#06B6D4",
    "figmaName": "border/accents/cyan/strong",
    "alias": "color/cyan/500",
    "type": "color"
  },
  "--hds-border-accents-cyan-intense": {
    "value": "#0E7490",
    "figmaName": "border/accents/cyan/intense",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-border-accents-violet-subtle": {
    "value": "#EDE9FE",
    "figmaName": "border/accents/violet/subtle",
    "alias": "color/violet/100",
    "type": "color"
  },
  "--hds-border-accents-violet-soft": {
    "value": "#DDD6FE",
    "figmaName": "border/accents/violet/soft",
    "alias": "color/violet/200",
    "type": "color"
  },
  "--hds-border-accents-violet-default": {
    "value": "#C4B5FD",
    "figmaName": "border/accents/violet/default",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-border-accents-violet-strong": {
    "value": "#8B5CF6",
    "figmaName": "border/accents/violet/strong",
    "alias": "color/violet/500",
    "type": "color"
  },
  "--hds-border-accents-violet-intense": {
    "value": "#6D28D9",
    "figmaName": "border/accents/violet/intense",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-border-accents-pink-subtle": {
    "value": "#FCE7F3",
    "figmaName": "border/accents/pink/subtle",
    "alias": "color/pink/100",
    "type": "color"
  },
  "--hds-border-accents-pink-soft": {
    "value": "#FBCFE8",
    "figmaName": "border/accents/pink/soft",
    "alias": "color/pink/200",
    "type": "color"
  },
  "--hds-border-accents-pink-default": {
    "value": "#F9A8D4",
    "figmaName": "border/accents/pink/default",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-border-accents-pink-strong": {
    "value": "#EC4899",
    "figmaName": "border/accents/pink/strong",
    "alias": "color/pink/500",
    "type": "color"
  },
  "--hds-border-accents-pink-intense": {
    "value": "#BE185D",
    "figmaName": "border/accents/pink/intense",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-border-accents-indigo-subtle": {
    "value": "#E0E7FF",
    "figmaName": "border/accents/indigo/subtle",
    "alias": "color/indigo/100",
    "type": "color"
  },
  "--hds-border-accents-indigo-soft": {
    "value": "#C7D2FE",
    "figmaName": "border/accents/indigo/soft",
    "alias": "color/indigo/200",
    "type": "color"
  },
  "--hds-border-accents-indigo-default": {
    "value": "#A5B4FC",
    "figmaName": "border/accents/indigo/default",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-border-accents-indigo-strong": {
    "value": "#6366F1",
    "figmaName": "border/accents/indigo/strong",
    "alias": "color/indigo/500",
    "type": "color"
  },
  "--hds-border-accents-indigo-intense": {
    "value": "#4338CA",
    "figmaName": "border/accents/indigo/intense",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-border-accents-lime-subtle": {
    "value": "#ECFCCB",
    "figmaName": "border/accents/lime/subtle",
    "alias": "color/lime/100",
    "type": "color"
  },
  "--hds-border-accents-lime-soft": {
    "value": "#D9F99D",
    "figmaName": "border/accents/lime/soft",
    "alias": "color/lime/200",
    "type": "color"
  },
  "--hds-border-accents-lime-default": {
    "value": "#BEF264",
    "figmaName": "border/accents/lime/default",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-border-accents-lime-strong": {
    "value": "#84CC16",
    "figmaName": "border/accents/lime/strong",
    "alias": "color/lime/500",
    "type": "color"
  },
  "--hds-border-accents-lime-intense": {
    "value": "#4D7C0F",
    "figmaName": "border/accents/lime/intense",
    "alias": "color/lime/700",
    "type": "color"
  },
  "--hds-border-accents-amber-subtle": {
    "value": "#FEF3C7",
    "figmaName": "border/accents/amber/subtle",
    "alias": "color/amber/100",
    "type": "color"
  },
  "--hds-border-accents-amber-soft": {
    "value": "#FDE68A",
    "figmaName": "border/accents/amber/soft",
    "alias": "color/amber/200",
    "type": "color"
  },
  "--hds-border-accents-amber-default": {
    "value": "#FCD34D",
    "figmaName": "border/accents/amber/default",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-border-accents-amber-strong": {
    "value": "#F59E0B",
    "figmaName": "border/accents/amber/strong",
    "alias": "color/amber/500",
    "type": "color"
  },
  "--hds-border-accents-amber-intense": {
    "value": "#B45309",
    "figmaName": "border/accents/amber/intense",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-border-accents-sky-subtle": {
    "value": "#EBF7FF",
    "figmaName": "border/accents/sky/subtle",
    "alias": "color/sky/100",
    "type": "color"
  },
  "--hds-border-accents-sky-soft": {
    "value": "#E0F3FF",
    "figmaName": "border/accents/sky/soft",
    "alias": "color/sky/200",
    "type": "color"
  },
  "--hds-border-accents-sky-default": {
    "value": "#C9E8FD",
    "figmaName": "border/accents/sky/default",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-border-accents-sky-strong": {
    "value": "#3DC1FA",
    "figmaName": "border/accents/sky/strong",
    "alias": "color/sky/500",
    "type": "color"
  },
  "--hds-border-accents-sky-intense": {
    "value": "#0081C2",
    "figmaName": "border/accents/sky/intense",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-subtle": {
    "value": "#FAE8FF",
    "figmaName": "border/accents/fuchsia/subtle",
    "alias": "color/fuchsia/100",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-soft": {
    "value": "#F5D0FE",
    "figmaName": "border/accents/fuchsia/soft",
    "alias": "color/fuchsia/200",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-default": {
    "value": "#F0ABFC",
    "figmaName": "border/accents/fuchsia/default",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-strong": {
    "value": "#D946EF",
    "figmaName": "border/accents/fuchsia/strong",
    "alias": "color/fuchsia/500",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-intense": {
    "value": "#A21CAF",
    "figmaName": "border/accents/fuchsia/intense",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-border-accents-green-subtle": {
    "value": "#DCFCE7",
    "figmaName": "border/accents/green/subtle",
    "alias": "color/green/100",
    "type": "color"
  },
  "--hds-border-accents-green-soft": {
    "value": "#BBF7D0",
    "figmaName": "border/accents/green/soft",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-border-accents-green-default": {
    "value": "#86EFAC",
    "figmaName": "border/accents/green/default",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-border-accents-green-intense": {
    "value": "#15803D",
    "figmaName": "border/accents/green/intense",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-border-accents-green-strong": {
    "value": "#22C55E",
    "figmaName": "border/accents/green/strong",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-border-accents-blue-subtle": {
    "value": "#DBEAFE",
    "figmaName": "border/accents/blue/subtle",
    "alias": "color/blue/100",
    "type": "color"
  },
  "--hds-border-accents-blue-soft": {
    "value": "#BFDBFE",
    "figmaName": "border/accents/blue/soft",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-border-accents-blue-default": {
    "value": "#93C5FD",
    "figmaName": "border/accents/blue/default",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-border-accents-blue-intense": {
    "value": "#1D4ED8",
    "figmaName": "border/accents/blue/intense",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-border-accents-blue-strong": {
    "value": "#3B82F6",
    "figmaName": "border/accents/blue/strong",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-border-accents-orange-subtle": {
    "value": "#FFEDD5",
    "figmaName": "border/accents/orange/subtle",
    "alias": "color/orange/100",
    "type": "color"
  },
  "--hds-border-accents-orange-soft": {
    "value": "#FED7AA",
    "figmaName": "border/accents/orange/soft",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-border-accents-orange-default": {
    "value": "#FDBA74",
    "figmaName": "border/accents/orange/default",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-border-accents-orange-intense": {
    "value": "#C2410C",
    "figmaName": "border/accents/orange/intense",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-border-accents-orange-strong": {
    "value": "#F97316",
    "figmaName": "border/accents/orange/strong",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-border-accents-red-subtle": {
    "value": "#FEE2E2",
    "figmaName": "border/accents/red/subtle",
    "alias": "color/red/100",
    "type": "color"
  },
  "--hds-border-accents-red-soft": {
    "value": "#FECACA",
    "figmaName": "border/accents/red/soft",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-border-accents-red-default": {
    "value": "#FCA5A5",
    "figmaName": "border/accents/red/default",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-border-accents-red-intense": {
    "value": "#B91C1C",
    "figmaName": "border/accents/red/intense",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-border-accents-red-strong": {
    "value": "#EF4444",
    "figmaName": "border/accents/red/strong",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-border-accents-gray-subtle": {
    "value": "#F1F5F9",
    "figmaName": "border/accents/gray/subtle",
    "alias": "color/Slate/100",
    "type": "color"
  },
  "--hds-border-accents-gray-soft": {
    "value": "#E2E8F0",
    "figmaName": "border/accents/gray/soft",
    "alias": "color/Slate/200",
    "type": "color"
  },
  "--hds-border-accents-gray-default": {
    "value": "#CBD5E1",
    "figmaName": "border/accents/gray/default",
    "alias": "color/Slate/300",
    "type": "color"
  },
  "--hds-border-accents-gray-intense": {
    "value": "#334155",
    "figmaName": "border/accents/gray/intense",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-border-accents-gray-strong": {
    "value": "#64758B",
    "figmaName": "border/accents/gray/strong",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-charts-1": {
    "value": "#3B82F6",
    "figmaName": "charts/1",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-charts-2": {
    "value": "#14B8A6",
    "figmaName": "charts/2",
    "alias": "color/teal/500",
    "type": "color"
  },
  "--hds-charts-3": {
    "value": "#F97316",
    "figmaName": "charts/3",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-charts-4": {
    "value": "#8B5CF6",
    "figmaName": "charts/4",
    "alias": "color/violet/500",
    "type": "color"
  },
  "--hds-charts-5": {
    "value": "#EC4899",
    "figmaName": "charts/5",
    "alias": "color/pink/500",
    "type": "color"
  },
  "--hds-charts-6": {
    "value": "#22C55E",
    "figmaName": "charts/6",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-charts-7": {
    "value": "#EF4444",
    "figmaName": "charts/7",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-charts-8": {
    "value": "#06B6D4",
    "figmaName": "charts/8",
    "alias": "color/cyan/500",
    "type": "color"
  },
  "--hds-effect-focus-brand": {
    "value": "rgb(255 207 84 / 0.3)",
    "figmaName": "effect/focus/brand",
    "alias": "color/yellow/alpha/30",
    "type": "color"
  },
  "--hds-effect-focus-neutral": {
    "value": "rgb(115 115 115 / 0.2)",
    "figmaName": "effect/focus/neutral",
    "alias": "color/gray/alpha/20",
    "type": "color"
  },
  "--hds-effect-focus-royal": {
    "value": "rgb(36 111 234 / 0.3)",
    "figmaName": "effect/focus/royal",
    "alias": "color/royal/alpha/30",
    "type": "color"
  },
  "--hds-effect-focus-error": {
    "value": "rgb(239 68 68 / 0.3)",
    "figmaName": "effect/focus/error",
    "alias": "color/red/alpha/30",
    "type": "color"
  }
} as TokenMap,
  omniDark: {
  "--hds-text-inverse": {
    "value": "#F8FAFC",
    "figmaName": "text/inverse",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-text-disabled": {
    "value": "#94A3B8",
    "figmaName": "text/disabled",
    "alias": "color/Slate/400",
    "type": "color"
  },
  "--hds-text-neutral-white": {
    "value": "#000000",
    "figmaName": "text/neutral/White",
    "alias": "color/black/950",
    "type": "color"
  },
  "--hds-text-neutral-subtle": {
    "value": "#64758B",
    "figmaName": "text/neutral/subtle",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-text-neutral-soft": {
    "value": "#94A3B8",
    "figmaName": "text/neutral/soft",
    "alias": "color/Slate/400",
    "type": "color"
  },
  "--hds-text-neutral-default": {
    "value": "#CBD5E1",
    "figmaName": "text/neutral/default",
    "alias": "color/Slate/300",
    "type": "color"
  },
  "--hds-text-neutral-strong": {
    "value": "#F8FAFC",
    "figmaName": "text/neutral/strong",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-text-neutral-intense": {
    "value": "#F8FAFC",
    "figmaName": "text/neutral/intense",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-text-brand-subtle": {
    "value": "#FFE89A",
    "figmaName": "text/brand/subtle",
    "alias": "color/yellow/200",
    "type": "color"
  },
  "--hds-text-brand-soft": {
    "value": "#FFDB6E",
    "figmaName": "text/brand/soft",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-text-brand-default": {
    "value": "#FFCF54",
    "figmaName": "text/brand/default",
    "alias": "color/yellow/400",
    "type": "color"
  },
  "--hds-text-brand-strong": {
    "value": "#FFDB6E",
    "figmaName": "text/brand/strong",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-text-brand-intense": {
    "value": "#FFE89A",
    "figmaName": "text/brand/intense",
    "alias": "color/yellow/200",
    "type": "color"
  },
  "--hds-text-royal-subtle": {
    "value": "#B6D2FB",
    "figmaName": "text/royal/subtle",
    "alias": "color/royal/200",
    "type": "color"
  },
  "--hds-text-royal-soft": {
    "value": "#8CB5F8",
    "figmaName": "text/royal/soft",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-text-royal-default": {
    "value": "#5994F2",
    "figmaName": "text/royal/default",
    "alias": "color/royal/400",
    "type": "color"
  },
  "--hds-text-royal-strong": {
    "value": "#8CB5F8",
    "figmaName": "text/royal/strong",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-text-royal-intense": {
    "value": "#B6D2FB",
    "figmaName": "text/royal/intense",
    "alias": "color/royal/200",
    "type": "color"
  },
  "--hds-text-success-subtle": {
    "value": "#BBF7D0",
    "figmaName": "text/success/subtle",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-text-success-soft": {
    "value": "#86EFAC",
    "figmaName": "text/success/soft",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-text-success-default": {
    "value": "#4ADE80",
    "figmaName": "text/success/default",
    "alias": "color/green/400",
    "type": "color"
  },
  "--hds-text-success-strong": {
    "value": "#86EFAC",
    "figmaName": "text/success/strong",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-text-success-intense": {
    "value": "#BBF7D0",
    "figmaName": "text/success/intense",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-text-warning-subtle": {
    "value": "#FED7AA",
    "figmaName": "text/warning/subtle",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-text-warning-soft": {
    "value": "#FDBA74",
    "figmaName": "text/warning/soft",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-text-warning-default": {
    "value": "#FB923C",
    "figmaName": "text/warning/default",
    "alias": "color/orange/400",
    "type": "color"
  },
  "--hds-text-warning-strong": {
    "value": "#FDBA74",
    "figmaName": "text/warning/strong",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-text-warning-intense": {
    "value": "#FED7AA",
    "figmaName": "text/warning/intense",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-text-error-subtle": {
    "value": "#FECACA",
    "figmaName": "text/error/subtle",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-text-error-soft": {
    "value": "#FCA5A5",
    "figmaName": "text/error/soft",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-text-error-default": {
    "value": "#F87171",
    "figmaName": "text/error/default",
    "alias": "color/red/400",
    "type": "color"
  },
  "--hds-text-error-strong": {
    "value": "#FCA5A5",
    "figmaName": "text/error/strong",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-text-error-intense": {
    "value": "#FECACA",
    "figmaName": "text/error/intense",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-text-info-subtle": {
    "value": "#2563EB",
    "figmaName": "text/info/subtle",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-text-info-soft": {
    "value": "#3B82F6",
    "figmaName": "text/info/soft",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-text-info-default": {
    "value": "#60A5FA",
    "figmaName": "text/info/default",
    "alias": "color/blue/400",
    "type": "color"
  },
  "--hds-text-info-strong": {
    "value": "#93C5FD",
    "figmaName": "text/info/strong",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-text-info-intense": {
    "value": "#BFDBFE",
    "figmaName": "text/info/intense",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-text-accents-teal-subtle": {
    "value": "#99F6E4",
    "figmaName": "text/accents/teal/subtle",
    "alias": "color/teal/200",
    "type": "color"
  },
  "--hds-text-accents-teal-soft": {
    "value": "#5EEAD4",
    "figmaName": "text/accents/teal/soft",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-text-accents-teal-default": {
    "value": "#2DD4BF",
    "figmaName": "text/accents/teal/default",
    "alias": "color/teal/400",
    "type": "color"
  },
  "--hds-text-accents-teal-strong": {
    "value": "#5EEAD4",
    "figmaName": "text/accents/teal/strong",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-text-accents-teal-intense": {
    "value": "#99F6E4",
    "figmaName": "text/accents/teal/intense",
    "alias": "color/teal/200",
    "type": "color"
  },
  "--hds-text-accents-cyan-subtle": {
    "value": "#A5F3FC",
    "figmaName": "text/accents/cyan/subtle",
    "alias": "color/cyan/200",
    "type": "color"
  },
  "--hds-text-accents-cyan-soft": {
    "value": "#67E8F9",
    "figmaName": "text/accents/cyan/soft",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-text-accents-cyan-default": {
    "value": "#22D3EE",
    "figmaName": "text/accents/cyan/default",
    "alias": "color/cyan/400",
    "type": "color"
  },
  "--hds-text-accents-cyan-strong": {
    "value": "#67E8F9",
    "figmaName": "text/accents/cyan/strong",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-text-accents-cyan-intense": {
    "value": "#A5F3FC",
    "figmaName": "text/accents/cyan/intense",
    "alias": "color/cyan/200",
    "type": "color"
  },
  "--hds-text-accents-violet-subtle": {
    "value": "#DDD6FE",
    "figmaName": "text/accents/violet/subtle",
    "alias": "color/violet/200",
    "type": "color"
  },
  "--hds-text-accents-violet-soft": {
    "value": "#C4B5FD",
    "figmaName": "text/accents/violet/soft",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-text-accents-violet-default": {
    "value": "#A78BFA",
    "figmaName": "text/accents/violet/default",
    "alias": "color/violet/400",
    "type": "color"
  },
  "--hds-text-accents-violet-strong": {
    "value": "#C4B5FD",
    "figmaName": "text/accents/violet/strong",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-text-accents-violet-intense": {
    "value": "#DDD6FE",
    "figmaName": "text/accents/violet/intense",
    "alias": "color/violet/200",
    "type": "color"
  },
  "--hds-text-accents-pink-subtle": {
    "value": "#FBCFE8",
    "figmaName": "text/accents/pink/subtle",
    "alias": "color/pink/200",
    "type": "color"
  },
  "--hds-text-accents-pink-soft": {
    "value": "#F9A8D4",
    "figmaName": "text/accents/pink/soft",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-text-accents-pink-default": {
    "value": "#F472B6",
    "figmaName": "text/accents/pink/default",
    "alias": "color/pink/400",
    "type": "color"
  },
  "--hds-text-accents-pink-strong": {
    "value": "#F9A8D4",
    "figmaName": "text/accents/pink/strong",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-text-accents-pink-intense": {
    "value": "#FBCFE8",
    "figmaName": "text/accents/pink/intense",
    "alias": "color/pink/200",
    "type": "color"
  },
  "--hds-text-accents-indigo-subtle": {
    "value": "#C7D2FE",
    "figmaName": "text/accents/indigo/subtle",
    "alias": "color/indigo/200",
    "type": "color"
  },
  "--hds-text-accents-indigo-soft": {
    "value": "#A5B4FC",
    "figmaName": "text/accents/indigo/soft",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-text-accents-indigo-default": {
    "value": "#818CF8",
    "figmaName": "text/accents/indigo/default",
    "alias": "color/indigo/400",
    "type": "color"
  },
  "--hds-text-accents-indigo-strong": {
    "value": "#A5B4FC",
    "figmaName": "text/accents/indigo/strong",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-text-accents-indigo-intense": {
    "value": "#C7D2FE",
    "figmaName": "text/accents/indigo/intense",
    "alias": "color/indigo/200",
    "type": "color"
  },
  "--hds-text-accents-lime-subtle": {
    "value": "#D9F99D",
    "figmaName": "text/accents/lime/subtle",
    "alias": "color/lime/200",
    "type": "color"
  },
  "--hds-text-accents-lime-soft": {
    "value": "#BEF264",
    "figmaName": "text/accents/lime/soft",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-text-accents-lime-default": {
    "value": "#A3E635",
    "figmaName": "text/accents/lime/default",
    "alias": "color/lime/400",
    "type": "color"
  },
  "--hds-text-accents-lime-strong": {
    "value": "#BEF264",
    "figmaName": "text/accents/lime/strong",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-text-accents-lime-intense": {
    "value": "#D9F99D",
    "figmaName": "text/accents/lime/intense",
    "alias": "color/lime/200",
    "type": "color"
  },
  "--hds-text-accents-amber-subtle": {
    "value": "#FDE68A",
    "figmaName": "text/accents/amber/subtle",
    "alias": "color/amber/200",
    "type": "color"
  },
  "--hds-text-accents-amber-soft": {
    "value": "#FCD34D",
    "figmaName": "text/accents/amber/soft",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-text-accents-amber-default": {
    "value": "#FBBF24",
    "figmaName": "text/accents/amber/default",
    "alias": "color/amber/400",
    "type": "color"
  },
  "--hds-text-accents-amber-strong": {
    "value": "#FCD34D",
    "figmaName": "text/accents/amber/strong",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-text-accents-amber-intense": {
    "value": "#FDE68A",
    "figmaName": "text/accents/amber/intense",
    "alias": "color/amber/200",
    "type": "color"
  },
  "--hds-text-accents-sky-subtle": {
    "value": "#E0F3FF",
    "figmaName": "text/accents/sky/subtle",
    "alias": "color/sky/200",
    "type": "color"
  },
  "--hds-text-accents-sky-soft": {
    "value": "#C9E8FD",
    "figmaName": "text/accents/sky/soft",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-text-accents-sky-default": {
    "value": "#81D6FD",
    "figmaName": "text/accents/sky/default",
    "alias": "color/sky/400",
    "type": "color"
  },
  "--hds-text-accents-sky-strong": {
    "value": "#C9E8FD",
    "figmaName": "text/accents/sky/strong",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-text-accents-sky-intense": {
    "value": "#E0F3FF",
    "figmaName": "text/accents/sky/intense",
    "alias": "color/sky/200",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-subtle": {
    "value": "#F5D0FE",
    "figmaName": "text/accents/fuchsia/subtle",
    "alias": "color/fuchsia/200",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-soft": {
    "value": "#F0ABFC",
    "figmaName": "text/accents/fuchsia/soft",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-default": {
    "value": "#E879F9",
    "figmaName": "text/accents/fuchsia/default",
    "alias": "color/fuchsia/400",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-strong": {
    "value": "#F0ABFC",
    "figmaName": "text/accents/fuchsia/strong",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-text-accents-fuchsia-intense": {
    "value": "#F5D0FE",
    "figmaName": "text/accents/fuchsia/intense",
    "alias": "color/fuchsia/200",
    "type": "color"
  },
  "--hds-text-accents-green-subtle": {
    "value": "#BBF7D0",
    "figmaName": "text/accents/green/subtle",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-text-accents-green-soft": {
    "value": "#86EFAC",
    "figmaName": "text/accents/green/soft",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-text-accents-green-default": {
    "value": "#4ADE80",
    "figmaName": "text/accents/green/default",
    "alias": "color/green/400",
    "type": "color"
  },
  "--hds-text-accents-green-intense": {
    "value": "#BBF7D0",
    "figmaName": "text/accents/green/intense",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-text-accents-green-strong": {
    "value": "#86EFAC",
    "figmaName": "text/accents/green/strong",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-text-accents-blue-subtle": {
    "value": "#BFDBFE",
    "figmaName": "text/accents/blue/subtle",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-text-accents-blue-soft": {
    "value": "#93C5FD",
    "figmaName": "text/accents/blue/soft",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-text-accents-blue-default": {
    "value": "#60A5FA",
    "figmaName": "text/accents/blue/default",
    "alias": "color/blue/400",
    "type": "color"
  },
  "--hds-text-accents-blue-intense": {
    "value": "#BFDBFE",
    "figmaName": "text/accents/blue/intense",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-text-accents-blue-strong": {
    "value": "#93C5FD",
    "figmaName": "text/accents/blue/strong",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-text-accents-orange-subtle": {
    "value": "#FED7AA",
    "figmaName": "text/accents/orange/subtle",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-text-accents-orange-soft": {
    "value": "#FDBA74",
    "figmaName": "text/accents/orange/soft",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-text-accents-orange-default": {
    "value": "#FB923C",
    "figmaName": "text/accents/orange/default",
    "alias": "color/orange/400",
    "type": "color"
  },
  "--hds-text-accents-orange-intense": {
    "value": "#FED7AA",
    "figmaName": "text/accents/orange/intense",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-text-accents-orange-strong": {
    "value": "#FDBA74",
    "figmaName": "text/accents/orange/strong",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-text-accents-red-subtle": {
    "value": "#FECACA",
    "figmaName": "text/accents/red/subtle",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-text-accents-red-soft": {
    "value": "#FCA5A5",
    "figmaName": "text/accents/red/soft",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-text-accents-red-default": {
    "value": "#F87171",
    "figmaName": "text/accents/red/default",
    "alias": "color/red/400",
    "type": "color"
  },
  "--hds-text-accents-red-intense": {
    "value": "#FECACA",
    "figmaName": "text/accents/red/intense",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-text-accents-red-strong": {
    "value": "#FCA5A5",
    "figmaName": "text/accents/red/strong",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-text-accents-gray-subtle": {
    "value": "#E2E8F0",
    "figmaName": "text/accents/gray/subtle",
    "alias": "color/Slate/200",
    "type": "color"
  },
  "--hds-text-accents-gray-soft": {
    "value": "#CBD5E1",
    "figmaName": "text/accents/gray/soft",
    "alias": "color/Slate/300",
    "type": "color"
  },
  "--hds-text-accents-gray-default": {
    "value": "#94A3B8",
    "figmaName": "text/accents/gray/default",
    "alias": "color/Slate/400",
    "type": "color"
  },
  "--hds-text-accents-gray-intense": {
    "value": "#E2E8F0",
    "figmaName": "text/accents/gray/intense",
    "alias": "color/Slate/200",
    "type": "color"
  },
  "--hds-text-accents-gray-strong": {
    "value": "#CBD5E1",
    "figmaName": "text/accents/gray/strong",
    "alias": "color/Slate/300",
    "type": "color"
  },
  "--hds-text-on-brand": {
    "value": "#020617",
    "figmaName": "text/on/brand",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-text-on-success": {
    "value": "#FFFFFF",
    "figmaName": "text/on/success",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-warning": {
    "value": "#FFFFFF",
    "figmaName": "text/on/warning",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-error": {
    "value": "#FFFFFF",
    "figmaName": "text/on/error",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-info": {
    "value": "#FFFFFF",
    "figmaName": "text/on/info",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-royal": {
    "value": "#FFFFFF",
    "figmaName": "text/on/royal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-teal": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/teal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-cyan": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/cyan",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-violet": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/violet",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-pink": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/pink",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-indigo": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/indigo",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-lime": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/lime",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-amber": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/amber",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-sky": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/sky",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-fuchsia": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/fuchsia",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-green": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/green",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-blue": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/blue",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-orange": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/orange",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-red": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/red",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-text-on-accents-gray": {
    "value": "#FFFFFF",
    "figmaName": "text/on/accents/gray",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-background-disabled": {
    "value": "#1E293B",
    "figmaName": "background/disabled",
    "alias": "color/Slate/800",
    "type": "color"
  },
  "--hds-background-overlay": {
    "value": "rgb(0 0 0 / 0.65)",
    "figmaName": "background/overlay",
    "alias": "color/black/alpha/65",
    "type": "color"
  },
  "--hds-background-alpha-black-5": {
    "value": "rgb(255 255 255 / 0.05)",
    "figmaName": "background/alpha/black/5",
    "alias": "color/white/alpha/5",
    "type": "color"
  },
  "--hds-background-alpha-black-10": {
    "value": "rgb(255 255 255 / 0.1)",
    "figmaName": "background/alpha/black/10",
    "alias": "color/white/alpha/10",
    "type": "color"
  },
  "--hds-background-static-white": {
    "value": "#FFFFFF",
    "figmaName": "background/static/white",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-background-static-black": {
    "value": "#020617",
    "figmaName": "background/static/black",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-background-neutral-white": {
    "value": "#020617",
    "figmaName": "background/neutral/white",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-background-neutral-subtle": {
    "value": "#020617",
    "figmaName": "background/neutral/subtle",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-background-neutral-soft": {
    "value": "#0F172A",
    "figmaName": "background/neutral/soft",
    "alias": "color/Slate/900",
    "type": "color"
  },
  "--hds-background-neutral-default": {
    "value": "#1E293B",
    "figmaName": "background/neutral/default",
    "alias": "color/Slate/800",
    "type": "color"
  },
  "--hds-background-neutral-strong": {
    "value": "#334155",
    "figmaName": "background/neutral/strong",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-background-neutral-bold-soft": {
    "value": "#E2E8F0",
    "figmaName": "background/neutral-bold/soft",
    "alias": "color/Slate/200",
    "type": "color"
  },
  "--hds-background-neutral-bold-default": {
    "value": "#F1F5F9",
    "figmaName": "background/neutral-bold/default",
    "alias": "color/Slate/100",
    "type": "color"
  },
  "--hds-background-neutral-bold-strong": {
    "value": "#F8FAFC",
    "figmaName": "background/neutral-bold/strong",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-background-neutral-bold-intense": {
    "value": "#F8FAFC",
    "figmaName": "background/neutral-bold/intense",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-background-neutral-bold-black": {
    "value": "#FFFFFF",
    "figmaName": "background/neutral-bold/black",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-background-brand-subtle": {
    "value": "rgb(255 207 84 / 0.12)",
    "figmaName": "background/brand/subtle",
    "alias": "color/yellow/alpha/12",
    "type": "color"
  },
  "--hds-background-brand-soft": {
    "value": "rgb(255 207 84 / 0.2)",
    "figmaName": "background/brand/soft",
    "alias": "color/yellow/alpha/20",
    "type": "color"
  },
  "--hds-background-brand-default": {
    "value": "#FFCF54",
    "figmaName": "background/brand/default",
    "alias": "color/yellow/400",
    "type": "color"
  },
  "--hds-background-brand-strong": {
    "value": "#FFDB6E",
    "figmaName": "background/brand/strong",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-background-brand-intense": {
    "value": "#F0B82E",
    "figmaName": "background/brand/intense",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-background-royal-subtle": {
    "value": "rgb(36 111 234 / 0.12)",
    "figmaName": "background/royal/subtle",
    "alias": "color/royal/alpha/12",
    "type": "color"
  },
  "--hds-background-royal-soft": {
    "value": "rgb(36 111 234 / 0.2)",
    "figmaName": "background/royal/soft",
    "alias": "color/royal/alpha/20",
    "type": "color"
  },
  "--hds-background-royal-default": {
    "value": "#246FEA",
    "figmaName": "background/royal/default",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-background-royal-strong": {
    "value": "#5994F2",
    "figmaName": "background/royal/strong",
    "alias": "color/royal/400",
    "type": "color"
  },
  "--hds-background-royal-intense": {
    "value": "#1956C8",
    "figmaName": "background/royal/intense",
    "alias": "color/royal/600",
    "type": "color"
  },
  "--hds-background-success-subtle": {
    "value": "rgb(34 197 94 / 0.1)",
    "figmaName": "background/success/subtle",
    "alias": "color/green/alpha/10",
    "type": "color"
  },
  "--hds-background-success-soft": {
    "value": "rgb(34 197 94 / 0.18)",
    "figmaName": "background/success/soft",
    "alias": "color/green/alpha/18",
    "type": "color"
  },
  "--hds-background-success-default": {
    "value": "#14532D",
    "figmaName": "background/success/default",
    "alias": "color/green/900",
    "type": "color"
  },
  "--hds-background-success-strong": {
    "value": "#16A34A",
    "figmaName": "background/success/strong",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-background-success-intense": {
    "value": "#15803D",
    "figmaName": "background/success/intense",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-background-warning-subtle": {
    "value": "rgb(249 115 22 / 0.12)",
    "figmaName": "background/warning/subtle",
    "alias": "color/orange/alpha/12",
    "type": "color"
  },
  "--hds-background-warning-soft": {
    "value": "rgb(249 115 22 / 0.2)",
    "figmaName": "background/warning/soft",
    "alias": "color/orange/alpha/20",
    "type": "color"
  },
  "--hds-background-warning-default": {
    "value": "#7C2D12",
    "figmaName": "background/warning/default",
    "alias": "color/orange/900",
    "type": "color"
  },
  "--hds-background-warning-strong": {
    "value": "#F97316",
    "figmaName": "background/warning/strong",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-background-warning-intense": {
    "value": "#C2410C",
    "figmaName": "background/warning/intense",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-background-error-subtle": {
    "value": "rgb(239 68 68 / 0.1)",
    "figmaName": "background/error/subtle",
    "alias": "color/red/alpha/10",
    "type": "color"
  },
  "--hds-background-error-soft": {
    "value": "rgb(239 68 68 / 0.18)",
    "figmaName": "background/error/soft",
    "alias": "color/red/alpha/18",
    "type": "color"
  },
  "--hds-background-error-default": {
    "value": "#7F1D1D",
    "figmaName": "background/error/default",
    "alias": "color/red/900",
    "type": "color"
  },
  "--hds-background-error-strong": {
    "value": "#DC2626",
    "figmaName": "background/error/strong",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-background-error-intense": {
    "value": "#991B1B",
    "figmaName": "background/error/intense",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-background-info-subtle": {
    "value": "rgb(59 130 246 / 0.1)",
    "figmaName": "background/info/subtle",
    "alias": "color/blue/alpha/10",
    "type": "color"
  },
  "--hds-background-info-soft": {
    "value": "rgb(59 130 246 / 0.18)",
    "figmaName": "background/info/soft",
    "alias": "color/blue/alpha/18",
    "type": "color"
  },
  "--hds-background-info-default": {
    "value": "#1E3A8A",
    "figmaName": "background/info/default",
    "alias": "color/blue/900",
    "type": "color"
  },
  "--hds-background-info-strong": {
    "value": "#2563EB",
    "figmaName": "background/info/strong",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-background-info-intense": {
    "value": "#1D4ED8",
    "figmaName": "background/info/intense",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-background-accents-teal-subtle": {
    "value": "rgb(20 184 166 / 0.1)",
    "figmaName": "background/accents/teal/subtle",
    "alias": "color/teal/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-teal-soft": {
    "value": "rgb(20 184 166 / 0.18)",
    "figmaName": "background/accents/teal/soft",
    "alias": "color/teal/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-teal-default": {
    "value": "#134E4A",
    "figmaName": "background/accents/teal/default",
    "alias": "color/teal/900",
    "type": "color"
  },
  "--hds-background-accents-teal-strong": {
    "value": "#0D9488",
    "figmaName": "background/accents/teal/strong",
    "alias": "color/teal/600",
    "type": "color"
  },
  "--hds-background-accents-teal-intense": {
    "value": "#0F766E",
    "figmaName": "background/accents/teal/intense",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-background-accents-cyan-subtle": {
    "value": "rgb(6 182 212 / 0.1)",
    "figmaName": "background/accents/cyan/subtle",
    "alias": "color/cyan/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-cyan-soft": {
    "value": "rgb(6 182 212 / 0.18)",
    "figmaName": "background/accents/cyan/soft",
    "alias": "color/cyan/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-cyan-default": {
    "value": "#164E63",
    "figmaName": "background/accents/cyan/default",
    "alias": "color/cyan/900",
    "type": "color"
  },
  "--hds-background-accents-cyan-strong": {
    "value": "#0891B2",
    "figmaName": "background/accents/cyan/strong",
    "alias": "color/cyan/600",
    "type": "color"
  },
  "--hds-background-accents-cyan-intense": {
    "value": "#0E7490",
    "figmaName": "background/accents/cyan/intense",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-background-accents-violet-subtle": {
    "value": "rgb(139 92 246 / 0.1)",
    "figmaName": "background/accents/violet/subtle",
    "alias": "color/violet/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-violet-soft": {
    "value": "rgb(139 92 246 / 0.18)",
    "figmaName": "background/accents/violet/soft",
    "alias": "color/violet/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-violet-default": {
    "value": "#4C1D95",
    "figmaName": "background/accents/violet/default",
    "alias": "color/violet/900",
    "type": "color"
  },
  "--hds-background-accents-violet-strong": {
    "value": "#7C3AED",
    "figmaName": "background/accents/violet/strong",
    "alias": "color/violet/600",
    "type": "color"
  },
  "--hds-background-accents-violet-intense": {
    "value": "#6D28D9",
    "figmaName": "background/accents/violet/intense",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-background-accents-pink-subtle": {
    "value": "rgb(236 72 153 / 0.1)",
    "figmaName": "background/accents/pink/subtle",
    "alias": "color/pink/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-pink-soft": {
    "value": "rgb(236 72 153 / 0.18)",
    "figmaName": "background/accents/pink/soft",
    "alias": "color/pink/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-pink-default": {
    "value": "#831843",
    "figmaName": "background/accents/pink/default",
    "alias": "color/pink/900",
    "type": "color"
  },
  "--hds-background-accents-pink-strong": {
    "value": "#DB2777",
    "figmaName": "background/accents/pink/strong",
    "alias": "color/pink/600",
    "type": "color"
  },
  "--hds-background-accents-pink-intense": {
    "value": "#BE185D",
    "figmaName": "background/accents/pink/intense",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-background-accents-indigo-subtle": {
    "value": "rgb(99 102 241 / 0.1)",
    "figmaName": "background/accents/indigo/subtle",
    "alias": "color/indigo/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-indigo-soft": {
    "value": "rgb(99 102 241 / 0.18)",
    "figmaName": "background/accents/indigo/soft",
    "alias": "color/indigo/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-indigo-default": {
    "value": "#312E81",
    "figmaName": "background/accents/indigo/default",
    "alias": "color/indigo/900",
    "type": "color"
  },
  "--hds-background-accents-indigo-strong": {
    "value": "#4F46E5",
    "figmaName": "background/accents/indigo/strong",
    "alias": "color/indigo/600",
    "type": "color"
  },
  "--hds-background-accents-indigo-intense": {
    "value": "#4338CA",
    "figmaName": "background/accents/indigo/intense",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-background-accents-lime-subtle": {
    "value": "rgb(132 204 22 / 0.1)",
    "figmaName": "background/accents/lime/subtle",
    "alias": "color/lime/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-lime-soft": {
    "value": "rgb(132 204 22 / 0.18)",
    "figmaName": "background/accents/lime/soft",
    "alias": "color/lime/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-lime-default": {
    "value": "#365314",
    "figmaName": "background/accents/lime/default",
    "alias": "color/lime/900",
    "type": "color"
  },
  "--hds-background-accents-lime-strong": {
    "value": "#65A30D",
    "figmaName": "background/accents/lime/strong",
    "alias": "color/lime/600",
    "type": "color"
  },
  "--hds-background-accents-lime-intense": {
    "value": "#4D7C0F",
    "figmaName": "background/accents/lime/intense",
    "alias": "color/lime/700",
    "type": "color"
  },
  "--hds-background-accents-amber-subtle": {
    "value": "rgb(245 158 11 / 0.1)",
    "figmaName": "background/accents/amber/subtle",
    "alias": "color/amber/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-amber-soft": {
    "value": "rgb(245 158 11 / 0.18)",
    "figmaName": "background/accents/amber/soft",
    "alias": "color/amber/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-amber-default": {
    "value": "#78350F",
    "figmaName": "background/accents/amber/default",
    "alias": "color/amber/900",
    "type": "color"
  },
  "--hds-background-accents-amber-strong": {
    "value": "#D97706",
    "figmaName": "background/accents/amber/strong",
    "alias": "color/amber/600",
    "type": "color"
  },
  "--hds-background-accents-amber-intense": {
    "value": "#B45309",
    "figmaName": "background/accents/amber/intense",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-background-accents-sky-subtle": {
    "value": "rgb(14 165 233 / 0.1)",
    "figmaName": "background/accents/sky/subtle",
    "alias": "color/sky/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-sky-soft": {
    "value": "rgb(14 165 233 / 0.18)",
    "figmaName": "background/accents/sky/soft",
    "alias": "color/sky/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-sky-default": {
    "value": "#0B4D74",
    "figmaName": "background/accents/sky/default",
    "alias": "color/sky/900",
    "type": "color"
  },
  "--hds-background-accents-sky-strong": {
    "value": "#0BA7EF",
    "figmaName": "background/accents/sky/strong",
    "alias": "color/sky/600",
    "type": "color"
  },
  "--hds-background-accents-sky-intense": {
    "value": "#0081C2",
    "figmaName": "background/accents/sky/intense",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-subtle": {
    "value": "rgb(217 70 239 / 0.1)",
    "figmaName": "background/accents/fuchsia/subtle",
    "alias": "color/fuchsia/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-soft": {
    "value": "rgb(217 70 239 / 0.18)",
    "figmaName": "background/accents/fuchsia/soft",
    "alias": "color/fuchsia/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-default": {
    "value": "#701A75",
    "figmaName": "background/accents/fuchsia/default",
    "alias": "color/fuchsia/900",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-strong": {
    "value": "#C026D3",
    "figmaName": "background/accents/fuchsia/strong",
    "alias": "color/fuchsia/600",
    "type": "color"
  },
  "--hds-background-accents-fuchsia-intense": {
    "value": "#A21CAF",
    "figmaName": "background/accents/fuchsia/intense",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-background-accents-hig-subtle": {
    "value": "#020617",
    "figmaName": "background/accents/hig/Subtle",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-background-accents-hig-soft": {
    "value": "#0F172A",
    "figmaName": "background/accents/hig/Soft",
    "alias": "color/Slate/900",
    "type": "color"
  },
  "--hds-background-accents-hig-default": {
    "value": "#1E293B",
    "figmaName": "background/accents/hig/Default",
    "alias": "color/Slate/800",
    "type": "color"
  },
  "--hds-background-accents-hig-strong": {
    "value": "#1E293B",
    "figmaName": "background/accents/hig/Strong",
    "alias": "color/Slate/800",
    "type": "color"
  },
  "--hds-background-accents-hig-intense": {
    "value": "#334155",
    "figmaName": "background/accents/hig/Intense",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-background-accents-green-subtle": {
    "value": "rgb(34 197 94 / 0.1)",
    "figmaName": "background/accents/green/subtle",
    "alias": "color/green/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-green-soft": {
    "value": "rgb(34 197 94 / 0.18)",
    "figmaName": "background/accents/green/soft",
    "alias": "color/green/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-green-default": {
    "value": "#14532D",
    "figmaName": "background/accents/green/default",
    "alias": "color/green/900",
    "type": "color"
  },
  "--hds-background-accents-green-intense": {
    "value": "#15803D",
    "figmaName": "background/accents/green/intense",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-background-accents-green-strong": {
    "value": "#16A34A",
    "figmaName": "background/accents/green/strong",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-background-accents-blue-subtle": {
    "value": "rgb(59 130 246 / 0.1)",
    "figmaName": "background/accents/blue/subtle",
    "alias": "color/blue/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-blue-soft": {
    "value": "rgb(59 130 246 / 0.18)",
    "figmaName": "background/accents/blue/soft",
    "alias": "color/blue/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-blue-default": {
    "value": "#1E3A8A",
    "figmaName": "background/accents/blue/default",
    "alias": "color/blue/900",
    "type": "color"
  },
  "--hds-background-accents-blue-intense": {
    "value": "#1D4ED8",
    "figmaName": "background/accents/blue/intense",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-background-accents-blue-strong": {
    "value": "#2563EB",
    "figmaName": "background/accents/blue/strong",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-background-accents-orange-subtle": {
    "value": "rgb(249 115 22 / 0.12)",
    "figmaName": "background/accents/orange/subtle",
    "alias": "color/orange/alpha/12",
    "type": "color"
  },
  "--hds-background-accents-orange-soft": {
    "value": "rgb(249 115 22 / 0.2)",
    "figmaName": "background/accents/orange/soft",
    "alias": "color/orange/alpha/20",
    "type": "color"
  },
  "--hds-background-accents-orange-default": {
    "value": "#7C2D12",
    "figmaName": "background/accents/orange/default",
    "alias": "color/orange/900",
    "type": "color"
  },
  "--hds-background-accents-orange-intense": {
    "value": "#C2410C",
    "figmaName": "background/accents/orange/intense",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-background-accents-orange-strong": {
    "value": "#EA580C",
    "figmaName": "background/accents/orange/strong",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-background-accents-red-subtle": {
    "value": "rgb(239 68 68 / 0.1)",
    "figmaName": "background/accents/red/subtle",
    "alias": "color/red/alpha/10",
    "type": "color"
  },
  "--hds-background-accents-red-soft": {
    "value": "rgb(239 68 68 / 0.18)",
    "figmaName": "background/accents/red/soft",
    "alias": "color/red/alpha/18",
    "type": "color"
  },
  "--hds-background-accents-red-default": {
    "value": "#7F1D1D",
    "figmaName": "background/accents/red/default",
    "alias": "color/red/900",
    "type": "color"
  },
  "--hds-background-accents-red-intense": {
    "value": "#B91C1C",
    "figmaName": "background/accents/red/intense",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-background-accents-red-strong": {
    "value": "#DC2626",
    "figmaName": "background/accents/red/strong",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-background-accents-gray-subtle": {
    "value": "rgb(115 115 115 / 0.2)",
    "figmaName": "background/accents/gray/subtle",
    "alias": "color/gray/alpha/20",
    "type": "color"
  },
  "--hds-background-accents-gray-soft": {
    "value": "rgb(115 115 115 / 0.4)",
    "figmaName": "background/accents/gray/soft",
    "alias": "color/gray/alpha/40",
    "type": "color"
  },
  "--hds-background-accents-gray-default": {
    "value": "#0F172A",
    "figmaName": "background/accents/gray/default",
    "alias": "color/Slate/900",
    "type": "color"
  },
  "--hds-background-accents-gray-intense": {
    "value": "#334155",
    "figmaName": "background/accents/gray/intense",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-background-accents-gray-strong": {
    "value": "#475569",
    "figmaName": "background/accents/gray/strong",
    "alias": "color/Slate/600",
    "type": "color"
  },
  "--hds-foreground-inverse": {
    "value": "#0F172A",
    "figmaName": "foreground/inverse",
    "alias": "color/Slate/900",
    "type": "color"
  },
  "--hds-foreground-disabled": {
    "value": "#475569",
    "figmaName": "foreground/disabled",
    "alias": "color/Slate/600",
    "type": "color"
  },
  "--hds-foreground-alpha-30": {
    "value": "rgb(255 255 255 / 0.3)",
    "figmaName": "foreground/alpha/30",
    "alias": "color/white/alpha/30",
    "type": "color"
  },
  "--hds-foreground-alpha-40": {
    "value": "rgb(255 255 255 / 0.4)",
    "figmaName": "foreground/alpha/40",
    "alias": "color/white/alpha/40",
    "type": "color"
  },
  "--hds-foreground-static-white": {
    "value": "#FFFFFF",
    "figmaName": "foreground/static/white",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-static-black": {
    "value": "#000000",
    "figmaName": "foreground/static/black",
    "alias": "color/black/950",
    "type": "color"
  },
  "--hds-foreground-neutral-subtle": {
    "value": "#64758B",
    "figmaName": "foreground/neutral/subtle",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-foreground-neutral-soft": {
    "value": "#64758B",
    "figmaName": "foreground/neutral/soft",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-foreground-neutral-default": {
    "value": "#64758B",
    "figmaName": "foreground/neutral/default",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-foreground-neutral-strong": {
    "value": "#64758B",
    "figmaName": "foreground/neutral/strong",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-foreground-neutral-intense": {
    "value": "#94A3B8",
    "figmaName": "foreground/neutral/intense",
    "alias": "color/Slate/400",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-subtle": {
    "value": "#CBD5E1",
    "figmaName": "foreground/neutral-bold/subtle",
    "alias": "color/Slate/300",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-soft": {
    "value": "#E2E8F0",
    "figmaName": "foreground/neutral-bold/soft",
    "alias": "color/Slate/200",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-default": {
    "value": "#F1F5F9",
    "figmaName": "foreground/neutral-bold/default",
    "alias": "color/Slate/100",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-strong": {
    "value": "#F8FAFC",
    "figmaName": "foreground/neutral-bold/strong",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-foreground-neutral-bold-intense": {
    "value": "#F8FAFC",
    "figmaName": "foreground/neutral-bold/intense",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-foreground-brand-subtle": {
    "value": "#C8941A",
    "figmaName": "foreground/brand/subtle",
    "alias": "color/yellow/600",
    "type": "color"
  },
  "--hds-foreground-brand-soft": {
    "value": "#F0B82E",
    "figmaName": "foreground/brand/soft",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-foreground-brand-default": {
    "value": "#FFCF54",
    "figmaName": "foreground/brand/default",
    "alias": "color/yellow/400",
    "type": "color"
  },
  "--hds-foreground-brand-strong": {
    "value": "#FFDB6E",
    "figmaName": "foreground/brand/strong",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-foreground-brand-intense": {
    "value": "#FFE89A",
    "figmaName": "foreground/brand/intense",
    "alias": "color/yellow/200",
    "type": "color"
  },
  "--hds-foreground-royal-subtle": {
    "value": "#1956C8",
    "figmaName": "foreground/royal/subtle",
    "alias": "color/royal/600",
    "type": "color"
  },
  "--hds-foreground-royal-soft": {
    "value": "#246FEA",
    "figmaName": "foreground/royal/soft",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-foreground-royal-default": {
    "value": "#5994F2",
    "figmaName": "foreground/royal/default",
    "alias": "color/royal/400",
    "type": "color"
  },
  "--hds-foreground-royal-strong": {
    "value": "#8CB5F8",
    "figmaName": "foreground/royal/strong",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-foreground-royal-intense": {
    "value": "#B6D2FB",
    "figmaName": "foreground/royal/intense",
    "alias": "color/royal/200",
    "type": "color"
  },
  "--hds-foreground-success-subtle": {
    "value": "#16A34A",
    "figmaName": "foreground/success/subtle",
    "alias": "color/green/600",
    "type": "color"
  },
  "--hds-foreground-success-soft": {
    "value": "#22C55E",
    "figmaName": "foreground/success/soft",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-foreground-success-default": {
    "value": "#4ADE80",
    "figmaName": "foreground/success/default",
    "alias": "color/green/400",
    "type": "color"
  },
  "--hds-foreground-success-strong": {
    "value": "#86EFAC",
    "figmaName": "foreground/success/strong",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-foreground-success-intense": {
    "value": "#BBF7D0",
    "figmaName": "foreground/success/intense",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-foreground-warning-subtle": {
    "value": "#EA580C",
    "figmaName": "foreground/warning/subtle",
    "alias": "color/orange/600",
    "type": "color"
  },
  "--hds-foreground-warning-soft": {
    "value": "#F97316",
    "figmaName": "foreground/warning/soft",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-foreground-warning-default": {
    "value": "#FB923C",
    "figmaName": "foreground/warning/default",
    "alias": "color/orange/400",
    "type": "color"
  },
  "--hds-foreground-warning-strong": {
    "value": "#FDBA74",
    "figmaName": "foreground/warning/strong",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-foreground-warning-intense": {
    "value": "#FED7AA",
    "figmaName": "foreground/warning/intense",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-foreground-error-subtle": {
    "value": "#DC2626",
    "figmaName": "foreground/error/subtle",
    "alias": "color/red/600",
    "type": "color"
  },
  "--hds-foreground-error-soft": {
    "value": "#EF4444",
    "figmaName": "foreground/error/soft",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-foreground-error-default": {
    "value": "#F87171",
    "figmaName": "foreground/error/default",
    "alias": "color/red/400",
    "type": "color"
  },
  "--hds-foreground-error-strong": {
    "value": "#FCA5A5",
    "figmaName": "foreground/error/strong",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-foreground-error-intense": {
    "value": "#FECACA",
    "figmaName": "foreground/error/intense",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-foreground-info-subtle": {
    "value": "#2563EB",
    "figmaName": "foreground/info/subtle",
    "alias": "color/blue/600",
    "type": "color"
  },
  "--hds-foreground-info-soft": {
    "value": "#3B82F6",
    "figmaName": "foreground/info/soft",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-foreground-info-default": {
    "value": "#60A5FA",
    "figmaName": "foreground/info/default",
    "alias": "color/blue/400",
    "type": "color"
  },
  "--hds-foreground-info-strong": {
    "value": "#93C5FD",
    "figmaName": "foreground/info/strong",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-foreground-info-intense": {
    "value": "#BFDBFE",
    "figmaName": "foreground/info/intense",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-foreground-accents-teal-subtle": {
    "value": "#99F6E4",
    "figmaName": "foreground/accents/teal/subtle",
    "alias": "color/teal/200",
    "type": "color"
  },
  "--hds-foreground-accents-teal-soft": {
    "value": "#5EEAD4",
    "figmaName": "foreground/accents/teal/soft",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-foreground-accents-teal-default": {
    "value": "#2DD4BF",
    "figmaName": "foreground/accents/teal/default",
    "alias": "color/teal/400",
    "type": "color"
  },
  "--hds-foreground-accents-teal-strong": {
    "value": "#5EEAD4",
    "figmaName": "foreground/accents/teal/strong",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-foreground-accents-teal-intense": {
    "value": "#99F6E4",
    "figmaName": "foreground/accents/teal/intense",
    "alias": "color/teal/200",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-subtle": {
    "value": "#A5F3FC",
    "figmaName": "foreground/accents/cyan/subtle",
    "alias": "color/cyan/200",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-soft": {
    "value": "#67E8F9",
    "figmaName": "foreground/accents/cyan/soft",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-default": {
    "value": "#22D3EE",
    "figmaName": "foreground/accents/cyan/default",
    "alias": "color/cyan/400",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-strong": {
    "value": "#67E8F9",
    "figmaName": "foreground/accents/cyan/strong",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-foreground-accents-cyan-intense": {
    "value": "#A5F3FC",
    "figmaName": "foreground/accents/cyan/intense",
    "alias": "color/cyan/200",
    "type": "color"
  },
  "--hds-foreground-accents-violet-subtle": {
    "value": "#DDD6FE",
    "figmaName": "foreground/accents/violet/subtle",
    "alias": "color/violet/200",
    "type": "color"
  },
  "--hds-foreground-accents-violet-soft": {
    "value": "#C4B5FD",
    "figmaName": "foreground/accents/violet/soft",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-foreground-accents-violet-default": {
    "value": "#A78BFA",
    "figmaName": "foreground/accents/violet/default",
    "alias": "color/violet/400",
    "type": "color"
  },
  "--hds-foreground-accents-violet-strong": {
    "value": "#C4B5FD",
    "figmaName": "foreground/accents/violet/strong",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-foreground-accents-violet-intense": {
    "value": "#DDD6FE",
    "figmaName": "foreground/accents/violet/intense",
    "alias": "color/violet/200",
    "type": "color"
  },
  "--hds-foreground-accents-pink-subtle": {
    "value": "#FBCFE8",
    "figmaName": "foreground/accents/pink/subtle",
    "alias": "color/pink/200",
    "type": "color"
  },
  "--hds-foreground-accents-pink-soft": {
    "value": "#F9A8D4",
    "figmaName": "foreground/accents/pink/soft",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-foreground-accents-pink-default": {
    "value": "#F472B6",
    "figmaName": "foreground/accents/pink/default",
    "alias": "color/pink/400",
    "type": "color"
  },
  "--hds-foreground-accents-pink-strong": {
    "value": "#F9A8D4",
    "figmaName": "foreground/accents/pink/strong",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-foreground-accents-pink-intense": {
    "value": "#FBCFE8",
    "figmaName": "foreground/accents/pink/intense",
    "alias": "color/pink/200",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-subtle": {
    "value": "#C7D2FE",
    "figmaName": "foreground/accents/indigo/subtle",
    "alias": "color/indigo/200",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-soft": {
    "value": "#A5B4FC",
    "figmaName": "foreground/accents/indigo/soft",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-default": {
    "value": "#818CF8",
    "figmaName": "foreground/accents/indigo/default",
    "alias": "color/indigo/400",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-strong": {
    "value": "#A5B4FC",
    "figmaName": "foreground/accents/indigo/strong",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-foreground-accents-indigo-intense": {
    "value": "#C7D2FE",
    "figmaName": "foreground/accents/indigo/intense",
    "alias": "color/indigo/200",
    "type": "color"
  },
  "--hds-foreground-accents-lime-subtle": {
    "value": "#D9F99D",
    "figmaName": "foreground/accents/lime/subtle",
    "alias": "color/lime/200",
    "type": "color"
  },
  "--hds-foreground-accents-lime-soft": {
    "value": "#BEF264",
    "figmaName": "foreground/accents/lime/soft",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-foreground-accents-lime-default": {
    "value": "#A3E635",
    "figmaName": "foreground/accents/lime/default",
    "alias": "color/lime/400",
    "type": "color"
  },
  "--hds-foreground-accents-lime-strong": {
    "value": "#BEF264",
    "figmaName": "foreground/accents/lime/strong",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-foreground-accents-lime-intense": {
    "value": "#D9F99D",
    "figmaName": "foreground/accents/lime/intense",
    "alias": "color/lime/200",
    "type": "color"
  },
  "--hds-foreground-accents-green-subtle": {
    "value": "#BBF7D0",
    "figmaName": "foreground/accents/green/subtle",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-foreground-accents-green-soft": {
    "value": "#86EFAC",
    "figmaName": "foreground/accents/green/soft",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-foreground-accents-green-default": {
    "value": "#4ADE80",
    "figmaName": "foreground/accents/green/default",
    "alias": "color/green/400",
    "type": "color"
  },
  "--hds-foreground-accents-green-intense": {
    "value": "#BBF7D0",
    "figmaName": "foreground/accents/green/intense",
    "alias": "color/green/200",
    "type": "color"
  },
  "--hds-foreground-accents-green-strong": {
    "value": "#86EFAC",
    "figmaName": "foreground/accents/green/strong",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-foreground-accents-blue-subtle": {
    "value": "#BFDBFE",
    "figmaName": "foreground/accents/blue/subtle",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-foreground-accents-blue-soft": {
    "value": "#93C5FD",
    "figmaName": "foreground/accents/blue/soft",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-foreground-accents-blue-default": {
    "value": "#60A5FA",
    "figmaName": "foreground/accents/blue/default",
    "alias": "color/blue/400",
    "type": "color"
  },
  "--hds-foreground-accents-blue-intense": {
    "value": "#BFDBFE",
    "figmaName": "foreground/accents/blue/intense",
    "alias": "color/blue/200",
    "type": "color"
  },
  "--hds-foreground-accents-blue-strong": {
    "value": "#93C5FD",
    "figmaName": "foreground/accents/blue/strong",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-foreground-accents-orange-subtle": {
    "value": "#FED7AA",
    "figmaName": "foreground/accents/orange/subtle",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-foreground-accents-orange-soft": {
    "value": "#FDBA74",
    "figmaName": "foreground/accents/orange/soft",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-foreground-accents-orange-default": {
    "value": "#FB923C",
    "figmaName": "foreground/accents/orange/default",
    "alias": "color/orange/400",
    "type": "color"
  },
  "--hds-foreground-accents-orange-intense": {
    "value": "#FED7AA",
    "figmaName": "foreground/accents/orange/intense",
    "alias": "color/orange/200",
    "type": "color"
  },
  "--hds-foreground-accents-orange-strong": {
    "value": "#FDBA74",
    "figmaName": "foreground/accents/orange/strong",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-foreground-accents-red-subtle": {
    "value": "#FECACA",
    "figmaName": "foreground/accents/red/subtle",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-foreground-accents-red-soft": {
    "value": "#FCA5A5",
    "figmaName": "foreground/accents/red/soft",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-foreground-accents-red-default": {
    "value": "#F87171",
    "figmaName": "foreground/accents/red/default",
    "alias": "color/red/400",
    "type": "color"
  },
  "--hds-foreground-accents-red-intense": {
    "value": "#FECACA",
    "figmaName": "foreground/accents/red/intense",
    "alias": "color/red/200",
    "type": "color"
  },
  "--hds-foreground-accents-red-strong": {
    "value": "#FCA5A5",
    "figmaName": "foreground/accents/red/strong",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-foreground-accents-amber-subtle": {
    "value": "#FDE68A",
    "figmaName": "foreground/accents/amber/subtle",
    "alias": "color/amber/200",
    "type": "color"
  },
  "--hds-foreground-accents-amber-soft": {
    "value": "#FCD34D",
    "figmaName": "foreground/accents/amber/soft",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-foreground-accents-amber-default": {
    "value": "#FBBF24",
    "figmaName": "foreground/accents/amber/default",
    "alias": "color/amber/400",
    "type": "color"
  },
  "--hds-foreground-accents-amber-intense": {
    "value": "#FDE68A",
    "figmaName": "foreground/accents/amber/intense",
    "alias": "color/amber/200",
    "type": "color"
  },
  "--hds-foreground-accents-amber-strong": {
    "value": "#FCD34D",
    "figmaName": "foreground/accents/amber/strong",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-subtle": {
    "value": "#F5D0FE",
    "figmaName": "foreground/accents/fuchsia/subtle",
    "alias": "color/fuchsia/200",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-soft": {
    "value": "#F0ABFC",
    "figmaName": "foreground/accents/fuchsia/soft",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-default": {
    "value": "#E879F9",
    "figmaName": "foreground/accents/fuchsia/default",
    "alias": "color/fuchsia/400",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-intense": {
    "value": "#F5D0FE",
    "figmaName": "foreground/accents/fuchsia/intense",
    "alias": "color/fuchsia/200",
    "type": "color"
  },
  "--hds-foreground-accents-fuchsia-strong": {
    "value": "#F0ABFC",
    "figmaName": "foreground/accents/fuchsia/strong",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-foreground-accents-sky-subtle": {
    "value": "#E0F3FF",
    "figmaName": "foreground/accents/sky/subtle",
    "alias": "color/sky/200",
    "type": "color"
  },
  "--hds-foreground-accents-sky-soft": {
    "value": "#C9E8FD",
    "figmaName": "foreground/accents/sky/soft",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-foreground-accents-sky-default": {
    "value": "#81D6FD",
    "figmaName": "foreground/accents/sky/default",
    "alias": "color/sky/400",
    "type": "color"
  },
  "--hds-foreground-accents-sky-intense": {
    "value": "#E0F3FF",
    "figmaName": "foreground/accents/sky/intense",
    "alias": "color/sky/200",
    "type": "color"
  },
  "--hds-foreground-accents-sky-strong": {
    "value": "#C9E8FD",
    "figmaName": "foreground/accents/sky/strong",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-foreground-accents-gray-subtle": {
    "value": "#E2E8F0",
    "figmaName": "foreground/accents/gray/subtle",
    "alias": "color/Slate/200",
    "type": "color"
  },
  "--hds-foreground-accents-gray-soft": {
    "value": "#CBD5E1",
    "figmaName": "foreground/accents/gray/soft",
    "alias": "color/Slate/300",
    "type": "color"
  },
  "--hds-foreground-accents-gray-default": {
    "value": "#94A3B8",
    "figmaName": "foreground/accents/gray/default",
    "alias": "color/Slate/400",
    "type": "color"
  },
  "--hds-foreground-accents-gray-intense": {
    "value": "#E2E8F0",
    "figmaName": "foreground/accents/gray/intense",
    "alias": "color/Slate/200",
    "type": "color"
  },
  "--hds-foreground-accents-gray-strong": {
    "value": "#CBD5E1",
    "figmaName": "foreground/accents/gray/strong",
    "alias": "color/Slate/300",
    "type": "color"
  },
  "--hds-foreground-on-brand": {
    "value": "#020617",
    "figmaName": "foreground/on/brand",
    "alias": "color/Slate/950",
    "type": "color"
  },
  "--hds-foreground-on-success": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/success",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-warning": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/warning",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-error": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/error",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-info": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/info",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-royal": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/royal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-teal": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/teal",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-cyan": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/cyan",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-violet": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/violet",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-pink": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/pink",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-indigo": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/indigo",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-lime": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/lime",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-green": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/green",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-blue": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/blue",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-orange": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/orange",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-red": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/red",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-amber": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/amber",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-fuchsia": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/fuchsia",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-sky": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/sky",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-foreground-on-accents-gray": {
    "value": "#FFFFFF",
    "figmaName": "foreground/on/accents/gray",
    "alias": "color/white/950",
    "type": "color"
  },
  "--hds-border-disabled": {
    "value": "#334155",
    "figmaName": "border/disabled",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-border-neutral-white": {
    "value": "#000000",
    "figmaName": "border/neutral/white",
    "alias": "color/black/950",
    "type": "color"
  },
  "--hds-border-neutral-subtle": {
    "value": "#1E293B",
    "figmaName": "border/neutral/subtle",
    "alias": "color/Slate/800",
    "type": "color"
  },
  "--hds-border-neutral-soft": {
    "value": "#334155",
    "figmaName": "border/neutral/soft",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-border-neutral-default": {
    "value": "#475569",
    "figmaName": "border/neutral/default",
    "alias": "color/Slate/600",
    "type": "color"
  },
  "--hds-border-neutral-strong": {
    "value": "#475569",
    "figmaName": "border/neutral/strong",
    "alias": "color/Slate/600",
    "type": "color"
  },
  "--hds-border-neutral-intense": {
    "value": "#64758B",
    "figmaName": "border/neutral/intense",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-border-neutral-bold-subtle": {
    "value": "#64758B",
    "figmaName": "border/neutral-bold/subtle",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-border-neutral-bold-soft": {
    "value": "#CBD5E1",
    "figmaName": "border/neutral-bold/soft",
    "alias": "color/Slate/300",
    "type": "color"
  },
  "--hds-border-neutral-bold-default": {
    "value": "#E2E8F0",
    "figmaName": "border/neutral-bold/default",
    "alias": "color/Slate/200",
    "type": "color"
  },
  "--hds-border-neutral-bold-strong": {
    "value": "#F1F5F9",
    "figmaName": "border/neutral-bold/strong",
    "alias": "color/Slate/100",
    "type": "color"
  },
  "--hds-border-neutral-bold-intense": {
    "value": "#F8FAFC",
    "figmaName": "border/neutral-bold/intense",
    "alias": "color/Slate/50",
    "type": "color"
  },
  "--hds-border-brand-subtle": {
    "value": "#45310A",
    "figmaName": "border/brand/subtle",
    "alias": "color/yellow/900",
    "type": "color"
  },
  "--hds-border-brand-soft": {
    "value": "#6E4F0C",
    "figmaName": "border/brand/soft",
    "alias": "color/yellow/800",
    "type": "color"
  },
  "--hds-border-brand-default": {
    "value": "#9A7012",
    "figmaName": "border/brand/default",
    "alias": "color/yellow/700",
    "type": "color"
  },
  "--hds-border-brand-strong": {
    "value": "#F0B82E",
    "figmaName": "border/brand/strong",
    "alias": "color/yellow/500",
    "type": "color"
  },
  "--hds-border-brand-intense": {
    "value": "#FFDB6E",
    "figmaName": "border/brand/intense",
    "alias": "color/yellow/300",
    "type": "color"
  },
  "--hds-border-royal-subtle": {
    "value": "#132149",
    "figmaName": "border/royal/subtle",
    "alias": "color/royal/900",
    "type": "color"
  },
  "--hds-border-royal-soft": {
    "value": "#17316D",
    "figmaName": "border/royal/soft",
    "alias": "color/royal/800",
    "type": "color"
  },
  "--hds-border-royal-default": {
    "value": "#19449A",
    "figmaName": "border/royal/default",
    "alias": "color/royal/700",
    "type": "color"
  },
  "--hds-border-royal-strong": {
    "value": "#246FEA",
    "figmaName": "border/royal/strong",
    "alias": "color/royal/500",
    "type": "color"
  },
  "--hds-border-royal-intense": {
    "value": "#8CB5F8",
    "figmaName": "border/royal/intense",
    "alias": "color/royal/300",
    "type": "color"
  },
  "--hds-border-success-subtle": {
    "value": "#14532D",
    "figmaName": "border/success/subtle",
    "alias": "color/green/900",
    "type": "color"
  },
  "--hds-border-success-soft": {
    "value": "#166534",
    "figmaName": "border/success/soft",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-border-success-default": {
    "value": "#15803D",
    "figmaName": "border/success/default",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-border-success-strong": {
    "value": "#22C55E",
    "figmaName": "border/success/strong",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-border-success-intense": {
    "value": "#86EFAC",
    "figmaName": "border/success/intense",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-border-warning-subtle": {
    "value": "#7C2D12",
    "figmaName": "border/warning/subtle",
    "alias": "color/orange/900",
    "type": "color"
  },
  "--hds-border-warning-soft": {
    "value": "#9A3412",
    "figmaName": "border/warning/soft",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-border-warning-default": {
    "value": "#C2410C",
    "figmaName": "border/warning/default",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-border-warning-strong": {
    "value": "#F97316",
    "figmaName": "border/warning/strong",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-border-warning-intense": {
    "value": "#FDBA74",
    "figmaName": "border/warning/intense",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-border-error-subtle": {
    "value": "#7F1D1D",
    "figmaName": "border/error/subtle",
    "alias": "color/red/900",
    "type": "color"
  },
  "--hds-border-error-soft": {
    "value": "#991B1B",
    "figmaName": "border/error/soft",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-border-error-default": {
    "value": "#B91C1C",
    "figmaName": "border/error/default",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-border-error-strong": {
    "value": "#EF4444",
    "figmaName": "border/error/strong",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-border-error-intense": {
    "value": "#FCA5A5",
    "figmaName": "border/error/intense",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-border-info-subtle": {
    "value": "#1E3A8A",
    "figmaName": "border/info/subtle",
    "alias": "color/blue/900",
    "type": "color"
  },
  "--hds-border-info-soft": {
    "value": "#1E40AF",
    "figmaName": "border/info/soft",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-border-info-default": {
    "value": "#1D4ED8",
    "figmaName": "border/info/default",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-border-info-strong": {
    "value": "#3B82F6",
    "figmaName": "border/info/strong",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-border-info-intense": {
    "value": "#93C5FD",
    "figmaName": "border/info/intense",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-border-accents-teal-subtle": {
    "value": "#134E4A",
    "figmaName": "border/accents/teal/subtle",
    "alias": "color/teal/900",
    "type": "color"
  },
  "--hds-border-accents-teal-soft": {
    "value": "#115E59",
    "figmaName": "border/accents/teal/soft",
    "alias": "color/teal/800",
    "type": "color"
  },
  "--hds-border-accents-teal-default": {
    "value": "#0F766E",
    "figmaName": "border/accents/teal/default",
    "alias": "color/teal/700",
    "type": "color"
  },
  "--hds-border-accents-teal-strong": {
    "value": "#14B8A6",
    "figmaName": "border/accents/teal/strong",
    "alias": "color/teal/500",
    "type": "color"
  },
  "--hds-border-accents-teal-intense": {
    "value": "#5EEAD4",
    "figmaName": "border/accents/teal/intense",
    "alias": "color/teal/300",
    "type": "color"
  },
  "--hds-border-accents-cyan-subtle": {
    "value": "#164E63",
    "figmaName": "border/accents/cyan/subtle",
    "alias": "color/cyan/900",
    "type": "color"
  },
  "--hds-border-accents-cyan-soft": {
    "value": "#155E75",
    "figmaName": "border/accents/cyan/soft",
    "alias": "color/cyan/800",
    "type": "color"
  },
  "--hds-border-accents-cyan-default": {
    "value": "#0E7490",
    "figmaName": "border/accents/cyan/default",
    "alias": "color/cyan/700",
    "type": "color"
  },
  "--hds-border-accents-cyan-strong": {
    "value": "#06B6D4",
    "figmaName": "border/accents/cyan/strong",
    "alias": "color/cyan/500",
    "type": "color"
  },
  "--hds-border-accents-cyan-intense": {
    "value": "#67E8F9",
    "figmaName": "border/accents/cyan/intense",
    "alias": "color/cyan/300",
    "type": "color"
  },
  "--hds-border-accents-violet-subtle": {
    "value": "#4C1D95",
    "figmaName": "border/accents/violet/subtle",
    "alias": "color/violet/900",
    "type": "color"
  },
  "--hds-border-accents-violet-soft": {
    "value": "#5B21B6",
    "figmaName": "border/accents/violet/soft",
    "alias": "color/violet/800",
    "type": "color"
  },
  "--hds-border-accents-violet-default": {
    "value": "#6D28D9",
    "figmaName": "border/accents/violet/default",
    "alias": "color/violet/700",
    "type": "color"
  },
  "--hds-border-accents-violet-strong": {
    "value": "#8B5CF6",
    "figmaName": "border/accents/violet/strong",
    "alias": "color/violet/500",
    "type": "color"
  },
  "--hds-border-accents-violet-intense": {
    "value": "#C4B5FD",
    "figmaName": "border/accents/violet/intense",
    "alias": "color/violet/300",
    "type": "color"
  },
  "--hds-border-accents-pink-subtle": {
    "value": "#831843",
    "figmaName": "border/accents/pink/subtle",
    "alias": "color/pink/900",
    "type": "color"
  },
  "--hds-border-accents-pink-soft": {
    "value": "#9D174D",
    "figmaName": "border/accents/pink/soft",
    "alias": "color/pink/800",
    "type": "color"
  },
  "--hds-border-accents-pink-default": {
    "value": "#BE185D",
    "figmaName": "border/accents/pink/default",
    "alias": "color/pink/700",
    "type": "color"
  },
  "--hds-border-accents-pink-strong": {
    "value": "#EC4899",
    "figmaName": "border/accents/pink/strong",
    "alias": "color/pink/500",
    "type": "color"
  },
  "--hds-border-accents-pink-intense": {
    "value": "#F9A8D4",
    "figmaName": "border/accents/pink/intense",
    "alias": "color/pink/300",
    "type": "color"
  },
  "--hds-border-accents-indigo-subtle": {
    "value": "#312E81",
    "figmaName": "border/accents/indigo/subtle",
    "alias": "color/indigo/900",
    "type": "color"
  },
  "--hds-border-accents-indigo-soft": {
    "value": "#3730A3",
    "figmaName": "border/accents/indigo/soft",
    "alias": "color/indigo/800",
    "type": "color"
  },
  "--hds-border-accents-indigo-default": {
    "value": "#4338CA",
    "figmaName": "border/accents/indigo/default",
    "alias": "color/indigo/700",
    "type": "color"
  },
  "--hds-border-accents-indigo-strong": {
    "value": "#6366F1",
    "figmaName": "border/accents/indigo/strong",
    "alias": "color/indigo/500",
    "type": "color"
  },
  "--hds-border-accents-indigo-intense": {
    "value": "#A5B4FC",
    "figmaName": "border/accents/indigo/intense",
    "alias": "color/indigo/300",
    "type": "color"
  },
  "--hds-border-accents-lime-subtle": {
    "value": "#365314",
    "figmaName": "border/accents/lime/subtle",
    "alias": "color/lime/900",
    "type": "color"
  },
  "--hds-border-accents-lime-soft": {
    "value": "#3F6212",
    "figmaName": "border/accents/lime/soft",
    "alias": "color/lime/800",
    "type": "color"
  },
  "--hds-border-accents-lime-default": {
    "value": "#4D7C0F",
    "figmaName": "border/accents/lime/default",
    "alias": "color/lime/700",
    "type": "color"
  },
  "--hds-border-accents-lime-strong": {
    "value": "#84CC16",
    "figmaName": "border/accents/lime/strong",
    "alias": "color/lime/500",
    "type": "color"
  },
  "--hds-border-accents-lime-intense": {
    "value": "#BEF264",
    "figmaName": "border/accents/lime/intense",
    "alias": "color/lime/300",
    "type": "color"
  },
  "--hds-border-accents-amber-subtle": {
    "value": "#78350F",
    "figmaName": "border/accents/amber/subtle",
    "alias": "color/amber/900",
    "type": "color"
  },
  "--hds-border-accents-amber-soft": {
    "value": "#92400E",
    "figmaName": "border/accents/amber/soft",
    "alias": "color/amber/800",
    "type": "color"
  },
  "--hds-border-accents-amber-default": {
    "value": "#B45309",
    "figmaName": "border/accents/amber/default",
    "alias": "color/amber/700",
    "type": "color"
  },
  "--hds-border-accents-amber-strong": {
    "value": "#F59E0B",
    "figmaName": "border/accents/amber/strong",
    "alias": "color/amber/500",
    "type": "color"
  },
  "--hds-border-accents-amber-intense": {
    "value": "#FCD34D",
    "figmaName": "border/accents/amber/intense",
    "alias": "color/amber/300",
    "type": "color"
  },
  "--hds-border-accents-sky-subtle": {
    "value": "#0B4D74",
    "figmaName": "border/accents/sky/subtle",
    "alias": "color/sky/900",
    "type": "color"
  },
  "--hds-border-accents-sky-soft": {
    "value": "#065B89",
    "figmaName": "border/accents/sky/soft",
    "alias": "color/sky/800",
    "type": "color"
  },
  "--hds-border-accents-sky-default": {
    "value": "#0081C2",
    "figmaName": "border/accents/sky/default",
    "alias": "color/sky/700",
    "type": "color"
  },
  "--hds-border-accents-sky-strong": {
    "value": "#3DC1FA",
    "figmaName": "border/accents/sky/strong",
    "alias": "color/sky/500",
    "type": "color"
  },
  "--hds-border-accents-sky-intense": {
    "value": "#C9E8FD",
    "figmaName": "border/accents/sky/intense",
    "alias": "color/sky/300",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-subtle": {
    "value": "#701A75",
    "figmaName": "border/accents/fuchsia/subtle",
    "alias": "color/fuchsia/900",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-soft": {
    "value": "#86198F",
    "figmaName": "border/accents/fuchsia/soft",
    "alias": "color/fuchsia/800",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-default": {
    "value": "#A21CAF",
    "figmaName": "border/accents/fuchsia/default",
    "alias": "color/fuchsia/700",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-strong": {
    "value": "#D946EF",
    "figmaName": "border/accents/fuchsia/strong",
    "alias": "color/fuchsia/500",
    "type": "color"
  },
  "--hds-border-accents-fuchsia-intense": {
    "value": "#F0ABFC",
    "figmaName": "border/accents/fuchsia/intense",
    "alias": "color/fuchsia/300",
    "type": "color"
  },
  "--hds-border-accents-green-subtle": {
    "value": "#14532D",
    "figmaName": "border/accents/green/subtle",
    "alias": "color/green/900",
    "type": "color"
  },
  "--hds-border-accents-green-soft": {
    "value": "#166534",
    "figmaName": "border/accents/green/soft",
    "alias": "color/green/800",
    "type": "color"
  },
  "--hds-border-accents-green-default": {
    "value": "#15803D",
    "figmaName": "border/accents/green/default",
    "alias": "color/green/700",
    "type": "color"
  },
  "--hds-border-accents-green-intense": {
    "value": "#86EFAC",
    "figmaName": "border/accents/green/intense",
    "alias": "color/green/300",
    "type": "color"
  },
  "--hds-border-accents-green-strong": {
    "value": "#22C55E",
    "figmaName": "border/accents/green/strong",
    "alias": "color/green/500",
    "type": "color"
  },
  "--hds-border-accents-blue-subtle": {
    "value": "#1E3A8A",
    "figmaName": "border/accents/blue/subtle",
    "alias": "color/blue/900",
    "type": "color"
  },
  "--hds-border-accents-blue-soft": {
    "value": "#1E40AF",
    "figmaName": "border/accents/blue/soft",
    "alias": "color/blue/800",
    "type": "color"
  },
  "--hds-border-accents-blue-default": {
    "value": "#1D4ED8",
    "figmaName": "border/accents/blue/default",
    "alias": "color/blue/700",
    "type": "color"
  },
  "--hds-border-accents-blue-intense": {
    "value": "#93C5FD",
    "figmaName": "border/accents/blue/intense",
    "alias": "color/blue/300",
    "type": "color"
  },
  "--hds-border-accents-blue-strong": {
    "value": "#3B82F6",
    "figmaName": "border/accents/blue/strong",
    "alias": "color/blue/500",
    "type": "color"
  },
  "--hds-border-accents-orange-subtle": {
    "value": "#7C2D12",
    "figmaName": "border/accents/orange/subtle",
    "alias": "color/orange/900",
    "type": "color"
  },
  "--hds-border-accents-orange-soft": {
    "value": "#9A3412",
    "figmaName": "border/accents/orange/soft",
    "alias": "color/orange/800",
    "type": "color"
  },
  "--hds-border-accents-orange-default": {
    "value": "#C2410C",
    "figmaName": "border/accents/orange/default",
    "alias": "color/orange/700",
    "type": "color"
  },
  "--hds-border-accents-orange-intense": {
    "value": "#FDBA74",
    "figmaName": "border/accents/orange/intense",
    "alias": "color/orange/300",
    "type": "color"
  },
  "--hds-border-accents-orange-strong": {
    "value": "#F97316",
    "figmaName": "border/accents/orange/strong",
    "alias": "color/orange/500",
    "type": "color"
  },
  "--hds-border-accents-red-subtle": {
    "value": "#7F1D1D",
    "figmaName": "border/accents/red/subtle",
    "alias": "color/red/900",
    "type": "color"
  },
  "--hds-border-accents-red-soft": {
    "value": "#991B1B",
    "figmaName": "border/accents/red/soft",
    "alias": "color/red/800",
    "type": "color"
  },
  "--hds-border-accents-red-default": {
    "value": "#B91C1C",
    "figmaName": "border/accents/red/default",
    "alias": "color/red/700",
    "type": "color"
  },
  "--hds-border-accents-red-intense": {
    "value": "#FCA5A5",
    "figmaName": "border/accents/red/intense",
    "alias": "color/red/300",
    "type": "color"
  },
  "--hds-border-accents-red-strong": {
    "value": "#EF4444",
    "figmaName": "border/accents/red/strong",
    "alias": "color/red/500",
    "type": "color"
  },
  "--hds-border-accents-gray-subtle": {
    "value": "#0F172A",
    "figmaName": "border/accents/gray/subtle",
    "alias": "color/Slate/900",
    "type": "color"
  },
  "--hds-border-accents-gray-soft": {
    "value": "#1E293B",
    "figmaName": "border/accents/gray/soft",
    "alias": "color/Slate/800",
    "type": "color"
  },
  "--hds-border-accents-gray-default": {
    "value": "#334155",
    "figmaName": "border/accents/gray/default",
    "alias": "color/Slate/700",
    "type": "color"
  },
  "--hds-border-accents-gray-intense": {
    "value": "#CBD5E1",
    "figmaName": "border/accents/gray/intense",
    "alias": "color/Slate/300",
    "type": "color"
  },
  "--hds-border-accents-gray-strong": {
    "value": "#64758B",
    "figmaName": "border/accents/gray/strong",
    "alias": "color/Slate/500",
    "type": "color"
  },
  "--hds-charts-1": {
    "value": "#60A5FA",
    "figmaName": "charts/1",
    "alias": "color/blue/400",
    "type": "color"
  },
  "--hds-charts-2": {
    "value": "#2DD4BF",
    "figmaName": "charts/2",
    "alias": "color/teal/400",
    "type": "color"
  },
  "--hds-charts-3": {
    "value": "#FB923C",
    "figmaName": "charts/3",
    "alias": "color/orange/400",
    "type": "color"
  },
  "--hds-charts-4": {
    "value": "#A78BFA",
    "figmaName": "charts/4",
    "alias": "color/violet/400",
    "type": "color"
  },
  "--hds-charts-5": {
    "value": "#F472B6",
    "figmaName": "charts/5",
    "alias": "color/pink/400",
    "type": "color"
  },
  "--hds-charts-6": {
    "value": "#4ADE80",
    "figmaName": "charts/6",
    "alias": "color/green/400",
    "type": "color"
  },
  "--hds-charts-7": {
    "value": "#F87171",
    "figmaName": "charts/7",
    "alias": "color/red/400",
    "type": "color"
  },
  "--hds-charts-8": {
    "value": "#22D3EE",
    "figmaName": "charts/8",
    "alias": "color/cyan/400",
    "type": "color"
  },
  "--hds-effect-focus-brand": {
    "value": "rgb(255 207 84 / 0.5)",
    "figmaName": "effect/focus/brand",
    "alias": "color/yellow/alpha/50",
    "type": "color"
  },
  "--hds-effect-focus-neutral": {
    "value": "rgb(115 115 115 / 0.5)",
    "figmaName": "effect/focus/neutral",
    "alias": "color/gray/alpha/50",
    "type": "color"
  },
  "--hds-effect-focus-royal": {
    "value": "rgb(36 111 234 / 0.5)",
    "figmaName": "effect/focus/royal",
    "alias": "color/royal/alpha/50",
    "type": "color"
  },
  "--hds-effect-focus-error": {
    "value": "rgb(239 68 68 / 0.4)",
    "figmaName": "effect/focus/error",
    "alias": "color/red/alpha/40",
    "type": "color"
  }
} as TokenMap,
}
/** Component-level tokens (button, link, focus). */
export const components = {
  hig: {
  "--hds-button-bg": {
    "value": "#246FEA",
    "figmaName": "button/bg",
    "alias": "background/royal/default",
    "type": "color"
  },
  "--hds-button-bg-hover": {
    "value": "#1956C8",
    "figmaName": "button/bg-hover",
    "alias": "background/royal/strong",
    "type": "color"
  },
  "--hds-button-bg-pressed": {
    "value": "#19449A",
    "figmaName": "button/bg-pressed",
    "alias": "background/royal/intense",
    "type": "color"
  },
  "--hds-button-text": {
    "value": "#FFFFFF",
    "figmaName": "button/text",
    "alias": "text/on/royal",
    "type": "color"
  },
  "--hds-button-border": {
    "value": "#1956C8",
    "figmaName": "button/border",
    "alias": "border/royal/intense",
    "type": "color"
  },
  "--hds-button-icon": {
    "value": "#FFFFFF",
    "figmaName": "button/icon",
    "alias": "text/on/royal",
    "type": "color"
  },
  "--hds-button-radius": {
    "value": "4px",
    "figmaName": "button/radius",
    "alias": "radius/4",
    "type": "number"
  },
  "--hds-button-icon-destructive": {
    "value": "#FFFFFF",
    "figmaName": "button/icon-destructive",
    "alias": "foreground/on/error",
    "type": "color"
  },
  "--hds-button-focus-ring": {
    "value": "rgb(36 111 234 / 0.3)",
    "figmaName": "button/focus-ring",
    "alias": "effect/focus/royal",
    "type": "color"
  },
  "--hds-link-text": {
    "value": "#19449A",
    "figmaName": "link/text",
    "alias": "text/royal/strong",
    "type": "color"
  },
  "--hds-link-text-hover": {
    "value": "#17316D",
    "figmaName": "link/text-hover",
    "alias": "text/royal/intense",
    "type": "color"
  },
  "--hds-focus-ring-brand": {
    "value": "rgb(36 111 234 / 0.3)",
    "figmaName": "focus/ring-brand",
    "alias": "effect/focus/royal",
    "type": "color"
  },
  "--hds-focus-ring": {
    "value": "rgb(36 111 234 / 0.3)",
    "figmaName": "focus/ring",
    "alias": "effect/focus/royal",
    "type": "color"
  },
  "--hds-focus-border": {
    "value": "#246FEA",
    "figmaName": "focus/border",
    "alias": "border/royal/strong",
    "type": "color"
  }
} as TokenMap,
  omni: {
  "--hds-button-bg": {
    "value": "#FFCF54",
    "figmaName": "button/bg",
    "alias": "background/brand/default",
    "type": "color"
  },
  "--hds-button-bg-hover": {
    "value": "#F0B82E",
    "figmaName": "button/bg-hover",
    "alias": "background/brand/strong",
    "type": "color"
  },
  "--hds-button-bg-pressed": {
    "value": "#C8941A",
    "figmaName": "button/bg-pressed",
    "alias": "background/brand/intense",
    "type": "color"
  },
  "--hds-button-text": {
    "value": "#020617",
    "figmaName": "button/text",
    "alias": "text/on/brand",
    "type": "color"
  },
  "--hds-button-border": {
    "value": "#F0B82E",
    "figmaName": "button/border",
    "alias": "border/brand/strong",
    "type": "color"
  },
  "--hds-button-icon": {
    "value": "#020617",
    "figmaName": "button/icon",
    "alias": "foreground/neutral-bold/intense",
    "type": "color"
  },
  "--hds-button-radius": {
    "value": "6px",
    "figmaName": "button/radius",
    "alias": "radius/6",
    "type": "number"
  },
  "--hds-button-icon-destructive": {
    "value": "#FFFFFF",
    "figmaName": "button/icon-destructive",
    "alias": "foreground/on/error",
    "type": "color"
  },
  "--hds-button-focus-ring": {
    "value": "rgb(255 207 84 / 0.3)",
    "figmaName": "button/focus-ring",
    "alias": "effect/focus/brand",
    "type": "color"
  },
  "--hds-link-text": {
    "value": "#1E40AF",
    "figmaName": "link/text",
    "alias": "text/info/strong",
    "type": "color"
  },
  "--hds-link-text-hover": {
    "value": "#1E3A8A",
    "figmaName": "link/text-hover",
    "alias": "text/info/intense",
    "type": "color"
  },
  "--hds-focus-ring-brand": {
    "value": "rgb(255 207 84 / 0.3)",
    "figmaName": "focus/ring-brand",
    "alias": "effect/focus/brand",
    "type": "color"
  },
  "--hds-focus-ring": {
    "value": "rgb(36 111 234 / 0.3)",
    "figmaName": "focus/ring",
    "alias": "effect/focus/royal",
    "type": "color"
  },
  "--hds-focus-border": {
    "value": "#246FEA",
    "figmaName": "focus/border",
    "alias": "border/royal/strong",
    "type": "color"
  }
} as TokenMap,
}
