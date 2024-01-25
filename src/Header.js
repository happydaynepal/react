import React from 'react'


const Header = () => {
  return (
    <div className='flex justify-between bg-black text-white px-5 py-1 items-end sticky top-0 z-20'>

      <h1 className='font-bold text-2xl hover:text-orange-500'>Demo</h1>

      <nav className='space-x-5'>
        <button className='hover:scale-125 hover:text-orange-500'>About</button>
        <button className='hover:scale-125 hover:text-orange-500'>Contact</button>


      </nav>

    </div>
  )
}

export default Header
