import React from 'react';
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <>
            <nav className='my-Nav'>
                <ul className='nav-ul'>
                    <li>
                        <Link className='my-Link' to="/category">Category</Link>
                    </li>
                    <li>
                        <Link className='my-Link' to="/sub-category">Sub Category</Link>
                    </li>
                    <li>
                        <Link className='my-Link' to="products">Products</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Header;