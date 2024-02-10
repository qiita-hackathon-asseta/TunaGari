import React from "react";
import Heeder from "../components/Heeder";

export const Top = () => {
  return (
    <>
      <Heeder />
      <main className=" w-full flex justify-center">
        <section className=" w-7/12 px-2 py-4 mt-4 bg-gray-400 flex flex-col items-center gap-9">
          <div>
            <h1 className=" mb-2">サイトロゴ</h1>
            <p>
              このサイトではランダムに選ばれた2つの単語から画像を生成します。ハッカソンなどの際にアイデアのきっかけを得たい際にお使いください。
            </p>
          </div>
          <button className=" bg-gray-50 px-6 py-2">生成</button>
        </section>
      </main>
    </>
  );
};
