import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Components/Card'
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/autoplay';



export default function TopMovie() {


    const [topMoviesData, setTopMoviesData] = useState([])

    const fetchTopMovies = async () => {

        try {

            const res = await axios.get("/movie/top_rated")


            setTopMoviesData(res.data.results)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchTopMovies()
    }, [])

    return (
        <div className='container mx-auto'>
            <Link to="/allTopMovies">
                <h2 className='text-xl lg:text-2xl font-bold mb-3 mt-10 text-white'>Top Movies</h2></Link>

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
                            topMoviesData.map((item, index) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <Card key={item.id} data={item} index={index + 1} media_type={"movie"} />
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
