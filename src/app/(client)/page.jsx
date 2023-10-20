import products from "@/data/products";
import ProductItem from "@/components/Client/ProductItem";
export default async function ClientPage() {
  return (
    <>
      <div className="center">
        <ul>
          {products?.map((product) => {
            return <ProductItem key={product.id} product={product} />
          })}
        </ul>
      </div>
    </>
  )
}
