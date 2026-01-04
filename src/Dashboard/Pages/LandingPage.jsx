import React, { useState } from 'react'
import Navbar from '../componets/Navbar'
import Sidebar from '../componets/Sidebar'
import VendorLogin from '../componets/forms/VendorLogin'
import Vendorregister from '../componets/forms/Vendorregister'
import AddFirm from '../componets/forms/Addfirm'
import AddProduct from '../componets/forms/Addproduct'

const LandingPage = () => {

   const [login,setLogin] = useState(false)
   const [register,setRegister] = useState(false)
   const [firm,setFirm] = useState(false)
   const [product,setProduct] = useState(false)

   const onfirm=()=>{
     setFirm(true)
     setLogin(false)
    setRegister(false)
    setProduct(false)
   }
   const onlogin=()=>{
    setLogin(true)
    setRegister(false)
    setFirm(false)
    setProduct(false)
    }

    const onRegister=()=>{
    setLogin(false)
    setRegister(true)
    setFirm(false)
    setProduct(false)
    }
    
    const onproduct=()=>{
      setProduct(true)
      setLogin(false)
    setRegister(false)
    setFirm(false)
    }

  return (
    <div>
        <Navbar showlogin={onlogin} showRegister={onRegister}  />
        <div className='section'>
            <Sidebar showfirm = {onfirm} showProduct ={onproduct}/>
        {login && <VendorLogin />}
        {register && <Vendorregister/>}
          {firm && <AddFirm/>}
        {product && <AddProduct/> }
        </div>
    </div>
  )
}

export default LandingPage