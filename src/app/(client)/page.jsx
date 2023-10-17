import Link from "next/link"
export default function ClientPage() {
  return (
    <div>
      Page Client
      <Link href={`/admin`}>Admin</Link>
    </div>
  )
}
