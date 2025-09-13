import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DollarSign, ShoppingCart, Users } from "lucide-react"
import { ChartAreaInteractive } from "@/components/graph"
import {InvoiceTable} from "@/components/invoiceTable.tsx";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-6">
            <div className="grid auto-rows-min gap-6 md:grid-cols-3">
                <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-green-700">Daily Sales</CardTitle>
                        <DollarSign className="h-5 w-5 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-800">250,000 CFA</div>
                        <p className="text-xs text-green-600">+20% vs yesterday</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-blue-700">Pending Orders</CardTitle>
                        <ShoppingCart className="h-5 w-5 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-blue-800">12</div>
                        <p className="text-xs text-blue-600">5 new today</p>
                    </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-purple-700">Active Users</CardTitle>
                        <Users className="h-5 w-5 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-purple-800">150</div>
                        <p className="text-xs text-purple-600">+8% this month</p>
                    </CardContent>
                </Card>
            </div>

            <div className="flex-1 h-[400px]">
                <ChartAreaInteractive />
            </div>
            <div className="flex flex-col gap-6">

                <InvoiceTable />
            </div>
        </div>
    )
}
