import React from 'react';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div className="row" id="navBanner"></div>
            <nav className="nav" id="navbar">
                <a className="nav-link">
                    <Link to="/" className={window.location.pathname === "/" ||window.location.pathname === "/About"? "nav-link active": "nav-link"}>About</Link> 
                </a>
                <a className="nav-link">
                    <Link to="/Portfolio" className={window.location.pathname === "/Portfolio"? "nav-link active": "nav-link"}>Portfolio</Link> 
                </a>
                <a className="nav-link">
                    <Link to="/Experience" className={window.location.pathname === "/Experience"? "nav-link active": "nav-link"}>Experience</Link> 
                </a>
                <a className="nav-link" >
                    <Link to="/Contact" className={window.location.pathname === "/Contact"? "nav-link active": "nav-link"}>Contact</Link> 
                </a>
            </nav>            
        </div>
    );
};

export default NavBar;