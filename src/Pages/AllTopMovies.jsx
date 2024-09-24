import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Card from '../Components/Card'


export default function AllTopMovies() {

    const [allTopMoviesData, setAllTopMoviesData] = useState([])
    const [pageNo, setPageNo] = useState(1)

    const fetchAllTopMovies = async () => {

        try {

            const res = await axios.get(`/movie/top_rated`, {
                params: {
                    page: pageNo
                }
            })
            setAllTopMoviesData((preve) => {
                return [
                    ...preve,
                    ...res.data.results
                ]
            })


        } catch (error) {
            console.log(error);
        }
    }

    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setPageNo(preve => preve + 1)
        }
    }

    useEffect(() => {
        fetchAllTopMovies()

    }, [pageNo])

    useEffect(() => {
        setPageNo(1)
        fetchAllTopMovies()
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className='py-16'>
            <div className='container mx-auto'>
                <h3 className='capitalize text-lg lg:text-3xl font-semibold  my-4 text-center'> All Top Movies </h3>

                <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
                    {
                        allTopMoviesData.map((exploreData, index) => {
                            return (
                                <Card data={exploreData} key={index} media_type="movie" />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
