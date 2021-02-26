import React from 'react';
import logo from './images/logo.svg';


const Header = () => {
    return (
        <header>
            <nav>
                <div className="brand-wrapper">
                    <div className="logo">
                        <img src={logo} alt="Logo de notitas" />
                    </div>
                </div>        
            </nav>
        </header>
    )
}

export default Header;
