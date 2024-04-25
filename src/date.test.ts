import { expect, it } from 'vitest'
import { getDayTimestamps } from './date'

it('getDayTimestamps', () => {
  expect(getDayTimestamps(new Date('2024-04-25 14:30:00'))).toEqual([
    1713974400000,
    1713978000000,
    1713981600000,
    1713985200000,
    1713988800000,
    1713992400000,
    1713996000000,
    1713999600000,
    1714003200000,
    1714006800000,
    1714010400000,
    1714014000000,
    1714017600000,
    1714021200000,
    1714024800000,
    1714028400000,
    1714032000000,
    1714035600000,
    1714039200000,
    1714042800000,
    1714046400000,
    1714050000000,
    1714053600000,
    1714057200000,
  ])
})