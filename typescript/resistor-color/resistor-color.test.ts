import { describe, xdescribe, it, expect, xit } from '@jest/globals'
import { colorCode, COLORS } from './resistor-color.ts'

describe('color code', () => {
  it('Black', () => {
    expect(colorCode('black')).toEqual(0)
  })

  it('White', () => {
    expect(colorCode('white')).toEqual(9)
  })

  it('Orange', () => {
    expect(colorCode('orange')).toEqual(3)
  })
})

describe('Colors', () => {
  it('returns all colors', () => {
    expect(COLORS).toEqual({
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9,
    })
  })
})
