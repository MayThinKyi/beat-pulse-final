import { ISong } from '@/types'
import Image from 'next/image'
import React from 'react'
import { GiMicrophone } from 'react-icons/gi';
import { MdMoreVert } from 'react-icons/md';

interface Props {
    item: ISong;
}

const SongItem = ({ item }: Props) => {
    return (
        <div key={item.id} className='mb-4 grid grid-cols-4'>
            <div className="col-3">
                <div className="flex gap-2 items-center">
                    <Image className='rounded-lg' width={50} height={50} alt={item.title} src={item.img} />
                    <div>
                        <small className="font-semibold text-white block">{item.title}</small>
                        <small className="font-semibold text-zinc-300">{item.artist}</small>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="flex items-center justify-end gap-5">
                    {item.new && <button className='py-1 px-2 rounded-md bg-[#8ea307] text-[#e3fb49] text-xs border border-[#e3fb49]'>New</button>}
                    <GiMicrophone className='text-zinc-200' />
                    <small className="font-semibold text-zinc-200">{item.duration}</small>
                    <small className="font-semibold text-zinc-200">{item.text1}</small>
                    <small className="font-semibold text-zinc-200">{item.text2}</small>
                </div>
            </div>
            <div className="col-3">
                <div className="flex items-center justify-end  gap-2">
                    {item.genres.map((genre) => {
                        return <div key={genre.id} className='bg-[#404040] text-xs text-nowrap py-1 px-4  text-zinc-300 rounded-full'>
                            {genre.name}
                        </div>
                    })}
                </div>
            </div>
            <div className="col-3 flex justify-end"><MdMoreVert className='text-white' /></div>
        </div>
    )
}

export default SongItem
