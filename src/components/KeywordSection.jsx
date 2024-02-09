import React from 'react'
import keyword1 from "../assets/keyword1.png"
import keyword2 from "../assets/keyword2.png"
import keyword3 from "../assets/keyword3.png"
import keyword4 from "../assets/keyword4.png"

function KeywordSection() {
  return (
    <section className='bg-bg mx-6 mb-40'>
        <div className='md:flex'>
            <div className='flex flex-col items-center text-center text-white font-display mb-20 md:mx-40'>
                <img className='mb-6' src={keyword1} alt='keyword1' />
                <h2 className='mb-2'>Access your files, anywhere</h2>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
            <div className='flex flex-col items-center text-center text-white font-display mb-20 md:mx-40'>
                <img className='mb-6' src={keyword2} alt='keyword2' />
                <h2 className='mb-2'>Access your files, anywhere</h2>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
        </div>
        <div className='md:flex'>
            <div className='flex flex-col items-center text-center text-white font-display mb-20 md:mx-40'>
                <img className='mb-6' src={keyword3} alt='keyword3' />
                <h2 className='mb-2'>Access your files, anywhere</h2>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
            <div className='flex flex-col items-center text-center text-white font-display mb-20 md:mx-40'>
                <img className='mb-6' src={keyword4} alt='keyword4' />
                <h2 className='mb-2'>Access your files, anywhere</h2>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
        </div>
    </section>
  )
}

export default KeywordSection