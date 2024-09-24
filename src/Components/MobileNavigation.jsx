import React from 'react'

import { mobileNavigation } from '../Content/NavigationContent'
import { NavLink } from 'react-router-dom'

export default function MobileNavigation() {

    return (
        <section className='lg:hidden  h-14 bg-black  bg-opacity-60 fixed bottom-0 w-full py-1 z-50' >

            <div className='flex items-center justify-between h-full text-neutral-400 '>
                {mobileNavigation.map((item, index) => {
                    return (
                        <NavLink to={item.href} key={item.lable + "mobilenavigation"}
                            className={({ isActive }) => `px-3 flex items-center h-full flex-col ${isActive && 'text-red-400'}`}
                        >
                            <div className='text-2xl'>
                                {item.icon}
                            </div>
                            <p className='text-sm'> {item.lable} </p>
                        </NavLink>
                    )
                })}
            </div>

        </section>

    )
}
