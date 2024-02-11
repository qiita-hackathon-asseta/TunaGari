import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import icon from "../img/bac.png";
import icons from "../img/background.png";
import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css/navigation";
import "swiper/css/pagination";

const map = {
  0: {
    word1: "ツナ",
    word2: "ガリ",
    image: [icon, icons, icon, icons],
  },
  1: {
    word1: "ツナ",
    word2: "ガリ",
    image: [icon, icons, icon, icons],
  },
  2: {
    word1: "ツナ",
    word2: "ガリ",
    image: [icon, icons, icon, icons],
  },
  3: {
    word1: "ツナ",
    word2: "ガリ",
    image: [icon, icons, icon, icons],
  },
};

export default function SampleSlider() {
  return (
    <div className="l-inner grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Object.entries(map).map(([key, value]) => (
        <div key={key} className="h-80 w-80 rounded-md bg-white mx-auto">
          <h2 className="py-2 text-center text-2xl font-bold text-black">
            {value.word1} {value.word2}
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            // navigation
            pagination={{ clickable: true }}
          >
            {value.image.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt=""
                  className="mx-auto h-64 w-64 bg-red-100"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}
