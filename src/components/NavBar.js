import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-purple-600 h-16 flex items-center shadow-xl'>
      <h1 className='ml-12 text-gray-200 text-2xl'>
        <Link to='/'>Random Cocktail</Link>
      </h1>
    </div>
  )
}

export default NavBar
