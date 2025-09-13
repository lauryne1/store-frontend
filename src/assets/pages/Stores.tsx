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
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

type Store = {
    id: number
    name: string
    location: string
    products: number
    status: "Active" | "Inactive"
}

export default function Stores() {
    const [stores, setStores] = useState<Store[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simuler un appel API
        setTimeout(() => {
            setStores([
                { id: 1, name: "TechForge Cotonou", location: "Cotonou", products: 120, status: "Active" },
                { id: 2, name: "TechForge Calavi", location: "Calavi", products: 80, status: "Inactive" },
                { id: 3, name: "TechForge Porto-Novo", location: "Porto-Novo", products: 200, status: "Active" },
            ])
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <Card>
            <CardHeader>
                <CardTitle>Stores</CardTitle>
            </CardHeader>
            <CardContent>
                {loading ? (
                    // 🟢 Skeleton loader pendant le "chargement"
                    <div className="space-y-2">
                        {[...Array(5)].map((_, i) => (
                            <Skeleton key={i} className="h-10 w-full rounded-md" />
                        ))}
                    </div>
                ) : (
                    <>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Location</TableHead>
                                    <TableHead>Products</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {stores.map((store) => (
                                    <TableRow key={store.id}>
                                        <TableCell>{store.id}</TableCell>
                                        <TableCell>{store.name}</TableCell>
                                        <TableCell>{store.location}</TableCell>
                                        <TableCell className="text-center">{store.products}</TableCell>
                                        <TableCell>
                      <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                              store.status === "Active"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                          }`}
                      >
                        {store.status}
                      </span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className="mt-4">
                            <Button>Add Store</Button>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    )
}
