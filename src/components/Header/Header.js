import logo from'../../assets/logo.svg';
import './Header.scss';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header className="Header">
            <img src={logo} className="Header-logo" alt="logo" />
            <nav>
                <ul>   
                    <li>
                         <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">À propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
