import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function MySwiper({ data = [], heading, trending, media_type }) {




    return (
        <div className='container mx-auto'>
            <h2 className='text-xl lg:text-2xl font-bold mb-3 mt-10 text-white'> {heading} </h2>

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

                <div className='container mx-auto px-3 my-10'>


                    <div>
                        {
                            data.map((item, index) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <Card data={item} index={index + 1} trending={trending} media_type={media_type} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </div>

                </div>
            </Swiper>
        </div>
    )
}
