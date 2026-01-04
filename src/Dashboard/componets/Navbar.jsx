import React from 'react'

const Navbar = ({showlogin , showRegister}) => {
  
  return (
    <div className='Mark'>
     
     <div className="section">
        Vendor Dashboard
     </div>
        <div className="wrap">
            <span onClick={showlogin}>Login /</span>
            <span onClick={showRegister}>Register</span>
     </div>
    </div>
  )
}

export default Navbar