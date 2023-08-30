import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import HomeBanner from '../assets/HomeBanner.png';


function Home() {
    return (
        <div class="container">
            <Header />
            <Banner img={HomeBanner} text={'Chez vous, partout et ailleurs'}/>
            <div>
                <Footer />
            </div>

        </div>

    )
}

export default Home ;