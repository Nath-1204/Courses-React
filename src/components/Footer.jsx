import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900/50'>
        <div>
          <ul className='flex justify-between items-center mx-[10%] text-center text-white mt-12 pt-5'>
            <a href="#quote-box" className='hover:border-b'>Citation</a>
            <a href="#markdown" className='hover:border-b'>Markdown</a>
            <a href="#drum-machine" className='hover:border-b'>Drum-Machine</a>
            <a href="#calculator" className='hover:border-b'>Calculator</a>
            <a href="#clock" className='hover:border-b'>Horloge</a>
          </ul>
        </div>

        <div className='text-center items-center text-white justify-center mx-[10%]  py-8'>

          <p>Copyright 2026 Maminirina    ||     All rights reserved.</p>

          <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/Nath-1204">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/natacha-raharimalala">LinkedIn</a></li>
          </ul>
        </div>
   
    </div>
  )
}

export default Footer
