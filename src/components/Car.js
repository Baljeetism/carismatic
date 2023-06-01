import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import NotFound from './NotFound';

export default function Car() {
  const [data, setData] = useState(null);
  const location = useLocation();
 

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${location.state.car}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '222f70c043msh534be4762e02eacp1e9d0ejsn1abf292686b2',
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  if (!data) {
    // Loading state or alternative content
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <div className='content'>
        <div className='findyour'>
          <h1>{data.make}</h1>
          <h1 className='lowerh1'>{data.model}</h1>
          <div className='information'>
            <p>Class: {data.class}</p>
            <p>Displacement: {data.displacement}</p>
            <p>Cylinders: {data.cylinders}</p>
            <p>Drive: {data.drive}</p>
            <p>Transmission: {data.transmission}</p>
          </div>
        </div>
      </div>
    </>
  );
}
