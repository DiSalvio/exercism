const COLOR_RESISTANCE = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
] as const

const COLOR_MAP = new Map(COLOR_RESISTANCE.map((color, index) => [color, index]))

type Color = typeof COLOR_RESISTANCE[number]

export function decodedResistorValue([tens, ones, zeros, ..._rest]: [Color, Color, Color, ...Color[]]): string {
  const resistance = (COLOR_MAP.get(tens)! * 10 + COLOR_MAP.get(ones)!) * (10 ** COLOR_MAP.get(zeros)!)
  return toMetricOhms(resistance)
}

function toMetricOhms(num: number): string {
  if (num >= 1e9) return `${num / 1e9} gigaohms`
  if (num >= 1e6) return `${num / 1e6} megaohms`
  if (num >= 1e3) return `${num / 1e3} kiloohms`
  return `${num} ohms`
}
