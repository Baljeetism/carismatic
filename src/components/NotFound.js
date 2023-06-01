import React from 'react'
import Navbar from './Navbar'

export default function NotFound() {
  return (
    <>
    <Navbar />
    <div className='content'>
            <div className='findyour'>
                <h1>THE CAR YOU SEARCHED</h1>
                <h1 className='lowerh1'>IS NOT IN OUR GARAGE</h1>
                {/* <img src='https://flyclipart.com/thick-vertical-line-filled-icon-vertical-line-png-448176' alt='border' /> */}
               

            </div>

        </div>
    </>
   
  )
}
