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
    <footer className='text-white px-10 pt-40 pb-12 bg-bg-footer md:flex md:justify-between md:items-center'>
        <div className='flex gap-2 mb-9'>
            <img src={logo1} alt='logo1' />
            <img src={logo2} alt='logo part 2' />
        </div>
        <div className='md:flex md:w-1/2 md:gap-20'>
            <div className='flex gap-1 mb-4 md:w-1/3'>
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
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
        </ul>
        <ul className='flex flex-col gap-4 mb-14'>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
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