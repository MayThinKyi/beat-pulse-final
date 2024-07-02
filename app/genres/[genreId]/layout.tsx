import BreadCrumb from '@/components/BreadCrumb'
import GenreTabs from '@/components/GenreTabs'
import Navbar from '@/components/Navbar'
import React, { PropsWithChildren } from 'react'

const GenreLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='bg-[#A552F3]  '>
            <Navbar />
            <GenreTabs genreTabBg='bg-[#c48df8]' />
            <main >
                <div className="px-8 pt-8">
                    <BreadCrumb title='Beats' subTitle='Genre' />
                </div>
                {children}
            </main>
        </div>
    )
}

export default GenreLayout
