"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Download, Printer, Share2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

// fake data
const invoices = [
    { id: "INV-1990", category: "Android", price: 83.74, status: "Paid" },
    { id: "INV-1991", category: "Mac", price: 97.14, status: "Out of date" },
    { id: "INV-1992", category: "Windows", price: 68.71, status: "Progress" },
    { id: "INV-1993", category: "Android", price: 85.21, status: "Paid" },
    { id: "INV-1994", category: "Mac", price: 52.17, status: "Paid" },
]

// helper couleurs
function getStatusColor(status: string) {
    switch (status) {
        case "Paid":
            return "bg-green-100 text-green-700"
        case "Out of date":
            return "bg-red-100 text-red-700"
        case "Progress":
            return "bg-yellow-100 text-yellow-700"
        default:
            return "bg-gray-100 text-gray-700"
    }
}

export function InvoiceTable() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>New Invoices</CardTitle>
                <Link to="/invoices" className="text-sm font-medium text-blue-600 hover:underline">
                    View all
                </Link>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice ID</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-center w-[120px]">Price</TableHead>
                            <TableHead className="w-[140px]">Status</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell>{invoice.id}</TableCell>
                                <TableCell>{invoice.category}</TableCell>
                                <TableCell className="text-center">
                                    ${invoice.price.toFixed(2)}
                                </TableCell>
                                <TableCell>
                  <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          invoice.status
                      )}`}
                  >
                    {invoice.status}
                  </span>
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>
                                                <Download className="mr-2 h-4 w-4" /> Download
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Printer className="mr-2 h-4 w-4" /> Print
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Share2 className="mr-2 h-4 w-4" /> Share
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600">
                                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
