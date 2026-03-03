export function getSeasonIcon() {
  const today = new Date();
  const month = today.getMonth() + 1;

  return {
    isSpring: month >= 3 && month <= 5,
    isSummer: month >= 6 && month <= 8,
    isAutumn: month >= 9 && month <= 11,
    isWinter: month === 12 || month <= 2,
  };
}

export function calculateSeason(
  temperature: number,
  date: Date = new Date(),
): number {
  const month = date.getMonth() + 1;

  switch (month) {
    case 1:
      return 1; // Winter
    case 2:
      return temperature >= 40 ? 2 : 3; // Fool's Spring / Second Winter
    case 3:
      return temperature >= 40 ? 4 : 5; // Spring of Deception / Third Winter
    case 4:
      return 6; // The Pollening
    case 5:
      return 7; // Actual Spring
    case 6:
      return 8; // Summer
    case 7:
    case 8:
      return temperature >= 85 ? 9 : 8; // Hell's Front Porch / Summer
    case 9:
      return temperature >= 65 ? 11 : 10; // Second Summer / False Fall
    case 10:
      if (temperature >= 60) return 11; // Second Summer
      if (temperature >= 40) return 12; // Actual Fall
      return 1; // Winter
    case 11:
      return temperature >= 40 ? 12 : 1; // Actual Fall / Winter
    case 12:
      return 1; // Winter
    default:
      return 1;
  }
}
