import React from 'react';

const Footer = () => {
    return (
        <div className="fixed-bottom">
        <footer>
            <div className="row" id="footBorder"></div>
            <div className="p-2 text-white-40 text-center" id="footContent">
            <a href="https://github.com/ewells89" title="Elyse Wells GitHub"><i class="fab fa-github" id="icons"></i></a>
            <a href="https://www.linkedin.com/in/elysewells/" title="Elyse Wells LinkedIn"><i class="fab fa-linkedin" id="icons"></i></a>
            <a href="#" title="Elyse Wells Resume"><i class="far fa-file-pdf" id="icons"></i></a>
            
            </div>
            <div className="p-3 text-white-50 text-center" id="footBanner">© Copyright 2020 Elyse Wells. All rights reserved.</div>
        </footer>
        </div>
        
    );
};

export default Footer;