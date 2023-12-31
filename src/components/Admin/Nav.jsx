"use client"
import { useTheme } from "@/providers/ThemeProvider"
export default function AdminNav() {
    const { icon, toggleTheme } = useTheme();
    const stopEvent = (e) => {
        e.preventDefault();
    }
    const handleTheme = (e, typeTheme) => {
        e.preventDefault();
        toggleTheme(typeTheme);
    }
    return (
        <>
            <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar">
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-4" href="">
                        <i className="bx bx-menu bx-sm"></i>
                    </a>
                </div>
                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <i className="bx bx-search fs-4 lh-0"></i>
                            <input
                                type="text"
                                className="form-control border-0 shadow-none ps-1 ps-sm-2"
                                placeholder="Search..."
                                aria-label="Search..." />
                        </div>
                    </div>
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                            <a className="nav-link dropdown-toggle hide-arrow" href="#" onClick={stopEvent} data-bs-toggle="dropdown">
                                <i className="bx bx-globe bx-sm"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="" data-language="fr">
                                        <span className="align-middle">Vietnam</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item active" href="" data-language="en">
                                        <span className="align-middle">English</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                            <a className="nav-link dropdown-toggle hide-arrow" href="#" onClick={stopEvent} data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <i className="bx bx-grid-alt bx-sm"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end py-0">
                                <div className="dropdown-menu-header border-bottom">
                                    <div className="dropdown-header d-flex align-items-center py-3">
                                        <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                                        <a href="" className="dropdown-shortcuts-add text-body" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add shortcuts" data-bs-original-title="Add shortcuts"><i className="bx bx-sm bx-plus-circle"></i></a>
                                    </div>
                                </div>
                                <div className="dropdown-shortcuts-list scrollable-container ps">
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-calendar fs-4"></i>
                                            </span>
                                            <a href="app-calendar.html" className="stretched-link">Calendar</a>
                                            <small className="text-muted mb-0">Appointments</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-food-menu fs-4"></i>
                                            </span>
                                            <a href="app-invoice-list.html" className="stretched-link">Invoice App</a>
                                            <small className="text-muted mb-0">Manage Accounts</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-user fs-4"></i>
                                            </span>
                                            <a href="app-user-list.html" className="stretched-link">User App</a>
                                            <small className="text-muted mb-0">Manage Users</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-check-shield fs-4"></i>
                                            </span>
                                            <a href="app-access-roles.html" className="stretched-link">Role Management</a>
                                            <small className="text-muted mb-0">Permission</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-pie-chart-alt-2 fs-4"></i>
                                            </span>
                                            <a href="index.html" className="stretched-link">Dashboard</a>
                                            <small className="text-muted mb-0">User Profile</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-cog fs-4"></i>
                                            </span>
                                            <a href="pages-account-settings-account.html" className="stretched-link">Setting</a>
                                            <small className="text-muted mb-0">Account Settings</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-help-circle fs-4"></i>
                                            </span>
                                            <a href="pages-faq.html" className="stretched-link">FAQs</a>
                                            <small className="text-muted mb-0">FAQs &amp; Articles</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="bx bx-window-open fs-4"></i>
                                            </span>
                                            <a href="modal-examples.html" className="stretched-link">Modals</a>
                                            <small className="text-muted mb-0">Useful Popups</small>
                                        </div>
                                    </div>
                                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                                        <div className="ps__thumb-x" tabIndex="0" style={{ left: 0, width: 0 }}></div>
                                    </div>
                                    <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                                        <div className="ps__thumb-y" tabIndex="0" style={{ top: 0, height: 0 }}></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                            <a className="nav-link dropdown-toggle hide-arrow" href="#" onClick={stopEvent} data-bs-toggle="dropdown" aria-expanded="false">
                                <i className={`bx bx-sm bx-${icon}`}></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                                <li>
                                    <a className="dropdown-item" href="#" onClick={(e) => handleTheme(e, 'light')} data-theme="light">
                                        <span className="align-middle"><i className="bx bx-sun me-2"></i>Light</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#" onClick={(e) => handleTheme(e, 'dark')} data-theme="dark">
                                        <span className="align-middle"><i className="bx bx-moon me-2"></i>Dark</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                            <a className="nav-link dropdown-toggle hide-arrow" href="" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <i className="bx bx-bell bx-sm"></i>
                                <span className="badge bg-danger rounded-pill badge-notifications">5</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end py-0">
                                <li className="dropdown-menu-header border-bottom">
                                    <div className="dropdown-header d-flex align-items-center py-3">
                                        <h5 className="text-body mb-0 me-auto">Notification</h5>
                                        <a href="" className="dropdown-notifications-all text-body" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Mark all as read" data-bs-original-title="Mark all as read"><i className="bx fs-4 bx-envelope-open"></i></a>
                                    </div>
                                </li>
                                <li className="dropdown-notifications-list scrollable-container ps">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="../../assets/img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1">Congratulation Lettie 🎉</h6>
                                                    <p className="mb-0">Won the monthly best seller gold badge</p>
                                                    <small className="text-muted">1h ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                    <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <span className="avatar-initial rounded-circle bg-label-danger">CF</span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1">Charles Franklin</h6>
                                                    <p className="mb-0">Accepted your connection</p>
                                                    <small className="text-muted">12hr ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                    <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="../../assets/img/avatars/2.png" alt="" className="w-px-40 h-auto rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1">New Message ✉️</h6>
                                                    <p className="mb-0">You have new message from Natalie</p>
                                                    <small className="text-muted">1h ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                    <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <span className="avatar-initial rounded-circle bg-label-success"><i className="bx bx-cart"></i></span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1">Whoo! You have new order 🛒 </h6>
                                                    <p className="mb-0">ACME Inc. made new order $1,154</p>
                                                    <small className="text-muted">1 day ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                    <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="../../assets/img/avatars/9.png" alt="" className="w-px-40 h-auto rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1">Application has been approved 🚀 </h6>
                                                    <p className="mb-0">Your ABC project application has been approved.</p>
                                                    <small className="text-muted">2 days ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                                                    <a href="" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                                        <div className="ps__thumb-x" tabIndex="0" style={{ left: 0, width: 0 }}></div>
                                    </div>
                                    <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                                        <div className="ps__thumb-y" tabIndex="0" style={{ top: 0, height: 0 }}></div>
                                    </div>
                                </li>
                                <li className="dropdown-menu-footer border-top p-3">
                                    <button className="btn btn-primary text-uppercase w-100">view all notifications</button>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a className="nav-link dropdown-toggle hide-arrow" href="" data-bs-toggle="dropdown">
                                <div className="avatar avatar-online">
                                    <img src="/assets/admin/images/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar avatar-online">
                                                    <img src="/assets/admin/images/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <span className="fw-medium d-block">John Doe</span>
                                                <small className="text-muted">Admin</small>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bx bx-user me-2"></i>
                                        <span className="align-middle">My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bx bx-cog me-2"></i>
                                        <span className="align-middle">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <span className="d-flex align-items-center align-middle">
                                            <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                                            <span className="flex-grow-1 align-middle ms-1">Billing</span>
                                            <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <a className="dropdown-item" href=";">
                                        <i className="bx bx-power-off me-2"></i>
                                        <span className="align-middle">Log Out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}