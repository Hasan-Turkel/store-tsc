import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-5 h-[50px] text-white bg-orange-800'>
      <Link to="/" className='font-bold italic'>Store</Link>
        <div>
            <Link to="/" className='mr-2' >Home</Link>
            <Link to="/favorites" >Favorites</Link>
        </div>
    </div>
  )
}

export default NavBar