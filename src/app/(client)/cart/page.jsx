import dynamic from "next/dynamic"
const ListItemCart = dynamic(() => import('@/components/Client/CartItems'), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});
import ButtonCheckout from "@/components/Client/ButtonCheckout";
export const metadata = {
    title: "Cart"
}
export default function Cart() {
    return (
        <>
            <h2 style={{ textAlign: "center" }}>Welcome to cart items</h2>
            <ListItemCart />
            <div style={{ textAlign: "center" }}><ButtonCheckout /></div>
        </>
    )
}