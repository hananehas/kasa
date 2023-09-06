import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import homeBanner from '../assets/homeBanner.png';


function Home() {
    return (
        <div>
            <div className="container">
                <Header />
                <Banner img={homeBanner} text={'Chez vous, partout et ailleurs'} />
            </div>
            <Footer />
        </div>

    )
}

export default Home ;