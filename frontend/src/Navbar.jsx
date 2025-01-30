import React from 'react'
import logo from './assets/logo.png'

const Navbar = () => {
return (
    <div className='flex justify-between items-center px-4 py-2 border-b-2 border-gray-400 bg-amber-100'>
            <img src={logo} alt="EST" className='h-8' />
            <button className='bg-cyan-500 px-2 py-1 rounded-lg font-bold hover:bg-cyan-600 text-white'>About</button>
    </div>
)
}

export default Navbar