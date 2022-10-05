import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <main className='error'>
            <div className='error-titles'>
                <h1 className='error-title'>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <div className='errror-redirect'>
                <Link to='/'>Retourner sur la page d’accueil</Link>
            </div>
        </main>
    );
}

export default Error;
