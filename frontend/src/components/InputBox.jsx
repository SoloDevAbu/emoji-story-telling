import React, { useState } from 'react'
import send from '../assets/send.png'
const InputBox = ({ onGenerate, centered, fixedBottom }) => {
  const [input, setInput] = useState('');

  return (
    <div
      className={`w-full max-w-lg mx-auto flex items-center bg-gray-300 p-4 rounded-lg ${
        centered ? 'absolute top-1/2 transform -translate-y-1/2' : ''
      } ${fixedBottom ? 'fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12' : ''}`}
    >
      <input
        className='text-sm flex-grow outline-none bg-transparent'
        type='text'
        placeholder='Enter your emojis to generate a story'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className='bg-cyan-500 px-3 py-1 rounded-lg font-bold hover:bg-cyan-600 text-white'
        onClick={() => {
          onGenerate(input);
          setInput('');
        }}
      >
        Generate
      </button>
    </div>
  );
};

export default InputBox