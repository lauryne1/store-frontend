import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
    const { user } = useAuth();

    // Si pas connecté, redirige vers login
    if (!user) {
        return <Navigate to="/login" />;
    }

    // Sinon, affiche la route enfant
    return <Outlet />;
};

export default PrivateRoute;
