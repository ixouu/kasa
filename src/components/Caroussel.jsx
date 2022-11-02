import React, {useEffect, useState} from 'react';

const Caroussel = ({ images }) => {

    const [picNumber, setPicNumber] = useState(1);
    const [picData, setPicData] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    useEffect(() => {
        setPicData(images);
        setDataLength(images.length);
        ;
    },[images]);

    useEffect(() =>{
        const timer = () => {setTimeout(() => {
            if (picNumber < dataLength){
                setPicNumber(picNumber+1)
            } else {
                setPicNumber(1)
            }
        
        },5000);} 
        timer();
        return () =>  {clearTimeout(timer)}
    },[picNumber, dataLength])
    
    const prevPic = () => {
        if( picNumber !== 1){
            setPicNumber(picNumber-1)
        } else if (picNumber === 1){
            setPicNumber(dataLength)
        }
    }
    
    const nextPic = () => {
        if (picNumber < dataLength){
            setPicNumber(picNumber+1)
        } else {
            setPicNumber(1)
        }
    }

    return (
        <div className='caroussel'>
            <div className='caroussel-left'onClick={()=> prevPic()}><i className="fa-solid fa-chevron-left"></i></div>
            <div className='caroussel-right' onClick={() => nextPic()}><i className="fa-solid fa-chevron-right"></i></div>
            <img src={`${picData[picNumber-1]}`} alt=""/>
            <div className='caroussel-count'>
                <span>{picNumber}/{dataLength}</span>
            </div>
        </div>
    );
}

export default Caroussel;
