import { Routes,Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Authentication from "./Authentication";
import CompaniesPage from "../pages/CompaniesPage";
import UpdateCompanyPage from "../pages/UpdateCompanyPage";
import ProductsPage from "../pages/ProductsPage";
import UpdateProductPage from "../pages/UpdateProductPage";

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
            <Route path="/products" element={
                <Authentication>
                    <ProductsPage />
                </Authentication>
            } />
            <Route path="/products/update/:id" element={
                <Authentication>
                    <UpdateProductPage />
                </Authentication>
            } />

        </Routes>
    );
}

export default RoutePath;