import '@/styles/client.css';
import { AuthProvider } from '@/providers/AuthProvider';
import { CartProvider } from '@/providers/CartProvider';
export const metadata = {
  title: 'Client',
}
export default function ClientLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <AuthProvider >
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
