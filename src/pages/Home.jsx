import forestMobile from '../images/forestMobile.png';
import { useNavigate } from 'react-router-dom';
import Accommodations from '../accommodations.json'

const Home = () => {

    const data = Accommodations
    const navigate = useNavigate();

    document.title = 'Kasa - Acceuil'
 
    return (
        <main>
            <div className='main-banner'>
                <img src={forestMobile} alt="image de forêt" />
                <h1> Chez vous,<br /> partout et ailleurs</h1>
            </div>
            <section className='main-accommodations'>
              {data.map((elem) => {return(
                            <article 
                                key={elem.id} 
                                className='accommodation-card' 
                                onClick={() => navigate(`logement/${elem.id}`)}
                                style={{backgroundImage: `url(${elem.cover})`}}
                            >
                                <div className='accommodation-card-filter'>
                                    <h2>{elem.title}</h2>
                                </div>
                            </article>
                    )})
                } 
            </section>
        </main>
    );
}

export default Home;
