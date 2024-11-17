import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <>
    <div className='bg-black xs:h-14 border-b-2 flex justify-between sm:h-16 md:h-20'>
    <div className='text-white font-serif xs:ml-2 xs:pt-4 sm:text-lg sm:ml-4 md:ml-8 md:text-2xl lg:mt-2'>Crypto<span className='text-blue-500'>Craze</span></div>
    <div className='text-white xs:text-xs xs:space-x-6 xs:pt-5 xs:mr-3 sm:text-base sm:space-x-10 sm:mr-8 md:mt-2 lg:text-lg lg:mr-14'>
      <Link href={'/'}>Home</Link>
      <Link href={'/coin-market'}>Pricing</Link>

    </div>
    </div>
    </>
  )
}

