export function getSeasonIcon() {
  const today = new Date(Date.now())
  const year = today.getFullYear()
  const spring = new Date(`March 20, ${year}`)
  const summer = new Date(`June 21, ${year}`)
  const autumn = new Date(`September 22, ${year}`)
  const winter = new Date(`December 21, ${year}`)

  return {
    isSpring: today >= spring && today < summer,
    isSummer: today >= summer && today < autumn,
    isAutumn: today >= autumn && today < winter,
    isWinter: today < spring || today >= winter
  }
}

export function calculateSeason(temp, date = new Date()) {
  const seasons = getSeasonIcon(date);
  const month = date.getMonth() + 1

  if (month === 1) {
    return 1
  } else if (month === 2) {
    return temp >= 40 ? 2 : 1
  } else if (month === 3) {
    return temp >= 40 ? 4 : seasons["isSpring"] ? 5 : 3
  } else if (month === 4 || month === 5) {
    return temp >= 50 ? 6 : 5
  } else if (month === 6) {
    return temp >= 70 ? 8 : 7
  } else if (month === 9 && temp < 65) {
    return 10
  } else if (seasons["isSummer"]) {
    return temp >= 85 ? 9 : 8
  } else if (seasons["isAutumn"]) {
    if (temp > 55) return 11
    else if (temp < 35) return 1
    else return 12
  } else {
    return 1
  }
} 