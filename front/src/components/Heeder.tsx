import React from "react";
import { IoMdPerson } from "react-icons/io";

const Heeder = () => {
  return (
    <header className="w-full px-4 py-2 bg-gray-400 flex items-center justify-between">
      <h1>サイトロゴ</h1>
      <div>
        <a
          href=""
          className="w-10 aspect-square rounded-full bg-gray-50 flex items-center justify-center"
        >
          <IoMdPerson size={30} className=" text-gray-400" />
        </a>
      </div>
    </header>
  );
};

export default Heeder;
