import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import { Redressed } from 'next/font/google'

const redressed = Redressed({ subsets: ["latin"], weight: ["400"]});

const Navbar = () => {
  return (
    <div
        className='
            sticky
            top-0
            z-30
            bg-slate-200
            w-full
            shadow-sm
          '
      >
          <div className='py-4 border-b-[1px]'>
              <Container>
                  <div
                      className='
                          flex
                          items-center
                          justify-between
                          gap-3
                          md:gap-0    
                  '>
                      <Link href='/' className={`${redressed.className} font-bold text-2xl`}>
                          E~shop
                      </Link> 
                      <div className='hidden md:block'>
                          Search
                      </div>
                      <div className='flex gap-8 md:gap-12 items-center'>
                          <div>CartCount</div>
                          <div>UserMenu</div>
                      </div>
                  </div>
              </Container>
          </div>
          
    </div>
  )
}

export default Navbar