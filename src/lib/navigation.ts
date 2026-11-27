import {
  BoxesIcon,
  LayoutDashboardIcon,
  ReceiptTextIcon,
  ShoppingCartIcon,
  TruckIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react"

export type NavItem = {
  title: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { title: "대시보드", icon: LayoutDashboardIcon },
  { title: "판매 관리", icon: ShoppingCartIcon },
  { title: "구매 관리", icon: TruckIcon },
  { title: "재고 관리", icon: BoxesIcon },
  { title: "회계 관리", icon: ReceiptTextIcon },
  { title: "인사 관리", icon: UsersIcon },
]
