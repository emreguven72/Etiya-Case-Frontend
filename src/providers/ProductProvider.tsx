import axios from "axios";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProductContext:any = createContext(null);

export const ProductProvider = ({ children }: any) => {
    const [products, setProducts]: any = useState(null);

    var token = localStorage.getItem('token');
    const navigate = useNavigate();

    const getAllProducts = async() => {
        const response = await axios.get(`http://localhost:3000/api/v1/products/getAll`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        var allProducts = response.data;

        allProducts.forEach((product: any) => {
            product.company_name = product.company.company_name;
        });

        setProducts(allProducts);
    }

    const getProductById = async(id: String) => {
        const response = await axios.get(`http://localhost:3000/api/v1/products/getById/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        var product = response.data;

        product.company_name = product.company.company_name;

        setProducts(product);
    }

    const getProductByName = async(productName: String) => {
        const response = await axios.get(`http://localhost:3000/api/v1/products/getByProductName/${productName}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        var product = response.data;

        product.company_name = product.company.company_name;

        setProducts(product);
    }

    const getProductsByCompany = async(companyName: String) => {
        const response = await axios.get(`http://localhost:3000/api/v1/products/getByCompanyName/${companyName}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        var productsByCompany = response.data;

        productsByCompany.forEach((product: any) => {
            product.company_name = product.company.company_name;
        });

        setProducts(productsByCompany);
    }

    const createProduct = async(product_name: String, product_amount: number, amount_unit: String, company_name: String, product_category: String) => {
        const response = await axios.post(`http://localhost:3000/api/v1/products/create`, {
            product_name: product_name,
            product_amount: product_amount,
            amount_unit: amount_unit,
            product_category: product_category,
            company_name: company_name
        } , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.data === "Company cannot found") {
            window.alert("Geçersiz Şirket ismi girdiniz!");
        } else {
            document.location.reload();
        }
    }

    const deleteProduct = async(id: String) => {
        const response = await axios.delete(`http://localhost:3000/api/v1/products/delete/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        document.location.reload();
    }

    const updateProduct = async(id: String, product_name: String, product_amount: number, amount_unit: String, company_name: String, product_category: String) => {
        const response = await axios.patch(`http://localhost:3000/api/v1/products/update`,{
            id: id,
            product_name: product_name,
            product_amount: product_amount,
            amount_unit: amount_unit,
            product_category: product_category,
            company_name: company_name
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.data === "Company cannot found") {
            window.alert("Geçersiz Şirket ismi girdiniz!");
        } 
        document.location.reload();
    }

    return (
        <ProductContext.Provider value={{ products, getAllProducts, getProductById, getProductByName, getProductsByCompany, createProduct, deleteProduct, updateProduct }} >
          {children}
        </ProductContext.Provider>
    );
}

export const useProduct = () => {
    return useContext(ProductContext);
};