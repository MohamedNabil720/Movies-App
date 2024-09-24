import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';


export default function HorizontalScollCard({ data = [], heading, trending, media_type }) {




    return (
        <div className='container mx-auto px-3 my-10'>
            <h2 className='text-xl lg:text-2xl font-bold mb-3 text-white capitalize'>{heading}</h2>

            <Swiper
                className='swiper-w'
                spaceBetween={10}
                slidesPerView={6}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    639: {
                        slidesPerView: 3,
                    },
                    865: {
                        slidesPerView: 3
                    },
                    1000: {
                        slidesPerView: 4
                    },
                    1500: {
                        slidesPerView: 6
                    },
                    1700: {
                        slidesPerView: 7
                    }
                }}
            >
                <div className=' overflow-hidden  relative z-10 scroll-smooth '>
                    {
                        data.map((data, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card data={data} index={index + 1} trending={trending} media_type={media_type} />
                                </SwiperSlide>

                            )
                        })
                    }
                </div>


            </Swiper>

        </div>
    )
}
