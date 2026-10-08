"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Truck,
  CreditCard,
  Users,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/layout/BrandMark";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/orders", label: "Orders", icon: ShoppingCart },
  { href: "/catalog", label: "Catalog", icon: Package },
  { href: "/fulfillment", label: "Fulfillment", icon: Truck },
  { href: "/payments", label: "Payments", icon: CreditCard },
  { href: "/onboarding", label: "Onboarding", icon: Users },
];

const bottomItems = [
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-60 min-h-screen bg-sidebar border-r border-sidebar-border shrink-0">
      {/* Logo */}
      <div className="flex flex-col justify-center gap-1 px-5 h-14 border-b border-sidebar-border">
        <BrandMark />
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-300">
          Seller Portal
        </span>
      </div>

      {/* Main nav */}
      <nav className="flex flex-col gap-1 flex-1 p-3">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 border-l-4 text-sm font-semibold uppercase tracking-wide transition-colors",
                isActive
                  ? "border-sport-yellow bg-sidebar-primary text-sidebar-primary-foreground"
                  : "border-transparent text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom nav */}
      <div className="p-3 border-t border-sidebar-border">
        {bottomItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 border-l-4 text-sm font-semibold uppercase tracking-wide transition-colors",
                isActive
                  ? "border-sport-yellow bg-sidebar-primary text-sidebar-primary-foreground"
                  : "border-transparent text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
