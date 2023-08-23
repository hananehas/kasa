import logo from'../../assets/logo.svg';
import './Header.scss';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header className="Header">
            <img src={logo} className="Header-logo" alt="logo" />
            <nav className='Navbar'>

                <Link className={CurrentLocation('/', ' currentLink', 'App-links')} to="/" >Accueil</Link>

                <Link className="App-link" to="/about">À propos</Link>

            </nav>
        </header>
    );
}

export default Header;
