import React from 'react'
import AppHeading from './AppHeading'
import { ISong } from '@/types';
import SongItem from './SongItem';
import fetchApi from '@/utils';

const ForYou = async () => {
    const data: ISong[] = await fetchApi('/forYou');
    return (
        <div>
            <AppHeading title='For You' subTitle='Suggestion on your style' />
            <div className="mt-8">
                {data.map((item) => {
                    return <SongItem key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default ForYou
