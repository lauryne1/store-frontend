"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, User } from "lucide-react"
import { Link } from "react-router-dom"

export default function Public() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const products = [
    { id: 1, name: "React T-shirt", price: "$19.99", image: "https://via.placeholder.com/200" },
    { id: 2, name: "JavaScript Sneakers", price: "$49.99", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Dev Cap", price: "$14.99", image: "https://via.placeholder.com/200" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white">
        <h1 className="text-xl font-bold">MyStore</h1>
        <div className="flex gap-2 w-1/3">
          <Input placeholder="Search for a product..." />
          <Button>Search</Button>
        </div>
        <div className="flex gap-4 items-center">
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          {isLoggedIn ? (
            <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
              <User className="mr-2 w-4 h-4" /> Logout
            </Button>
          ) : (
            <Button onClick={() => setIsLoggedIn(true)}>
              <User className="mr-2 w-4 h-4" /> Login
            </Button>
          )}
        </div>
      </header>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-2">Welcome to MyStore</h2>
        <p className="text-lg">Discover our best deals and promotions</p>
      </div>

      {/* PRODUCTS */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="shadow-md hover:shadow-lg transition">
            <CardHeader>
              <img src={product.image} alt={product.name} className="rounded-md" />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p className="text-gray-600">{product.price}</p>
              <Button className="mt-2 w-full">Add to cart</Button>
            </CardContent>
          </Card>
        ))}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
        © 2025 MyStore – Terms | Privacy | Contact
      </footer>

      {/* LINK TO LOGIN */}
      <div className="text-center py-4">
        <Link to="/login" className="text-blue-600 hover:underline">
          Go to Login Page
        </Link>
      </div>
    </div>
  )
}
