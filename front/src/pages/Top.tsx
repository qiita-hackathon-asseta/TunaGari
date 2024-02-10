import TopImg from "../images/top-img.png";
import TopImg2 from "../images/top-img2.png";
import ScrollImg from "../images/scroll-img.jpeg";
import MySlider from "../components/MySlider";

export const Top = () => {
  return (
    <main className=" w-full flex flex-col">
      <img src={TopImg} alt="" className=" w-full object-cover" />

      <section className=" w-full mt-4 lg:mt-16 mb-8 lg:mb-24">
        <p className=" inline-block pl-8 lg:pl-32 py-4 mb-8 bg-blue-950 text-xl lg:text-5xl font-bold text-white">
          このような画像を生成できます。
        </p>
        <MySlider></MySlider>
      </section>

      <section className=" w-full relative">
        <a
          href=""
          className=" p-4 rounded-lg inline-block bg-white text-2xl lg:text-5xl font-bold text-blue-950 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          画像生成へ
        </a>
        <img src={TopImg2} alt="" className=" w-full object-cover" />
      </section>
    </main>
  );
};
