import React from 'react'
import hero from "../assets/hero.png"

function Hero() {
  return (
    <section className='bg-lightbg text-white text-center mb-32'>
        <div className='flex flex-col items-center  bg-bgcurve bg-no-repeat bg-cover'>
            <img className='mb-8' src={hero} alt='hero' />
            <h1 className='font-display px-6 mb-4'>All your files in one secure location, accessible anywhere.</h1>
        </div>
        <div className='bg-bg px-10'>
            <p className='font-display mb-8'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <button className='font-display bg-gradient-to-r from-linear1 to-linear2 px-20 py-3 rounded-full' >Get Started</button>
        </div>
    </section>
  )
}

export default Hero