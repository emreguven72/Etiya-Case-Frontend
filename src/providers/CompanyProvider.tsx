import axios from "axios";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CompanyContext:any = createContext(null);

export const CompanyProvider = ({ children }: any) => {
    const [companies, setCompanies]: any = useState(null);

    var token = localStorage.getItem('token');

    const getLatestCompanies = async() => {
        const response = await axios.get(`http://localhost:3000/api/v1/companies/getLatestCompanies`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        var latestCompanies = response.data;

        setCompanies(latestCompanies);
    }

    return (
        <CompanyContext.Provider value={{ companies, getLatestCompanies }} >
          {children}
        </CompanyContext.Provider>
    );
}

export const useCompanies = () => {
    return useContext(CompanyContext);
};