import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import aboutBanner from '../assets/aboutBanner.png';
import Footer from '../components/Footer/Footer';

function About() {

    return (
        <div>
            <div className="container">
                <Header />
                <Banner img={aboutBanner} />
            </div>
            <Footer />
        </div>
    );
}

export default About;
