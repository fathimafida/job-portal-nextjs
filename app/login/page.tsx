import Image from 'next/image';
import React from 'react'

const LoginPage = () => {
  return (
      <div className="flex  w-full  justify-center items-center p-20">
          <div className='flex flex-col w-1/2  justify-center border-2 p-2'>
          <div>
          </div>
          <h1 className='text-xl font-bold text-green-300'>
            Welcome Back!!
          </h1>
          <p className='text-black text-sm'>Enter your details to start searching for your dream job on this job .</p>
            <form className='flex flex-col gap-2'>
              <label className='font-bold text-black'>Email</label>
              <input className='text-black border rounded-md p-1' type="text" placeholder='Enter your email' />

              <label className='font-bold text-black'>Password</label>
              <input className='text-black border rounded-md p-1' type="text" placeholder='Enter your password' />

              <button className='text-black border bg-green-500 rounded-md p-1'>Login</button>
            </form>
          </div>
          <div className='flex  w-full h-full border-2 '>
          
       

       <Image className='w-full h-full' src="/loginBg.jpg" alt="logo" width={100} height={100} />
  
  </div>     </div>
   
        
      

  );
}

export default LoginPage
