export const metadata = {
    title: "Register - Management Tool"
}
export default function AuthRegister() {
    return (
        <div className="authentication-inner">
            <div className="card">
                <div className="card-body">
                    <div className="app-brand justify-content-center">
                        <a href="index.html" className="app-brand-link gap-2">
                            <img src="https://staging.tariru.work/assets/admin/img/tariru_logo_white.png" alt="Task management tool" />
                        </a>
                    </div>
                    <h4 className="mb-2">Adventure starts here 🚀</h4>
                    <p className="mb-4">Make your app management easy and fun!</p>
                    <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                autoFocus={true} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3 form-password-toggle">
                            <label className="form-label" htmlFor="password">Password</label>
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
                                <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                                <label className="form-check-label" htmlFor="terms-conditions">
                                    I agree to
                                    <a href="">privacy policy & terms</a>
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-primary d-grid w-100">Sign up</button>
                    </form>

                    <p className="text-center">
                        <span>Already have an account?</span>
                        <a href="auth-login-basic.html">
                            <span>Sign in instead</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
