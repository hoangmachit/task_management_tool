"use client"
import AdminMenu from "@/components/Admin/Menu";
import AdminNav from "@/components/Admin/Nav";
import AdminFooter from "@/components/Admin/Footer";
import { useTheme } from "@/providers/ThemeProvider";
export default function AdminTemplate({ children }) {
    const { theme } = useTheme();
    return (
        <>
            <div className={`theme theme-${theme}`}>
                <div className="layout-wrapper layout-content-navbar">
                    <div className="layout-container">
                        <AdminMenu />
                        <div className="layout-page">
                            <AdminNav />
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
            </div>
        </>
    )
}