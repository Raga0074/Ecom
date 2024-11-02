import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function Header() {
  return (
    <>
    <div className='flex items-center p-2'>
        <div className='text-lg button'>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
    </div>

          <div className='flex justify-between align-middle'>
            <img src='/kase.svg' width={90}/>
            <div className='flex gap-3'>
              <img className='w-8 cursor-pointer' src='/cart.svg'/>
              <img className='w-8 cursor-pointer' src='/favorites.svg'/>
            </div>
          </div>

    </>

  );
}

export default Header;
