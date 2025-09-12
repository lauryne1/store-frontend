import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import PrivateRoute from "./components/PrivateRoute"

import Login from "@/assets/pages/Login.tsx"
import Layout from "@/assets/pages/layout.tsx"
import Dashboard from "@/assets/pages/Dashboard.tsx"
import Stores from "@/assets/pages/Stores.tsx"
import Products from "@/assets/pages/Products.tsx"
import Orders from "@/assets/pages/Orders.tsx"
import Users from "@/assets/pages/Users.tsx"

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Public route */}
                    <Route path="/login" element={<Login />} />

                    {/* Protected routes */}
                    <Route element={<PrivateRoute />}>
                        <Route element={<Layout />}>
                            {/* Dashboard is inside Layout */}
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/stores" element={<Stores />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/users" element={<Users />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
