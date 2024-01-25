import React from 'react'

const Header2 = () => {
  return (
    <div className='bg-gray-400 px-1 sticky top-10 z-20 '>

      <nav className='space-x-1'>
        <button className='bg-gray-600 text-white px-4 py-1 hover:scale-125 hover:text-orange-500'>Home</button>

        <button className='bg-gray-600 text-white px-4 py-1 hover:scale-125 hover:text-orange-500'>Articles</button>

        <button className='bg-gray-600 text-white px-4 py-1 hover:scale-125 hover:text-orange-500'>Shop</button>

        <button className='bg-gray-600 text-white px-4 py-1 hover:scale-125 hover:text-orange-500'>FAQ</button>



      </nav>
    </div>
  )
}

export default Header2
