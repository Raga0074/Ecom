
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


function Header() {
  return (
    <>
    <div className='flex items-center p-2 justify-between bg-orange-500'>
      <h6 className='text-black text-xs sm:text-lg sm:flex-shrink-0'>"Elevate Your Look, Define Your Essence – Wear What Speaks to You!!!"</h6>
        <div className=''>
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
              <img className='cart w-8 cursor-pointer' src='/cart.svg'/>
              <img className='w-8 cursor-pointer' src='/favorites.svg'/>
            </div>
          </div>

    </>

  );
}

export default Header;
