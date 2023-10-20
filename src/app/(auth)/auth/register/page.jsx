import Link from "next/link"
import AuthFormRegister from "@/components/Admin/Auth/FormRegister"
export const metadata = {
    title: "Register - Management Tool"
}
export default function AuthRegister() {
    return (
        <div className="authentication-inner">
            <div className="card">
                <div className="card-body">
                    <div className="app-brand justify-content-center">
                        <Link href="/" className="app-brand-link gap-2">
                            <img src="https://staging.tariru.work/assets/admin/img/tariru_logo_white.png" alt="Task management tool" />
                        </Link>
                    </div>
                    <h4 className="mb-2">Adventure starts here 🚀</h4>
                    <p className="mb-4">Make your app management easy and fun!</p>
                    <AuthFormRegister />
                    <p className="text-center">
                        <span>Already have an account?</span>
                        <Link href="/auth/login" title="Login">
                            <span>Sign in instead</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
