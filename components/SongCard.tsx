'use client'
import { IPlaylist } from '@/types'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

interface Props {
    item: IPlaylist
}

const SongCard = ({ item }: Props) => {
    const pathName = usePathname();
    const songStyle = pathName.includes('/genres') ? 'playlistItemGenre' : 'playlistItemExplore';
    const songBg = pathName.includes('/genres') ? 'bg-[#B783E8]' : 'bg-[#515050]';
    const textStyle = pathName.includes('/genres') ? 'text-white' : 'text-zinc-300';

    return (
        <div className={`cursor-pointer  ${songStyle} rounded-lg group`}>
            <div className="relative">
                <div className={`absolute w-[140px] h-[140px] top-[-12px] left-[-12px] rounded-lg ${songBg} transition-opacity duration-300 group-hover:opacity-0`}></div>
                <Image src={item.img} alt={item.title} width={140} height={140} className="relative rounded-lg mb-4 z-10" />
                <div className="playIcon hidden z-10 absolute top-[40%] left-[40%]">
                    <FaPlay size={35} color="#E6FB64" />
                </div>
            </div>
            <p className="text-white text-sm font-semibold">{item.title}</p>
            <div className={`${textStyle} flex items-center gap-2`}>
                <p className="text-xs text-nowrap font-semibold">{item.playlistName}</p>
                <p className="text-xs text-nowrap font-semibold">{item.tracks} tracks</p>
            </div>
            <p className={`${textStyle} mt-2 line-clamp-1 text-xs font-semibold`}>{item.description}</p>
        </div>
    );
}

export default SongCard
