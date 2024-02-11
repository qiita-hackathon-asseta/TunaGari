import React from "react";
import app from "../firebase"; // firebase モジュールをインポート
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

const Profile = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("ログアウト成功");
    } catch (error: Error | any) {
      console.error("ログアウトエラー", error.message);
    }
  };

  return (
    <main className='w-full py-8 min-h-screen bg-indigo-950'>
      <h1 className='w-11/12 lg:w-4/5 pb-2 mt-12 lg:mt-0 mx-auto text-xl lg:text-4xl font-semibold text-white border-b-4 border-white'>
        マイプロフィールa
      </h1>

      <section className='w-11/12 lg:w-4/5 p-4 mt-2 mx-auto flex flex-col items-start gap-12'>
        <div className='w-full py-8 border-4 border-white rounded-lg flex items-center justify-around'>
          <button
            className='px-4 py-2 bg-white text-sm lg:text-2xl rounded-lg font-bold text-indigo-950'
            onClick={handleLogout}
          >
            ログアウト
          </button>
          <button className='px-4 py-2 bg-red-500 text-sm lg:text-2xl rounded-lg font-bold text-white'>
            アカウント削除
          </button>
        </div>
      </section>
    </main>
  );
};

export default Profile;
