import Link from "next/link"
export default function AuthFormLogin() {
    return (
        <>
            <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email or Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email-username"
                        placeholder="Enter your email or username"
                    />
                </div>
                <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">Password</label>
                        <Link href="/auth/forgot-password" title="Forgot password">
                            <small>Forgot Password?</small>
                        </Link>
                    </div>
                    <div className="input-group input-group-merge">
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            placeholder="******"
                            autoComplete="off"
                            aria-describedby="password" />
                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="remember-me" />
                        <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                    </div>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                </div>
            </form>
        </>
    )
}