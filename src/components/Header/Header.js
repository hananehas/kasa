import logo from'../../assets/logo.svg';
import './Header.scss';

function Header() {
    return (
        <header className="Header">
            <img src={logo} className="Header-logo" alt="logo" />
            <nav>
            </nav>
        </header>
    );
}

export default Header;
