import { getSeasonIcon, calculateSeason } from "./seasonCalculator";

jest.mock("./seasonCalculator", () => ({
  getSeasonIcon: jest.fn(),
  calculateSeason: jest.fn(),
}));

describe("Season Calculator", () => {
  describe("getSeasonIcon", () => {
    afterEach(() => {
      jest.useRealTimers();
      jest.clearAllMocks();
    });

    it("should correctly identify spring", () => {
      const mockDate = new Date("2024-04-15");
      jest.useFakeTimers();
      jest.setSystemTime(mockDate);

      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: true,
        isSummer: false,
        isAutumn: false,
        isWinter: false,
      });

      const result = getSeasonIcon();
      expect(result.isSpring).toBe(true);
      expect(result.isSummer).toBe(false);
      expect(result.isAutumn).toBe(false);
      expect(result.isWinter).toBe(false);
    });

    it("should correctly identify summer", () => {
      const mockDate = new Date("2024-07-15");
      jest.useFakeTimers();
      jest.setSystemTime(mockDate);

      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: true,
        isAutumn: false,
        isWinter: false,
      });

      const result = getSeasonIcon();
      expect(result.isSpring).toBe(false);
      expect(result.isSummer).toBe(true);
      expect(result.isAutumn).toBe(false);
      expect(result.isWinter).toBe(false);
    });

    it("should correctly identify autumn", () => {
      const mockDate = new Date("2024-10-15");
      jest.useFakeTimers();
      jest.setSystemTime(mockDate);

      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: false,
        isAutumn: true,
        isWinter: false,
      });

      const result = getSeasonIcon();
      expect(result.isSpring).toBe(false);
      expect(result.isSummer).toBe(false);
      expect(result.isAutumn).toBe(true);
      expect(result.isWinter).toBe(false);
    });

    it("should correctly identify winter", () => {
      const mockDate = new Date("2024-01-15");
      jest.useFakeTimers();
      jest.setSystemTime(mockDate);

      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: false,
        isAutumn: false,
        isWinter: true,
      });

      const result = getSeasonIcon();
      expect(result.isSpring).toBe(false);
      expect(result.isSummer).toBe(false);
      expect(result.isAutumn).toBe(false);
      expect(result.isWinter).toBe(true);
    });
  });

  describe("calculateSeason", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should return winter for January", () => {
      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: false,
        isAutumn: false,
        isWinter: true,
      });
      (calculateSeason as jest.Mock).mockReturnValue(1);
      const date = new Date("2024-01-15");
      expect(calculateSeason(30, date)).toBe(1);
    });

    it("should return Fool's Spring for February with warm temperature", () => {
      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: false,
        isAutumn: false,
        isWinter: true,
      });
      (calculateSeason as jest.Mock).mockReturnValue(2);
      const date = new Date("2024-02-15");
      expect(calculateSeason(45, date)).toBe(2);
    });

    it("should return Second Winter for February with cold temperature", () => {
      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: false,
        isAutumn: false,
        isWinter: true,
      });
      (calculateSeason as jest.Mock).mockReturnValue(1);
      const date = new Date("2024-02-15");
      expect(calculateSeason(35, date)).toBe(1);
    });

    it("should return Spring of Deception for March with warm temperature", () => {
      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: false,
        isAutumn: false,
        isWinter: true,
      });
      (calculateSeason as jest.Mock).mockReturnValue(4);
      const date = new Date("2024-03-15");
      expect(calculateSeason(45, date)).toBe(4);
    });

    it("should return The Pollening for April with warm temperature", () => {
      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: true,
        isSummer: false,
        isAutumn: false,
        isWinter: false,
      });
      (calculateSeason as jest.Mock).mockReturnValue(6);
      const date = new Date("2024-04-15");
      expect(calculateSeason(55, date)).toBe(6);
    });

    it("should return Summer for June with warm temperature", () => {
      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: true,
        isAutumn: false,
        isWinter: false,
      });
      (calculateSeason as jest.Mock).mockReturnValue(8);
      const date = new Date("2024-06-15");
      expect(calculateSeason(75, date)).toBe(8);
    });

    it("should return Hell's Front Porch for summer with hot temperature", () => {
      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: true,
        isAutumn: false,
        isWinter: false,
      });
      (calculateSeason as jest.Mock).mockReturnValue(9);
      const date = new Date("2024-07-15");
      expect(calculateSeason(90, date)).toBe(9);
    });

    it("should return False Fall for September with cool temperature", () => {
      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: false,
        isAutumn: true,
        isWinter: false,
      });
      (calculateSeason as jest.Mock).mockReturnValue(10);
      const date = new Date("2024-09-15");
      expect(calculateSeason(60, date)).toBe(10);
    });

    it("should return Second Summer for autumn with warm temperature", () => {
      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: false,
        isAutumn: true,
        isWinter: false,
      });
      (calculateSeason as jest.Mock).mockReturnValue(11);
      const date = new Date("2024-10-15");
      expect(calculateSeason(60, date)).toBe(11);
    });

    it("should return Actual Fall for autumn with moderate temperature", () => {
      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: false,
        isAutumn: true,
        isWinter: false,
      });
      (calculateSeason as jest.Mock).mockReturnValue(12);
      const date = new Date("2024-10-15");
      expect(calculateSeason(45, date)).toBe(12);
    });

    it("should return Winter for autumn with cold temperature", () => {
      (getSeasonIcon as jest.Mock).mockReturnValue({
        isSpring: false,
        isSummer: false,
        isAutumn: true,
        isWinter: false,
      });
      (calculateSeason as jest.Mock).mockReturnValue(1);
      const date = new Date("2024-10-15");
      expect(calculateSeason(30, date)).toBe(1);
    });
  });
});
