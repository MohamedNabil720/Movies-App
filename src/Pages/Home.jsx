import React, { useEffect, useState } from 'react'
import BannerHome from '../Components/BannerHome'
import { useSelector } from 'react-redux'
import axios from 'axios'
import 'swiper/css';
import 'swiper/css/autoplay';
import MySwiper from '../Components/MySwiper'
import TopMovie from '../Components/TopMovie'
import TopTv from '../Components/TopTv'



export default function Home() {

    const trendingData = useSelector(state => state.movieData.bannerData)

    const [nowPlaingData, setNowPlaingData] = useState([])
    const [onTheAir, setOnTheAir] = useState([])


    const fetchNowPlaingData = async () => {

        try {

            const res = await axios.get("/movie/now_playing")


            setNowPlaingData(res.data.results)
        } catch (error) {
            console.log(error);
        }
    }

    const fetchOnTheAir = async () => {

        try {

            const res = await axios.get("/tv/on_the_air")

            setOnTheAir(res.data.results)
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        fetchNowPlaingData()
        fetchOnTheAir()
    }, [])

    return (
        <div>

            <BannerHome />

            <MySwiper data={trendingData} heading={"Trending"} trending={true} />
            <MySwiper data={nowPlaingData} heading={"Now Playing"} media_type={"movie"} />
            <MySwiper data={onTheAir} heading={"On The Air"} media_type={"tv"} />
            <TopMovie />
            <TopTv />

        </div>
    )
}
