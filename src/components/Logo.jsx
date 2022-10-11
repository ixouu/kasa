import { useEffect, useState } from 'react';
import LogoMobile from '../images/logoMobile.png';
import LogoImg from '../images/logo.png'
import { useNavigate } from 'react-router-dom';


const Logo = () => {

    const navigate = useNavigate()

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
        size < 375 ? <img src={LogoMobile} alt="logo de Kasa" onClick={() => navigate('/')}/ > : <img src={LogoImg} alt="logo de Kasa" onClick={() => navigate('/')}/>
    );
}

export default Logo;
