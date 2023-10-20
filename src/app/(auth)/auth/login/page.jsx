import AuthFormLogin from "@/components/Admin/Auth/FormLogin"
import Link from "next/link"
export const metadata = {
    title: "Login - Management Tool"
}
export default function AuthLogin() {
    return (
        <div className="authentication-inner">
            <div className="card">
                <div className="card-body">
                    <div className="app-brand justify-content-center">
                        <Link href="/" className="app-brand-link gap-2">
                            <img src="https://staging.tariru.work/assets/admin/img/tariru_logo_white.png" alt="Task management tool" />
                        </Link>
                    </div>
                    <h4 className="mb-2">Welcome to Tool! 👋</h4>
                    <p className="mb-4">Please sign-in to your account and start the adventure</p>
                    <AuthFormLogin />
                    <p className="text-center">
                        <span>New on our platform?</span>
                        <Link href="/auth/register" title="Register">
                            <span>Create an account</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
