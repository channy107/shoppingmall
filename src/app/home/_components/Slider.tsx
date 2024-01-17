'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Slider() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      loop={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    >
      <SwiperSlide>
        <Image src="/img/test1.png" alt="home1" fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/img/test2.png" alt="home2" fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/img/test3.png" alt="home3" fill />
      </SwiperSlide>
    </Swiper>
  );
}
