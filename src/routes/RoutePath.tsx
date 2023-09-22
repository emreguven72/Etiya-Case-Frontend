import { Routes,Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Authentication from "./Authentication";

const RoutePath = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={
                <Authentication>
                    <HomePage />
                </Authentication>
            } />

        </Routes>
    );
}

export default RoutePath;