import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import { stockAlerts } from "@/data/mock"
import { formatNumber } from "@/lib/format"

export function StockAlerts() {
  return (
    <Card className="min-w-0">
      <CardHeader>
        <CardTitle>재고 부족 알림</CardTitle>
        <CardDescription>안전재고 대비 현재고 비율</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {stockAlerts.map((item) => (
          <div key={item.sku} className="flex flex-col gap-1.5">
            <Progress value={Math.round((item.stock / item.safety) * 100)}>
              <ProgressLabel>{item.name}</ProgressLabel>
              <ProgressValue />
            </Progress>
            <p className="text-xs text-muted-foreground">
              {item.sku} · 현재고 {formatNumber(item.stock)} / 안전재고{" "}
              {formatNumber(item.safety)} {item.unit}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
