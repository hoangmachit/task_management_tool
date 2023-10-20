"use client"
import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext({
    isLogin: false,
    user: null,
    isLoading: true,
    error: null,
});
export const useAuth = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContext;
}
export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const userData = await response.json();
                setUser(userData);
                setIsLogin(true);
            } catch (error) {
                setError(error.message || "An error occurred");
            } finally {
                setIsLoading(false);
            }
        }
        getUser();
    }, []);
    return (
        <AuthContext.Provider
            value={{
                isLogin,
                isLoading,
                user,
                error
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}