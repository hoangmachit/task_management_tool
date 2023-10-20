import "@/styles/admin/boxicons.global.css";
import "@/styles/admin/core.global.css";
import "@/styles/admin/theme.global.css";
import "@/styles/admin/app.global.css";
import "@/styles/admin/perfect-scrollbar.global.css";
import "@/styles/admin/apex-charts.global.css";
import Script from "next/script";
import { AdminProvider } from "@/providers/AdminProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
export const metadata = {
    title: 'Admin - Management Tool',
}

export default function AdminLayout({ children }) {
    return (
        <html lang="ja" className="layout-navbar-fixed layout-compact layout-menu-fixed">
            <body>
                <AdminProvider>
                    <ThemeProvider>
                        {children}
                        <Script src="/assets/admin/js/helpers.js" strategy="afterInteractive" />
                        <Script src="/assets/admin/js/config.js" strategy="afterInteractive" />
                        <Script src="/assets/admin/js/jquery.js" strategy="afterInteractive" />
                        <Script src="/assets/admin/js/popper.js" strategy="afterInteractive" />
                        <Script src="/assets/admin/js/bootstrap.js" strategy="afterInteractive" />
                        <Script src="/assets/admin/js/perfect-scrollbar.js" strategy="afterInteractive" />
                        <Script src="/assets/admin/js/menu.js" strategy="afterInteractive" />
                        <Script src="/assets/admin/js/apexcharts.js" strategy="afterInteractive" />
                        <Script src="/assets/admin/js/main.js" strategy="afterInteractive" />
                        <Script src="/assets/admin/js/dashboards-analytics.js" strategy="afterInteractive" />
                    </ThemeProvider>
                </AdminProvider>
            </body>
        </html>
    )
}
