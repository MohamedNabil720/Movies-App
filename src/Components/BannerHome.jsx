import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';







export default function BannerHome() {

    const bannerData = useSelector(state => state.movieData.bannerData)
    const imageUrl = useSelector(state => state.movieData.imageUrl)


    return (



        <section className='w-full h-full'>
            <div className=' min-h-full max-h-[100vh] overflow-hidden '>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}

                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                >
                    {
                        bannerData.map((item, index) => {


                            return (

                                <SwiperSlide key={item.id + "bannerHome" + index}>
                                    <div className='  min-w-full min-h-[450px] lg:min-h-full overflow-hidden  group transition-all'>

                                        <div className='w-full h-full absolute lg:static '>
                                            <img src={imageUrl + item.backdrop_path} className='h-full w-full object-cover' />

                                        </div>

                                        <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
                                        </div>

                                        <div className='container mx-auto'>
                                            <div className='  w-full absolute bottom-[64px] max-w-md px-3'>
                                                <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'> {item.title ? item.title : item.original_name}  </h2>
                                                <p className='text-ellipsis line-clamp-3 my-2'> {item.overview} </p>
                                                <div className='flex items-center gap-4'>
                                                    <p> Rating : {Number(item.vote_average).toFixed(1)}+</p>
                                                    <span> | </span>
                                                    <p> View: {Number(item.popularity).toFixed(0)}</p>
                                                </div>
                                                <Link to={"/" + item?.media_type + "/" + item.id}>
                                                    <button className=' bg-white px-4 py-2 text-black font-bold rounded mt-4  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105'>
                                                        Play Now
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>

                            )
                        })
                    }

                </Swiper>
            </div>

        </section >

    )
}
