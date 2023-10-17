import '@/styles/client.css'
export const metadata = {
  title: 'Client',
}

export default function ClientLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
