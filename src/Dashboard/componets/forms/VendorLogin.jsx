import React from 'react'

const VendorLogin = () => {
  return (
    <div className='Loginsection'>
       
        <form className='authform'>
           <h3>Vendor Login</h3> 
            <label>Email</label> 
            <input type='text' placeholder='Enter your Email'/> 
            <label>Password</label> 
            <input type='password' placeholder='Enter Your Password'/> 
            <div className="btnsubmit">
              <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default VendorLogin