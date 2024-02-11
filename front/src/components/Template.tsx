import { Outlet } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";

const Template = () => {

  return (
    <div className="flex flex-col lg:flex-row">
      <nav className=" w-full lg:w-auto lg:h-screen p-2 lg:p-4 rounded-full lg:rounded-none bg-slate-800 flex lg:flex-col justify-between z-10 fixed">
        <div className=" flex lg:flex-col gap-6">
          <a
            href="/secret/home"
            className=" w-10 md:w-14 lg:w-16 aspect-square rounded-full bg-gray-50 flex items-center justify-center"
          >
            <MdHome className=" size-7 md:size-9 lg:size-10 text-gray-400" />
          </a>
          <a
            href="/secret/bookmarked"
            className="w-10 md:w-14 lg:w-16 aspect-square rounded-full bg-gray-50 flex items-center justify-center"
          >
            <IoBookmarks className=" size-6 md:size-8 lg:size-9 text-gray-400" />
          </a>
        </div>

        <a
          href=""
          className="w-10 md:w-14 lg:w-16 aspect-square rounded-full bg-gray-50 flex items-center justify-center"
        >
          <IoMdPerson className=" size-7 md:size-9 lg:size-10 text-gray-400" />
        </a>
      </nav>
      <div className=" w-full lg:ml-24 truncate">
        <Outlet />
      </div>
    </div>
  );
};

export default Template;
