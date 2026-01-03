import React from 'react'
import Navbar from '../componets/Navbar'
import Sidebar from '../componets/Sidebar'
import VendorLogin from '../componets/forms/VendorLogin'
import Vendorregister from '../componets/forms/Vendorregister'
import AddFirm from '../componets/forms/Addfirm'
import AddProduct from '../componets/forms/Addproduct'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='section'>
            <Sidebar/>
        {/* <VendorLogin/> */}
        {/* <Vendorregister/> */}
        {/* <AddFirm/> */}
        {/* <AddProduct/> */}
        </div>
    </div>
  )
}

export default LandingPage