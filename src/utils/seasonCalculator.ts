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
  const { isSpring, isSummer, isAutumn, isWinter } = getSeasonIcon();

  if (isWinter) {
    if (month === 1) return 1; // Winter
    if (month === 2) {
      return temperature >= 40 ? 2 : 1; // Fool's Spring or Second Winter
    }
    if (month === 3) {
      return temperature >= 40 ? 4 : 1; // Spring of Deception or Third Winter
    }
  }

  if (isSpring) {
    if (month === 4) return 6; // The Pollening
    if (month === 5) return 7; // Actual Spring
  }

  if (isSummer) {
    if (month === 6) return 8; // Summer
    if (month === 7 || month === 8) {
      return temperature >= 85 ? 9 : 8; // Hell's Front Porch or Summer
    }
  }

  if (isAutumn) {
    if (month === 9) return 10; // False Fall
    if (month === 10) {
      if (temperature >= 60) return 11; // Second Summer
      if (temperature >= 40) return 12; // Actual Fall
      return 1; // Winter
    }
    if (month === 11) return 1; // Winter
  }

  return 1; // Default to Winter
}
