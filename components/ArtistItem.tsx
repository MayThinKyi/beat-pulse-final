import { IMajorArtist } from '@/types'
import Image from 'next/image';
import React from 'react'
import { FaArrowTrendUp, FaMusic } from 'react-icons/fa6';

interface Props {
    artist: IMajorArtist;
}
const ArtistItem = ({ artist }: Props) => {
    return (
        <div className='p-2 rounded-lg bg-[#3c3a3a] flex items-center gap-2'>
            <Image alt={artist.name} src={artist.img} width={40} height={40} className='rounded-full' />
            <div>
                <p className="text-xs font-semibold text-zinc-300">ARTIST INSPIRED</p>
                <p className="text-sm font-semibold mt-1 text-white">{artist.name}</p>
                <div className="flex items-center gap-2 mt-2">
                    <button className='py-1 px-2  flex items-center gap-1 rounded-full bg-[#8ea307] text-[#e3fb49] text-xs border border-[#e3fb49]'>
                        <FaArrowTrendUp />Trending</button>
                    <button className='py-1 px-2 flex items-center gap-1 rounded-full bg-[#404040] text-zinc-300 text-xs border border-[#404040]'>
                        <FaMusic />8</button>
                </div>
            </div>
        </div>
    )
}

export default ArtistItem
