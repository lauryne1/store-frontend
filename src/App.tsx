import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import PrivateRoute from "./components/PrivateRoute"

import Login from "./features/auth/Login.tsx"
import Layout from "./components/Layout.tsx"
import AdminLayout from "./components/AdminLayout.tsx"
import Dashboard from "@/assets/pages/Dashboard.tsx"
import Stores from "@/assets/pages/Stores.tsx"
import Products from "@/assets/pages/Products.tsx"
import Orders from "@/assets/pages/Orders.tsx"
import Users from "@/assets/pages/Users.tsx"
import Public from "./components/Public.tsx"
import RequireAuth from "./features/auth/RequireAuth.tsx"
import Welcome from "./features/auth/Welcome.tsx"

function App() {
    return (
        <AuthProvider>
                {/* <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route element={<PrivateRoute />}>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/stores" element={<Stores />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/users" element={<Users />} />
                        </Route>
                    </Route>
                </Routes> */}
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Public />} />
                        <Route path="login" element={<Login />} />
                        <Route element={<RequireAuth />}>
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="welcome" element={<Welcome />}>

                        </Route>
                    </Route>
                    <Route element={<AdminLayout />}>
                        <Route path="stores" element={<Stores />} />   
                        <Route path="products" element={<Products />} /> 
                    </Route>

                    </Route>
                </Routes>
        </AuthProvider>
    )
}

export default App
