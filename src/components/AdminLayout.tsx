import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DollarSign, ShoppingCart, Users } from "lucide-react"
import { ChartAreaInteractive } from "@/components/graph"
import {InvoiceTable} from "@/components/invoiceTable.tsx";
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    console.log("AdminLayout page rendered");

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="flex flex-col flex-1">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4 shadow-sm">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">App</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Current Page</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>

                <div className="flex-1 overflow-auto bg-gray-50 p-6">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>)
    
}
