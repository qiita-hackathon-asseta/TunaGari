import { IoBookmark } from "react-icons/io5";
import TestImg from "../images/scroll-img.jpeg";

const Generate = () => {
  return (
    <main className=" w-full py-8 min-h-screen bg-indigo-950">
      <h1 className=" w-4/5 pb-2 mx-auto text-4xl font-semibold text-white border-b-4 border-white">
        アイデア生成
      </h1>

      <section className=" w-4/5 mt-8 mx-auto flex flex-col items-center">
        <button className=" w-fit px-6 py-4 my-2 rounded-lg text-3xl font-bold text-indigo-950 bg-white">
          ランダム生成
        </button>

        <div className=" w-full min-h-96 mt-8 rounded-xl bg-gray-100 text-xl">
          <div className="  bg-gray-200 rounded-t-xl grid grid-rows-1 grid-cols-12  gap-y-4[&>tr>th]:py-4">
            <div className=" text-center col-span-2 my-4">単語１</div>
            <div className=" text-center col-span-2 my-4 pl-2  border-l-2 border-gray-400">
              単語２
            </div>
            <div className=" col-span-6 m-4 pl-4  border-l-2 border-gray-400">
              画像
            </div>
            <div className=" text-center col-span-2 my-4 pl-2  border-l-2 border-gray-400">
              ブック
            </div>
          </div>

          <div className=" rounded-t-xl grid grid-rows-1 grid-cols-12 [&>tr>th]:py-4">
            <div className=" col-span-2 my-4 flex items-center justify-center">
              ツナ
            </div>
            <div className=" col-span-2 my-4 pl-2  border-l-2 border-gray-400 flex items-center justify-center">
              ガリ
            </div>
            <div className=" col-span-6 m-4 pl-4  border-l-2 border-gray-400">
              <img src={TestImg} alt="" className=" size-32" />
            </div>
            <div className=" col-span-2 my-4 pl-2  border-l-2 border-gray-400 flex items-center justify-center">
              <IoBookmark
                className={` size-16 ${false ? "text-red-500" : "text-gray-400"} `}
              />
            </div>
          </div>
          <div className=" rounded-t-xl grid grid-rows-1 grid-cols-12 [&>tr>th]:py-4">
            <div className=" col-span-2 my-4 flex items-center justify-center">
              ツナ
            </div>
            <div className=" col-span-2 my-4 pl-2  border-l-2 border-gray-400 flex items-center justify-center">
              ガリ
            </div>
            <div className=" col-span-6 m-4 pl-4  border-l-2 border-gray-400">
              <img src={TestImg} alt="" className=" size-32" />
            </div>
            <div className=" col-span-2 my-4 pl-2  border-l-2 border-gray-400 flex items-center justify-center">
              <IoBookmark
                className={` size-16 ${false ? "text-red-500" : "text-gray-400"} `}
              />
            </div>
          </div>
          <div className=" rounded-t-xl grid grid-rows-1 grid-cols-12 [&>tr>th]:py-4">
            <div className=" col-span-2 my-4 flex items-center justify-center">
              ツナ
            </div>
            <div className=" col-span-2 my-4 pl-2  border-l-2 border-gray-400 flex items-center justify-center">
              ガリ
            </div>
            <div className=" col-span-6 m-4 pl-4  border-l-2 border-gray-400">
              <img src={TestImg} alt="" className=" size-32" />
            </div>
            <div className=" col-span-2 my-4 pl-2  border-l-2 border-gray-400 flex items-center justify-center">
              <IoBookmark
                className={` size-16 ${false ? "text-red-500" : "text-gray-400"} `}
              />
            </div>
          </div>
          <div className=" rounded-t-xl grid grid-rows-1 grid-cols-12 [&>tr>th]:py-4">
            <div className=" col-span-2 my-4 flex items-center justify-center">
              ツナ
            </div>
            <div className=" col-span-2 my-4 pl-2  border-l-2 border-gray-400 flex items-center justify-center">
              ガリ
            </div>
            <div className=" col-span-6 m-4 pl-4  border-l-2 border-gray-400">
              <img src={TestImg} alt="" className=" size-32" />
            </div>
            <div className=" col-span-2 my-4 pl-2  border-l-2 border-gray-400 flex items-center justify-center">
              <IoBookmark
                className={` size-16 ${false ? "text-red-500" : "text-gray-400"} `}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Generate;
