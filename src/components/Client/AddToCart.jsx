"use client"
import { useCart } from "@/providers/CartProvider"
export default function AddToCart({ product }) {
    const { addToCart } = useCart();
    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product)
    }
    return (
        <button
            onClick={handleAddToCart}
        >
            Add to cart
        </button>
    )
}