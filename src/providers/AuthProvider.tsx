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
        console.log(auth)
        //API requests

        const _user = {
            username: "emre1411",
            password: "123"
        }

        if(!_user) {
            navigate('/login');
            return toast.error('Hatalı Bilgi Girişi', {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              });
        } else if (_user.username !== username || _user.password !== password) {
            return toast.error('Hatalı Şifre Girişi', {
              position: 'bottom-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
        }

        var authenticatedUser: User = {
            username: _user.username
        }

        setAuth(authenticatedUser);
        localStorage.setItem('auth', JSON.stringify(authenticatedUser));
        navigate(redirectPath, { replace: true });
    }

    const logout = () => {
        setAuth(blankUser);
        localStorage.removeItem('auth');
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }} >
          {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};