import React from 'react'
import Navbar from '../componets/Navbar'
import Sidebar from '../componets/Sidebar'
import VendorLogin from '../componets/forms/VendorLogin'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='section'>
            <Sidebar/>
        <VendorLogin/>
        </div>
    </div>
  )
}

export default LandingPage