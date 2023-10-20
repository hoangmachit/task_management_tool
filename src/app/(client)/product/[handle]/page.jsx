export const metadata = {
    title: "Product handle"
}
export default async function ProductHandle({ params }) {
    return (
        <>
            <h1>Product Handle {JSON.stringify(params)}</h1>
        </>
    )
}