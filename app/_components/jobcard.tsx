import Image from "next/image";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { ImPower } from "react-icons/im";

const JobCard = ({job}:Props) => {
  return (
    <div className="flex flex-col border shadow-md p-2 gap-2 rounded" >
      <div className="flex justify-between  items-center text-black ">
        <div className="flex gap-2 items-center ">
                  <div className=" w-10 h-10 ">
                      <Image className="rounded-full object-cover" src={job.company.logo} alt="logo"
                          width={100}
                          height={100}
                      ></Image>
          </div>
                  <h1>{job.company.name}</h1>
        </div>
        <CiBookmark />
      </div>
      <h1 className="font-bold text-md">{job.title}</h1>
          <h1 className="font-bold text-sm">${job.salary}</h1>
      <div className="flex justify-between items-center text-black ">
        <button className="flex gap-2 p-1 bg-green-400  border items-center rounded-md">
          <ImPower />
          Easy Apply
              </button>
              <h1>30d+</h1>
      </div>
    </div>
  );
};
 
interface Props{
    job :Job
}
export default JobCard;
