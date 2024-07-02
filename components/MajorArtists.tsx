import { IMajorArtist } from '@/types'
import React from 'react'
import ArtistItem from './ArtistItem';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface Props {
    artists: IMajorArtist[];
}

const MajorArtists = ({ artists }: Props) => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className='text-xl text-white font-semibold mb-3'>Inspired by your Major Artists</h1>
                <div className="flex items-center gap-1">
                    <p className="text-sm text-zinc-300">View All</p>
                    <MdKeyboardArrowRight size={25} className='text-zinc-300' />
                </div>
            </div>
            <div className="grid grid-cols-5 gap-5">
                {artists?.map((artist) => <ArtistItem key={artist.id} artist={artist} />)}
            </div>
        </div>
    )
}

export default MajorArtists
