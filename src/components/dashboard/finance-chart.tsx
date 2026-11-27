import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { monthlyFinance } from "@/data/mock"
import { formatNumber } from "@/lib/format"

const chartConfig = {
  sales: { label: "매출", color: "var(--chart-1)" },
  purchase: { label: "매입", color: "var(--chart-2)" },
} satisfies ChartConfig

const periods = [
  { value: "3", label: "3개월" },
  { value: "6", label: "6개월" },
  { value: "12", label: "12개월" },
]

export function FinanceChart() {
  const [period, setPeriod] = React.useState("6")
  const data = monthlyFinance.slice(-Number(period))

  return (
    <Card className="min-w-0">
      <CardHeader>
        <CardTitle>월별 매출 · 매입</CardTitle>
        <CardDescription>단위: 만원 · 11월은 27일까지 누적</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chart" className="gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <TabsList>
              <TabsTrigger value="chart">차트</TabsTrigger>
              <TabsTrigger value="table">표</TabsTrigger>
            </TabsList>
            <ToggleGroup
              variant="outline"
              size="sm"
              spacing={0}
              value={[period]}
              onValueChange={(value) => value[0] && setPeriod(value[0])}
              aria-label="조회 기간"
            >
              {periods.map((item) => (
                <ToggleGroupItem key={item.value} value={item.value}>
                  {item.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          <TabsContent value="chart">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-72 w-full"
            >
              <BarChart data={data} barGap={2} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis
                  width={48}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={formatNumber}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend
                  itemSorter={null}
                  content={<ChartLegendContent />}
                />
                <Bar
                  dataKey="sales"
                  fill="var(--color-sales)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={24}
                />
                <Bar
                  dataKey="purchase"
                  fill="var(--color-purchase)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={24}
                />
              </BarChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="table" className="max-h-72 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>월</TableHead>
                  <TableHead className="text-right">매출</TableHead>
                  <TableHead className="text-right">매입</TableHead>
                  <TableHead className="text-right">차액</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.month}>
                    <TableCell>{row.month}</TableCell>
                    <TableCell className="text-right tabular-nums">
                      {formatNumber(row.sales)}
                    </TableCell>
                    <TableCell className="text-right tabular-nums">
                      {formatNumber(row.purchase)}
                    </TableCell>
                    <TableCell className="text-right tabular-nums">
                      {formatNumber(row.sales - row.purchase)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
