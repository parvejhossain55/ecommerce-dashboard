import React from "react";
import NavbarHeader from "./common/NavbarHeader";
import logo from "../assets/img/logo.png";
import NavbarSidebar from "./common/NavbarSidebar";

function MasterLayout({body}) {
    return (
        <div>
            <div className="page-loader">
                <div className="bg-primary"></div>
            </div>
            <div className="layout-wrapper layout-2">
                <div className="layout-inner">
                    <div
                        id="layout-sidenav"
                        className="layout-sidenav sidenav sidenav-vertical sidenav-dark bg-dark"
                    >
                        {/* <!-- Brand demo (see assets/css/demo/demo.css) --> */}
                        <div className="app-brand demo">
                            <span className="app-brand-logo demo">
                                <img
                                    src={logo}
                                    alt="Brand Logo"
                                    className="img-fluid"
                                />
                            </span>
                            <a
                                href="/"
                                className="app-brand-text demo sidenav-text font-weight-normal ml-2"
                            >
                                Auric
                            </a>
                            <a
                                href="javascript:"
                                className="layout-sidenav-toggle sidenav-link text-large ml-auto"
                            >
                                <i className="ion ion-md-menu align-middle"></i>
                            </a>
                        </div>
                        <div className="sidenav-divider mt-0"></div>
                        
                        {/* Mount Sidebar */}
                        <NavbarSidebar/>
                    </div>

                    <div className="layout-container">
                        {/* Navbar */}
                        <NavbarHeader/>

                        <div className="layout-content">
                            <div className="container-fluid flex-grow-1 container-p-y">
                                {/* Mount Body */}
                                {body}
                            </div>

                            <nav className="layout-footer footer bg-white">
                                <div className="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">
                                    <div className="pt-3">
                                        <span className="float-md-right d-none d-lg-block">
                                            &copy; Auric | Hand-crafted &amp;
                                            Made with{" "}
                                            <i className="fas fa-heart text-danger mr-2"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <a
                                            href="javascript:"
                                            className="footer-link pt-3"
                                        >
                                            About Us
                                        </a>
                                        <a
                                            href="javascript:"
                                            className="footer-link pt-3 ml-4"
                                        >
                                            Help
                                        </a>
                                        <a
                                            href="javascript:"
                                            className="footer-link pt-3 ml-4"
                                        >
                                            Contact
                                        </a>
                                        <a
                                            href="javascript:"
                                            className="footer-link pt-3 ml-4"
                                        >
                                            Terms &amp; Conditions
                                        </a>
                                    </div>
                                </div>
                            </nav>

                            {/* <!-- [ theme customizer ] End --> */}
                        </div>
                        {/* <!-- [ Layout content ] Start --> */}
                    </div>
                    {/* <!-- [ Layout container ] End --> */}
                </div>
                {/* <!-- Overlay --> */}
                <div className="layout-overlay layout-sidenav-toggle"></div>
            </div>
            {/* <!-- [ Layout wrapper] End --> */}
            {/* {useScript("./assets/js/vendor.js")}
            {useScript("./assets/js/script.js")}
            {useScript("./assets/js/dropdown-hover.js")} */}

            {/* <script src="assets/js/vendor.js"></script>

            <script src="assets/js/script.js"></script> */}
        </div>
    );
}

export default MasterLayout;
