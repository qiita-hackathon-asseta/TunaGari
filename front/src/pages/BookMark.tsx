// import { IoBookmark } from "react-icons/io5";
// import TestImg from "../images/scroll-img.jpeg";

// const map = [
//   {
//     urls: [TestImg, TestImg],
//     firstWord: "word1",
//     memo: "memo1",
//     secondWord: "word2",
//   },
//   {
//     urls: [TestImg, TestImg],
//     firstWord: "word3",
//     memo: "memo2",
//     secondWord: "word4",
//   },
//   {
//     urls: [TestImg, TestImg, TestImg],
//     firstWord: "word3",
//     memo: "memo2",
//     secondWord: "word4",
//   },
// ];

// const BookMark = () => {
//   return (
//     <main className="w-full py-8 min-h-screen bg-indigo-950">
//       <h1 className="w-11/12 lg:w-4/5 pb-2 mt-12 lg:mt-0 mx-auto text-xl lg:text-4xl font-semibold text-white border-b-4 border-white">ブックマーク一覧</h1>

//       <section className="w-11/12 lg:w-4/5 mt-2 mx-auto flex flex-col items-center">
//         <div className="w-full m-2 mt-8 rounded-xl bg-gray-100 text-sm lg:text-xl">
//           <div className="bg-gray-200 rounded-t-xl grid grid-rows-1 grid-cols-12 gap-y-4[&>tr>th]:py-4">
//             <div className="text-center col-span-2 my-4">単語１</div>
//             <div className="text-center col-span-2 my-4 pl-2 border-l-2 border-gray-400">単語２</div>
//             <div className="col-span-6 m-4 pl-4 border-l-2 border-gray-400">画像</div>
//             <div className="text-center col-span-2 my-4 pl-2 border-l-2 border-gray-400">ブック</div>
//           </div>

//           {map.map((value, index) => (
//             <div key={index} className="rounded-t-xl grid grid-rows-1 grid-cols-12 [&>tr>th]:py-4">
//               <div className="col-span-2 my-4 flex items-center justify-center">{value.firstWord}</div>
//               <div className="col-span-2 my-4 pl-2 border-l-2 border-gray-400 flex items-center justify-center">{value.secondWord}</div>
//               <div className="col-span-6 m-4 pl-4 border-l-2 border-gray-400 grid grid-cols-4 gap-4">
//                 {value.urls.map((url, index) => (
//                   <img key={index} src={url} alt="" className="w-full h-auto" />
//                 ))}
//               </div>
//               <div className="col-span-2 my-4 pl-2 border-l-2 border-gray-400 flex items-center justify-center">
//                 <IoBookmark className={`size-8 lg:size-16 ${false ? "text-red-500" : "text-gray-400"}`} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default BookMark;

import { IoBookmark } from "react-icons/io5";
import TestImg from "../images/scroll-img.jpeg";

const map = [
  {
    urls: [TestImg, TestImg],
    firstWord: "word1",
    memo: "memo1",
    secondWord: "word2",
  },
  {
    urls: [TestImg, TestImg],
    firstWord: "word3",
    memo: "memo2",
    secondWord: "word4",
  },
  {
    urls: [TestImg, TestImg, TestImg],
    firstWord: "word3",
    memo: "memo2",
    secondWord: "word4",
  },
];

const BookMark = () => {
  return (
    <main className=" w-full py-8 min-h-screen bg-indigo-950">
      <h1 className=" w-11/12 lg:w-4/5 pb-2 mt-12 lg:mt-0 mx-auto text-xl lg:text-4xl font-semibold text-white border-b-4 border-white">ブックマーク一覧</h1>

      <section className=" w-11/12 lg:w-4/5 mt-8 mx-auto flex flex-col items-center">
        <div className=" min-h-96 p-4 m-2 mt-8 rounded-xl bg-indigo-900 text-sm lg:text-xl flex flex-col gap-4">
          {map.map((value, index) => (
            <div className=" w-fit h-fit p-4 bg-indigo-950 rounded-xl flex flex-col lg:flex-row gap-2">
              <div className=" w-full lg:w-1/3 p-2 rounded-xl border-4 border-white grid grid-cols-2 grid-rows-2 gap-2 aspect-square">
                {value.urls.map((url, index) => (
                  <img key={index} src={url} alt="" className="col-span-1 row-span-1" />
                ))}
              </div>
              <div className=" w-full lg:w-2/3 col-span-5 aspect-square lg:aspect-[2/1] border-4 rounded-xl border-white  grid lg:grid-rows-7">
                <div className=" row-span-1 text-white flex flex-row items-center justify-around">
                  <div className=" flex flex-col lg:flex-row lg:gap-8">
                    <p className=" text-base lg:text-xl font-bold">
                      単語１ : <span className="text-sm lg:text-lg">{value.firstWord}</span>
                    </p>
                    <p className=" text-base lg:text-xl font-bold">
                      単語２ : <span className="text-sm lg:text-lg">{value.secondWord}</span>
                    </p>
                  </div>
                  <div className="">
                    <IoBookmark className={` size-8 ${false ? "text-red-500" : "text-gray-400"} `} />
                  </div>
                </div>
                <textarea name="" id="" className=" p-2 row-span-6" placeholder="メモしてね！" readOnly></textarea>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BookMark;
