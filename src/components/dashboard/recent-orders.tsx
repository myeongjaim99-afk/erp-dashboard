import * as React from "react"
import { SearchIcon, SearchXIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { orders, type OrderStatus } from "@/data/mock"
import { formatWon } from "@/lib/format"

const filters = ["전체", "대기", "출고중", "완료", "취소"] as const

const statusVariant: Record<
  OrderStatus,
  React.ComponentProps<typeof Badge>["variant"]
> = {
  대기: "outline",
  출고중: "default",
  완료: "secondary",
  취소: "destructive",
}

export function RecentOrders() {
  const [status, setStatus] = React.useState<string>("전체")
  const [query, setQuery] = React.useState("")

  const keyword = query.trim().toLowerCase()
  const rows = orders.filter(
    (order) =>
      (status === "전체" || order.status === status) &&
      [order.id, order.customer, order.item].some((text) =>
        text.toLowerCase().includes(keyword)
      )
  )

  return (
    <Card className="min-w-0">
      <CardHeader>
        <CardTitle>최근 수주</CardTitle>
        <CardDescription>
          최근 {orders.length}건 중 {rows.length}건 표시
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          value={status}
          onValueChange={(value) => setStatus(String(value))}
          className="gap-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <TabsList>
              {filters.map((filter) => (
                <TabsTrigger key={filter} value={filter}>
                  {filter}
                </TabsTrigger>
              ))}
            </TabsList>
            <InputGroup className="w-full sm:w-56">
              <InputGroupInput
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="거래처, 품목, 번호 검색"
                aria-label="수주 검색"
              />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <TabsContent value={status}>
            {rows.length === 0 ? (
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <SearchXIcon />
                  </EmptyMedia>
                  <EmptyTitle>검색 결과가 없습니다</EmptyTitle>
                  <EmptyDescription>
                    검색어나 상태 필터를 바꿔 보세요.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>수주번호</TableHead>
                    <TableHead>거래처</TableHead>
                    <TableHead>품목</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>일자</TableHead>
                    <TableHead className="text-right">금액</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.item}</TableCell>
                      <TableCell>
                        <Badge variant={statusVariant[order.status]}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="tabular-nums">
                        {order.date}
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {formatWon(order.amount)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
