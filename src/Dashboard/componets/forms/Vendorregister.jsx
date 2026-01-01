import React from 'react'

const Vendorregister = () => {
  return (
     <div className='regsitersection'>
       
        <form className='registerform'>

           <h3>Vendor Register</h3> 
           <label>Username</label>
           <input type='text' placeholder='Enter username'/>
            <label>Email</label> 
            <input type='text' placeholder='Enter your Email'/> 
            <label>Password</label> 
            <input type='password' placeholder='Enter Your Password'/> 
            <div className="btnrsubmit">
              <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Vendorregister