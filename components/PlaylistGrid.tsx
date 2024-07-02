import { IPlaylist } from '@/types'
import React from 'react'
import SongCard from './SongCard';

interface Props {
    playlists: IPlaylist[];
}
const PlaylistGrid = ({ playlists }: Props) => {
    return (
        <div className=" flex items-center overflow-x-scroll gap-4 mt-5">
            {playlists?.map((item) => <SongCard key={item.id} item={item} />)}
        </div>
    )
}

export default PlaylistGrid
