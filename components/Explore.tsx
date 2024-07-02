import React from 'react'
import AppHeading from './AppHeading'
import { IPlaylist } from '@/types';
import PlaylistGrid from './PlaylistGrid';
import fetchApi from '@/utils';

const Explore = async () => {
    const data: IPlaylist[] = await fetchApi('/explore');
    return (
        <div className='mb-8'>
            <AppHeading title='Explore' subTitle='Explore our curated playlists' />
            <PlaylistGrid playlists={data} />
        </div>
    )
}

export default Explore
