import logo from'../../assets/logo.svg';
import './Header.scss';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';

function Header() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
    };
   
    return (
        <header className="Header">
            <img src={logo} className="Header-logo" alt="logo" />
            <nav className='Navbar'>
                <Link to="/" onClick={handleClick} className={isClicked ? 'clicked-link' : 'App-link' }>
                    Accueil
                </Link>
                <Link to="/about" onClick={handleClick} className={isClicked ? 'clicked-link' : 'App-link'}>
                    A propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
