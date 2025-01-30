import React from 'react'
import send from '../assets/send.png'
const InputBox = () => {
  return (
    <div className='max-h-16 bg-gray-300 mx-8 flex items-center justify-between p-4 rounded-lg mt-72 md:mx-52'>
        <input 
        className='text-sm w-full outline-none'
        type="text"
        placeholder='Enter your emojis to generate story'/>
        <button className='cursor-pointer'>
            <img src={send} alt="Generate" className='h-6'/>
        </button>
    </div>
  )
}

export default InputBox