import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScrollImg from "../images/scroll-img.jpeg";

const sliderSettings = {
  autoplay: true, // スライドを自動再生
  autoplaySpeed: 0,
  infinite: true, // コンテンツループ
  arrows: false, // 「前」「次」のスライドを操作する矢印を非表示
  cssEase: "linear",
  speed: 5000, // スライドアニメーションのスピード
  variableWidth: true,
  slidShow: 6,
  swipe: false,
  pauseOnFocus: false,
  pauseOnHover: false,
};

const carouselItems = [
  { image: ScrollImg, alt: "" },
  { image: ScrollImg, alt: "" },
  { image: ScrollImg, alt: "" },
  { image: ScrollImg, alt: "" },
  { image: ScrollImg, alt: "" },
  { image: ScrollImg, alt: "" },
];

const MySlider = () => {
  return (
    <div>
      <Slider {...sliderSettings}>
        {carouselItems.map((carouselItem, index) => (
          <div key={index} className="mx-2">
            <img
              src={carouselItem.image}
              alt={carouselItem.alt}
              width="300px"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
