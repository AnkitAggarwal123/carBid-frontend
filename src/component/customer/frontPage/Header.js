import React from 'react'
import Body from './Body'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
        <header className='flex bg-black h-24 items-center justify-between px-5'>
            <div className='text-white font-bold text-2xl italic'>CarBid India</div>
            <Link to={'/LogIN'}>
            <button className='text-white px-6 py-1 bg-orange-500 rounded-sm'>LogIN</button>
            </Link>
        </header>
        <div><Body/></div>
    </div>
  )
}

export default Header