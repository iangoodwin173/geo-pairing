import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_MARGARITAS} from '../utils/queries';
export default function Home() {
    const {loading, data} = useQuery(GET_MARGARITAS)
    console.log(data);
    return (
        <div>
            <h1>Home Page Routes</h1>
            
   
        </div>
    )
}
