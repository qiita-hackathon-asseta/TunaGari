import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScrollImg from "../images/scroll-img.jpeg";
import ScrollImg1 from "../images/demo-img1.jpeg";
import ScrollImg2 from "../images/demo-img2.jpeg";
import ScrollImg3 from "../images/demo-img3.jpeg";
import ScrollImg4 from "../images/demo-img4.jpeg";
import ScrollImg5 from "../images/demo-img5.jpeg";

const sliderSettings = {
  autoplay: true, // スライドを自動再生
  autoplaySpeed: 0,
  infinite: true, // コンテンツループ
  arrows: false, // 「前」「次」のスライドを操作する矢印を非表示
  cssEase: "linear",
  speed: 3000, // スライドアニメーションのスピード
  variableWidth: true,
  slidShow: 6,
  swipe: false,
  pauseOnFocus: false,
  pauseOnHover: false,
};

const carouselItems = [
  { image: ScrollImg, alt: "" },
  { image: ScrollImg1, alt: "" },
  { image: ScrollImg2, alt: "" },
  { image: ScrollImg3, alt: "" },
  { image: ScrollImg4, alt: "" },
  { image: ScrollImg5, alt: "" },
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
