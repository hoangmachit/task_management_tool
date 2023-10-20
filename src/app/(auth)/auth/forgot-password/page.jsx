import Link from "next/link"
export default function AuthForgotPassword() {
    return (
        <>
            <div className="authentication-inner py-4">
                <div className="card">
                    <div className="card-body">
                        <div className="app-brand justify-content-center">
                            <Link href="/" className="app-brand-link gap-2">
                                <img src="https://staging.tariru.work/assets/admin/img/tariru_logo_white.png" alt="Task management tool" />
                            </Link>
                        </div>
                        <h4 className="mb-2">Forgot Password? 🔒</h4>
                        <p className="mb-4">Enter your email and we'll send you instructions to reset your password</p>
                        <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <button className="btn btn-primary d-grid w-100">Send Reset Link</button>
                        </form>
                        <div className="text-center">
                            <Link href="/auth/login" className="d-flex align-items-center justify-content-center">
                                <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                                <span>Back to login</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}