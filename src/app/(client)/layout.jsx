import '@/styles/client.css';
import NextTopLoader from 'nextjs-toploader';
import { AuthProvider } from '@/providers/AuthProvider';
import { CartProvider } from '@/providers/CartProvider';
export const metadata = {
  title: 'Client',
}
export default function ClientLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <NextTopLoader />
        <AuthProvider >
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
