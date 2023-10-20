export default function AuthFormRegister() {
    return (
        <>
            <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                    />
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
        </>
    )
}