"use client"
import { useAuth } from "@/providers/AuthProvider";
import { redirect, useRouter } from "next/navigation";
export default function ButtonCheckout() {
    const route = useRouter();
    const { isLogin } = useAuth();
    const handleCheckUser = (e) => {
        e.preventDefault();
        console.log(">>>> isLogin", isLogin);
        if (!isLogin) {
            // redirect with logged = false
            return route.push("/login");
        }
        // handle with logged = true
        return true;
    }
    return (
        <button
            onClick={handleCheckUser}
        >
            Checkout
        </button>
    )
}