import React, { useState } from 'react'
import Bus_img from "../Assets/images/bus6.png"
import { MdMenu,MdClose } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false)
  return (
    <div className='w-full flex items-center md:justify-around justify-between bg-gray-100/100 shadow-lg py-3 px-5 text-lg font-semibold'>
      <div className='flex flex-row gap-6 justify-center items-center'>
      <Link to="/"><img className="w-24 items-center flex" src={Bus_img} alt='bus_logo'/></Link> 
                <Link to="/"><ol className='font-bold text-3xl mb-1 -ml-4 text-blue-500 flex text-center items-center'>Reserve.</ol></Link> 
               

      </div>
      <div className='md:flex hidden justify-center items-center '>
        
            <ul className='flex items-center gap-6 text-lg font-medium '>

                 <Link to="/ticket"><ol className='text-gray-500 hover:text-black'>Ticket</ol></Link>
                <Link to="/contact"><ol className='text-gray-500 hover:text-black' >Contact Us</ol></Link>
                <Link to="/avialable"><ol className='text-gray-500 hover:text-black' >Available bus</ol></Link>
                <Link to="/receipt"><ol className='text-gray-500 hover:text-black' >Receipt page</ol></Link>
                <Link to="/info"><ol className='text-gray-500 hover:text-black' >Info page</ol></Link>
            </ul>
        
        <div className=''>
            <button onClick={()=> navigate('/login')} className ='px-6 py-1 mx-5 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md border border-blue-400 '> LogIn </button>
            <Link to="/signup"> <button className ='px-5 py-1  hover:bg-gray-200  text-gray-700 rounded-md border drop-shadow-lg border-blue-500'> Signup </button></Link>
        </div>
        </div>
      <div className=' md:hidden relative flex'>
        {toggle?
        <MdClose onClick={()=>setToggle(false)}/>
        
        :<MdMenu onClick={()=> setToggle(true)}/>
      }
      {toggle && 
      <div className='w-[50vw] h-[300px] z-10 fixed top-0 right-0 border border-gray-200 rounded-lg animate-slide-in bg-gray-100/100'>
            <ul className=' flex flex-col justify-start items-end  gap-6 text-lg font-medium px-8 py-4'>
            <MdClose onClick={()=>setToggle(false)}/>

                 <Link to="/ticket"><ol className='text-gray-500 hover:text-black'onClick={()=>setToggle(false) }>Ticket</ol></Link>
                <Link to="/contact"><ol className='text-gray-500 hover:text-black' onClick={()=>setToggle(false) }>Contact Us</ol></Link>
                <Link to="/avialable"><ol className='text-gray-500 hover:text-black' onClick={()=>setToggle(false) }>Available bus</ol></Link>
                <Link to="/receipt"><ol className='text-gray-500 hover:text-black' onClick={()=>setToggle(false) }>Receipt page</ol></Link>
                <Link to="/info"><ol className='text-gray-500 hover:text-black' onClick={()=>setToggle(false) }>Info page</ol></Link>
            </ul>
        </div>}

      </div>



    </div>
  )
}

export default Navbar