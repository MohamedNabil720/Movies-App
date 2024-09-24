import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import MobileNavigation from '../Components/MobileNavigation'

export default function MainLayout() {
    return (
        <main className='pb-14 lg:pb-0'>
            <Header />

            <div className='min-h-[90vh]'>
                <Outlet />
            </div>

            <Footer />
            <MobileNavigation />
        </main>
    )
}
