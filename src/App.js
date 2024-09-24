import React, { useEffect } from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import Search from './Pages/Search'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setBannerData, setImageUrl } from './Store/movieSlice'
import DetailsPage from './Pages/DetailsPage'
import AllTopMovies from './Pages/AllTopMovies'
import AllTv from './Pages/AllTv'

export default function App() {

  const dispatch = useDispatch()

  const fetchTrendingData = async () => {

    try {

      const res = await axios.get("/trending/all/week")

      dispatch(setBannerData(res.data.results))


    } catch (error) {
      console.log(error);

    }

  }



  const fetchConfigration = async () => {

    try {

      const res = await axios.get("/configuration")
      dispatch(setImageUrl(res.data.images.secure_base_url + "original"))


    } catch (error) {
      console.log(error);

    }
  }



  useEffect(() => {

    fetchTrendingData()
    fetchConfigration()

  }, [])


  const routes = createHashRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { path: '', element: <Home /> },
        { path: ':explore', element: <Explore /> },
        { path: ':explore/:id', element: <DetailsPage /> },
        { path: 'search', element: <Search /> },
        { path: 'allTopMovies', element: <AllTopMovies /> },
        { path: 'allTv', element: <AllTv /> },

      ]
    },


  ])

  return (

    <RouterProvider router={routes}>

    </RouterProvider>
  )
}
