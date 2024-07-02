'use client';
import React, { useState } from 'react'
import { LuDot } from 'react-icons/lu';
import { MdFilterList } from 'react-icons/md'

const BeatFilter = () => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Suggested');
    const sorts = ['Suggested', 'Popular', 'Olded', 'Newest', 'A-Z', 'Z-A']
    const beats = ['Mood', 'Cord', 'BPM', 'Duration', 'Vocal']
    return (
        <div className='mt-3 cursor-pointer bg-[#3C3A3A] flex items-center justify-between gap-2 rounded-lg p-3 text-white'>
            <div className="flex items-center gap-2">
                <p className="text-sm border-r-2 pr-3 border-zinc-600 font-semibold text-zinc-200">All Beats </p>
                {beats.map((beat, index) => {
                    return <div className='py-2 px-4 rounded-lg bg-[#404040] border-[#404040]' key={index}>
                        <p className="text-xs text-zinc-300 font-[500]">{beat}</p>
                    </div>
                })}
            </div>
            <div className='relative'>
                <div onClick={() => setIsSortOpen(!isSortOpen)} className='rounded-lg py-1 px-2 bg-[#404040] border-[#404040]'>
                    <MdFilterList size={20} />
                </div>
                {isSortOpen && <div className='absolute left-[-110px] pt-2 w-[150px] '>
                    <div className='text-xs px-1 rounded-lg bg-[#404040] border-[#404040]'>
                        <p className='py-2 mb-1 font-semibold px-2 border-b border-white'>Sort By </p>
                        {sorts.map((sort) => {
                            return <div key={sort} onClick={() => {
                                setSelectedSort(sort);
                                setIsSortOpen(false);
                            }} className='flex items-center px-2'>
                                <p>{selectedSort === sort ? <LuDot size={20} color='white' /> : <span className="mx-2"></span>}</p>
                                <p className=' py-1 font-[500]'>{sort}</p>
                            </div>
                        })}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default BeatFilter
