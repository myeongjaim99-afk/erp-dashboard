import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { inventoryByCategory } from "@/data/mock"
import { formatManwon, formatNumber } from "@/lib/format"

const chartConfig = {
  value: { label: "재고 금액", color: "var(--chart-1)" },
} satisfies ChartConfig

const total = inventoryByCategory.reduce((sum, row) => sum + row.value, 0)

export function InventoryChart() {
  return (
    <Card className="min-w-0">
      <CardHeader>
        <CardTitle>분류별 재고 금액</CardTitle>
        <CardDescription>
          단위: 만원 · 합계 {formatManwon(total)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-72 w-full"
        >
          <BarChart
            data={inventoryByCategory}
            layout="vertical"
            margin={{ right: 48 }}
            accessibilityLayer
          >
            <XAxis type="number" dataKey="value" hide />
            <YAxis
              type="category"
              dataKey="category"
              width={64}
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="value"
              fill="var(--color-value)"
              radius={[0, 4, 4, 0]}
              maxBarSize={24}
            >
              <LabelList
                dataKey="value"
                position="right"
                offset={8}
                className="fill-foreground"
                formatter={(value) => formatNumber(Number(value))}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
