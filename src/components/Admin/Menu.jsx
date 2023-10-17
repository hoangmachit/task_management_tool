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
                            <div data-i18n="Dashboards">Dashboards</div>
                        </a>
                    </li>
                    <li className="menu-header small text-uppercase"><span className="menu-header-text">Applications</span></li>
                    <li className="menu-item">
                        <a href="cards-basic.html" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-collection"></i>
                            <div data-i18n="Basic">Cards</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="" className="menu-link menu-toggle">
                            <i className="menu-icon tf-icons bx bx-box"></i>
                            <div data-i18n="User interface">User interface</div>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="ui-accordion.html" className="menu-link">
                                    <div data-i18n="Accordion">Accordion</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-header small text-uppercase"><span className="menu-header-text">Settings</span></li>
                    <li className="menu-item">
                        <a
                            href=""
                            target="_blank"
                            className="menu-link">
                            <i className="menu-icon tf-icons bx bx-support"></i>
                            <div data-i18n="Support">Support</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a
                            href=""
                            target="_blank"
                            className="menu-link">
                            <i className="menu-icon tf-icons bx bx-file"></i>
                            <div data-i18n="Documentation">Documentation</div>
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    )
}