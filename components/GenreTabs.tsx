import { Genre } from '@/types';
import React from 'react'
import { BsStars } from 'react-icons/bs';
import { IoFlash } from 'react-icons/io5';
import { MdSearch } from 'react-icons/md';
import GenreItem from './GenreItem';
import fetchApi from '@/utils';

interface Props {
    genreTabBg: string;
}

const GenreTabs = async ({ genreTabBg }: Props) => {
    const genres: Genre[] = await fetchApi('/genres');
    return (
        <div className={`flex items-center gap-4 py-3 px-8 ${genreTabBg}  `}>
            <div className="flex items-center gap-5 border-r border-slate-600 pr-5">
                <div className="border border-white py-[5px] px-3 rounded-md">
                    <MdSearch size={18} className='text-white' />
                </div>
                <div className="bg-white text-slate-900 px-3 py-1 flex items-center gap-1 rounded-md">
                    <IoFlash />
                    <p className='text-sm font-semibold'>Explore</p>
                </div>
                <div className="bg-[#373535] text-white border border-white  flex items-center  gap-1 py-1 px-3 rounded-md">
                    <BsStars size={16} />
                    <p className='text-sm font-semibold'>Generate</p>
                </div>
            </div>
            <div className="flex items-center overflow-x-scroll gap-5">
                {genres.map((item) => {
                    return <GenreItem key={item.id} genre={item} />
                })}
            </div>
        </div>
    )
}

export default GenreTabs
