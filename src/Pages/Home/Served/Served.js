import React from 'react';
import netflix from '../../../assets/images/netflix.png';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";



const Served = () => {
    return (
        <div>
        <h3 className='text-6xl text-center mt-10 mb-32'>Companies we Deliver Parts</h3>
        
<div className='container mx-auto'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-1/6 mx-auto' src={netflix} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-1/6 mx-auto' src={netflix} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-1/6 mx-auto' src={netflix} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-1/6 mx-auto' src={netflix} alt="" /></SwiperSlide>
      </Swiper>
    </div>
    </div>
    );
};

export default Served;