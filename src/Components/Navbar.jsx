import { Input } from 'postcss';
import React from 'react';


function Navbar() {
  return (
    <div>
      <nav>
        <ul className='flex justify-center gap-14 '>
          <li className='transition hover:underline'><a href="#">Men</a></li>
          <li className='hover:underline transition-shadow'><a href="#">Women</a></li>
          <li className='hover:underline transition-shadow'><a href="#">Accessories</a></li>
          <li className='hover:underline transition-shadow'><a href="#">Footwear</a></li>
        </ul>
      </nav>
      <div  className='flex justify-center gap-2 mt-10 items-center text-lg'>
        <a href='#input'><img className='w-5 sm:w-7 cursor-pointer' src='/search.svg'/></a> 
        <input id='#input' className='w-[50%] sm:w-[35%] h-10 outline-1 text-sm sm:text-lg text-center border-2 rounded-md' type='text' placeholder='Type your clothing'/>
     </div>
    </div>
  );
}

export default Navbar;
