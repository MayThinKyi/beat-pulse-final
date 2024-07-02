import BeatFilter from '@/components/BeatFilter';
import MajorArtists from '@/components/MajorArtists';
import PlaylistGrid from '@/components/PlaylistGrid';
import SongItem from '@/components/SongItem';
import { IGenrePlayist } from '@/types';
import fetchApi from '@/utils';

import React from 'react'

interface Props {
    params: {
        genreId: string;
    }
}

const GenreDetailsPage = async ({ params: { genreId } }: Props) => {

    const data: IGenrePlayist = await fetchApi(`/playlists/${genreId}`)
    return (
        <div>
            <div className="px-8">
                <h1 className='text-white font-semibold text-4xl mt-4 mb-2'>{data?.name}</h1>
                <p className='text-zinc-100 text-sm'>Features catchy, update melodies and often youthful, colorful themes, appealing to younger audience.</p>
                <PlaylistGrid playlists={data?.playlists!} />
            </div>
            <div className="mt-8 p-8 bg-black">
                <MajorArtists artists={data?.majorArtists!} />
                <BeatFilter />
                <div className='mt-5'>
                    {data?.songs?.map((item) => {
                        return <SongItem key={item.id} item={item} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default GenreDetailsPage
