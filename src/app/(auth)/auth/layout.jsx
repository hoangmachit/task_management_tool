import "@/styles/admin/boxicons.global.css";
import "@/styles/admin/core.global.css";
import "@/styles/admin/theme.global.css";
import "@/styles/admin/app.global.css";
import "@/styles/admin/auth.global.css";
import "@/styles/admin/perfect-scrollbar.global.css";
import "@/styles/admin/apex-charts.global.css";
import Script from "next/script";
import NextTopLoader from 'nextjs-toploader';
export const metadata = {
    title: 'Auth - Management Tool',
}
export default function AuthLayout({ children }) {
    return (
        <html lang="vi">
            <body>
                <NextTopLoader />
                {children}
                <Script src="/assets/admin/js/helpers.js" strategy="afterInteractive" />
                <Script src="/assets/admin/js/config.js" strategy="afterInteractive" />
                <Script src="/assets/admin/js/jquery.js" strategy="afterInteractive" />
                <Script src="/assets/admin/js/popper.js" strategy="afterInteractive" />
                <Script src="/assets/admin/js/bootstrap.js" strategy="afterInteractive" />
                <Script src="/assets/admin/js/perfect-scrollbar.js" strategy="afterInteractive" />
                <Script src="/assets/admin/js/menu.js" strategy="afterInteractive" />
                <Script src="/assets/admin/js/main.js" strategy="afterInteractive" />
            </body>
        </html>
    )
}
