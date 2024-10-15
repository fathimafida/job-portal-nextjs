import React from 'react'
import { CgBookmark, CgMore } from 'react-icons/cg';
import { ImPower } from 'react-icons/im';

const DetailCardSection = ({
    job
}: {
    job: Job
}) => {

  return (
    <div className="text-black">
      <h1 className="text-md text-black p-2">{job.company.name}</h1>
      <div className="flex justify-between p-2 items-center">
        <h1 className="font-bold text-black text-lg">{job.title}</h1>
        <div className="flex gap-2  items-center">
          <button className="bg-gray-200 p-2  rounded">
            <CgMore />
          </button>
          <button className="bg-gray-200 p-2 rounded">
            <CgBookmark />
          </button>
          <button className="shadow-md flex gap-3 px-2 font-semibold  text-green-700  p-1 bg-green-200  border items-center rounded-md">
            <ImPower className="h-4" /> Easy Apply
          </button>
          </div>
           </div>
           <div className='border p-2  ml-2 w-fit rounded-lg'>
            <h1 className="text-black font-thin  text-sm">Remote</h1>
              </div>
  <div className='p-2'>
  <h1 className="text-sm mb-4">{job.description}</h1>
  </div>
             <hr className="h-1  text-black w-full mb-6"/>
          <div className="flex flex-col p-2 gap-2 ">
   
         <h1 className="text-black font-bold text-lg"> Base pay Range</h1>
        <div className="flex flex-col border rounded-lg  mb-4  p-1">
       <div className="flex text-black gap-2">
       <h1 className="text-black">${job.salary}</h1>
        <span>-</span>
        <h1>${job.salary}</h1>
       </div>
         <p className="text-black text-sm text-gray-400">USA</p>

        </div>
      </div>
        
      <hr className='h-1 w-full'/>
       <div className='p-2'>
       <h1 className='text-black font-semibold mb-4'>Company Overview</h1>
      <div className="flex flex-row justify-between items-center gap-2">
       <div className='flex flex-col'>
       <h1 className="text-sm mb-4">Size</h1>
       <h1 className="text-sm mb-4">Type</h1>
       <h1 className="text-sm mb-4">Sector</h1>
       </div>
       <div className='flex flex-col'>
       <h1 className="text-sm mb-4">51 to 200 Employees</h1>
       <h1 className="text-sm mb-4">Company-Private</h1>
       <h1 className="text-sm mb-4">Information Technology</h1>
       </div>
       <div className='flex flex-col'>
       <h1 className="text-sm mb-4">Founded</h1>

       <h1 className="text-sm mb-4">Industry</h1>
       <h1 className="text-sm mb-4">Revenue</h1>
       </div>
   
       <div className='flex flex-col'>
       <h1 className="text-sm mb-4">2020</h1>
              
       <h1 className="text-sm mb-4">Information Technology  support Services</h1>
            
       <h1 className="text-sm mb-4">Unknown/Non applicable</h1>
       </div>
        
  
      </div>
       </div>
       <hr className="h-1  text-black w-full mb-6"/>
    </div>
  );
}   

export default DetailCardSection
