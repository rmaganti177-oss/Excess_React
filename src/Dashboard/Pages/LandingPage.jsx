import React from 'react'
import Navbar from '../componets/Navbar'
import Sidebar from '../componets/Sidebar'
import VendorLogin from '../componets/forms/VendorLogin'
import Vendorregister from '../componets/forms/Vendorregister'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='section'>
            <Sidebar/>
        {/* <VendorLogin/> */}
        <Vendorregister/>
        </div>
    </div>
  )
}

export default LandingPage