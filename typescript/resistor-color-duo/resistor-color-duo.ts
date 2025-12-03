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

type COLOR = typeof COLOR_RESISTANCE[number]

export function decodedValue([tens, ones, ..._rest]: [COLOR, COLOR, ...COLOR[]]): number {
  return COLOR_RESISTANCE.indexOf(tens) * 10 + COLOR_RESISTANCE.indexOf(ones)
}
