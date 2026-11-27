import { Building2Icon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { stockAlerts } from "@/data/mock"
import { navItems } from "@/lib/navigation"

export function AppSidebar({
  active,
  onSelect,
}: {
  active: string
  onSelect: (title: string) => void
}) {
  const { setOpenMobile } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<div />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Building2Icon className="size-4" />
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate font-medium">ERP 목업</span>
                <span className="truncate text-xs text-muted-foreground">
                  샘플 제조 본사
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>업무</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={item.title === active}
                    aria-current={item.title === active ? "page" : undefined}
                    onClick={() => {
                      onSelect(item.title)
                      setOpenMobile(false)
                    }}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                  {item.title === "재고 관리" && (
                    <SidebarMenuBadge>{stockAlerts.length}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="truncate px-2 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
          모든 수치는 샘플 데이터입니다.
        </p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
