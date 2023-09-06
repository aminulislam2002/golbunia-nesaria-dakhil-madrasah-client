// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./MadrasahPhotoGallery.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import photo1 from "../../../assets/image/photo1.jpg";
import photo2 from "../../../assets/image/photo2.jpg";
import photo3 from "../../../assets/image/photo3.jpg";
import photo4 from "../../../assets/image/photo4.jpg";
import photo5 from "../../../assets/image/photo5.jpg";
import photo6 from "../../../assets/image/photo6.jpg";
import photo7 from "../../../assets/image/photo7.jpg";
import photo8 from "../../../assets/image/photo8.jpg";
import photo9 from "../../../assets/image/photo9.jpg";
import photo10 from "../../../assets/image/photo10.jpg";
import photo11 from "../../../assets/image/photo11.jpg";
import photo12 from "../../../assets/image/photo12.jpg";
import photo13 from "../../../assets/image/photo13.jpg";
import photo14 from "../../../assets/image/photo14.jpg";

const MadrasahPhotoGallery = () => {
  return (
    <div className="py-10">
      <div className="w-6/12 mx-auto py-3 bg-green-500">
        <h1 className="text-2xl text-center uppercase">PHOTO GALLERY</h1>
      </div>

      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={photo1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo10} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo11} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo12} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo13} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo14} />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default MadrasahPhotoGallery;
