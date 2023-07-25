import React from 'react';
import George from '../images/George.png'; // Import your George image here

import "../style/contact.css"

export default function Contact() {
    return (
        <div className="contact-container">
            <img className='george-image' src={George} alt='Big George' />
            
               <div className="contact-text">
                <h1> This is George, resident <br></br>hotshot and all around fun-guy!</h1>
                <br></br>
                <h2>Got Questions...</h2>
                <h2> George has your answers!</h2>
                <br></br>
                
                <h2>Send him an email:<br></br>
                   <h2>
                    <a href="mailto:pintforgeorge@geopairing.com">
                    pintforgeorge@geopairing.com
                </a>
                </h2> 
               
                </h2>
              
                <h2> And he will get back <br></br>to you as soon as possible!</h2>
                

                </div> 
                
        </div>
    );
}
