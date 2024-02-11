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
    <main className="w-full py-8 min-h-screen bg-indigo-950">
      <h1 className="w-11/12 lg:w-4/5 pb-2 mt-12 lg:mt-0 mx-auto text-xl lg:text-4xl font-semibold text-white border-b-4 border-white">ブックマーク一覧</h1>

      <section className="w-11/12 lg:w-4/5 mt-2 mx-auto flex flex-col items-center">
        <div className="w-full m-2 mt-8 rounded-xl bg-gray-100 text-sm lg:text-xl">
          <div className="bg-gray-200 rounded-t-xl grid grid-rows-1 grid-cols-12 gap-y-4[&>tr>th]:py-4">
            <div className="text-center col-span-2 my-4">単語１</div>
            <div className="text-center col-span-2 my-4 pl-2 border-l-2 border-gray-400">単語２</div>
            <div className="col-span-6 m-4 pl-4 border-l-2 border-gray-400">画像</div>
            <div className="text-center col-span-2 my-4 pl-2 border-l-2 border-gray-400">ブック</div>
          </div>

          {map.map((value, index) => (
            <div key={index} className="rounded-t-xl grid grid-rows-1 grid-cols-12 [&>tr>th]:py-4">
              <div className="col-span-2 my-4 flex items-center justify-center">{value.firstWord}</div>
              <div className="col-span-2 my-4 pl-2 border-l-2 border-gray-400 flex items-center justify-center">{value.secondWord}</div>
              <div className="col-span-6 m-4 pl-4 border-l-2 border-gray-400 grid grid-cols-4 gap-4">
                {value.urls.map((url, index) => (
                  <img key={index} src={url} alt="" className="w-full h-auto" />
                ))}
              </div>
              <div className="col-span-2 my-4 pl-2 border-l-2 border-gray-400 flex items-center justify-center">
                <IoBookmark className={`size-8 lg:size-16 ${false ? "text-red-500" : "text-gray-400"}`} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BookMark;
