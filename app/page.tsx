import Image from "next/image";
import NavBar from "./_components/navBar";
import JobCard from "./_components/jobcard";
import DetailCardSection from "./_components/detailCardSection";
import { GoSearch } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { ImPower } from "react-icons/im";
import { BsStars } from "react-icons/bs";
import LoginPage from "./login/page";




export default async function Home() {
  const job: Job[] = await fetch("https://job.kunjappu.online/api/portal-jobs").then((res) => res.json());
  const jobDetails = await fetch( "https://job.kunjappu.online/api/portal-jobs/1"
  ).then(jobDetails => jobDetails.json());
  return (
    <main className="flex  flex-col items-center justify-between p-20 ">
      <NavBar />

      <label className="flex gap-2  items-center">
        <GoSearch />
        <input
          className="text-black border rounded-md p-1"
          type="text"
          placeholder="Search for jobs"
        />  
           <input
           
          className="text-black border rounded-md p-1"
          type="text"
          placeholder="Location"
        />  
      </label>

      <div className="flex gap-2  items-center overflow-y-auto">
        <ImPower className="text-green-500" />
        <span className="text-green-500">Upload your CV</span>
        <span className="text-green-400">-</span>
        <span className="text-green-800">Find your perfect job</span>
        </div>
       <div className="flex text-black gap-2">
        <div className="flex gap-2  items-center">
          <BsStars />
          <h1>For you</h1>
        </div>
        <h1>Search</h1>
        <h1>Your activity </h1>
        </div>
         <hr className="h-1 mb-10 text-black w-full"></hr>
          <div className="flex gap-2 w-full">
        <div className="flex flex-col w-[30%]  text-black  gap-2  p-2 ">
          {job.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="flex flex-col w-[70%] border rounded-lg p-2 mb-10">
          {<DetailCardSection job={jobDetails} />}
             
        <hr className="h-1  text-black w-full mb-6"/>
          <div className="flex flex-col gap-2 ">
   
         <h1 className="text-black font-bold text-lg"> Base pay Range</h1>
        <div className="flex flex-col border rounded-lg p-1">
       <div className="flex text-black gap-2">
       <h1 className="text-black">${jobDetails.salary}</h1>
        <span>-</span>
        <h1>${jobDetails.salary}</h1>
       </div>
         <p className="text-black text-sm text-gray-400">USA</p>

        </div>
      </div>
         </div>
          </div>
     
    </main>
  );
}
