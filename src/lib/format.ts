const number = new Intl.NumberFormat("ko-KR")

export const formatNumber = (value: number) => number.format(value)

/** 원 단위 금액 */
export const formatWon = (won: number) => `₩${number.format(won)}`

/** 만원 단위 금액을 억/만원으로 표기 */
export function formatManwon(manwon: number) {
  const eok = Math.floor(manwon / 10000)
  const rest = manwon % 10000

  if (eok === 0) return `${number.format(rest)}만원`
  if (rest === 0) return `${number.format(eok)}억원`
  return `${number.format(eok)}억 ${number.format(rest)}만원`
}

export const percentChange = (current: number, previous: number) =>
  ((current - previous) / previous) * 100
