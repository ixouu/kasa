import React from 'react';

const Caroussel = ({ images }) => {

    console.log(images)
    return (
        <div className='caroussel'>
            {
                images.map(i =>  <img src={i} alt='Previsualisation du logement'></img>)
            }
        </div>
    );
}

export default Caroussel;
