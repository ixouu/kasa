import { useParams } from "react-router-dom"
import Caroussel from '../components/Caroussel';
import Tag from "../components/Tag";
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown';
import Accommodations from '../accommodations.json'

const Accommodation = () => {
    
    
    const { id } = useParams();
    const accommodation = Accommodations.find((object) => object.id === id);

    document.title = `Kasa - ${accommodation.title}`

    return (
        <main className="accommodation">
            <Caroussel images={accommodation.pictures}/>
            <div className="accommodation-header">
                <div className="accommodation-header_left">
                    <div className="accommodation-titles">
                        <h1>{accommodation.title}</h1>
                        <h2>{accommodation.location}</h2>
                    </div>
                    <div className="accommodation-tags">
                        <Tag tags={accommodation.tags}/>
                    </div>
                </div>
                <div className="accommodation-header_right">
                    <div className="accommodation-ownerContainer">
                        <div className="accommodation-rating">
                            <Rating rating={accommodation.rating}/>
                        </div>
                        <div className="accommodation-owner">
                            <span>{accommodation.host.name}</span>
                            <img src={`${accommodation.host.picture}`} alt={`Photo de ${accommodation.host.name}`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="accommodation-dropdowns">
                    <div className="accommodation-desc">
                        <Dropdown props={accommodation.description} title={"description"}/>
                    </div>
                    <div className="accommodation-equipements">
                        <Dropdown props={accommodation.equipments}title={"équipements"}/>
                    </div>
            </div>
        </main>
    );
}

export default Accommodation;
