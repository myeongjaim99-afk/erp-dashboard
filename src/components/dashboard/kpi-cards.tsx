import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  monthlyFinance,
  monthlyOrders,
  receivables,
  stockAlerts,
} from "@/data/mock"
import { formatManwon, formatNumber, percentChange } from "@/lib/format"

const [previous, current] = monthlyFinance.slice(-2)
const salesChange = percentChange(current.sales, previous.sales)
const ordersChange = percentChange(
  monthlyOrders.current,
  monthlyOrders.previous
)
const criticalCount = stockAlerts.filter(
  (item) => item.stock / item.safety < 0.25
).length

function ChangeBadge({ value }: { value: number }) {
  const Icon = value >= 0 ? TrendingUpIcon : TrendingDownIcon

  return (
    <Badge variant="outline">
      <Icon data-icon="inline-start" />
      {value >= 0 ? "+" : ""}
      {value.toFixed(1)}%
    </Badge>
  )
}

const kpis = [
  {
    label: "11월 매출",
    value: formatManwon(current.sales),
    badge: <ChangeBadge value={salesChange} />,
    note: `10월 ${formatManwon(previous.sales)}`,
  },
  {
    label: "11월 수주",
    value: `${formatNumber(monthlyOrders.current)}건`,
    badge: <ChangeBadge value={ordersChange} />,
    note: `10월 ${formatNumber(monthlyOrders.previous)}건`,
  },
  {
    label: "미수금",
    value: formatManwon(receivables.total),
    badge: (
      <Badge variant="destructive">연체 {receivables.overdueCount}건</Badge>
    ),
    note: `연체 금액 ${formatManwon(receivables.overdue)}`,
  },
  {
    label: "재고 부족 품목",
    value: `${stockAlerts.length}종`,
    badge: <Badge variant="destructive">긴급 {criticalCount}종</Badge>,
    note: "안전재고 미달 기준",
  },
]

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi) => (
        <Card key={kpi.label}>
          <CardHeader>
            <CardDescription>{kpi.label}</CardDescription>
            <CardTitle className="text-2xl">{kpi.value}</CardTitle>
            <CardAction>{kpi.badge}</CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">{kpi.note}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
