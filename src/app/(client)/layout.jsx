import '@/styles/client.css';
import { CartProvider } from '@/providers/CartProvider';
export const metadata = {
  title: 'Client',
}
export default function ClientLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
