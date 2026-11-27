// 목업용 샘플 데이터입니다. 금액 단위는 별도 표기가 없으면 만원입니다.

export const AS_OF = "2026년 11월 27일"

export const monthlyFinance = [
  { month: "25.12", sales: 41200, purchase: 28900 },
  { month: "26.01", sales: 35800, purchase: 26100 },
  { month: "26.02", sales: 33400, purchase: 23800 },
  { month: "26.03", sales: 39900, purchase: 27500 },
  { month: "26.04", sales: 42100, purchase: 29200 },
  { month: "26.05", sales: 44700, purchase: 30800 },
  { month: "26.06", sales: 43200, purchase: 31400 },
  { month: "26.07", sales: 40500, purchase: 28700 },
  { month: "26.08", sales: 42800, purchase: 29900 },
  { month: "26.09", sales: 46300, purchase: 31800 },
  { month: "26.10", sales: 48900, purchase: 33600 },
  { month: "26.11", sales: 52400, purchase: 34900 },
]

export const inventoryByCategory = [
  { category: "전자부품", value: 18400 },
  { category: "원자재", value: 14200 },
  { category: "완제품", value: 11800 },
  { category: "포장재", value: 4300 },
  { category: "소모품", value: 2100 },
]

export type OrderStatus = "대기" | "출고중" | "완료" | "취소"

export type Order = {
  id: string
  customer: string
  item: string
  amount: number // 원
  status: OrderStatus
  date: string
}

export const orders: Order[] = [
  {
    id: "SO-2611-148",
    customer: "한빛전자",
    item: "제어보드 A-200 외 2건",
    amount: 12_840_000,
    status: "대기",
    date: "11-27",
  },
  {
    id: "SO-2611-147",
    customer: "대성산업",
    item: "알루미늄 프레임",
    amount: 8_450_000,
    status: "대기",
    date: "11-27",
  },
  {
    id: "SO-2611-146",
    customer: "미래테크",
    item: "센서 모듈 S-14",
    amount: 23_100_000,
    status: "출고중",
    date: "11-26",
  },
  {
    id: "SO-2611-145",
    customer: "우림상사",
    item: "포장 박스 (대)",
    amount: 1_260_000,
    status: "완료",
    date: "11-26",
  },
  {
    id: "SO-2611-144",
    customer: "세종정밀",
    item: "구동 모터 M-8 외 1건",
    amount: 17_680_000,
    status: "출고중",
    date: "11-25",
  },
  {
    id: "SO-2611-143",
    customer: "동해물산",
    item: "전원 어댑터 24V",
    amount: 3_920_000,
    status: "취소",
    date: "11-25",
  },
  {
    id: "SO-2611-142",
    customer: "한빛전자",
    item: "커넥터 세트 C-32",
    amount: 5_575_000,
    status: "완료",
    date: "11-24",
  },
  {
    id: "SO-2611-141",
    customer: "청람시스템",
    item: "완제품 컨트롤러 X1",
    amount: 31_400_000,
    status: "완료",
    date: "11-23",
  },
]

export type StockAlert = {
  sku: string
  name: string
  stock: number
  safety: number
  unit: string
}

export const stockAlerts: StockAlert[] = [
  { sku: "EL-0142", name: "MCU 칩 32bit", stock: 120, safety: 800, unit: "개" },
  {
    sku: "RM-0031",
    name: "구리 와이어 1.5mm",
    stock: 45,
    safety: 200,
    unit: "롤",
  },
  {
    sku: "EL-0207",
    name: "커패시터 470µF",
    stock: 640,
    safety: 1500,
    unit: "개",
  },
  { sku: "PK-0012", name: "완충 포장재", stock: 38, safety: 60, unit: "박스" },
  { sku: "SP-0088", name: "솔더 페이스트", stock: 14, safety: 20, unit: "통" },
]

export const receivables = { total: 8730, overdue: 1240, overdueCount: 3 }

export const monthlyOrders = { current: 148, previous: 136 }
