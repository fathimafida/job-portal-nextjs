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

      {/* <input className="text-black">Search</input> */}

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

        <div className="flex flex-col w-[70%] border-2 p-2 ">
          {<DetailCardSection job={jobDetails} />}
        </div>
      </div>
    </main>
  );
}
