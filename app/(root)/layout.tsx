import GenreTabs from '@/components/GenreTabs'
import Navbar from '@/components/Navbar'
import React, { PropsWithChildren } from 'react'

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='bg-black  text-white'>
            <Navbar />
            <GenreTabs genreTabBg='bg-[#212020]' />
            <main className="p-8">
                {children}
            </main>
        </div>
    )
}

export default RootLayout
