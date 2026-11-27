import * as React from "react"
import { ConstructionIcon } from "lucide-react"

import { AppSidebar } from "@/components/app-sidebar"
import { FinanceChart } from "@/components/dashboard/finance-chart"
import { InventoryChart } from "@/components/dashboard/inventory-chart"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { StockAlerts } from "@/components/dashboard/stock-alerts"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { AS_OF } from "@/data/mock"
import { navItems } from "@/lib/navigation"

const HOME = navItems[0].title

function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">경영 현황</h1>
          <p className="text-sm text-muted-foreground">{AS_OF} 기준</p>
        </div>
        <Badge variant="secondary">샘플 데이터</Badge>
      </div>
      <KpiCards />
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="flex min-w-0 flex-col xl:col-span-2">
          <FinanceChart />
        </div>
        <InventoryChart />
        <div className="flex min-w-0 flex-col xl:col-span-2">
          <RecentOrders />
        </div>
        <StockAlerts />
      </div>
    </>
  )
}

export function App() {
  const [active, setActive] = React.useState(HOME)

  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar active={active} onSelect={setActive} />
        <SidebarInset className="min-w-0">
          <SiteHeader title={active} />
          <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
            {active === HOME ? (
              <Dashboard />
            ) : (
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <ConstructionIcon />
                  </EmptyMedia>
                  <EmptyTitle>{active} 화면은 준비 중입니다</EmptyTitle>
                  <EmptyDescription>
                    이 목업은 대시보드 화면만 제공합니다.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button onClick={() => setActive(HOME)}>
                    대시보드로 이동
                  </Button>
                </EmptyContent>
              </Empty>
            )}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}

export default App
