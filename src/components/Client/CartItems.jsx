"use client"
import { useCart } from "@/providers/CartProvider"
export default function CartItems() {
    const { carts } = useCart();
    return (
        <>
            <div>
                <ul>
                    {carts?.map((item, key) => {
                        return (
                            <li key={key}>
                                <p>{item.name}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}