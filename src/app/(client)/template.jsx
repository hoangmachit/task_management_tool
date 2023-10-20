import ClientNav from "@/components/Client/Nav"
export default function ClientTemplate({ children }) {
    return (
        <>
            <ClientNav />
            {children}
        </>
    )
}