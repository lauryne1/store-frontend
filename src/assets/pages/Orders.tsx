"use client"

import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Order = {
  id: string
  customer: string
  date: string
  total: number
  status: "pending" | "completed" | "canceled"
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    // Example: fetch orders from API later
    setOrders([
      {
        id: "ORD-001",
        customer: "John Doe",
        date: "2025-09-12",
        total: 250.75,
        status: "completed",
      },
      {
        id: "ORD-002",
        customer: "Jane Smith",
        date: "2025-09-13",
        total: 120.5,
        status: "pending",
      },
      {
        id: "ORD-003",
        customer: "Mike Johnson",
        date: "2025-09-14",
        total: 90,
        status: "canceled",
      },
    ])
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total ($)</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "completed"
                        ? "default"
                        : order.status === "pending"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
