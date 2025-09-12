import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Products = () => {
    const products = [
        { id: 1, name: "Laptop", price: "500,000 CFA", stock: 10 },
        { id: 2, name: "Phone", price: "250,000 CFA", stock: 25 },
        { id: 3, name: "Headphones", price: "50,000 CFA", stock: 50 },
    ]

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Products</h1>
                <Button>Add Product</Button>
            </div>

            <div className="flex gap-2">
                <Input placeholder="Search products..." className="max-w-sm" />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {products.map((product) => (
                    <Card key={product.id}>
                        <CardHeader>
                            <CardTitle>{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Price: {product.price}</p>
                            <p className="text-sm text-muted-foreground">Stock: {product.stock}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Products
