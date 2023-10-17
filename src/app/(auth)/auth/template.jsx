
export default function AuthTemplate({ children }) {
    return (
        <>
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    {children}
                </div>
            </div>
        </>
    )
}