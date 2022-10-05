import forestMobile from '../images/forestMobile.png';
import { Link } from 'react-router-dom';
import Accommodations from '../accommodations.json'

const Home = () => {

    const data = Accommodations
 
    return (
        <main>
            <div className='main-banner'>
                <img src={forestMobile} alt="image de forêt" />
                <h1> Chez vous, partout et ailleurs</h1>
            </div>
            <section className='main-accommodations'>
              {data.map((elem) => {return(
                        <Link to ={`logement/${elem.id}`} key={elem.id} data1={data}>
                            <article className='accommodation-card'>
                                    <h2>{elem.title}</h2>
                            </article>
                        </Link>
                    )})
                } 
            </section>
        </main>
    );
}

export default Home;
