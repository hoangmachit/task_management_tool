"use client"
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/providers/CartProvider"
export default function CartItems() {
    const { carts, deleteCartItem } = useCart();
    return (
        <>
            <div className="center">
                <div className="cartPage">
                    {carts?.map((item, key) => {
                        return (
                            <div key={key} className="cart_items">
                                <div className="thumb">
                                    <Link href={`/product/${item.handle}`}>
                                        <Image
                                            width={216}
                                            height={162}
                                            src={item.photo}
                                            alt={item.name}
                                            loading="lazy"
                                        />
                                    </Link>
                                </div>
                                <div className="info">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="price">
                                    <span className="regular_price">{item.regular_price}<sup>đ</sup></span>
                                    <span className="sale_price">{item.sale_price}<sup>đ</sup></span>
                                </div>
                                <div className="action">
                                    <button>Update</button>
                                    <button onClick={() => deleteCartItem(item)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}