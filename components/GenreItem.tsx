'use client';

import { Genre } from '@/types'
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react'

interface Props {
    genre: Genre;

}

const GenreItem = ({ genre }: Props) => {
    const pathName = usePathname();
    const { genreId } = useParams();
    const router = useRouter();
    const genreBg = pathName.includes('/genres') ? 'bg-[#b783e8] ' : 'bg-[#404040]'
    const genreColor = pathName.includes('/genres') ? 'text-white' : 'text-white'
    const borderStyle = pathName.includes('/geres') ? 'border border-[#b783e8]' : ''
    return (
        <div onClick={() => {
            router.push(`/genres/${genre.id}`)
        }} className={`${Number(genreId) === genre.id ? `bg-white text-black font-semibold` : `${genreBg} ${genreColor}`} ${borderStyle} cursor-pointer  text-nowrap py-1 px-4 text-xs rounded-full`}>
            {genre.name}
        </div>
    )
}

export default GenreItem
