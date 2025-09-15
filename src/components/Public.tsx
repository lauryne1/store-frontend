import { Link } from "react-router-dom";

const Public = () => {
    return (
        <div>
            <h1>Public Page</h1>
            <p>This page is accessible to everyone.</p>
            <Link to="/login">Go to Login</Link>
        </div>
    );
}

export default Public;