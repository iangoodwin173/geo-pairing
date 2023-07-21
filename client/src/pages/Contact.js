import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_MARGARITAS} from '../utils/queries';
export default function Contact() {
    const {loading, data} = useQuery(GET_MARGARITAS)
    console.log(data);
    return (
        <div>
            <p>Wanna send George a pint?
                <br></br>
                Send it here!
                <br></br>
                pintforgeorge@geopairing.com
            </p>
            
   
        </div>
    )
}