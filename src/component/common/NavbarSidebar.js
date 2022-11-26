import React from "react";
import { NavLink } from "react-router-dom";
import navDropDown from "../../assets/js/custom";

function NavbarSidebar() {
    return (
        <div>
            <ul className="sidenav-inner py-1">
                <li className="sidenav-item" onClick={navDropDown}>
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-monitor"></i>
                        <div>Category</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <NavLink
                                to="/add-category"
                                className="sidenav-link"
                            >
                                Add New Category
                            </NavLink>
                        </li>
                        <li className="sidenav-item">
                            <NavLink
                                to="/all-category"
                                className="sidenav-link"
                            >
                                <div>All Category</div>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item" onClick={navDropDown}>
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-package"></i>
                        <div>Brand</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <NavLink to="/add-brand" className="sidenav-link">
                                Add New Brand
                            </NavLink>
                        </li>
                        <li className="sidenav-item">
                            <NavLink to="/all-brand" className="sidenav-link">
                                <div>All Brand</div>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item" onClick={navDropDown}>
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-shopping-bag"></i>
                        <div>Product</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <NavLink to="/add-product" className="sidenav-link">
                                Add New Product
                            </NavLink>
                        </li>
                        <li className="sidenav-item">
                            <NavLink to="/all-product" className="sidenav-link">
                                <div>All Product</div>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item" onClick={navDropDown}>
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-truck"></i>
                        <div>Order</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <NavLink to="/add-product" className="sidenav-link">
                                Add New Product
                            </NavLink>
                        </li>
                        <li className="sidenav-item">
                            <NavLink to="/all-product" className="sidenav-link">
                                <div>All Product</div>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item" onClick={navDropDown}>
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-repeat"></i>
                        <div>Return</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <NavLink to="/add-product" className="sidenav-link">
                                Add New Product
                            </NavLink>
                        </li>
                        <li className="sidenav-item">
                            <NavLink to="/all-product" className="sidenav-link">
                                <div>All Product</div>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item" onClick={navDropDown}>
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-archive"></i>
                        <div>Supplier</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <NavLink to="/add-product" className="sidenav-link">
                                Add New Product
                            </NavLink>
                        </li>
                        <li className="sidenav-item">
                            <NavLink to="/all-product" className="sidenav-link">
                                <div>All Product</div>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item" onClick={navDropDown}>
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-book"></i>
                        <div>Expense</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <NavLink to="/add-product" className="sidenav-link">
                                Add New Product
                            </NavLink>
                        </li>
                        <li className="sidenav-item">
                            <NavLink to="/all-product" className="sidenav-link">
                                <div>All Product</div>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item" onClick={navDropDown}>
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-file-plus"></i>
                        <div>Purchase</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <NavLink to="/add-product" className="sidenav-link">
                                Add New Product
                            </NavLink>
                        </li>
                        <li className="sidenav-item">
                            <NavLink to="/all-product" className="sidenav-link">
                                <div>All Product</div>
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default NavbarSidebar;
