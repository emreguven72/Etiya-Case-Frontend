import axios from "axios";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CompanyContext:any = createContext(null);

export const CompanyProvider = ({ children }: any) => {
    const [companies, setCompanies]: any = useState(null);

    var token = localStorage.getItem('token');
    const navigate = useNavigate();

    const getLatestCompanies = async() => {
        const response = await axios.get(`http://localhost:3000/api/v1/companies/getLatestCompanies`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        var latestCompanies = response.data;

        setCompanies(latestCompanies);
    }

    const getAllCompanies = async() => {
        const response = await axios.get(`http://localhost:3000/api/v1/companies/getAll`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        var allCompanies = response.data;

        setCompanies(allCompanies);
    }

    const getCompanyById = async(id: String) => {
        const response = await axios.get(`http://localhost:3000/api/v1/companies/getById/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        var company = response.data;

        setCompanies(company);
    }

    const getCompanyByName = async(companyName: String) => {
        const response = await axios.get(`http://localhost:3000/api/v1/companies/getByCompanyName/${companyName}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        var company = response.data;

        setCompanies(company);
    }

    const createCompany = async(company_name: String, company_legal_number: String, incorporation_country: String, website: String) => {
        const response = await axios.post(`http://localhost:3000/api/v1/companies/create`, {
            company_name: company_name,
            company_legal_number: company_legal_number,
            incorporation_country: incorporation_country,
            website: website
        } , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        document.location.reload();
    }

    const deleteCompany = async(id: String) => {
        const response = await axios.delete(`http://localhost:3000/api/v1/companies/delete/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(response.data === "Company has products") {
            window.alert("Silmeye çalıştığınız şirkete ait ürün bulunmamalı!");
        }

        document.location.reload();
    }

    const updateCompany = async(id: String, companyName: String, companyLegalNumber: String, incorporationCountry: String, website: String) => {
        const response = await axios.patch(`http://localhost:3000/api/v1/companies/update`,{
            id: id,
            company_name: companyName,
            company_legal_number: companyLegalNumber,
            incorporation_country: incorporationCountry,
            website: website
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        document.location.reload();
    }

    return (
        <CompanyContext.Provider value={{ companies, getLatestCompanies, getAllCompanies, getCompanyById, getCompanyByName, createCompany, deleteCompany, updateCompany }} >
          {children}
        </CompanyContext.Provider>
    );
}

export const useCompanies = () => {
    return useContext(CompanyContext);
};