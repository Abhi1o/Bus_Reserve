import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='py-10 flex items-center justify-center flex-col w-full max-w-lx bg-gray-100/100'>
            <div className='text-xl font-bold flex-col text-center justify-center'>
                <h2 className=' md:mt-6 mt-2 mb-5 md:mb-8 '>Signup </h2>
                
            </div>
            <div className='w-56'>
                <div className='mb-3'>
                    <label className='mb-10 text-sm md:text-base' htmlfor='username'>UserName</label><br />
                    <input className='px-2 py-1 border rounded-lg w-full bg-white text-black' type='text' id='username' placeholder='UserName' />
                </div>
                <div className='mb-3'>
                    <label className='mb-10 text-sm md:text-base' htmlfor='email'>Email ID</label><br />
                    <input className='px-2 py-1 border rounded-lg w-full bg-white text-black' type='email' id='email' placeholder='UserName' />
                </div>
                <div className='mb-3'>
                    <label className='mb-10 text-sm md:text-base' htmlfor='password'>Password</label><br />
                    <input className='px-2 py-1 border rounded-lg w-full bg-white text-black' type='password' id='password' placeholder='Password' />
                </div>
                <div className='mb-3'>
                    <label className='mb-10 text-sm md:text-base' htmlfor='confirmpassword'>Confirm Password</label><br />
                    <input className='px-2 py-1 border rounded-lg w-full bg-white text-black' type='password' id='confirm_password' placeholder='Confirm Password' />
                </div>
            </div>
            <button className=' px-5 py-1 w-28 h-9 border rounded-lg text-white text-base mt-2 font-semibold mb-6 bg-blue-400 hover:bg-blue-500'>Signup</button>


            <Link to="/login">  <p className='text-sm'>Don't have an account? <span className='font-medium text-blue-500'>Login</span></p></Link>

            <p></p>
        </div>
    )
}

export default Signup 