import React from 'react';
import BackgroundImage from '../images/background.png'

const Home = () => {
    return (
        <main>
            <div className='main-banner'>
                <img src={BackgroundImage} alt="image de nature" />
                <h1> Chez vous, partout et ailleurs</h1>
            </div>
            <section className='main-accommodations'>
            
            </section>
        </main>
    );
}

export default Home;
