import Link from "next/link"
import Image from "next/image"
import AddToCart from "./AddToCart"
export default function ProductItem({ product }) {
    return (
        <>
            <li key={product.id}>

                <div className="thumb">
                    <Link href={`/product/${product.slug}`} title={product.name}>
                        <Image
                            width={216}
                            height={162}
                            src={product.photo}
                            alt={product.name}
                            loading="lazy"
                        />
                    </Link>
                </div>
                <div className="info">
                    <Link href={`/product/${product.slug}`} title={product.name}>
                        <h3>{product.name}</h3>
                    </Link>
                </div>
                <div className="price">
                    <span className="regular_price">{product.regular_price}<sup>đ</sup></span>
                    <span className="sale_price">{product.sale_price}<sup>đ</sup></span>
                </div>
                <div className="addToCart">
                    <AddToCart product={product} />
                </div>
            </li>
        </>
    )
}