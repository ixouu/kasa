import { useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown';
import mountainsMobile from '../images/mountainsMobile.png'
import mountainImg from '../images/mountains.png'

const About = () => {

    const data = [
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    ]

    
    const [size, setSize] = useState(window.innerWidth)


    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    },[])

    return (
        <main className='about'>
            {size < 375 ? <img src={mountainsMobile} alt='Paysage de montagne'></img> : <img src={mountainImg} alt='Paysage de montagne'></img>}
            <Dropdown props={data[0]} title={'fiabilité'}/>
            <Dropdown props={data[1]} title={"respect"}/>
            <Dropdown props={data[2]} title={"service"}/>
            <Dropdown props={data[3]} title={"responsabilité"}/>
        </main>
    );
}

export default About;
