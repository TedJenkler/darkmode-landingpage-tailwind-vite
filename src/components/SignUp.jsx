import React from 'react'

function SignUp() {
  return (
    <form className='relative top-40 text-white font-display bg-lightbg mx-4 flex flex-col items-center text-center py-10 px-7 rounded-lg mb-20 md:w-2/3 md:mx-auto'>
        <h2 className='mb-4 font-bold'>Get early access today</h2>
        <p className='mb-8 md:mx-24'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <div className='md:flex md:gap-7'>
          <input className='mb-6 w-full px-6 py-3 rounded-full text-black md:h-16' type="text" placeholder='email@example.com'></input>
          <button className='font-display bg-gradient-to-r whitespace-nowrap from-linear1 to-linear2 px-20 py-3 rounded-full md:h-16' type='submit'>Get Started For Free</button>
        </div>
    </form>
  )
}

export default SignUp