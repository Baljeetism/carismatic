import React from 'react'

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar-con'>
      {/* <h2 className='h2footer'>Search</h2> */}
      <Link style={{textDecoration: 'none'}} to="/search"><h2 className='h2footer'>Search</h2></Link>
      <Link className='hau' style={{textDecoration: 'none'}} to="/carismatic"><h2 className='h2footer'>CARismatic</h2></Link>
      {/* <span style={{textDecoration: 'none'}} className='hau'>
      <Link to="/"><h2 className='h2footer'>CARismatic</h2></Link>
      </span> */}
      
      
    
      
      
    </div>
  )
}
