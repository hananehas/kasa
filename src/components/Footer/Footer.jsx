import logo from'../../assets/logofooter.svg';
import './Footer.scss';


function Footer() {
    return (
        <footer className="Footer">
            <img src={logo} className="Footer-logo" alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;