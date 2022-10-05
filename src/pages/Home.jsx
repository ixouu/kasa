import React, {useState, useEffect} from 'react';
import BackgroundImage from '../images/background.png';
import { Link } from 'react-router-dom';

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        try{
            await fetch('../logements.json'
            ,{
                headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            }
            )
                .then(res => {
                return res.json();
                })
                .then( myJson => {
                setData(myJson);
                });
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <div className='main-banner'>
                <img src={BackgroundImage} alt="image de nature" />
                <h1> Chez vous, partout et ailleurs</h1>
            </div>
            <section className='main-accommodations'>
                {
                    data.map((elem) => {return(
                        <Link to ={`logement/${elem.id}`} key={elem.id}>
                            <article 
                                id={elem.id} 
                                cover={elem.cover}
                                desc={elem.description} 
                                equipments={elem.equipments} 
                                host={elem.host} 
                                pictures={elem.pictures} 
                                rating={elem.rating}
                                tags={elem.tags}
                                title={elem.title}
                                >
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
