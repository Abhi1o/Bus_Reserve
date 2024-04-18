import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='py-10 flex items-center justify-center flex-col w-full max-w-lx bg-gray-100/100 '>
        <div className='text-xl font-bold flex-col text-center justify-center'>
          <h2 className='mt-2 md:mt-6 '>LogIn</h2>
          <p className='mt-2 mb-5 md:mb-8 font-normal' >Welcome back!</p>
        </div>
        <div className='mb-3 w-56'>
            <label className='mb-10 text-sm md:text-base' htmlfor='username'>UserName</label><br/>
            <input className='px-2 py-1 border rounded-lg w-full bg-white text-black' type='text' id='username' placeholder='UserName'/>
        </div>
        <div className='mb-3 w-56'>
            <label className='mb-10 text-sm' htmlfor='password'>Password</label><br/>
            <input className='px-2 py-1 border rounded-lg w-full bg-white text-black' type='text' id='password' placeholder='Password'/>
        </div>
        <button className=' px-5 py-1 w-28 h-9 border rounded-lg text-white text-base mt-2 font-semibold mb-6 bg-blue-400 hover:bg-blue-500'>Login</button>

        <p className='text-blue-500 font-medium text-sm mb-1'>Forget Password?</p>
        <Link to="/signup">  <p className='text-sm'>Don't have an account? <span className='font-medium text-blue-500'>Sign Up</span></p></Link>

    </div>
  )
}

export default Login