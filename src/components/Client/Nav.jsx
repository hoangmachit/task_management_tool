"use client"
import Link from "next/link"
import { useCart } from "@/providers/CartProvider"
import { useAuth } from "@/providers/AuthProvider";
export default function ClientNav() {
    const { totalItems } = useCart();
    const { user, isLoading } = useAuth();
    return (
        <ul>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/cart">
                    Cart {totalItems}
                </Link>
            </li>
            <li>
                <Link href="/checkout">
                    Checkout
                </Link>
            </li>
            <li>
                <Link href="/user">
                    {isLoading ? "Loading..." : `Username: ${user?.username}`}
                </Link>
            </li>
        </ul>
    )
}