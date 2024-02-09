import React from 'react'
import logo from "../assets/logo.png"

function Header() {
  return (
    <nav className='bg-lightbg flex justify-between px-5 pt-6 pb-12 lg:px-20'>
        <img className='h-6 w-20' src={logo} alt='logo' />
        <ul className='flex text-white font-display gap-6 lg:gap-14'>
            <li className='hover:text-hover'>Features</li>
            <li className='hover:text-hover'>Team</li>
            <li className='hover:text-hover'>Sign In</li>
        </ul>
    </nav>
  )
}

export default Header