

import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="fixed text-sm top-0 left-0 right-0 z-50 flex shadow-md justify-between items-center p-3 gap-4 w-full bg-white">
      <div className="flex items-center ">
      <Image className="bg-transparent" src="/glassdoor.jpg" alt="logo" width={100} height={100} />
      </div>
      <div className="flex gap-5 text-sm  justify-center items-center ">
        <Link href={"/"}>
          <h1 className="   text-black hover:scale-95">
            Community
          </h1>
        </Link>
        <Link href={"#jobs"}>
          <h1 className="  text-black hover:scale-95">
            Jobs
          </h1>
        </Link>
        <Link href={"#companies"}>
          <h1 className=" text-black hover:scale-95">
            Companies
          </h1>
        </Link>
        <Link href={"#Salaries"}>
          <h1 className=" text-black hover:scale-95">
            Salaries
          </h1>
        </Link>
      </div>

      <div className="flex gap-2 items-center text-black">
        <IoIosSearch />
        <p>Search</p>
        <IoNotificationsOutline />
        <CgProfile />
      </div>
    </div>
  );
};

export default NavBar;
