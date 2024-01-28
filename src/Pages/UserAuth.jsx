import React from 'react'
import InputBox from './InputBox'
import google from '../images/google.png'
import { Link } from 'react-router-dom'

function UserAuth({type}) {
  return (
    <>
        <div className='flex items-center justify-center'>
             <form  className=' '>
                <h1 className='font-gelasio text-3xl md:text-5xl text-center mb-12 md:mb-20 '>
                    {type==='sign-up' ? 'Please Sign Up' : 'Welcome Back'}
                </h1>

                <div>
                       {
                         type !== 'sign-in' ?
                         <InputBox 
                            type="text"
                            name='Full Name'
                            icon="fi-ts-circle-user"
                            placeholder='Full Name'
                           /> : ''
                       } 

                       <InputBox
                          type='email'
                          name='Email'
                          icon="fi-rr-envelope"
                          placeholder="Email"
                       /> 

                       <InputBox 
                          type='password'
                          name='password'
                          icon='fi-rr-lock'
                          placeholder='Password'
                          
                       />
                   
                       
                       
                </div>
                  
                <button type='submit'  className='bg-black  ml-24 text-white py-3 px-6  rounded-full mt-4 hover:bg-opacity-80'
                >
                    {type === 'sign-up' ? 'Sign Up' : 'Sign In'}
                </button>

                  <div className='flex mt-6  gap-2 opacity-40 '>
                       <hr className='w-1/2 border-black'/>
                       <p className='-translate-y-3.5'>or</p>
                       <hr className='w-1/2 border-black'/>
                  </div>

                  <div>
                     <button className='ml flex w-[90%] justify-center items-center ml-4 px-6 py-3 gap-3 bg-black text-white hover:bg-opacity-80 rounded-full  mt-3'>
                       
                        <img src={google} className='w-5' />
                        <p>Continue with Google</p>
                     </button>
                  </div>

                  <div>
                      <p className='text-center md:mt-5 mt-2 '>
                        {
                          type === 'sign-up' ? 'Already have an account?' : 'Don’t have an account?' 
                         }
                         <Link to={type === 'sign-up' ? '/signin' : '/'}>
                         <button className='text-black font-bold ml-2 cursor-pointer'>
                            {type === 'sign-up' ? 'Sign In' : 'Sign Up'}
                          </button>
                         </Link>
                        
                      </p>
                  </div>
                


             </form>
        </div>
    </>
  )
}

export default UserAuth



// className='w-full h-10 px-2 text-sm border-2 border-gray-300  rounded-full bg-gray-50 placeholder:text-gray-500 mb-5'