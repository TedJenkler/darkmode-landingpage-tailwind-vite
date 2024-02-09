import React from 'react'
import quote from "../assets/quote.png"
import profile1 from "../assets/profile1.png"
import profile2 from "../assets/profile2.png"
import profile3 from "../assets/profile3.png"

function Quotes() {
  return (
    <section className='mx-12 text-white font-display md:flex md:gap-10 md:mx-40'>
        <img className='md:h-4' src={quote} alt='quote'/>
        <div className='bg-lightbg py-6 px-5 rounded mb-6 md:h-52'>
            <p className='q font-sans italic mb-4'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className='flex items-center gap-2'>
                <img className='h-6' src={profile1} alt='profile1' />
                <div>
                    <p className='s font-bold'>Satish Patel</p>
                    <p className='xs'>Founder & CEO, Huddle</p>
                </div>
            </div>
        </div>
        <div className='bg-lightbg py-6 px-5 rounded mb-6 md:h-52'>
            <p className='q font-sans italic mb-4'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className='flex items-center gap-2'>
                <img className='h-6' src={profile2} alt='profile2' />
                <div>
                    <p className='s font-bold'>Bruce McKenzie</p>
                    <p className='xs'>Founder & CEO, Huddle</p>
                </div>
            </div>
        </div>
        <div className='bg-lightbg py-6 px-5 rounded md:h-52'>
            <p className='q font-sans italic mb-4'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className='flex items-center gap-2'>
                <img className='h-6' src={profile3} alt='profile3' />
                <div>
                    <p className='s font-bold'>Iva Boyd</p>
                    <p className='xs'>Founder & CEO, Huddle</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quotes