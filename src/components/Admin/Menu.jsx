"use client";
export default function AdminMenu() {
    return (
        <>
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className="app-brand demo">
                    <a href="index.html" className="app-brand-link">
                        <img src="https://staging.tariru.work/assets/admin/img/tariru_logo_white.png" alt="Task management tool" />
                    </a>
                    <a href="" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i className="bx bx-chevron-left bx-sm align-middle"></i>
                    </a>
                </div>
                <div className="menu-inner-shadow"></div>
                <ul className="menu-inner py-1">
                    <li className="menu-item active open">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Dashboards">Home</div>
                        </a>
                    </li>
                    <li className="menu-header small text-uppercase"><span className="menu-header-text">Applications</span></li>
                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-shopping-bag"></i>
                            <div data-i18n="Order">Order</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="" className="menu-link menu-toggle">
                            <i className="menu-icon tf-icons bx bxl-product-hunt"></i>
                            <div data-i18n="Product">Product</div>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="" className="menu-link">
                                    <div data-i18n="Collections">Collections</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="" className="menu-link">
                                    <div data-i18n="Collections">Tags</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="" className="menu-link">
                                    <div data-i18n="Comments">Comments</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="" className="menu-link">
                                    <div data-i18n="All Product">All Product</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-user"></i>
                            <div data-i18n="Customer">Customer</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-photo-album"></i>
                            <div data-i18n="File & media">File & media</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-news"></i>
                            <div data-i18n="News">News</div>
                        </a>
                    </li>
                    <li className="menu-header small text-uppercase"><span className="menu-header-text">General</span></li>
                    <li className="menu-item">
                        <a
                            href=""
                            target="_blank"
                            className="menu-link">
                            <i className="menu-icon tf-icons bx bx-cog"></i>
                            <div data-i18n="Setting">Setting</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a
                            href=""
                            target="_blank"
                            className="menu-link">
                            <i className="menu-icon tf-icons bx bx-support"></i>
                            <div data-i18n="Support">Support</div>
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    )
}