import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Navbar from './Navbar';

import {useNavigate } from 'react-router-dom';


export default function Search() {
    const [car, setCar] = useState();
    
    
    const navigate=useNavigate();
    
    function handleChange(event) {
        setCar(event.target.value);
 
    }
    



    function handleSubmit(event) {
        
       
        
        navigate("/car",{state : {car}})
        event.preventDefault();
        
        


        // Handle form submission
    }
    
   

    return (
        <>
            <Navbar />
         
            <div className='content'>
                <div className='findyour'>
                    <h1>FIND YOUR</h1>
                    <h1 className='lowerh1'>METAL</h1>
                    <form className='search-form' onSubmit={handleSubmit}>
                        <input className='search-input-text' onChange={handleChange} type="text" placeholder='Supra' />
                        
                            <button className='search-input-button'>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                       




                    </form>
                    <div className='content-div'>
                        <p className='paraone'>STRUGGLE</p>
                        <p>DREAM</p>

                    </div>
                </div>
            </div>
        </>
    );
}
