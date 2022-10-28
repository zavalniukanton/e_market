import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Slide } from "@models/static/slide.interface";

interface CarouselProps {
  data: Slide[];
}

const Carousel = ({ data }: CarouselProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      id="main"
      tag="section"
      wrapperTag="ul"
      navigation
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
    >
      {data.map((el) => (
        <SwiperSlide key={el.id} tag="li">
          {<Image src={el.image} alt="" />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
