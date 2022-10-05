import React from 'react';
import Dropdown from '../components/Dropdown';
import mountainsMobile from '../images/mountainsMobile.png'

const About = () => {
    return (
        <main className='about'>
            <img src={mountainsMobile} alt='Paysage de montagne'></img>
            <Dropdown title={'fiabilité'}/>
            <Dropdown props={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} title={"respect"}/>
            <Dropdown title={"service"}/>
            <Dropdown title={"responsabilité"}/>
        </main>
    );
}

export default About;
