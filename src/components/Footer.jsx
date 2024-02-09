import React from 'react'
import logo1 from "../assets/logofooter1.png"
import logo2 from "../assets/logofooter2.png"
import gps from "../assets/gps.png"
import phone from "../assets/phone.png"
import gmail from "../assets/gmail.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"

function Footer() {
  return (
    <footer className='text-white px-10 pt-40 pb-12 bg-bg-footer lg:flex lg:justify-between lg:items-center'>
        <div className='flex gap-2 mb-9'>
            <img src={logo1} alt='logo1' />
            <img src={logo2} alt='logo part 2' />
        </div>
        <div className='lg:flex lg:w-1/2 lg:gap-20'>
            <div className='flex gap-1 mb-4 lg:w-1/3'>
                <img className='h-6' src={gps} alt='gps' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div>
            <div className='flex gap-1 mb-4'>
                <img className='h-6' src={phone} alt='phone' />
                <p>+1-543-123-4567</p>
            </div>
            <div className='flex gap-1 mb-14'>
                <img src={gmail} alt='gmail' />
                <p>example@fylo.com</p>
            </div>
            </div>
        </div>
        <ul className='flex flex-col gap-4 mb-12'>
            <li className='hover:text-hover'>About Us</li>
            <li className='hover:text-hover'>Jobs</li>
            <li className='hover:text-hover'>Press</li>
            <li className='hover:text-hover'>Blog</li>
        </ul>
        <ul className='flex flex-col gap-4 mb-14'>
            <li className='hover:text-hover'>Contact Us</li>
            <li className='hover:text-hover'>Terms</li>
            <li className='hover:text-hover'>Privacy</li>
        </ul>
        <div className='flex justify-center gap-3'>
            <img src={facebook} alt='facebook' />
            <img src={twitter} alt='twitter' />
            <img src={instagram} alt='instagram' />
        </div>
    </footer>
  )
}

export default Footer