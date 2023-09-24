import { Routes,Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Authentication from "./Authentication";
import CompaniesPage from "../pages/CompaniesPage";
import UpdateCompanyPage from "../pages/UpdateCompanyPage";

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
            <Route path="/companies" element={
                <Authentication>
                    <CompaniesPage />
                </Authentication>
            } />
            <Route path="/companies/update/:id" element={
                <Authentication>
                    <UpdateCompanyPage />
                </Authentication>
            } />

        </Routes>
    );
}

export default RoutePath;