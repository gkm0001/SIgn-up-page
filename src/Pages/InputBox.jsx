import React, { useState } from 'react'

function InputBox({type,name,placeholder,icon,value,id}) {

  const [showpassword , setshowpassword] = useState(false)

  return (
    <div className='relative w-[100%] '>
      <input
       type={type === 'password' ? showpassword ? 'text' : 'password' : type}
       name={name}
       placeholder={placeholder}
       icon={icon} 
       value={value}
       id={id}
       className={`w-[100%] rounded-md p-4 bg-grey pl-16 ${type === 'password' ? 'pr-16' : ''} border border-grey focus:bg-transparent placeholder:text-black mb-5`}
      />
     
     <i className={"fi " +  icon + ' absolute mt-4 -translate-x-64 -ml-10'}></i>

     {
           type === 'password' ? !showpassword ? 
             <i className='fi fi-rs-crossed-eye absolute mt-5 -translate-x-10 cursor-pointer' 
              onClick={()=> setshowpassword(!showpassword)}
             ></i>
             :  <i className='fi fi-rr-eye absolute mt-5 -translate-x-10 cursor-pointer' 
             onClick={()=> setshowpassword(!showpassword)}
            ></i> :''
     }
    </div>
  )
}

export default InputBox



// absolute mt-4 -translate-x-10 -ml-10