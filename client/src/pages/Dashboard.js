import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_MARGARITAS} from '../utils/queries';
export default function Dashboard() {
    const {loading, data} = useQuery(GET_MARGARITAS)
    console.log(data);
    return (
        <div>
            <h1>Welcome to the Dashboard babyyyyyy</h1>
            
   
        </div>
    )
}
