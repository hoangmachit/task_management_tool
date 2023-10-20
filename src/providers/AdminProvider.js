"use client"
import { createContext, useContext, useState, useEffect } from "react";
const AdminContext = createContext({
    user: null,
    isLogin: false,
    login: (accessToken) => { },
    logout: () => { },
});
export const useAdmin = () => {
    return useContext(AdminContext);
}
export const AdminProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const login = (accessToken) => {
        setUser({ username: "exampleUser" });
        setIsLogin(true);
        document.cookie = `accessToken=${accessToken}; path=/;`;
    };

    const logout = () => {
        setUser(null);
        setIsLogin(false);
        document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    };
    useEffect(() => {
        const existingToken = document.cookie.split("; ").find((c) => c.startsWith("accessToken="));
        if (existingToken) {
            const accessToken = existingToken.split("=")[1];
            login(accessToken);
        }
    }, []);
    return (
        <AdminContext.Provider
            value={{
                user,
                isLogin,
                login,
                logout
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}