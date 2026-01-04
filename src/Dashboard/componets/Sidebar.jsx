import React from 'react'

const Sidebar = ({showfirm , showProduct}) => {
  return (
     <div className='sidebarsection'>
        <ul>
          <li onClick={showfirm}>Add Firm</li>
          <li onClick={showProduct}>Add Product</li>
          <li>All Products</li>
          <li>user details</li>
        </ul>
    </div>
  )
}

export default Sidebar