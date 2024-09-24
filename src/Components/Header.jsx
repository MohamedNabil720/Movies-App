import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from '../Content/NavigationContent';




export default function Header() {

    const [searchInput, setSerchInput] = useState('')
    const navigate = useNavigate()



    useEffect(() => {

        if (searchInput) {
            navigate(`/search?q=${searchInput}`)
        }

    }, [searchInput])

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (

        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>

            <div className="container mx-auto px-3 flex items-center h-full" >
                <Link to='/' className="text-3xl font-bold text-red-500"> MoFlix </Link>


                <nav className='hidden lg:flex items-center gap-1 ml-5'>
                    {
                        navigation.map((nav, index) => {
                            return (
                                <div key={index}>
                                    <NavLink key={nav.lable} to={nav.href} className={({ isActive }) => `px-3 hover:text-red-300 ${isActive && 'text-red-300'}`}>
                                        {nav.lable}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </nav>


                <div className='ml-auto flex items-center'>
                    <form className='flex items-center gap-2 ' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Search'
                            className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                            onChange={(e) => setSerchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='text-2xl text-white'>
                            <IoSearchOutline />

                        </button>
                    </form>


                </div>

            </div>



        </header>
    )
}
