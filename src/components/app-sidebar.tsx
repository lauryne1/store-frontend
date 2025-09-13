"use client"

import * as React from "react"
import {
    BookOpen,
    Command,
    Frame,
    LifeBuoy,
    PieChart,
    Send,
    Settings2,
    SquareTerminal,
    Store,
    ShoppingCart,
    Users,
    ChevronDown,
    ChevronRight,
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

type NavItem = {
    title: string
    url?: string
    icon?: any
    children?: { title: string; url: string }[]
}

// Données
const data = {
    user: {
        name: "Lauryne",
        email: "admin@store.com",
        avatar: "/avatars/admin.png",
    },
    navMain: [
        { title: "Dashboard", url: "/", icon: SquareTerminal },
        { title: "Stores", url: "/stores", icon: Store },
        {
            title: "Products",
            icon: ShoppingCart,
            children: [
                { title: "List", url: "/products/list" },
                { title: "Create", url: "/products/create" },
                { title: "Edit", url: "/products/edit" },
            ],
        },
        {
            title: "Orders",
            icon: BookOpen,
            children: [
                { title: "List", url: "/orders/list" },
                { title: "Details", url: "/orders/details" },
            ],
        },
        { title: "Users", url: "/users", icon: Users },
        { title: "Settings", url: "/settings", icon: Settings2 },
    ],
    navSecondary: [
        { title: "Support", url: "/support", icon: LifeBuoy },
        { title: "Logout", url: "/logout", icon: Send },
    ],
    projects: [
        { name: "Store A", url: "/stores/1", icon: Frame },
        { name: "Store B", url: "/stores/2", icon: PieChart },
    ],
}

function NavMain({ items }: { items: NavItem[] }) {
    const location = useLocation()
    const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({})

    const toggleMenu = (title: string) => {
        setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }))
    }

    return (
        <div className="flex flex-col gap-1">
            {items.map((item) => {
                const isActive = location.pathname === item.url

                return (
                    <div key={item.title} className="flex flex-col">
                        <div
                            className={`flex items-center justify-between gap-2 p-2 rounded-lg text-sm font-medium transition-colors hover:bg-sidebar-hover ${
                                isActive ? "bg-sidebar-active text-sidebar-active-foreground" : "text-sidebar-foreground"
                            }`}
                            onClick={() => item.children && toggleMenu(item.title)}
                        >
                            <div className="flex items-center gap-2">
                                {item.icon && <item.icon className="h-4 w-4" />}
                                {item.url ? (
                                    <Link to={item.url}>{item.title}</Link>
                                ) : (
                                    <span>{item.title}</span>
                                )}
                            </div>
                            {item.children &&
                                (openMenus[item.title] ? (
                                    <ChevronDown className="h-4 w-4" />
                                ) : (
                                    <ChevronRight className="h-4 w-4" />
                                ))}
                        </div>

                        {/* Sous-pages */}
                        {item.children && openMenus[item.title] && (
                            <div className="ml-6 flex flex-col gap-1 mt-1">
                                {item.children.map((child) => {
                                    const isChildActive = location.pathname === child.url
                                    return (
                                        <Link
                                            key={child.url}
                                            to={child.url}
                                            className={`text-sm px-2 py-1 rounded-lg transition-colors hover:bg-sidebar-hover ${
                                                isChildActive ? "bg-sidebar-active text-sidebar-active-foreground" : "text-sidebar-foreground"
                                            }`}
                                        >
                                            {child.title}
                                        </Link>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

function NavProjects({ projects }: { projects: typeof data.projects }) {
    const location = useLocation()
    return (
        <div className="mt-4 flex flex-col gap-1">
            <h4 className="text-xs font-medium uppercase text-muted-foreground px-2">Projects</h4>
            {projects.map((project) => {
                const isActive = location.pathname === project.url
                return (
                    <Link
                        key={project.url}
                        to={project.url}
                        className={`flex items-center gap-2 p-2 rounded-lg text-sm transition-colors hover:bg-sidebar-hover ${
                            isActive ? "bg-sidebar-active text-sidebar-active-foreground" : "text-sidebar-foreground"
                        }`}
                    >
                        <project.icon className="h-4 w-4" />
                        <span>{project.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}

function NavSecondary({ items }: { items: typeof data.navSecondary }) {
    const location = useLocation()
    return (
        <div className="flex flex-col gap-1 mt-auto">
            {items.map((item) => {
                const isActive = location.pathname === item.url
                return (
                    <Link
                        key={item.url}
                        to={item.url}
                        className={`flex items-center gap-2 p-2 rounded-lg text-sm transition-colors hover:bg-sidebar-hover ${
                            isActive ? "bg-sidebar-active text-sidebar-active-foreground" : "text-sidebar-foreground"
                        }`}
                    >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                    </Link>
                )
            })}
        </div>
    )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link to="/" className="flex items-center gap-2">
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square w-8 items-center justify-center rounded-lg">
                                    <Command className="h-4 w-4" />
                                </div>
                                <div className="grid flex-1 text-left">
                                    <span className="truncate font-medium">My Store</span>
                                    <span className="truncate text-xs">Admin Panel</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
                <NavSecondary items={data.navSecondary} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
