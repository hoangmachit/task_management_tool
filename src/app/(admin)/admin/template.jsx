import AdminMenu from "@/components/Admin/Menu";
import AdmiNav from "@/components/Admin/Nav";
import AdminFooter from "@/components/Admin/Footer";
export default function AdminTemplate({ children }) {
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <AdminMenu />
                    <div className="layout-page">
                        <AdmiNav />
                        <div className="content-wrapper">
                            <div className="main-wrapper">
                                {children}
                            </div>
                            <AdminFooter />
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
        </>
    )
}