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
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-500">MyStore</h1>
        <div className="flex gap-2 w-1/3">
          <Input placeholder="Search products..." className="rounded-lg" />
          <Button className="bg-sky-400 hover:bg-sky-500 text-white rounded-lg">
            Search
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <ShoppingCart className="w-6 h-6 text-sky-500 cursor-pointer" />
          {isLoggedIn ? (
            <Button
              variant="outline"
              onClick={() => setIsLoggedIn(false)}
              className="border-sky-400 text-sky-500 hover:bg-sky-100 rounded-lg"
            >
              <User className="mr-2 w-4 h-4" /> Logout
            </Button>
          ) : (
            <Button
              onClick={() => setIsLoggedIn(true)}
              className="bg-sky-400 hover:bg-sky-500 text-white rounded-lg"
            >
              <User className="mr-2 w-4 h-4" /> Login
            </Button>
          )}
        </div>
      </header>

      {/* BANNER */}
      <div className="bg-gradient-to-r from-sky-300 to-green-200i text-white py-20 text-center shadow-inner">
        <h2 className="text-4xl font-bold mb-3">Welcome </h2>
        <p className="text-lg opacity-90">Discover our best deals and promotions</p>
      </div>

      {/* PRODUCTS */}
      <main className="flex-1 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="shadow-md hover:shadow-lg transition rounded-xl">
            <CardHeader className="flex justify-center">
              <img src={product.image} alt={product.name} className="rounded-lg w-full" />
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="mb-2">{product.name}</CardTitle>
              <p className="text-gray-600">{product.price}</p>
              <Button className="mt-4 w-full bg-sky-400 hover:bg-sky-500 text-white rounded-lg">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t text-center py-4 text-sm text-gray-500">
        © 2025 MyStore – Terms | Privacy | Contact
      </footer>

      {/* LOGIN LINK */}
      <div className="text-center py-4">
        <Link to="/login" className="text-sky-500 hover:underline font-medium">
          Go to Login Page
        </Link>
      </div>
    </div>
  )
}
