import React from 'react';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div className="row" id="navBanner"></div>
            <nav className="nav" id="navbar">
                <a className="nav-link">
                    <Link to="/" className={window.location.pathname === "/" ||window.location.pathname === "/About"}>About</Link> 
                </a>
                <a className="nav-link">
                    <Link to="/Portfolio" className={window.location.pathname === "/Portfolio"}>Portfolio</Link> 
                </a>
                <a className="nav-link">
                    <Link to="/Experience" className={window.location.pathname === "/Experience"}>Experience</Link> 
                </a>
                <a className="nav-link" >
                    <Link to="/Contact" className={window.location.pathname === "/Contact"}>Contact</Link> 
                </a>
            </nav>            
        </div>
    );
};

export default NavBar;