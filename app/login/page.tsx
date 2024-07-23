import Image from 'next/image';
import React from 'react'

const LoginPage = () => {
  return (
      <div className="flex  w-full  justify-center items-center p-20">
          <div className='flex w-1/2  border-2'>
              ASmalmsdc
          </div>
          <div className='flex w-1/2  border-2'>
              <Image src="/glassdoor.jpg" alt="logo" width={100} height={100} />
          </div>
      
    </div>
  );
}

export default LoginPage
