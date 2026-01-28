import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center fixed w-full px-6 py-5 top-0 z-20 bg-gray-900/70'>

        <a href="#quote-box">
          <img src={assets.logo} alt="logo" className='w-20 cursor-pointer'/>
        </a>

        <div className='flex items-center bg-opacity-50 rounded-full shadow-sm bg-transparent text-sm text-white font-medium transition-all gap-5'>
            <a href="#quote-box" className='hover:border-b'>Citation</a>
            <a href="#markdown" className='hover:border-b'>Markdown</a>
            <a href="#drum-machine" className='hover:border-b'>Drum-Machine</a>
            <a href="#calculator" className='hover:border-b'>Calculator</a>
            <a href="#clock" className='hover:border-b'>Horloge</a>
        </div>

    </div>
  )
}

export default Navbar
