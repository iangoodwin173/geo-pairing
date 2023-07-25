import React from 'react';
import landingBackground from '../images/landing-bg.png';

import '../style/home.css';

export default function Home() {
    return (
        <div className='landing-bg-container'>
            <img className='landing-bg-img' src={landingBackground} alt='Big George' />
        </div>
    );
}
