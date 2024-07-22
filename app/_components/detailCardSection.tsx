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
      <h1 className="text-md text-black">{job.company.name}</h1>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-black text-lg">{job.title}</h1>
        <div className="flex gap-2 items-center">
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
      <div className='border p-2 w-fit rounded-lg'>
        <h1>Remote</h1>
      </div>
      <h1 className="text-sm">{job.description}</h1>
    </div>
  );
}   

export default DetailCardSection
