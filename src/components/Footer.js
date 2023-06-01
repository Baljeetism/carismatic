import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
        <Link style={{textDecoration: 'none'}} to="/more"><h2 className='h2footer'>Check More→</h2></Link>
        
        
        
        <p className='footer'>© Baljeetism</p>
    </div>
  )
}
