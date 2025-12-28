const PLANET_ORBITAL_PERIOD = {
  "mercury": 0.2408467,
  "venus": 0.61519726,
  "earth": 1.0,
  "mars": 1.8808158,
  "jupiter": 11.862615,
  "saturn": 29.447498,
  "uranus": 84.016846,
  "neptune": 164.79132,
} as const

const EARTH_YEAR_IN_SECONDS = 365.25 * 24 * 60 * 60

type Planet = keyof typeof PLANET_ORBITAL_PERIOD

export function age(planet: Planet, seconds: number): number {
  const earthYears = seconds / EARTH_YEAR_IN_SECONDS
  const planetYears = earthYears / PLANET_ORBITAL_PERIOD[planet]
  return Math.round(planetYears * 100) / 100
}
