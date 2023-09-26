import axios from "axios";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';

const AuthContext:any = createContext(null);

export const AuthProvider = ({ children }: any) => {
    interface User {
        username: String;
    }

    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/home";

    var blankUser: User = {
        username: ""
    }

    var localStorageAuth = localStorage.getItem('auth');
    var localStorageAuthObject: User = localStorageAuth !== null ? JSON.parse(localStorageAuth) : blankUser;

    const [auth, setAuth] = useState(localStorageAuthObject); //localStroage'dan al

    const login = async(username: String, password: String) => {
        const response = await axios.post(`http://localhost:3000/api/v1/users/login`, {
            username: username,
            password: password
        });

        let token = response.data;

        if(token) {
            const authenticatedUser: User = {
                username: username
            }
            
            localStorage.setItem('token', token);
    
            setAuth(authenticatedUser);
            localStorage.setItem('auth', JSON.stringify(authenticatedUser));
            navigate('/home', { replace: true });
            document.location.reload();
        } else {
            window.alert("Hatalı Bilgi Girişi");
        }
    }

    const signUp = async(name: String, username: String, password: String) => {
        const response = await axios.post(`http://localhost:3000/api/v1/users/create`, {
            name: name,
            username: username,
            password: password
        });

        login(username, password);
    }

    const logout = () => {
        var token = localStorage.getItem('token');

        axios.post(`http://localhost:3000/api/v1/users/logout`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setAuth(blankUser);
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ auth, login, signUp, logout }} >
          {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};