import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Authentication = ({ children }: any) => {
    const { auth }: any = useAuth();
    const location = useLocation();

    if(auth.username === "") {
        return <Navigate to="/login" state={{ path: location.pathname }} />;
    }
    return children;
}

export default Authentication;