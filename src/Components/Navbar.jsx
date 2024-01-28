import React, { useState } from 'react'
import image from '../images/Logon.png'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {

  const[visible,setvisible] = useState(false);

  const toggleManu = () => {
     
      setvisible(!visible);
   
  }

  return (
    <>
          <nav className=''>
                
                 <Link to='/' className='flex-none '>
                    <img src={image} width={70} height={70}/>
                 </Link>

                 <div className={`${visible ? 'opacity-100 pointer-events-auto duration-200' : 'opacity-0 pointer-events-none duration-200'} relative bg-white w-auto left-0 top-full mt-0.5 py-4 px-[5vw] md:absolute md:top-0 md:translate-x-14 md:opacity-100 pointer-events-auto duration-200`}>
                   <input 
                      type="text"
                      placeholder='Search'
                      className='w-full md:w-auto h-10 px-2 text-sm border-2 border-gray-300  rounded-full bg-gray-50 placeholder:text-gray-500'
                   />
                    <FaSearch className='absolute top-1/2 right-[10%] -translate-y-1/2 md:pointer-events-none md:left-36 md:relative md:-translate-y-7 '/> 
                 </div>

                 <div className='absolute top-0 right-0 mr-[7%] mt-3 md:hidden'>
                        <button className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'
                         onClick={toggleManu}
                        >
                              <FaSearch className=''/>
                        </button>
                 </div>
                 <div className='gap-3'>
                 <div className='absolute top-0 right-0 mr-64 mt-3'>
                      <Link to='/' className='hidden md:flex gap-2 text-dark-grey md:hover:text-black hover:bg-grey p-3 px-4  opacity-75'>
                            <i class="fi fi-ts-blog-pencil"></i>
                            <p>write</p>
                      </Link>
                     
                 </div>
                 
                 <Link to='/signin' className='whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-base capitalize hover:bg-opacity-80 absolute top-0 right-0 mr-[18%] md:mr-32 -translate-x-5  mt-3 '>
                    Sign In
                 </Link>
                 <Link to='/' className='whitespace-nowrap rounded-full py-3 px-6 text-base capitalize hover:bg-opacity-80 bg-gray-100 text-black absolute top-0 right-0 mr-4 mt-3 hidden md:block'>
                    Sign Up
                 </Link>
                 </div>
               
          </nav>  
    </>
  )
}

export default Navbar
