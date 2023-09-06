import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import aboutBanner from '../assets/aboutBanner.png';
import Footer from '../components/Footer/Footer';

function About() {
   

    useEffect(() => {
        fetch('/aboutData.json')
            .then((response) => response.json())
            .then((data) => setAboutData(data))
            .catch((error) => console.error('Erreur  :', error));
    }, []);

    return (
        <div>
            <div className="container">
                <Header />
                <Banner img={aboutBanner} />
            </div>
            <main>
               
            </main>
            <Footer />
        </div>
    );
}

export default About;
