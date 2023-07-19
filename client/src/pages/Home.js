import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_MARGARITAS} from '../utils/queries';
import landingBackground from '../images/landing-bg.png';
export default function Home() {
    const {loading, data} = useQuery(GET_MARGARITAS)
    console.log(data);
   
    return (
        <div className='landing-bg-container'>
            
            <img className='landing-bg-img' src={landingBackground} alt='Big George' />
   
        </div>
    )
}