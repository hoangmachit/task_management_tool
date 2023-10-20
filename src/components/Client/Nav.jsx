"use client"
import Link from "next/link"
import { useCart } from "@/providers/CartProvider"
export default function ClientNav() {
    const { totalItems } = useCart();
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
        </ul>
    )
}