import React from 'react'
import linkimg from "../assets/linkimg.png"
import linkbtn from "../assets/linkbtn.png"

function LinkSection() {
  return (
    <section className='text-white font-display mx-6 flex flex-col items-center mb-40'>
        <img className='mb-12' src={linkimg} alt='linkimg' />
        <div className='flex flex-col'>
            <h2 className='mb-4'>Stay productive, wherever you are</h2>
            <p className=''>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <br></br>
            <p className='mb-4'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <div className='w-44'>
                <a className='text-neon flex gap-2 border-b w-full whitespace-nowrap border-neon pb-1 items-center'>See how Fylo works<img className='h-4' src={linkbtn} alt='linkbtn' /></a>
            </div>
        </div>
    </section>
  )
}

export default LinkSection