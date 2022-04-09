import {Link} from 'react-router-dom';
import React from 'react';

import UserInfoInterface from '../interfaces/UserInfo';

export interface NavBarItemInterface {
    name: string;
    link: string;
    active?: boolean;
}

export const NavbarItem: React.FC<NavBarItemInterface> = ({name, link, active}) => {
    return (
        <li className={active === true ? "nav-link active" : "nav-link"}>
            <Link to={link}>
                {name}
            </Link>
        </li>
    )
}

const Navbar: React.FC<UserInfoInterface> = ({loggedIn}) => {
    return (
        <nav className="navbar navbar-light navbar-expand-md fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="/#">StockBase</a>
                <button data-bs-toggle="collapse" className="navbar-toggler navbar-toggler-right collapsed"
                        data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation" value="Menu"><i className="fa fa-bars"/></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <NavbarItem name={"About"} link={"/#about"}/>
                        <NavbarItem name={"Tools"} link={"/#tools"}/>
                        <NavbarItem name={"Contact"} link={"/#contact"}/>
                        {loggedIn ?
                            <NavbarItem name={"DashBoard"} link={"/dashboard"}/>
                            :
                            <>
                                <NavbarItem name={"Signup"} link={"/signup"}/>
                                <NavbarItem name={"Login"} link={"/login"}/>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;