import { calculateSeason, getSeasonIcon } from '@/utils/seasonCalculator'

describe('Season Calculator', () => {
  describe('getSeasonIcon', () => {
    it('correctly identifies spring', () => {
      const springDate = new Date('2024-04-15')
      const seasons = getSeasonIcon(springDate)
      expect(seasons.isSpring).toBe(true)
      expect(seasons.isSummer).toBe(false)
      expect(seasons.isAutumn).toBe(false)
      expect(seasons.isWinter).toBe(false)
    })

    it('correctly identifies summer', () => {
      const summerDate = new Date('2024-07-15')
      const seasons = getSeasonIcon(summerDate)
      expect(seasons.isSpring).toBe(false)
      expect(seasons.isSummer).toBe(true)
      expect(seasons.isAutumn).toBe(false)
      expect(seasons.isWinter).toBe(false)
    })
  })

  describe('calculateSeason', () => {
    it('returns Winter (1) for January', () => {
      const janDate = new Date('2024-01-15')
      expect(calculateSeason(20, janDate)).toBe(1)
    })

    it('returns Fool\'s Spring (2) for February with warm temperature', () => {
      const febDate = new Date('2024-02-15')
      expect(calculateSeason(45, febDate)).toBe(2)
    })

    it('returns Winter (1) for February with cold temperature', () => {
      const febDate = new Date('2024-02-15')
      expect(calculateSeason(35, febDate)).toBe(1)
    })

    it('returns Spring of Deception (4) for March with warm temperature', () => {
      const marDate = new Date('2024-03-15')
      expect(calculateSeason(45, marDate)).toBe(4)
    })

    it('returns The Pollening (6) for April with warm temperature', () => {
      const aprDate = new Date('2024-04-15')
      expect(calculateSeason(55, aprDate)).toBe(6)
    })

    it('returns Summer (8) for June with warm temperature', () => {
      const junDate = new Date('2024-06-15')
      expect(calculateSeason(75, junDate)).toBe(8)
    })

    it('returns Hell\'s Front Porch (9) for July with hot temperature', () => {
      const julDate = new Date('2024-07-15')
      expect(calculateSeason(90, julDate)).toBe(9)
    })

    it('returns False Fall (10) for September with cool temperature', () => {
      const sepDate = new Date('2024-09-15')
      expect(calculateSeason(60, sepDate)).toBe(10)
    })

    it('returns Second Summer (11) for October with warm temperature', () => {
      const octDate = new Date('2024-10-15')
      expect(calculateSeason(60, octDate)).toBe(11)
    })

    it('returns Actual Fall (12) for October with moderate temperature', () => {
      const octDate = new Date('2024-10-15')
      expect(calculateSeason(45, octDate)).toBe(12)
    })

    it('returns Winter (1) for December', () => {
      const decDate = new Date('2024-12-15')
      expect(calculateSeason(30, decDate)).toBe(1)
    })
  })
}) 